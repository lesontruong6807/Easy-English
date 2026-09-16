"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {
  Lightbulb,
  AlertTriangle,
  Sparkles,
  Target,
  ChevronDown,
  BookOpen,
  HelpCircle,
  Info,
} from "lucide-react";

interface RichTheoryRendererProps {
  content: string;
}

export const RichTheoryRenderer: React.FC<RichTheoryRendererProps> = ({ content }) => {
  return (
    <div className="theory-content max-w-none text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Blockquotes become stylized callout cards
          blockquote: ({ children }) => {
            // Convert children text to string to inspect type
            const textContent = React.Children.toArray(children)
              .map((c: any) => (typeof c === "string" ? c : c?.props?.children || ""))
              .flat()
              .join(" ");

            const isTip = textContent.includes("💡") || textContent.toLowerCase().includes("thần chú") || textContent.toLowerCase().includes("mẹo nhớ");
            const isWarning = textContent.includes("⚠️") || textContent.toLowerCase().includes("cạm bẫy") || textContent.toLowerCase().includes("lỗi sai");
            const isQuiz = textContent.includes("🎯") || textContent.toLowerCase().includes("thử thách") || textContent.toLowerCase().includes("quiz");
            const isNature = textContent.includes("🌟") || textContent.toLowerCase().includes("bản chất");

            if (isTip) {
              return (
                <div className="my-5 rounded-2xl border-2 border-amber-300/80 dark:border-amber-700/80 bg-gradient-to-br from-amber-50/90 to-yellow-50/60 dark:from-amber-950/40 dark:to-yellow-950/20 p-4 sm:p-5 shadow-sm text-slate-800 dark:text-amber-100">
                  <div className="flex items-center gap-2 font-black text-xs sm:text-sm uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2.5">
                    <div className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Lightbulb size={15} />
                    </div>
                    <span>Mẹo Nhớ Siêu Tốc & Thần Chú Hack Não</span>
                  </div>
                  <div className="text-sm sm:text-base text-amber-950 dark:text-amber-200 leading-relaxed font-medium space-y-2">
                    {children}
                  </div>
                </div>
              );
            }

            if (isWarning) {
              return (
                <div className="my-5 rounded-2xl border-2 border-rose-300/80 dark:border-rose-800/80 bg-gradient-to-br from-rose-50/90 to-red-50/50 dark:from-rose-950/40 dark:to-red-950/20 p-4 sm:p-5 shadow-sm text-slate-800 dark:text-rose-100">
                  <div className="flex items-center gap-2 font-black text-xs sm:text-sm uppercase tracking-wider text-rose-800 dark:text-rose-300 mb-2.5">
                    <div className="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <AlertTriangle size={15} />
                    </div>
                    <span>Cạm Bẫy Đề Thi THPTQG & Lỗi Sai Kinh Điển</span>
                  </div>
                  <div className="text-sm sm:text-base text-rose-950 dark:text-rose-200 leading-relaxed font-medium space-y-2">
                    {children}
                  </div>
                </div>
              );
            }

            if (isQuiz) {
              return (
                <div className="my-5 rounded-2xl border-2 border-emerald-300/80 dark:border-emerald-800/80 bg-gradient-to-br from-emerald-50/90 to-teal-50/50 dark:from-emerald-950/40 dark:to-teal-950/20 p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-black text-xs sm:text-sm uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-2.5">
                    <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Target size={15} />
                    </div>
                    <span>Thử Thách Nhanh Cho Người Mất Gốc</span>
                  </div>
                  <div className="text-sm sm:text-base text-emerald-950 dark:text-emerald-200 leading-relaxed font-medium space-y-2">
                    {children}
                  </div>
                </div>
              );
            }

            if (isNature) {
              return (
                <div className="my-5 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800/80 bg-gradient-to-br from-indigo-50/90 to-blue-50/50 dark:from-indigo-950/40 dark:to-blue-950/20 p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-black text-xs sm:text-sm uppercase tracking-wider text-indigo-800 dark:text-indigo-300 mb-2.5">
                    <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Sparkles size={15} />
                    </div>
                    <span>Bản Chất Vấn Đề (Hiểu Tận Gốc)</span>
                  </div>
                  <div className="text-sm sm:text-base text-indigo-950 dark:text-indigo-200 leading-relaxed space-y-2">
                    {children}
                  </div>
                </div>
              );
            }

            return (
              <blockquote className="my-4 border-l-4 border-indigo-500 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-r-2xl italic text-slate-700 dark:text-slate-300">
                {children}
              </blockquote>
            );
          },

          // Tables styled with gradient header, borders & rounded corners
          table: ({ children }) => (
            <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  {children}
                </table>
              </div>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gradient-to-r from-indigo-50 via-slate-100 to-indigo-50 dark:from-indigo-950/70 dark:via-slate-800 dark:to-indigo-950/70 border-b border-slate-200 dark:border-slate-700 text-indigo-950 dark:text-indigo-200 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="p-3 sm:p-3.5 font-bold border-r border-slate-200/60 dark:border-slate-800 last:border-r-0">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="p-3 sm:p-3.5 border-b border-slate-100 dark:border-slate-800/60 border-r border-slate-100/80 dark:border-slate-800/40 last:border-r-0 text-slate-700 dark:text-slate-300 leading-relaxed">
              {children}
            </td>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 transition-colors">
              {children}
            </tr>
          ),

          // Headings with prominent badges and dividers
          h2: ({ children }) => (
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-8 mb-4 pb-2 border-b-2 border-indigo-500/20 dark:border-indigo-400/20 flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-indigo-600 dark:bg-indigo-500 inline-block" />
              <span>{children}</span>
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base sm:text-lg font-bold text-indigo-950 dark:text-indigo-200 mt-6 mb-3 pl-3 border-l-4 border-indigo-500 flex items-center gap-2">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mt-4 mb-2">
              {children}
            </h4>
          ),

          // Paragraphs with comfortable reading layout
          p: ({ children }) => (
            <p className="my-3 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {children}
            </p>
          ),

          // Unordered and ordered lists
          ul: ({ children }) => (
            <ul className="my-3 space-y-2 list-none pl-0">
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
              <div className="flex-1">{children}</div>
            </li>
          ),

          // Inline code as cute pill badges
          code: ({ children }) => (
            <code className="px-2 py-0.5 mx-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-mono text-xs sm:text-sm font-semibold border border-indigo-200/70 dark:border-indigo-800/70">
              {children}
            </code>
          ),

          // Bold highlights
          strong: ({ children }) => (
            <strong className="font-bold text-slate-900 dark:text-white bg-amber-100/50 dark:bg-amber-950/40 px-1 py-0.5 rounded text-inherit">
              {children}
            </strong>
          ),

          // Interactive Accordion details / summary for Quiz answers
          details: ({ children }) => (
            <details className="group my-4 rounded-2xl border border-emerald-300/80 dark:border-emerald-800/60 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 transition-all open:ring-2 open:ring-emerald-500/20">
              {children}
            </details>
          ),
          summary: ({ children }) => (
            <summary className="cursor-pointer font-bold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 select-none flex items-center justify-between list-none py-1 group-open:mb-3 group-open:pb-2 group-open:border-b group-open:border-emerald-200 dark:group-open:border-emerald-800/50 transition-colors">
              <span className="flex items-center gap-2">
                <HelpCircle size={16} className="text-emerald-600 dark:text-emerald-400" />
                <span>{children}</span>
              </span>
              <ChevronDown size={16} className="transition-transform duration-200 group-open:rotate-180 text-emerald-600 dark:text-emerald-400" />
            </summary>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
