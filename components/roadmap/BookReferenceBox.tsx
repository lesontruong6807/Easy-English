import React from "react";
import { BookOpen, BookmarkCheck } from "lucide-react";

interface BookReferenceBoxProps {
  book1_ref?: string | null;
  book2_p1_ref?: string | null;
  book2_p2_ref?: string | null;
}

export const BookReferenceBox: React.FC<BookReferenceBoxProps> = ({
  book1_ref,
  book2_p1_ref,
  book2_p2_ref,
}) => {
  if (!book1_ref && !book2_p1_ref && !book2_p2_ref) return null;

  return (
    <div className="rounded-2xl border border-amber-200/80 dark:border-amber-900/50 bg-gradient-to-br from-amber-50/70 to-orange-50/40 dark:from-amber-950/25 dark:to-orange-950/15 p-5 sm:p-6 my-6 shadow-sm">
      <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm mb-3">
        <div className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center">
          <BookOpen size={15} />
        </div>
        <span>📖 Vị trí làm bài tập thực hành (Sách tự luyện)</span>
      </div>

      <p className="text-xs text-amber-700/90 dark:text-amber-400/90 mb-4 leading-relaxed">
        Hãy mở sách giáo trình giấy hoặc tài liệu cá nhân theo các trang tham chiếu dưới đây để tự làm bài tập củng cố:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {book1_ref && (
          <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-amber-200/60 dark:border-amber-900/40 shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-200 mb-1">
              <BookmarkCheck size={14} className="text-amber-500" />
              <span>Sách Quyển 1</span>
            </div>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {book1_ref}
            </p>
          </div>
        )}

        {(book2_p1_ref || book2_p2_ref) && (
          <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-amber-200/60 dark:border-amber-900/40 shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-200 mb-1">
              <BookmarkCheck size={14} className="text-amber-500" />
              <span>Sách Quyển 2</span>
            </div>
            {book2_p1_ref && (
              <p className="text-xs text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-500 dark:text-slate-400">Phần 1:</span> {book2_p1_ref}
              </p>
            )}
            {book2_p2_ref && (
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
                <span className="font-semibold text-slate-500 dark:text-slate-400">Phần 2:</span> {book2_p2_ref}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
