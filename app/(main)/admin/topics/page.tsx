"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllPhases, updateTopicContent } from "@/lib/data/store";
import { Phase, Topic } from "@/lib/types";
import { Edit3, Check, ArrowLeft, BookOpen, Save } from "lucide-react";

export default function AdminTopicsPage() {
  const [phases, setPhases] = useState<Phase[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [editedTheory, setEditedTheory] = useState("");
  const [editedBook1, setEditedBook1] = useState("");
  const [editedBook2P1, setEditedBook2P1] = useState("");
  const [editedBook2P2, setEditedBook2P2] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const p = getAllPhases();
    setPhases(p);
  }, []);

  const handleOpenEdit = (topic: Topic) => {
    setSelectedTopic(topic);
    setEditedTheory(topic.theory_md);
    setEditedBook1(topic.book1_ref || "");
    setEditedBook2P1(topic.book2_p1_ref || "");
    setEditedBook2P2(topic.book2_p2_ref || "");
    setIsSaved(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTopic) return;

    updateTopicContent(selectedTopic.id, {
      theory_md: editedTheory,
      book1_ref: editedBook1.trim() || null,
      book2_p1_ref: editedBook2P1.trim() || null,
      book2_p2_ref: editedBook2P2.trim() || null,
    });

    setIsSaved(true);
    setPhases(getAllPhases());
    setTimeout(() => {
      setSelectedTopic(null);
      setIsSaved(false);
    }, 1200);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-fade-in pb-12">
      <div className="flex items-center justify-between pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
          <Link
            href="/admin/progress"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 mb-2"
          >
            <ArrowLeft size={14} />
            <span>Quay lại Quản trị</span>
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Quản Lý Lý Thuyết & Tham Chiếu Sách (Admin)
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Chỉnh sửa nội dung lý thuyết markdown và số trang sách bài tập trực tiếp trên hệ thống mà không cần deploy lại.
          </p>
        </div>
      </div>

      {selectedTopic ? (
        <form
          onSubmit={handleSave}
          className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-xl space-y-5 animate-slide-up"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                Chỉnh sửa chủ đề #{selectedTopic.order_index}
              </span>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {selectedTopic.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setSelectedTopic(null)}
              className="text-xs text-slate-400 hover:text-slate-700"
            >
              Đóng
            </button>
          </div>

          {isSaved && (
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center gap-2">
              <Check size={16} />
              <span>Đã lưu thành công!</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">
              Lý thuyết tóm tắt (Markdown)
            </label>
            <textarea
              rows={8}
              value={editedTheory}
              onChange={(e) => setEditedTheory(e.target.value)}
              className="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                Tham chiếu Sách Quyển 1
              </label>
              <input
                type="text"
                value={editedBook1}
                onChange={(e) => setEditedBook1(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-800/60"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                Sách Quyển 2 (Phần 1)
              </label>
              <input
                type="text"
                value={editedBook2P1}
                onChange={(e) => setEditedBook2P1(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-800/60"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                Sách Quyển 2 (Phần 2)
              </label>
              <input
                type="text"
                value={editedBook2P2}
                onChange={(e) => setEditedBook2P2(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-800/60"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={() => setSelectedTopic(null)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center gap-2 shadow-md hover:bg-indigo-700"
            >
              <Save size={15} />
              <span>Lưu thay đổi</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-5 sm:p-6 shadow-sm"
            >
              <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white mb-4">
                {phase.title}
              </h2>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {(phase.topics || []).map((t) => (
                  <div
                    key={t.id}
                    className="py-3 flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="font-bold text-xs text-indigo-600 dark:text-indigo-400 mr-2">
                        #{t.order_index}
                      </span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {t.title}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleOpenEdit(t)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 transition-colors border border-indigo-200/60 dark:border-indigo-800/60 flex items-center gap-1.5 shrink-0"
                    >
                      <Edit3 size={13} />
                      <span>Sửa</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
