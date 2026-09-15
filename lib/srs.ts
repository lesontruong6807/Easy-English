import { VocabProgressStatus } from "./types";

export const SRS_INTERVALS = [1, 2, 4, 7, 14, 30]; // Days per level 0-5

export function getTodayString(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function addDaysToDate(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export interface SrsInput {
  srs_level: number;
  next_review_date?: string | null;
  correct_count?: number;
  wrong_count?: number;
  status?: VocabProgressStatus;
}

export interface SrsOutput {
  srs_level: number;
  next_review_date: string;
  status: VocabProgressStatus;
  correct_count: number;
  wrong_count: number;
}

/**
 * Cập nhật SRS SM-2 rút gọn theo đúng đặc tả:
 * - Đúng: level = min(5, level + 1)
 * - Sai / Chưa nhớ: level = max(0, level - 1) (Chỉ giảm 1 bậc, KHÔNG reset về 0)
 * - Khoảng cách ngày ôn = [1, 2, 4, 7, 14, 30] tương ứng level 0-5
 * - status: level >= 4 -> 'mastered', level 1-3 -> 'learning', level 0 -> 'learning' sau lần học đầu
 */
export function updateSrs(current: SrsInput, isCorrect: boolean): SrsOutput {
  const currentLevel = current.srs_level ?? 0;
  const today = getTodayString();

  let newLevel: number;
  let correctCount = current.correct_count ?? 0;
  let wrongCount = current.wrong_count ?? 0;

  if (isCorrect) {
    newLevel = Math.min(5, currentLevel + 1);
    correctCount += 1;
  } else {
    // Chỉ giảm 1 bậc, không reset về 0
    newLevel = Math.max(0, currentLevel - 1);
    wrongCount += 1;
  }

  const intervalDays = SRS_INTERVALS[newLevel] ?? 1;
  const nextReviewDate = addDaysToDate(today, intervalDays);

  let status: VocabProgressStatus;
  if (newLevel >= 4) {
    status = "mastered";
  } else {
    status = "learning";
  }

  return {
    srs_level: newLevel,
    next_review_date: nextReviewDate,
    status,
    correct_count: correctCount,
    wrong_count: wrongCount,
  };
}

export function isDueForReview(next_review_date?: string | null): boolean {
  if (!next_review_date) return true;
  const today = getTodayString();
  return next_review_date <= today;
}
