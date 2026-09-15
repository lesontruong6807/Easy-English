"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  getVocabWithProgress,
  recordWordReview,
  cacheVocabAudioUrl,
  getCurrentUser,
  getAllPhases,
  addErrorLog,
} from "@/lib/data/store";
import { VocabWithProgress, Phase } from "@/lib/types";
import { QuizQuestion } from "@/components/vocab/QuizQuestion";
import { ProgressBar } from "@/components/shared/ProgressBar";
import {
  ArrowLeft,
  RotateCcw,
  Sparkles,
  HelpCircle,
  AlertCircle,
  Check,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function QuizStudyPage() {
  const [quizPool, setQuizPool] = useState<VocabWithProgress[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [wrongWords, setWrongWords] = useState<VocabWithProgress[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [addedErrors, setAddedErrors] = useState<Record<number, boolean>>({});

  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [phases, setPhases] = useState<Phase[]>([]);

  const startQuiz = (phaseId = selectedPhase) => {
    const user = getCurrentUser();
    setPhases(getAllPhases());
    const allWords = getVocabWithProgress(user.id, {
      phaseId: phaseId > 0 ? phaseId : undefined,
    });

    // Shuffle and pick up to 10-15 words
    const shuffled = [...allWords].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(10, shuffled.length));

    setQuizPool(selected);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setWrongWords([]);
    setIsFinished(false);
    setAddedErrors({});

    if (selected.length > 0) {
      generateOptions(selected[0], allWords);
    }
  };

  useEffect(() => {
    startQuiz(selectedPhase);
  }, [selectedPhase]);

  const generateOptions = (
    currentWord: VocabWithProgress,
    pool: VocabWithProgress[]
  ) => {
    const correctAnswer = currentWord.meaning_vi;
    const otherOptions = pool
      .filter((w) => w.meaning_vi !== correctAnswer)
      .map((w) => w.meaning_vi);

    // Shuffle other options and pick 3 distractors
    const shuffledDistractors = otherOptions
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const combined = [correctAnswer, ...shuffledDistractors].sort(
      () => 0.5 - Math.random()
    );
    setCurrentOptions(combined);
  };

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const user = getCurrentUser();
    const currentWord = quizPool[currentIndex];
    const isCorrect = option === currentWord.meaning_vi;

    // Update SRS
    recordWordReview(user.id, currentWord.id, isCorrect);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    } else {
      setWrongWords((prev) => [...prev, currentWord]);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < quizPool.length) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedOption(null);
      setIsAnswered(false);

      const user = getCurrentUser();
      const allWords = getVocabWithProgress(user.id);
      generateOptions(quizPool[nextIndex], allWords);
    } else {
      setIsFinished(true);
      if (score >= Math.round(quizPool.length * 0.7)) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (e) {}
      }
    }
  };

  const handleAddWordToErrorLog = (word: VocabWithProgress) => {
    const user = getCurrentUser();
    addErrorLog(user.id, {
      question_text: `Từ vựng "${word.word}" có nghĩa là gì?`,
      correct_answer: word.meaning_vi,
      reason: "Nhầm lẫn nghĩa khi làm bài trắc nghiệm",
    });

    setAddedErrors((prev) => ({ ...prev, [word.id]: true }));
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto animate-fade-in pb-12">
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/vocab"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Quay lại Kho từ vựng</span>
        </Link>

        {/* Phase selector */}
        <select
          value={selectedPhase}
          onChange={(e) => setSelectedPhase(Number(e.target.value))}
          className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value={0}>Tất cả các giai đoạn</option>
          {phases.map((p) => (
            <option key={p.id} value={p.id}>
              Giai đoạn {p.order_index}
            </option>
          ))}
        </select>
      </div>

      {!isFinished && quizPool.length > 0 && (
        <div className="space-y-2">
          <ProgressBar
            progress={((currentIndex + 1) / quizPool.length) * 100}
            height="h-2"
          />
        </div>
      )}

      {/* Main Question View */}
      {!isFinished && quizPool.length > 0 && (
        <QuizQuestion
          questionWord={quizPool[currentIndex]}
          options={currentOptions}
          selectedOption={selectedOption}
          onSelectOption={handleSelectOption}
          isAnswered={isAnswered}
          onNext={handleNext}
          onAudioCached={(url) =>
            cacheVocabAudioUrl(quizPool[currentIndex].id, url)
          }
          questionNumber={currentIndex + 1}
          totalQuestions={quizPool.length}
        />
      )}

      {/* Empty State */}
      {!isFinished && quizPool.length === 0 && (
        <div className="text-center py-16 px-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm max-w-md mx-auto">
          <p className="text-sm text-slate-500 mb-4">
            Không có đủ từ vựng trong giai đoạn này để tạo bài trắc nghiệm.
          </p>
          <Link
            href="/vocab"
            className="px-5 py-2.5 rounded-2xl bg-indigo-600 text-white font-bold text-xs"
          >
            Về kho từ vựng
          </Link>
        </div>
      )}

      {/* Quiz Finished Recap Screen */}
      {isFinished && (
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-xl max-w-lg mx-auto animate-fade-in text-center">
          <div className="w-16 h-16 rounded-3xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-4">
            <Sparkles size={32} />
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
            Tổng kết phiên trắc nghiệm!
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
            Điểm số của bạn:
          </p>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-6">
            <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {score} / {quizPool.length}
            </span>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-2">
              Đạt tỷ lệ {Math.round((score / quizPool.length) * 100)}% chính xác
            </p>
          </div>

          {/* List of Wrong Words to Review */}
          {wrongWords.length > 0 && (
            <div className="text-left mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-3 flex items-center gap-1.5">
                <AlertCircle size={14} />
                <span>Các từ trả lời sai cần chú ý ({wrongWords.length}):</span>
              </h3>
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {wrongWords.map((word) => (
                  <div
                    key={word.id}
                    className="p-3 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/40 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {word.word}
                      </span>
                      <span className="text-slate-400 mx-1.5">→</span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {word.meaning_vi}
                      </span>
                    </div>

                    <button
                      type="button"
                      disabled={addedErrors[word.id]}
                      onClick={() => handleAddWordToErrorLog(word)}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white dark:bg-slate-800 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/60 transition-colors disabled:opacity-50"
                    >
                      {addedErrors[word.id] ? "Đã lưu sổ lỗi" : "+ Ghi sổ lỗi"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => startQuiz(selectedPhase)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
            >
              <RotateCcw size={16} />
              <span>Làm bài Quiz khác</span>
            </button>
            <Link
              href="/vocab"
              className="w-full py-3 px-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors"
            >
              Về kho từ vựng
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
