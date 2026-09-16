"use client";

import React, { useState } from "react";
import { TopicQuizItem } from "@/lib/types";
import { Target, CheckCircle2, XCircle, HelpCircle, ChevronDown, RefreshCw, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveQuizSectionProps {
  quiz?: TopicQuizItem[];
}

export const InteractiveQuizSection: React.FC<InteractiveQuizSectionProps> = ({ quiz }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({});

  if (!quiz || quiz.length === 0) return null;

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
    // Automatically reveal explanation when an answer is chosen
    setShowExplanations((prev) => ({ ...prev, [qIdx]: true }));
  };

  const toggleExplanation = (qIdx: number) => {
    setShowExplanations((prev) => ({ ...prev, [qIdx]: !prev[qIdx] }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowExplanations({});
  };

  return (
    <div className="rounded-3xl border border-[#e8e0d0] dark:border-[#36332e] bg-[#fcfaf6] dark:bg-[#201e1c] p-6 sm:p-8 shadow-xs my-8 transition-colors">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#ede5d6] dark:border-[#2d2a26]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-700 dark:bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Target size={18} />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#2d2926] dark:text-[#e8e2d8] tracking-tight">
              Thử Thách Thực Chiến (3 Câu Hỏi Củng Cố)
            </h2>
            <p className="text-xs text-[#70685e] dark:text-[#9e968b]">
              Bấm chọn đáp án để tự kiểm tra kiến thức và xem lời giải phân tích chi tiết!
            </p>
          </div>
        </div>

        {Object.keys(selectedAnswers).length > 0 && (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#70685e] hover:text-[#2d2926] dark:text-[#9e968b] dark:hover:text-[#e8e2d8] bg-[#f2ecdf] dark:bg-[#2b2724] hover:bg-[#eae2d3] transition-colors"
          >
            <RefreshCw size={13} />
            <span>Làm lại</span>
          </button>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {quiz.map((item, qIdx) => {
          const selected = selectedAnswers[qIdx];
          const isAnswered = selected !== undefined;
          const isCorrect = isAnswered && selected === item.correct_index;
          const isExpanded = showExplanations[qIdx];

          const optionLabels = ["A", "B", "C", "D"];

          return (
            <div
              key={qIdx}
              className="rounded-2xl border border-[#e8e0d0] dark:border-[#33302b] bg-[#f7f3ea] dark:bg-[#1a1917] p-4 sm:p-5 transition-all"
            >
              {/* Question Header & Prompt */}
              <div className="flex items-start gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-black shrink-0 mt-0.5 border border-emerald-200/80 dark:border-emerald-900/50">
                  Câu {qIdx + 1}
                </span>
                <p className="text-sm sm:text-base font-bold text-[#2d2926] dark:text-[#e8e2d8] leading-relaxed">
                  {item.question}
                </p>
              </div>

              {/* 4 Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
                {item.options.map((opt, optIdx) => {
                  const isThisSelected = selected === optIdx;
                  const isThisCorrect = optIdx === item.correct_index;

                  let btnStyle = "border-[#dfd6c5] dark:border-[#38342e] bg-[#fdfcf9] dark:bg-[#23211f] text-[#3d3833] dark:text-[#d6cfc4] hover:border-emerald-600/50 hover:bg-[#faf6ee]";

                  if (isAnswered) {
                    if (isThisCorrect) {
                      btnStyle = "border-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-bold ring-1 ring-emerald-500/30";
                    } else if (isThisSelected && !isThisCorrect) {
                      btnStyle = "border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 ring-1 ring-rose-500/30";
                    } else {
                      btnStyle = "opacity-60 border-[#e3dac9] dark:border-[#2d2a26] bg-[#f8f5ee] dark:bg-[#1d1b19] text-[#70685e] dark:text-[#8c8479]";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(qIdx, optIdx)}
                      className={cn(
                        "w-full flex items-center gap-3 p-3 rounded-xl border text-left text-xs sm:text-sm transition-all active:scale-[0.99]",
                        btnStyle
                      )}
                    >
                      <span
                        className={cn(
                          "w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors",
                          isAnswered && isThisCorrect
                            ? "bg-emerald-600 text-white"
                            : isAnswered && isThisSelected && !isThisCorrect
                            ? "bg-rose-600 text-white"
                            : "bg-[#eee7d8] dark:bg-[#33302b] text-[#595247] dark:text-[#b0a799]"
                        )}
                      >
                        {optionLabels[optIdx]}
                      </span>
                      <span className="flex-1 font-medium leading-snug">{opt}</span>
                      {isAnswered && isThisCorrect && (
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      )}
                      {isAnswered && isThisSelected && !isThisCorrect && (
                        <XCircle size={16} className="text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Toggle Explanation Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => toggleExplanation(qIdx)}
                  className={cn(
                    "inline-flex items-center gap-1.5 text-xs font-bold transition-colors py-1 px-2.5 rounded-lg",
                    isExpanded
                      ? "text-emerald-800 dark:text-emerald-300 bg-emerald-100/60 dark:bg-emerald-950/40"
                      : "text-[#6b6255] dark:text-[#a39a8c] hover:text-[#2d2926] dark:hover:text-white bg-[#ece5d6] dark:bg-[#252320]"
                  )}
                >
                  <HelpCircle size={14} className="text-emerald-600 dark:text-emerald-400" />
                  <span>
                    {isExpanded ? "Thu gọn giải thích" : "👉 Bấm xem đáp án & giải thích chi tiết"}
                  </span>
                  <ChevronDown
                    size={14}
                    className={cn("transition-transform duration-200", isExpanded && "rotate-180")}
                  />
                </button>
              </div>

              {/* Explanation Collapsible Card */}
              {isExpanded && (
                <div className="mt-3 p-4 rounded-xl bg-[#f2eee3] dark:bg-[#23201d] border border-[#ded5c2] dark:border-[#38332d] text-xs sm:text-sm text-[#38332d] dark:text-[#ded7cb] space-y-2 animate-fade-in">
                  <div className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>
                      Đáp án đúng: {optionLabels[item.correct_index]}. {item.options[item.correct_index]}
                    </span>
                  </div>
                  <div className="text-[#47413a] dark:text-[#c4bcaf] leading-relaxed font-normal pl-6 border-l-2 border-emerald-500/40">
                    {item.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
