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
    <div className="theory-content max-w-none text-[#332e29] dark:text-[#ded7cc] text-sm sm:text-base leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Blockquotes become stylized eye-care callout cards
          blockquote: ({ children }) => {
            const textContent = React.Children.toArray(children)
              .map((c: any) => (typeof c === "string" ? c : c?.props?.children || ""))
              .flat()
              .join(" ");

            const isTip = textContent.includes("💡") || textContent.toLowerCase().includes("thần chú") || textContent.toLowerCase().includes("mẹo nhớ");
            const isWarning = textContent.includes("⚠️") || textContent.toLowerCase().includes("cạm bẫy") || textContent.toLowerCase().includes("lỗi sai");
            const isNature = textContent.includes("🌟") || textContent.toLowerCase().includes("bản chất");
            const isExample = textContent.includes("💬") || textContent.toLowerCase().includes("ví dụ");

            if (isTip) {
              return (
                <div className="my-5 rounded-2xl border-2 border-[#eedaa2] dark:border-[#5c491e] bg-gradient-to-br from-[#fdf8eb] to-[#faf3de] dark:from-[#2a241b] dark:to-[#221c13] p-4 sm:p-5 shadow-xs text-[#2d2926] dark:text-[#fde047]">
                  <div className="flex items-center gap-2 font-black text-xs sm:text-sm uppercase tracking-wider text-[#854d0e] dark:text-[#fde047] mb-2.5">
                    <div className="w-6 h-6 rounded-lg bg-[#b45309] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Lightbulb size={15} />
                    </div>
                    <span>Mẹo Nhớ Siêu Tốc & Thần Chú Hack Não</span>
                  </div>
                  <div className="text-sm sm:text-base text-[#4d320b] dark:text-[#fef08a] leading-relaxed font-medium space-y-2">
                    {children}
                  </div>
                </div>
              );
            }

            if (isWarning) {
              return (
                <div className="my-5 rounded-2xl border-2 border-[#f2bba8] dark:border-[#663226] bg-gradient-to-br from-[#fdf3ee] to-[#fbece4] dark:from-[#2c1e1a] dark:to-[#231511] p-4 sm:p-5 shadow-xs text-[#2d2926] dark:text-[#fca5a5]">
                  <div className="flex items-center gap-2 font-black text-xs sm:text-sm uppercase tracking-wider text-[#9a3412] dark:text-[#fca5a5] mb-2.5">
                    <div className="w-6 h-6 rounded-lg bg-[#c2410c] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <AlertTriangle size={15} />
                    </div>
                    <span>Cạm Bẫy Đề Thi THPTQG & Lỗi Sai Kinh Điển</span>
                  </div>
                  <div className="text-sm sm:text-base text-[#521c0b] dark:text-[#fecaca] leading-relaxed font-medium space-y-2">
                    {children}
                  </div>
                </div>
              );
            }

            if (isNature) {
              return (
                <div className="my-5 rounded-2xl border-2 border-[#d3dbdf] dark:border-[#2f3947] bg-gradient-to-br from-[#f3f6f9] to-[#edf1f6] dark:from-[#1b222c] dark:to-[#151a22] p-4 sm:p-5 shadow-xs">
                  <div className="flex items-center gap-2 font-black text-xs sm:text-sm uppercase tracking-wider text-[#334155] dark:text-[#94a3b8] mb-2.5">
                    <div className="w-6 h-6 rounded-lg bg-[#475569] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Sparkles size={15} />
                    </div>
                    <span>Bản Chất Vấn Đề (Hiểu Tận Gốc)</span>
                  </div>
                  <div className="text-sm sm:text-base text-[#1e293b] dark:text-[#e2e8f0] leading-relaxed space-y-2">
                    {children}
                  </div>
                </div>
              );
            }

            return (
              <blockquote className="my-4 border-l-4 border-[#b59e78] dark:border-[#6b5d49] bg-[#f5efe3] dark:bg-[#25221d] p-4 rounded-r-2xl italic text-[#4a4237] dark:text-[#c4b9a9]">
                {children}
              </blockquote>
            );
          },

          // Tables styled with eye-care warm paper tones
          table: ({ children }) => (
            <div className="my-6 overflow-hidden rounded-2xl border border-[#ded5c2] dark:border-[#38332d] shadow-xs bg-[#fdfcf9] dark:bg-[#1f1d1b]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  {children}
                </table>
              </div>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[#eee6d6] dark:bg-[#292521] border-b border-[#ded5c2] dark:border-[#38332d] text-[#3d3731] dark:text-[#dfd7cc] font-bold uppercase tracking-wider text-[11px] sm:text-xs">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="p-3 sm:p-3.5 font-bold border-r border-[#ded5c2]/70 dark:border-[#38332d] last:border-r-0">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="p-3 sm:p-3.5 border-b border-[#ebe3d3] dark:border-[#2d2925] border-r border-[#ebe3d3]/60 dark:border-[#2d2925]/60 last:border-r-0 text-[#38332d] dark:text-[#cdc4b6] leading-relaxed">
              {children}
            </td>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-[#f6f0e3]/60 dark:hover:bg-[#25221e] transition-colors">
              {children}
            </tr>
          ),

          // Headings with warm paper accents
          h2: ({ children }) => (
            <h2 className="text-lg sm:text-xl font-black text-[#2d2926] dark:text-[#e8e2d8] mt-8 mb-4 pb-2 border-b-2 border-[#ded5c2] dark:border-[#38332d] flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-[#8c7653] dark:bg-[#a89069] inline-block" />
              <span>{children}</span>
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base sm:text-lg font-bold text-[#38322a] dark:text-[#dfd7cb] mt-6 mb-3 pl-3 border-l-4 border-[#8c7653] dark:border-[#a89069] flex items-center gap-2">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-sm sm:text-base font-bold text-[#2d2926] dark:text-[#e8e2d8] mt-4 mb-2">
              {children}
            </h4>
          ),

          // Paragraphs with comfortable line-height for long reading
          p: ({ children }) => (
            <p className="my-3 text-[#38332d] dark:text-[#ded7cc] leading-relaxed text-sm sm:text-base">
              {children}
            </p>
          ),

          // Lists with styled warm bullets
          ul: ({ children }) => (
            <ul className="my-3 space-y-2 list-none pl-0">
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className="flex items-start gap-2.5 text-sm sm:text-base text-[#38332d] dark:text-[#ded7cc] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8c7653] dark:bg-[#a89069] mt-2.5 shrink-0" />
              <div className="flex-1">{children}</div>
            </li>
          ),

          // Inline code as cute warm pill badges
          code: ({ children }) => (
            <code className="px-2 py-0.5 mx-0.5 rounded-md bg-[#efe7d7] dark:bg-[#2b2723] text-[#423a2f] dark:text-[#dfd7c9] font-mono text-xs sm:text-sm font-semibold border border-[#ded5c2] dark:border-[#3d3731]">
              {children}
            </code>
          ),

          // Bold highlights in warm amber tone
          strong: ({ children }) => (
            <strong className="font-bold text-[#1f1d1a] dark:text-white bg-[#faeccd]/60 dark:bg-[#3d321c]/60 px-1 py-0.5 rounded text-inherit">
              {children}
            </strong>
          ),

          // Interactive Accordion details / summary
          details: ({ children }) => (
            <details className="group my-4 rounded-2xl border border-[#ded5c2] dark:border-[#38332d] bg-[#f7f2e7] dark:bg-[#23201d] p-4 transition-all">
              {children}
            </details>
          ),
          summary: ({ children }) => (
            <summary className="cursor-pointer font-bold text-xs sm:text-sm text-[#423a2f] dark:text-[#ded7c9] select-none flex items-center justify-between list-none py-1 group-open:mb-3 group-open:pb-2 group-open:border-b group-open:border-[#ded5c2] dark:group-open:border-[#38332d] transition-colors">
              <span className="flex items-center gap-2">
                <HelpCircle size={16} className="text-emerald-700 dark:text-emerald-400" />
                <span>{children}</span>
              </span>
              <ChevronDown size={16} className="transition-transform duration-200 group-open:rotate-180 text-[#70685e] dark:text-[#9e968b]" />
            </summary>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
