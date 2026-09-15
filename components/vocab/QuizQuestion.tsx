"use client";

import React from "react";
import { VocabWithProgress } from "@/lib/types";
import { SoundButton } from "@/components/shared/SoundButton";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizQuestionProps {
  questionWord: VocabWithProgress;
  options: string[];
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
  isAnswered: boolean;
  onNext: () => void;
  onAudioCached?: (url: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  questionWord,
  options,
  selectedOption,
  onSelectOption,
  isAnswered,
  onNext,
  onAudioCached,
  questionNumber,
  totalQuestions,
}) => {
  const isCorrect = selectedOption === questionWord.meaning_vi;

  return (
    <div className="w-full max-w-lg mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-xl">
      {/* Header Info */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
        <span>
          Câu hỏi {questionNumber} / {totalQuestions}
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold">
          Giai đoạn {questionWord.phase_id}
        </span>
      </div>

      {/* Word Prominent Display */}
      <div className="flex flex-col items-center justify-center py-6 px-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 mb-6 text-center">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {questionWord.word}
          </h2>
          <SoundButton
            word={questionWord.word}
            cachedAudioUrl={questionWord.audio_url}
            onAudioCached={onAudioCached}
            size="md"
            variant="circle"
          />
        </div>
        {questionWord.ipa && (
          <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400 font-medium mt-1">
            {questionWord.ipa}
          </p>
        )}
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          Chọn nghĩa tiếng Việt chính xác nhất:
        </p>
      </div>

      {/* 4 Answer Options */}
      <div className="space-y-3">
        {options.map((opt, idx) => {
          const letter = String.fromCharCode(65 + idx); // A, B, C, D
          const isThisSelected = selectedOption === opt;
          const isThisCorrect = opt === questionWord.meaning_vi;

          let btnStyles =
            "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-indigo-50/30";

          if (isAnswered) {
            if (isThisCorrect) {
              btnStyles =
                "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold ring-2 ring-emerald-500/20";
            } else if (isThisSelected && !isThisCorrect) {
              btnStyles =
                "bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-300 font-bold";
            } else {
              btnStyles =
                "opacity-50 border-slate-200 dark:border-slate-800 text-slate-400";
            }
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={isAnswered}
              onClick={() => onSelectOption(opt)}
              className={cn(
                "w-full flex items-center justify-between p-4 rounded-2xl border text-left text-sm font-medium transition-all duration-200 shadow-2xs",
                btnStyles
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 border",
                    isAnswered && isThisCorrect
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : isAnswered && isThisSelected
                      ? "bg-rose-500 text-white border-rose-500"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                  )}
                >
                  {letter}
                </span>
                <span>{opt}</span>
              </div>

              {isAnswered && isThisCorrect && (
                <CheckCircle2 size={20} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
              )}
              {isAnswered && isThisSelected && !isThisCorrect && (
                <XCircle size={20} className="text-rose-600 dark:text-rose-400 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Answer Feedback and Next Button */}
      {isAnswered && (
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 animate-fade-in">
          {questionWord.example_sentence && (
            <div className="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 text-xs text-indigo-900 dark:text-indigo-200 mb-4">
              <span className="font-bold">Ví dụ: </span>
              <em>&ldquo;{questionWord.example_sentence}&rdquo;</em>
            </div>
          )}

          <button
            type="button"
            onClick={onNext}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 active:scale-98 transition-all"
          >
            <span>Câu tiếp theo</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};
