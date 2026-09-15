"use client";

import React, { useState, useEffect } from "react";
import { VocabWithProgress } from "@/lib/types";
import { SoundButton } from "@/components/shared/SoundButton";
import { SrsBadge } from "./SrsBadge";
import { RotateCw, Check, X, Sparkles, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlashCardProps {
  vocab: VocabWithProgress;
  onSuccess: () => void;
  onFail: () => void;
  onAudioCached?: (url: string) => void;
  currentIndex?: number;
  totalCards?: number;
}

export const FlashCard: React.FC<FlashCardProps> = ({
  vocab,
  onSuccess,
  onFail,
  onAudioCached,
  currentIndex,
  totalCards,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false);
  }, [vocab.id]);

  // Keyboard shortcut support: Space to flip, ArrowLeft = Chưa nhớ, ArrowRight = Nhớ rồi
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        onFail();
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        onSuccess();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSuccess, onFail]);

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      {/* Counter & Progress info */}
      {currentIndex !== undefined && totalCards !== undefined && (
        <div className="w-full flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 px-2">
          <span>
            Thẻ {currentIndex + 1} / {totalCards}
          </span>
          <SrsBadge
            level={vocab.progress?.srs_level || 0}
            status={vocab.progress?.status}
          />
        </div>
      )}

      {/* 3D Flip Card Container */}
      <div
        className="w-full h-80 sm:h-96 perspective-1000 cursor-pointer select-none"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={cn(
            "relative w-full h-full rounded-3xl transition-transform duration-500 transform-style-3d shadow-xl border border-slate-200/80 dark:border-slate-800/80",
            isFlipped && "rotate-y-180"
          )}
        >
          {/* ================= FRONT SIDE ================= */}
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-white dark:bg-slate-900 backface-hidden p-6 sm:p-8 flex flex-col justify-between items-center text-center">
            {/* Top row: tags */}
            <div className="w-full flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/60">
                Giai đoạn {vocab.phase_id}
              </span>
              {vocab.theme && (
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                  {vocab.theme}
                </span>
              )}
            </div>

            {/* Center: Word + IPA + Audio Button */}
            <div className="my-auto flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                {vocab.word}
              </h2>
              {vocab.ipa && (
                <p className="text-base sm:text-lg font-mono text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                  {vocab.ipa}
                </p>
              )}

              <SoundButton
                word={vocab.word}
                cachedAudioUrl={vocab.audio_url}
                onAudioCached={onAudioCached}
                size="lg"
                variant="circle"
                className="mt-2"
              />
            </div>

            {/* Bottom: Hint to flip */}
            <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium animate-pulse">
              <RotateCw size={13} />
              <span>Chạm thẻ để lật xem nghĩa (Phím Space)</span>
            </div>
          </div>

          {/* ================= BACK SIDE ================= */}
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-950 text-white backface-hidden rotate-y-180 p-6 sm:p-8 flex flex-col justify-between items-center text-center">
            {/* Top row */}
            <div className="w-full flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300">
                Ý nghĩa tiếng Việt
              </span>
              <SoundButton
                word={vocab.word}
                cachedAudioUrl={vocab.audio_url}
                onAudioCached={onAudioCached}
                size="sm"
                variant="circle"
                className="bg-white/10 text-white hover:bg-white/20 border-white/20"
              />
            </div>

            {/* Center: Meaning & Example */}
            <div className="my-auto flex flex-col items-center max-w-xs">
              <p className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                {vocab.meaning_vi}
              </p>

              {vocab.example_sentence && (
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-indigo-100 italic leading-relaxed text-left">
                  &ldquo;{vocab.example_sentence}&rdquo;
                </div>
              )}
            </div>

            {/* Bottom hint */}
            <div className="flex items-center gap-1.5 text-xs text-indigo-200/70 font-medium">
              <RotateCw size={13} />
              <span>Chạm để lật lại mặt trước</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons: "Chưa nhớ" (giảm 1 bậc) / "Nhớ rồi" (tăng 1 bậc) */}
      <div className="grid grid-cols-2 gap-3.5 w-full mt-6">
        <button
          type="button"
          onClick={onFail}
          className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-950/60 text-rose-700 dark:text-rose-400 font-bold text-sm border border-rose-200 dark:border-rose-900/60 shadow-sm active:scale-95 transition-all"
        >
          <X size={18} />
          <span>Chưa nhớ (-1 bậc)</span>
        </button>

        <button
          type="button"
          onClick={onSuccess}
          className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
        >
          <Check size={18} />
          <span>Nhớ rồi (+1 bậc)</span>
        </button>
      </div>
    </div>
  );
};
