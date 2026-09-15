import React from "react";
import { cn } from "@/lib/utils";

interface HighlightedSentenceProps {
  sentence: string;
  targetWord: string;
  translation?: string | null;
  className?: string;
  isDarkTheme?: boolean;
}

export const HighlightedSentence: React.FC<HighlightedSentenceProps> = ({
  sentence,
  targetWord,
  translation,
  className = "",
  isDarkTheme = false,
}) => {
  if (!sentence) return null;

  // Tách câu và highlight từ vựng (hỗ trợ cả từ ghép, chia thì -ed, -ing, -s, -es)
  const renderHighlightedText = () => {
    if (!targetWord) return sentence;

    // Chuẩn hóa từ cần tìm để tạo regex linh hoạt
    const cleanWord = targetWord.trim().replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
    // Khớp từ gốc hoặc dạng chia thì phổ biến
    const regex = new RegExp(`\\b(${cleanWord}(?:ed|ing|s|es|d)?)\\b`, "gi");

    const parts = sentence.split(regex);

    return parts.map((part, index) => {
      if (regex.test(part)) {
        return (
          <mark
            key={index}
            className={cn(
              "px-1 py-0.5 rounded font-bold transition-colors",
              isDarkTheme
                ? "bg-amber-400/25 text-amber-300 border border-amber-400/40"
                : "bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80"
            )}
          >
            {part}
          </mark>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className={cn("space-y-1.5", className)}>
      <div
        className={cn(
          "text-xs sm:text-sm leading-relaxed",
          isDarkTheme ? "text-indigo-100" : "text-slate-700 dark:text-slate-200"
        )}
      >
        &ldquo;{renderHighlightedText()}&rdquo;
      </div>

      {translation && (
        <div
          className={cn(
            "text-[11px] sm:text-xs leading-relaxed italic flex items-start gap-1",
            isDarkTheme ? "text-indigo-200/75" : "text-slate-500 dark:text-slate-400"
          )}
        >
          <span className="not-italic text-amber-500 font-bold shrink-0">↳</span>
          <span>{translation}</span>
        </div>
      )}
    </div>
  );
};
