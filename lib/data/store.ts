import { INITIAL_PHASES, INITIAL_TOPICS, INITIAL_VOCAB } from "./seedData";
import {
  Phase,
  Topic,
  TopicProgressStatus,
  VocabWord,
  UserVocabProgress,
  ErrorLogItem,
  Profile,
  VocabWithProgress,
} from "@/lib/types";
import { updateSrs, isDueForReview, getTodayString } from "@/lib/srs";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

// Default fallback user when not authenticated
export const DEFAULT_USERS: Profile[] = [
  { id: "student-1", full_name: "Minh Anh (Học viên)", role: "student" },
  { id: "student-2", full_name: "Bảo Long (Học viên)", role: "student" },
  { id: "student-3", full_name: "Quỳnh Chi (Học viên)", role: "student" },
  { id: "admin-1", full_name: "Thầy Sơn (Admin/Giáo viên)", role: "admin" },
];

const STORAGE_KEYS = {
  CURRENT_USER: "easy_english_current_user",
  TOPIC_PROGRESS: "easy_english_topic_progress",
  VOCAB_PROGRESS: "easy_english_vocab_progress",
  CUSTOM_VOCAB: "easy_english_custom_vocab",
  CACHED_AUDIO: "easy_english_cached_audio",
  ERROR_LOG: "easy_english_error_log",
  TOPICS_OVERRIDE: "easy_english_topics_override",
};

function safeGetItem<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") return defaultValue;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

function safeSetItem<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`Error writing localStorage key: ${key}`, e);
  }
}

// ==========================================
// USER SESSION
// ==========================================
export function getCurrentUser(): Profile {
  return safeGetItem<Profile>(STORAGE_KEYS.CURRENT_USER, DEFAULT_USERS[0]);
}

export function setCurrentUser(user: Profile): void {
  safeSetItem(STORAGE_KEYS.CURRENT_USER, user);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("user-changed"));
  }
}

// ==========================================
// CLOUD SYNC INITIALIZER
// Khi user đăng nhập trên thiết bị mới, tự động tải toàn bộ dữ liệu từ Supabase về
// ==========================================
export async function syncUserDataFromCloud(userId: string): Promise<void> {
  const supabase = createClient();
  if (!supabase || !userId) return;

  try {
    // 1. Sync topic progress
    const { data: topicData } = await supabase
      .from("topic_progress")
      .select("topic_id, status")
      .eq("user_id", userId);

    if (topicData) {
      const allProgress = safeGetItem<Record<string, TopicProgressStatus>>(STORAGE_KEYS.TOPIC_PROGRESS, {});
      topicData.forEach((row: { topic_id: number; status: TopicProgressStatus }) => {
        allProgress[`${userId}_${row.topic_id}`] = row.status;
      });
      safeSetItem(STORAGE_KEYS.TOPIC_PROGRESS, allProgress);
    }

    // 2. Sync user vocab progress
    const { data: vocabProgData } = await supabase
      .from("user_vocab_progress")
      .select("*")
      .eq("user_id", userId);

    if (vocabProgData) {
      const allVocabProg = safeGetItem<Record<string, UserVocabProgress>>(STORAGE_KEYS.VOCAB_PROGRESS, {});
      vocabProgData.forEach((row: any) => {
        allVocabProg[`${userId}_${row.word_id}`] = {
          user_id: userId,
          word_id: row.word_id,
          srs_level: row.srs_level,
          next_review_date: row.next_review_date,
          correct_count: row.correct_count,
          wrong_count: row.wrong_count,
          status: row.status,
          updated_at: row.updated_at,
        };
      });
      safeSetItem(STORAGE_KEYS.VOCAB_PROGRESS, allVocabProg);
    }

    // 3. Sync custom vocab words
    const { data: customWordsData } = await supabase
      .from("vocab_words")
      .select("*")
      .eq("created_by", userId);

    if (customWordsData && customWordsData.length > 0) {
      safeSetItem(STORAGE_KEYS.CUSTOM_VOCAB, customWordsData);
    }

    // 4. Sync error logs
    const { data: errorLogData } = await supabase
      .from("error_log")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (errorLogData) {
      safeSetItem(STORAGE_KEYS.ERROR_LOG, errorLogData);
    }

    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("user-changed"));
    }
  } catch (err) {
    console.warn("Cloud sync error (using local cache):", err);
  }
}

// Trigger initial cloud sync when user changes
if (typeof window !== "undefined") {
  window.addEventListener("user-changed", () => {
    const u = getCurrentUser();
    if (u?.id && u.id.length > 10) {
      syncUserDataFromCloud(u.id);
    }
  });
}

// ==========================================
// ROADMAP & TOPICS
// ==========================================
export function getAllPhases(): Phase[] {
  const customTopics = safeGetItem<Record<number, Partial<Topic>>>(STORAGE_KEYS.TOPICS_OVERRIDE, {});
  
  return INITIAL_PHASES.map((phase) => ({
    ...phase,
    topics: (phase.topics || []).map((t) => {
      const override = customTopics[t.id];
      return override ? { ...t, ...override } : t;
    }),
  }));
}

export function getPhaseById(phaseId: number): Phase | undefined {
  const phases = getAllPhases();
  return phases.find((p) => p.id === phaseId || p.order_index === phaseId);
}

export function getTopicById(topicId: number): Topic | undefined {
  const phases = getAllPhases();
  for (const p of phases) {
    const found = p.topics?.find((t) => t.id === topicId);
    if (found) return found;
  }
  return INITIAL_TOPICS.find((t) => t.id === topicId);
}

export function updateTopicContent(topicId: number, data: Partial<Topic>): void {
  const customTopics = safeGetItem<Record<number, Partial<Topic>>>(STORAGE_KEYS.TOPICS_OVERRIDE, {});
  customTopics[topicId] = { ...(customTopics[topicId] || {}), ...data };
  safeSetItem(STORAGE_KEYS.TOPICS_OVERRIDE, customTopics);

  // Sync with Supabase in background
  const supabase = createClient();
  if (supabase) {
    supabase
      .from("topics")
      .update({
        theory_md: data.theory_md,
        book1_ref: data.book1_ref,
        book2_p1_ref: data.book2_p1_ref,
        book2_p2_ref: data.book2_p2_ref,
      })
      .eq("id", topicId)
      .then();
  }
}

// ==========================================
// TOPIC PROGRESS
// ==========================================
export function getTopicProgressMap(userId: string): Record<number, TopicProgressStatus> {
  const allProgress = safeGetItem<Record<string, TopicProgressStatus>>(STORAGE_KEYS.TOPIC_PROGRESS, {});
  const userMap: Record<number, TopicProgressStatus> = {};

  Object.entries(allProgress).forEach(([key, status]) => {
    if (key.startsWith(`${userId}_`)) {
      const topicId = parseInt(key.replace(`${userId}_`, ""), 10);
      if (!isNaN(topicId)) {
        userMap[topicId] = status;
      }
    }
  });

  return userMap;
}

export function setTopicProgress(userId: string, topicId: number, status: TopicProgressStatus): void {
  const allProgress = safeGetItem<Record<string, TopicProgressStatus>>(STORAGE_KEYS.TOPIC_PROGRESS, {});
  allProgress[`${userId}_${topicId}`] = status;
  safeSetItem(STORAGE_KEYS.TOPIC_PROGRESS, allProgress);

  // Cloud sync directly to Supabase
  const supabase = createClient();
  if (supabase && userId && !userId.startsWith("student-")) {
    supabase
      .from("topic_progress")
      .upsert(
        {
          user_id: userId,
          topic_id: topicId,
          status: status,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,topic_id" }
      )
      .then();
  }
}

// ==========================================
// VOCABULARY & SRS
// ==========================================
export function getAllVocabWords(): VocabWord[] {
  const customWords = safeGetItem<VocabWord[]>(STORAGE_KEYS.CUSTOM_VOCAB, []);
  const cachedAudio = safeGetItem<Record<number, string>>(STORAGE_KEYS.CACHED_AUDIO, {});

  const all = [...INITIAL_VOCAB, ...customWords];
  return all.map((w) => {
    if (cachedAudio[w.id]) {
      return { ...w, audio_url: cachedAudio[w.id] };
    }
    return w;
  });
}

export function cacheVocabAudioUrl(wordId: number, audioUrl: string): void {
  const cachedAudio = safeGetItem<Record<number, string>>(STORAGE_KEYS.CACHED_AUDIO, {});
  cachedAudio[wordId] = audioUrl;
  safeSetItem(STORAGE_KEYS.CACHED_AUDIO, cachedAudio);

  // Update in Supabase
  const supabase = createClient();
  if (supabase) {
    supabase.from("vocab_words").update({ audio_url: audioUrl }).eq("id", wordId).then();
  }
}

export function addCustomVocabWord(
  userId: string,
  data: {
    word: string;
    ipa?: string;
    meaning_vi: string;
    example_sentence?: string;
    phase_id: number;
    theme?: string;
  }
): VocabWord {
  const customWords = safeGetItem<VocabWord[]>(STORAGE_KEYS.CUSTOM_VOCAB, []);
  const newId = 10000 + customWords.length + 1;

  const newWord: VocabWord = {
    id: newId,
    word: data.word.trim(),
    ipa: data.ipa?.trim() || null,
    meaning_vi: data.meaning_vi.trim(),
    example_sentence: data.example_sentence?.trim() || null,
    phase_id: data.phase_id,
    theme: data.theme?.trim() || "Chủ đề cá nhân",
    is_base: false,
    created_by: userId,
    created_at: new Date().toISOString(),
  };

  customWords.push(newWord);
  safeSetItem(STORAGE_KEYS.CUSTOM_VOCAB, customWords);

  // Sync to Supabase
  const supabase = createClient();
  if (supabase && userId && !userId.startsWith("student-")) {
    supabase
      .from("vocab_words")
      .insert({
        word: newWord.word,
        ipa: newWord.ipa,
        meaning_vi: newWord.meaning_vi,
        example_sentence: newWord.example_sentence,
        phase_id: newWord.phase_id,
        theme: newWord.theme,
        is_base: false,
        created_by: userId,
      })
      .then();
  }

  return newWord;
}

export function getUserVocabProgressMap(userId: string): Record<number, UserVocabProgress> {
  const allProgress = safeGetItem<Record<string, UserVocabProgress>>(STORAGE_KEYS.VOCAB_PROGRESS, {});
  const userMap: Record<number, UserVocabProgress> = {};

  Object.entries(allProgress).forEach(([key, prog]) => {
    if (key.startsWith(`${userId}_`)) {
      const wordId = parseInt(key.replace(`${userId}_`, ""), 10);
      if (!isNaN(wordId)) {
        userMap[wordId] = prog;
      }
    }
  });

  return userMap;
}

export function getVocabWithProgress(
  userId: string,
  options?: { phaseId?: number; theme?: string; status?: string }
): VocabWithProgress[] {
  const allWords = getAllVocabWords();
  const progressMap = getUserVocabProgressMap(userId);

  return allWords
    .map((w) => {
      const prog = progressMap[w.id] || {
        user_id: userId,
        word_id: w.id,
        srs_level: 0,
        next_review_date: getTodayString(),
        correct_count: 0,
        wrong_count: 0,
        status: "new" as const,
        updated_at: new Date().toISOString(),
      };
      return { ...w, progress: prog };
    })
    .filter((item) => {
      if (options?.phaseId && item.phase_id !== options.phaseId) return false;
      if (options?.theme && item.theme !== options.theme) return false;
      if (options?.status && item.progress?.status !== options.status) return false;
      return true;
    });
}

export function getDueVocabWords(
  userId: string,
  options?: { phaseId?: number; theme?: string }
): VocabWithProgress[] {
  const list = getVocabWithProgress(userId, options);
  return list
    .filter((item) => isDueForReview(item.progress?.next_review_date))
    .sort((a, b) => {
      if (a.progress?.status === "new" && b.progress?.status !== "new") return -1;
      if (b.progress?.status === "new" && a.progress?.status !== "new") return 1;
      return (a.progress?.srs_level || 0) - (b.progress?.srs_level || 0);
    });
}

export function recordWordReview(
  userId: string,
  wordId: number,
  isCorrect: boolean
): UserVocabProgress {
  const allProgress = safeGetItem<Record<string, UserVocabProgress>>(STORAGE_KEYS.VOCAB_PROGRESS, {});
  const key = `${userId}_${wordId}`;
  const current = allProgress[key] || {
    user_id: userId,
    word_id: wordId,
    srs_level: 0,
    next_review_date: getTodayString(),
    correct_count: 0,
    wrong_count: 0,
    status: "new" as const,
    updated_at: new Date().toISOString(),
  };

  const srsResult = updateSrs(current, isCorrect);
  const updated: UserVocabProgress = {
    ...current,
    ...srsResult,
    updated_at: new Date().toISOString(),
  };

  allProgress[key] = updated;
  safeSetItem(STORAGE_KEYS.VOCAB_PROGRESS, allProgress);

  // Cloud sync to Supabase
  const supabase = createClient();
  if (supabase && userId && !userId.startsWith("student-")) {
    supabase
      .from("user_vocab_progress")
      .upsert(
        {
          user_id: userId,
          word_id: wordId,
          srs_level: updated.srs_level,
          next_review_date: updated.next_review_date,
          correct_count: updated.correct_count,
          wrong_count: updated.wrong_count,
          status: updated.status,
          updated_at: updated.updated_at,
        },
        { onConflict: "user_id,word_id" }
      )
      .then();
  }

  return updated;
}

// ==========================================
// ERROR LOG
// ==========================================
export function getErrorLogs(userId?: string): ErrorLogItem[] {
  const logs = safeGetItem<ErrorLogItem[]>(STORAGE_KEYS.ERROR_LOG, []);
  if (userId) {
    return logs.filter((l) => l.user_id === userId);
  }
  return logs;
}

export function addErrorLog(
  userId: string,
  data: {
    topic_id?: number | null;
    question_text: string;
    correct_answer: string;
    reason: string;
  }
): ErrorLogItem {
  const logs = safeGetItem<ErrorLogItem[]>(STORAGE_KEYS.ERROR_LOG, []);
  const topic = data.topic_id ? getTopicById(data.topic_id) : undefined;

  const newItem: ErrorLogItem = {
    id: Date.now(),
    user_id: userId,
    topic_id: data.topic_id || null,
    question_text: data.question_text.trim(),
    correct_answer: data.correct_answer.trim(),
    reason: data.reason.trim(),
    created_at: new Date().toISOString(),
    topic_title: topic?.title,
  };

  logs.unshift(newItem);
  safeSetItem(STORAGE_KEYS.ERROR_LOG, logs);

  // Cloud sync to Supabase
  const supabase = createClient();
  if (supabase && userId && !userId.startsWith("student-")) {
    supabase
      .from("error_log")
      .insert({
        user_id: userId,
        topic_id: data.topic_id || null,
        question_text: data.question_text.trim(),
        correct_answer: data.correct_answer.trim(),
        reason: data.reason.trim(),
      })
      .then();
  }

  return newItem;
}

export function deleteErrorLog(id: number): void {
  const logs = safeGetItem<ErrorLogItem[]>(STORAGE_KEYS.ERROR_LOG, []);
  const filtered = logs.filter((l) => l.id !== id);
  safeSetItem(STORAGE_KEYS.ERROR_LOG, filtered);

  // Cloud delete from Supabase
  const supabase = createClient();
  if (supabase) {
    supabase.from("error_log").delete().eq("id", id).then();
  }
}

// ==========================================
// DASHBOARD & ADMIN METRICS
// ==========================================
export function getDashboardMetrics(userId: string) {
  const phases = getAllPhases();
  let totalTopics = 0;
  phases.forEach((p) => (totalTopics += p.topics?.length || 0));

  const topicProgress = getTopicProgressMap(userId);
  const doneTopics = Object.values(topicProgress).filter((s) => s === "done").length;
  const learningTopics = Object.values(topicProgress).filter((s) => s === "learning").length;

  const vocabList = getVocabWithProgress(userId);
  const totalVocab = vocabList.length;
  const dueTodayVocab = vocabList.filter((v) => isDueForReview(v.progress?.next_review_date)).length;
  const masteredVocab = vocabList.filter((v) => v.progress?.status === "mastered").length;
  const learningVocab = vocabList.filter((v) => v.progress?.status === "learning").length;

  const errorLogs = getErrorLogs(userId);

  return {
    totalTopics,
    doneTopics,
    learningTopics,
    roadmapPercentage: totalTopics > 0 ? Math.round((doneTopics / totalTopics) * 100) : 0,
    totalVocab,
    dueTodayVocab,
    masteredVocab,
    learningVocab,
    errorCount: errorLogs.length,
  };
}

export async function getLiveGroupProgressOverview() {
  const supabase = createClient();
  const phases = getAllPhases();
  let totalTopics = 0;
  phases.forEach((p) => (totalTopics += p.topics?.length || 0));

  if (supabase) {
    try {
      const { data: profiles } = await supabase.from("profiles").select("*");
      if (profiles && profiles.length > 0) {
        const studentProfiles = profiles.filter((p: any) => p.role === "student");

        const rows = await Promise.all(
          studentProfiles.map(async (st: any) => {
            const { count: doneCount } = await supabase
              .from("topic_progress")
              .select("*", { count: "exact", head: true })
              .eq("user_id", st.id)
              .eq("status", "done");

            const { count: masteredCount } = await supabase
              .from("user_vocab_progress")
              .select("*", { count: "exact", head: true })
              .eq("user_id", st.id)
              .eq("status", "mastered");

            const { count: dueCount } = await supabase
              .from("user_vocab_progress")
              .select("*", { count: "exact", head: true })
              .eq("user_id", st.id)
              .lte("next_review_date", getTodayString());

            const { count: errorCount } = await supabase
              .from("error_log")
              .select("*", { count: "exact", head: true })
              .eq("user_id", st.id);

            const done = doneCount || 0;
            return {
              user: st,
              doneTopics: done,
              totalTopics,
              roadmapPercent: totalTopics > 0 ? Math.round((done / totalTopics) * 100) : 0,
              masteredVocab: masteredCount || 0,
              totalVocab: 50,
              dueTodayVocab: dueCount || 0,
              errorCount: errorCount || 0,
              lastActive: "Gần đây",
            };
          })
        );
        if (rows.length > 0) return rows;
      }
    } catch (e) {
      console.warn("Could not query live group progress:", e);
    }
  }

  // Fallback to local group simulation
  return getGroupProgressOverview();
}

export function getGroupProgressOverview() {
  const phases = getAllPhases();
  let totalTopics = 0;
  phases.forEach((p) => (totalTopics += p.topics?.length || 0));

  return DEFAULT_USERS.filter((u) => u.role === "student").map((user) => {
    const topicMap = getTopicProgressMap(user.id);
    const doneTopics = Object.values(topicMap).filter((s) => s === "done").length;
    const vocabList = getVocabWithProgress(user.id);
    const masteredVocab = vocabList.filter((v) => v.progress?.status === "mastered").length;
    const dueTodayVocab = vocabList.filter((v) => isDueForReview(v.progress?.next_review_date)).length;
    const errorCount = getErrorLogs(user.id).length;

    return {
      user,
      doneTopics,
      totalTopics,
      roadmapPercent: totalTopics > 0 ? Math.round((doneTopics / totalTopics) * 100) : 0,
      masteredVocab,
      totalVocab: vocabList.length,
      dueTodayVocab,
      errorCount,
      lastActive: "Hôm nay",
    };
  });
}
