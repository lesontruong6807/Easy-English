"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllVocabWords, getAllPhases } from "@/lib/data/store";
import { VocabWord, Phase } from "@/lib/types";
import { SoundButton } from "@/components/shared/SoundButton";
import { ArrowLeft, BookOpen, PlusCircle, Search } from "lucide-react";

export default function AdminVocabPage() {
  const [vocab, setVocab] = useState<VocabWord[]>([]);
  const [search, setSearch] = useState("");
  const [phases, setPhases] = useState<Phase[]>([]);

  useEffect(() => {
    setVocab(getAllVocabWords());
    setPhases(getAllPhases());
  }, []);

  const filtered = vocab.filter(
    (w) =>
      w.word.toLowerCase().includes(search.toLowerCase()) ||
      w.meaning_vi.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-fade-in pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
          <Link
            href="/admin/progress"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 mb-2"
          >
            <ArrowLeft size={14} />
            <span>Quay lại Quản trị</span>
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Quản Lý Bộ Từ Vựng Gốc (Admin)
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Xem toàn bộ {vocab.length} từ vựng nền hệ thống và từ vựng tự tạo.
          </p>
        </div>

        <Link
          href="/vocab/add"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
        >
          <PlusCircle size={16} />
          <span>Thêm từ vựng mới</span>
        </Link>
      </div>

      <div className="flex items-center justify-between gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Lọc từ vựng..."
          className="w-full sm:max-w-xs px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <span className="text-xs font-semibold text-slate-500">
          Hiển thị {filtered.length} từ
        </span>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 uppercase font-bold text-slate-500 border-b border-slate-200/80 dark:border-slate-800/80">
              <tr>
                <th className="px-6 py-3.5">Từ vựng (Word)</th>
                <th className="px-6 py-3.5">IPA</th>
                <th className="px-6 py-3.5">Nghĩa tiếng Việt</th>
                <th className="px-6 py-3.5">Giai đoạn</th>
                <th className="px-6 py-3.5">Chủ đề (Theme)</th>
                <th className="px-6 py-3.5">Loại từ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filtered.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30"
                >
                  <td className="px-6 py-3 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>{item.word}</span>
                    <SoundButton
                      word={item.word}
                      cachedAudioUrl={item.audio_url}
                      size="sm"
                      variant="circle"
                    />
                  </td>
                  <td className="px-6 py-3 font-mono text-indigo-600 dark:text-indigo-400">
                    {item.ipa || "—"}
                  </td>
                  <td className="px-6 py-3 font-medium text-slate-700 dark:text-slate-300">
                    {item.meaning_vi}
                  </td>
                  <td className="px-6 py-3 font-semibold text-slate-600 dark:text-slate-400">
                    Giai đoạn {item.phase_id}
                  </td>
                  <td className="px-6 py-3 text-slate-500">
                    {item.theme || "—"}
                  </td>
                  <td className="px-6 py-3">
                    {item.is_base ? (
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold text-[10px]">
                        Từ gốc
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold text-[10px]">
                        Tự thêm
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
