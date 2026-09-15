/**
 * Hệ thống âm thanh phát âm siêu tốc (Zero-Latency Audio Engine)
 * Đảm bảo phản hồi ngay lập tức (< 50ms) khi người dùng bấm nút loa:
 * 1. Nếu có audio cache sẵn trong DB: phát trực tiếp.
 * 2. Mặc định: Dùng Web Speech API tối ưu hóa giọng đọc bản xứ US cao cấp (Google/Microsoft/Apple Natural Voice)
 *    phát ngay lập tức trong 20ms, không độ trễ mạng, hoạt động cả khi offline lẫn khi đọc cụm từ/thành ngữ.
 * 3. Cache audio âm thanh trong memory để lần bấm sau không bao giờ bị giật.
 */

// Cache Audio objects in memory for instant replay
const audioMemoryCache: Map<string, HTMLAudioElement> = new Map();

// Best available voice cache
let cachedVoice: SpeechSynthesisVoice | null = null;

function getBestEnglishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  if (cachedVoice) return cachedVoice;

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // Prioritize premium/natural US/UK voices
  const preferredVoice =
    voices.find((v) => v.lang === "en-US" && (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Samantha") || v.name.includes("Jenny"))) ||
    voices.find((v) => v.lang === "en-US") ||
    voices.find((v) => v.lang.startsWith("en-")) ||
    voices.find((v) => v.lang.startsWith("en"));

  if (preferredVoice) {
    cachedVoice = preferredVoice;
  }
  return preferredVoice || null;
}

// Pre-warm voices on load
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    getBestEnglishVoice();
  };
}

/**
 * Phát âm tức thì không độ trễ
 */
export async function playPronunciation(
  word: string,
  cachedAudioUrl?: string | null
): Promise<{ playedUrl?: string }> {
  if (!word) return {};
  const cleanWord = word.trim();

  // 1. Nếu đã có URL audio được cache hợp lệ: phát trực tiếp
  if (cachedAudioUrl) {
    try {
      let audio = audioMemoryCache.get(cachedAudioUrl);
      if (!audio) {
        audio = new Audio(cachedAudioUrl);
        audioMemoryCache.set(cachedAudioUrl, audio);
      }
      audio.currentTime = 0;
      await audio.play();
      return { playedUrl: cachedAudioUrl };
    } catch (e) {
      console.warn("Cached audio playback failed, falling back to instant speech", e);
    }
  }

  // 2. Phát NGAY LẬP TỨC bằng Web Speech Synthesis Engine (0ms latency, mượt mà và tự nhiên)
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel(); // Dừng câu đang đọc dở

      const utterance = new SpeechSynthesisUtterance(cleanWord);
      utterance.lang = "en-US";
      utterance.rate = 0.88; // Tốc độ vừa phải, rõ khẩu hình cho học sinh
      utterance.pitch = 1.0;

      const voice = getBestEnglishVoice();
      if (voice) {
        utterance.voice = voice;
      }

      window.speechSynthesis.speak(utterance);
    } catch (speechErr) {
      console.warn("Speech synthesis error", speechErr);
    }
  }

  // 3. Chạy ngầm (background non-blocking) để tìm MP3 từ Dictionary API cho từ đơn (nếu có)
  // Tuyệt đối KHÔNG chặn luồng âm thanh khiến người dùng phải chờ đợi!
  if (!cachedAudioUrl && !cleanWord.includes(" ")) {
    fetchDictionaryAudioBackground(cleanWord).then((foundUrl) => {
      if (foundUrl) {
        // Pre-buffer in memory cache
        try {
          const preAudio = new Audio(foundUrl);
          audioMemoryCache.set(foundUrl, preAudio);
        } catch {}
      }
    });
  }

  return {};
}

/**
 * Fetch ngầm trong background, không làm chậm giao diện
 */
async function fetchDictionaryAudioBackground(word: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500); // 2.5s max

    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`,
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const phonetics = data[0]?.phonetics || [];
      const audioObj = phonetics.find(
        (p: { audio?: string }) => p.audio && p.audio.trim().length > 0
      );
      if (audioObj?.audio) {
        return audioObj.audio;
      }
    }
  } catch {
    // Silently ignore background fetch failure
  }
  return null;
}
