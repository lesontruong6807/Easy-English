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
    <div className="rounded-3xl border border-[#e8e0d0] dark:border-[#36332e] bg-[#fdfbf7] dark:bg-[#201e1c] p-5 sm:p-6 my-6 shadow-xs">
      <div className="flex items-center gap-2 text-[#784909] dark:text-[#fde047] font-bold text-sm mb-2">
        <div className="w-6 h-6 rounded-lg bg-[#b45309] text-white flex items-center justify-center">
          <BookOpen size={15} />
        </div>
        <span>📖 Vị trí làm bài tập thực hành (Sách tự luyện)</span>
      </div>

      <p className="text-xs text-[#70685e] dark:text-[#9e968b] mb-4 leading-relaxed">
        Hãy mở sách giáo trình giấy hoặc tài liệu cá nhân theo các trang tham chiếu dưới đây để tự làm bài tập củng cố:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {book1_ref && (
          <div className="p-3.5 rounded-xl bg-[#f7f3ea] dark:bg-[#1a1917] border border-[#ded5c2] dark:border-[#33302b] shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#423a2f] dark:text-[#d6cfc4] mb-1">
              <BookmarkCheck size={14} className="text-[#b45309]" />
              <span>Sách Quyển 1</span>
            </div>
            <p className="text-xs font-semibold text-[#54493b] dark:text-[#b8af9f]">
              {book1_ref}
            </p>
          </div>
        )}

        {(book2_p1_ref || book2_p2_ref) && (
          <div className="p-3.5 rounded-xl bg-[#f7f3ea] dark:bg-[#1a1917] border border-[#ded5c2] dark:border-[#33302b] shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#423a2f] dark:text-[#d6cfc4] mb-1">
              <BookmarkCheck size={14} className="text-[#b45309]" />
              <span>Sách Quyển 2</span>
            </div>
            {book2_p1_ref && (
              <p className="text-xs text-[#54493b] dark:text-[#b8af9f]">
                <span className="font-semibold text-[#8c8274] dark:text-[#8f887c]">Phần 1:</span> {book2_p1_ref}
              </p>
            )}
            {book2_p2_ref && (
              <p className="text-xs text-[#54493b] dark:text-[#b8af9f] mt-1">
                <span className="font-semibold text-[#8c8274] dark:text-[#8f887c]">Phần 2:</span> {book2_p2_ref}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
