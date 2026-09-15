"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  getDueVocabWords,
  recordWordReview,
  cacheVocabAudioUrl,
  getCurrentUser,
  getAllPhases,
} from "@/lib/data/store";
import { VocabWithProgress, Phase } from "@/lib/types";
import { FlashCard } from "@/components/vocab/FlashCard";
import { ProgressBar } from "@/components/shared/ProgressBar";
import {
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Layers,
  BookOpen,
} from "lucide-react";

export default function FlashcardStudyPage() {
  const [deck, setDeck] = useState<VocabWithProgress[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [stats, setStats] = useState({ remembered: 0, forgotten: 0 });
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [phases, setPhases] = useState<Phase[]>([]);

  const loadDeck = (phaseId = selectedPhase) => {
    const user = getCurrentUser();
    setPhases(getAllPhases());
    const words = getDueVocabWords(user.id, {
      phaseId: phaseId > 0 ? phaseId : undefined,
    });
    setDeck(words);
    setCurrentIndex(0);
    setIsFinished(false);
    setStats({ remembered: 0, forgotten: 0 });
  };

  useEffect(() => {
    loadDeck(selectedPhase);
  }, [selectedPhase]);

  const handleNextCard = (isRemembered: boolean) => {
    if (deck.length === 0 || currentIndex >= deck.length) return;

    const currentWord = deck[currentIndex];
    const user = getCurrentUser();

    // Update SRS
    recordWordReview(user.id, currentWord.id, isRemembered);

    if (isRemembered) {
      setStats((prev) => ({ ...prev, remembered: prev.remembered + 1 }));
    } else {
      setStats((prev) => ({ ...prev, forgotten: prev.forgotten + 1 }));
    }

    if (currentIndex + 1 < deck.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {}
    }
  };

  const handleAudioCached = (url: string) => {
    if (deck[currentIndex]) {
      cacheVocabAudioUrl(deck[currentIndex].id, url);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto animate-fade-in pb-12">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/vocab"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Quay lại Kho từ vựng</span>
        </Link>

        {/* Filter deck by phase */}
        <select
          value={selectedPhase}
          onChange={(e) => setSelectedPhase(Number(e.target.value))}
          className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value={0}>Tất cả từ cần ôn ({deck.length})</option>
          {phases.map((p) => (
            <option key={p.id} value={p.id}>
              Giai đoạn {p.order_index}
            </option>
          ))}
        </select>
      </div>

      {!isFinished && deck.length > 0 && (
        <div className="space-y-2">
          <ProgressBar
            progress={((currentIndex + 1) / deck.length) * 100}
            height="h-2"
          />
        </div>
      )}

      {/* Main Flashcard View */}
      {!isFinished && deck.length > 0 && (
        <FlashCard
          vocab={deck[currentIndex]}
          currentIndex={currentIndex}
          totalCards={deck.length}
          onSuccess={() => handleNextCard(true)}
          onFail={() => handleNextCard(false)}
          onAudioCached={handleAudioCached}
        />
      )}

      {/* Empty State */}
      {!isFinished && deck.length === 0 && (
        <div className="text-center py-16 px-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm max-w-md mx-auto">
          <div className="w-16 h-16 rounded-3xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Tuyệt vời! Không còn từ nào cần ôn hôm nay
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
            Bạn đã hoàn thành các từ đến hạn theo lịch Spaced Repetition. Hãy ghé lại vào ngày mai hoặc chuyển sang luyện thêm trắc nghiệm.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/vocab/quiz"
              className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-indigo-600 text-white text-xs font-bold shadow hover:bg-indigo-700 transition-colors"
            >
              Làm trắc nghiệm Quiz
            </Link>
            <Link
              href="/vocab"
              className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 transition-colors"
            >
              Xem toàn bộ kho từ
            </Link>
          </div>
        </div>
      )}

      {/* Finished Summary Screen */}
      {isFinished && (
        <div className="text-center py-12 px-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xl max-w-md mx-auto animate-fade-in">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/25">
            <Sparkles size={32} />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
            Hoàn thành bài ôn tập!
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
            Thuật toán SRS đã tính toán lại ngày ôn tối ưu cho từng từ của bạn.
          </p>

          {/* Stats Badges */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {stats.remembered}
              </span>
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mt-0.5">
                Nhớ rồi (+1 level)
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
              <span className="text-2xl font-black text-rose-600 dark:text-rose-400">
                {stats.forgotten}
              </span>
              <p className="text-xs font-semibold text-rose-700 dark:text-rose-300 mt-0.5">
                Chưa nhớ (-1 level)
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => loadDeck(selectedPhase)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
            >
              <RotateCcw size={16} />
              <span>Ôn lại thêm một lượt nữa</span>
            </button>
            <Link
              href="/vocab"
              className="w-full py-3 px-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors"
            >
              Trở về danh sách từ vựng
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
