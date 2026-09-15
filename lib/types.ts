export type UserRole = "student" | "admin";

export interface Profile {
  id: string;
  full_name: string;
  role: UserRole;
  username?: string;
  created_at?: string;
}

export interface Phase {
  id: number;
  order_index: number;
  title: string;
  description?: string | null;
  topics?: Topic[];
}

export interface TopicExample {
  id?: number;
  topic_id?: number;
  order_index: number;
  content: string;
}

export interface Topic {
  id: number;
  phase_id: number;
  order_index: number;
  title: string;
  theory_md: string;
  book1_ref?: string | null;
  book2_p1_ref?: string | null;
  book2_p2_ref?: string | null;
  examples?: TopicExample[];
}

export type TopicProgressStatus = "not_started" | "learning" | "done";

export interface TopicProgress {
  user_id: string;
  topic_id: number;
  status: TopicProgressStatus;
  updated_at: string;
}

export interface VocabWord {
  id: number;
  word: string;
  ipa?: string | null;
  audio_url?: string | null;
  meaning_vi: string;
  example_sentence?: string | null;
  example_vi?: string | null;
  phase_id: number;
  theme?: string | null;
  is_base: boolean;
  created_by?: string | null;
  created_at?: string;
}

export type VocabProgressStatus = "new" | "learning" | "mastered";

export interface UserVocabProgress {
  user_id: string;
  word_id: number;
  srs_level: number; // 0 to 5
  next_review_date: string; // YYYY-MM-DD
  correct_count: number;
  wrong_count: number;
  status: VocabProgressStatus;
  updated_at: string;
}

export interface ErrorLogItem {
  id: number;
  user_id: string;
  topic_id?: number | null;
  question_text: string;
  correct_answer: string;
  reason: string;
  created_at: string;
  topic_title?: string;
}

export interface VocabWithProgress extends VocabWord {
  progress?: UserVocabProgress;
}
