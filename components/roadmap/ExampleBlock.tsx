import React from "react";
import { TopicExample } from "@/lib/types";
import { Lightbulb } from "lucide-react";

interface ExampleBlockProps {
  examples?: TopicExample[];
}

export const ExampleBlock: React.FC<ExampleBlockProps> = ({ examples }) => {
  if (!examples || examples.length === 0) return null;

  return (
    <div className="rounded-2xl border border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-br from-indigo-50/60 to-purple-50/40 dark:from-indigo-950/30 dark:to-purple-950/20 p-5 sm:p-6 my-6 shadow-sm">
      <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-sm mb-4">
        <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
          <Lightbulb size={15} />
        </div>
        <span>3 Ví dụ minh họa điển hình</span>
      </div>

      <div className="space-y-3">
        {examples.map((ex, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-indigo-100/60 dark:border-indigo-900/40 shadow-2xs"
          >
            <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              {index + 1}
            </span>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              {ex.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
