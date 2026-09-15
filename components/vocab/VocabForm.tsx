"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PlusCircle, Check, Loader2, Sparkles } from "lucide-react";
import { getAllPhases, addCustomVocabWord, getCurrentUser } from "@/lib/data/store";
import { useRouter } from "next/navigation";

const vocabSchema = z.object({
  word: z.string().min(1, "Vui lòng nhập từ vựng tiếng Anh"),
  ipa: z.string().optional(),
  meaning_vi: z.string().min(1, "Vui lòng nhập nghĩa tiếng Việt"),
  example_sentence: z.string().optional(),
  phase_id: z.coerce.number().min(1, "Vui lòng chọn giai đoạn học"),
  theme: z.string().optional(),
});

type VocabFormData = z.infer<typeof vocabSchema>;

const THEME_SUGGESTIONS = [
  "Education",
  "Environment",
  "Technology",
  "Health",
  "Family & Society",
  "Phrasal Verbs",
  "Idioms",
  "Collocations",
  "Prepositions",
  "Synonyms & Antonyms",
  "General",
];

export const VocabForm: React.FC = () => {
  const router = useRouter();
  const phases = getAllPhases();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VocabFormData>({
    resolver: zodResolver(vocabSchema),
    defaultValues: {
      word: "",
      ipa: "",
      meaning_vi: "",
      example_sentence: "",
      phase_id: 3,
      theme: "General",
    },
  });

  const onSubmit = async (data: VocabFormData) => {
    try {
      const user = getCurrentUser();
      addCustomVocabWord(user.id, {
        word: data.word,
        ipa: data.ipa || undefined,
        meaning_vi: data.meaning_vi,
        example_sentence: data.example_sentence || undefined,
        phase_id: data.phase_id,
        theme: data.theme || undefined,
      });

      setIsSuccess(true);
      reset();
      setTimeout(() => {
        setIsSuccess(false);
        router.push("/vocab");
      }, 1200);
    } catch (e) {
      console.error("Error adding vocab:", e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-xl space-y-5"
    >
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
          <PlusCircle size={22} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Thêm từ vựng mới vào kho cá nhân
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Từ mới sẽ tự động được thêm vào lịch ôn Spaced Repetition hôm nay.
          </p>
        </div>
      </div>

      {isSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center gap-2 animate-fade-in">
          <Check size={16} />
          <span>Đã thêm từ thành công! Đang chuyển hướng về danh sách từ...</span>
        </div>
      )}

      {/* English Word */}
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
          Từ tiếng Anh <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Ví dụ: sustainable, look after..."
          {...register("word")}
          className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        {errors.word && (
          <p className="text-xs text-rose-500 mt-1">{errors.word.message}</p>
        )}
      </div>

      {/* IPA Pronunciation (Optional) */}
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
          Phiên âm IPA <span className="text-slate-400 font-normal">(Tùy chọn)</span>
        </label>
        <input
          type="text"
          placeholder="Ví dụ: /səˈsteɪnəbl/"
          {...register("ipa")}
          className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
      </div>

      {/* Vietnamese Meaning */}
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
          Nghĩa tiếng Việt <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Ví dụ: bền vững, có thể duy trì lâu dài"
          {...register("meaning_vi")}
          className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        {errors.meaning_vi && (
          <p className="text-xs text-rose-500 mt-1">{errors.meaning_vi.message}</p>
        )}
      </div>

      {/* Example Sentence */}
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
          Câu ví dụ minh họa <span className="text-slate-400 font-normal">(Tùy chọn)</span>
        </label>
        <textarea
          rows={2}
          placeholder="Ví dụ: We need to find sustainable energy sources."
          {...register("example_sentence")}
          className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
        />
      </div>

      {/* Phase Dropdown (Required - matches Roadmap) */}
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
          Giai đoạn trong lộ trình <span className="text-rose-500">*</span>
        </label>
        <select
          {...register("phase_id")}
          className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        >
          {phases.map((p) => (
            <option key={p.id} value={p.id}>
              Giai đoạn {p.order_index}: {p.title}
            </option>
          ))}
        </select>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
          Quyết định từ này sẽ hiển thị ở đâu khi học viên lọc từ vựng theo Roadmap.
        </p>
      </div>

      {/* Theme (Tag) */}
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
          Chủ đề bổ sung (Theme)
        </label>
        <input
          type="text"
          placeholder="Ví dụ: Education, Environment..."
          {...register("theme")}
          className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        {/* Suggestion Chips */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {THEME_SUGGESTIONS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setValue("theme", t)}
              className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/60 dark:hover:text-indigo-400 transition-colors"
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/25 active:scale-98 transition-all disabled:opacity-50 mt-4"
      >
        {isSubmitting ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <>
            <Sparkles size={18} />
            <span>Lưu từ vựng & Bắt đầu học</span>
          </>
        )}
      </button>
    </form>
  );
};
