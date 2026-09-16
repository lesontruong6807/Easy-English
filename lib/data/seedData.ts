import rawTopics from "@/seed_topics.json";
import rawVocab from "@/seed_vocab.json";
import { Phase, Topic, VocabWord } from "@/lib/types";

// Prepare standardized phases and topics with IDs
export const INITIAL_PHASES: Phase[] = [];
export const INITIAL_TOPICS: Topic[] = [];

let topicIdCounter = 1;

rawTopics.phases.forEach((p) => {
  const phaseTopics: Topic[] = [];

  p.topics.forEach((t) => {
    const topicItem: Topic = {
      id: topicIdCounter++,
      phase_id: p.order_index,
      order_index: t.order_index,
      title: t.title,
      theory_md: t.theory_md,
      book1_ref: t.book1_ref || null,
      book2_p1_ref: t.book2_p1_ref || null,
      book2_p2_ref: t.book2_p2_ref || null,
      examples: (t.examples || []).map((content, idx) => ({
        order_index: idx + 1,
        content,
      })),
      quiz: (t as any).quiz || [],
    };
    phaseTopics.push(topicItem);
    INITIAL_TOPICS.push(topicItem);
  });

  INITIAL_PHASES.push({
    id: p.order_index,
    order_index: p.order_index,
    title: p.title,
    description: getPhaseDescription(p.order_index),
    topics: phaseTopics,
  });
});

function getPhaseDescription(order: number): string {
  switch (order) {
    case 1:
      return "Xây dựng lại nền móng phát âm chuẩn, trọng âm và nhận diện các từ loại cơ bản.";
    case 2:
      return "Nắm vững toàn bộ 12 thì, câu bị động, mệnh đề quan hệ và cấu trúc so sánh.";
    case 3:
      return "Chinh phục cụm động từ, thành ngữ, liên từ và các cấu trúc đảo ngữ ăn điểm 8+.";
    case 4:
      return "Chiến lược xử lý bài đọc hiểu, đoán nghĩa từ trong ngữ cảnh và kỹ năng điền từ.";
    default:
      return "Luyện đề tổng hợp và tối ưu điểm số THPTQG.";
  }
}

// Prepare standardized vocab with IDs
export const INITIAL_VOCAB: VocabWord[] = rawVocab.words.map((w, idx) => ({
  id: idx + 1,
  word: w.word,
  ipa: w.ipa || null,
  audio_url: null,
  meaning_vi: w.meaning_vi,
  example_sentence: w.example_sentence || null,
  example_vi: (w as any).example_vi || null,
  phase_id: w.phase_order || (w.theme === "Phrasal Verbs" || w.theme === "Idioms" ? 3 : 4),
  theme: w.theme || "General",
  is_base: true,
  created_at: new Date().toISOString(),
}));
