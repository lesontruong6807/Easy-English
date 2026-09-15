"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  getErrorLogs,
  addErrorLog,
  deleteErrorLog,
  getCurrentUser,
  getAllPhases,
  getTopicById,
} from "@/lib/data/store";
import { ErrorLogItem, Phase, Topic } from "@/lib/types";
import {
  AlertCircle,
  PlusCircle,
  Trash2,
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function ErrorLogPage() {
  const [logs, setLogs] = useState<ErrorLogItem[]>([]);
  const [phases, setPhases] = useState<Phase[]>([]);
  const [isAdding, setIsAdding] = useState(false);

  // Form state
  const [questionText, setQuestionText] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [reason, setReason] = useState("");
  const [selectedTopicId, setSelectedTopicId] = useState<number | 0>(0);
  const [filterTopicId, setFilterTopicId] = useState<number | 0>(0);

  const loadData = () => {
    const user = getCurrentUser();
    setLogs(getErrorLogs(user.id));
    setPhases(getAllPhases());
  };

  useEffect(() => {
    loadData();
    window.addEventListener("user-changed", loadData);
    return () => window.removeEventListener("user-changed", loadData);
  }, []);

  const handleCreateError = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim() || !correctAnswer.trim() || !reason.trim()) return;

    const user = getCurrentUser();
    addErrorLog(user.id, {
      question_text: questionText,
      correct_answer: correctAnswer,
      reason: reason,
      topic_id: selectedTopicId > 0 ? selectedTopicId : null,
    });

    setQuestionText("");
    setCorrectAnswer("");
    setReason("");
    setSelectedTopicId(0);
    setIsAdding(false);
    loadData();
  };

  const handleDelete = (id: number) => {
    deleteErrorLog(id);
    loadData();
  };

  const allTopics: Topic[] = [];
  phases.forEach((p) => {
    if (p.topics) allTopics.push(...p.topics);
  });

  const filteredLogs = logs.filter((l) => {
    if (filterTopicId !== 0 && l.topic_id !== filterTopicId) return false;
    return true;
  });

  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-fade-in pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-xs font-semibold text-rose-600 dark:text-rose-400 mb-2">
            <AlertCircle size={14} />
            <span>Phương pháp học từ bẫy đề thi</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sổ Tay Lỗi Sai (Error Notebook)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Ghi chép những câu bạn đã làm sai trong sách bài tập Quyển 1/2 hoặc khi làm Quiz. Ôn lại đều đặn để không bao giờ mất điểm oan.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAdding(!isAdding)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-600/20 active:scale-95 transition-all shrink-0"
        >
          <PlusCircle size={18} />
          <span>{isAdding ? "Đóng form" : "Ghi lỗi mới"}</span>
        </button>
      </div>

      {/* Quick Add Form Modal/Collapse */}
      {isAdding && (
        <form
          onSubmit={handleCreateError}
          className="rounded-3xl bg-white dark:bg-slate-900 border border-rose-200/80 dark:border-rose-900/60 p-6 sm:p-8 shadow-xl space-y-4 animate-slide-up"
        >
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <PlusCircle size={18} className="text-rose-600 dark:text-rose-400" />
            <span>Ghi chép câu làm sai</span>
          </h2>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Đề bài / Câu hỏi câu bị sai <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={2}
              required
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="Ví dụ: By the time he arrived, the train _____ (leave)."
              className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Đáp án đúng chính xác <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
                placeholder="Ví dụ: had left"
                className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all text-slate-900 dark:text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Thuộc chủ đề ngữ pháp
              </label>
              <select
                value={selectedTopicId}
                onChange={(e) => setSelectedTopicId(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-rose-500 text-slate-900 dark:text-slate-100"
              >
                <option value={0}>Không gắn chủ đề cụ thể</option>
                {allTopics.map((t) => (
                  <option key={t.id} value={t.id}>
                    #{t.order_index} {t.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Tại sao mình sai? / Bẫy cần nhớ <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={2}
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Ví dụ: By the time + quá khứ đơn thì vế sau chia quá khứ hoàn thành (had + V3) vì hành động xảy ra trước."
              className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md"
            >
              Lưu vào sổ tay
            </button>
          </div>
        </form>
      )}

      {/* Filter and Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Hiện có {filteredLogs.length} mục trong sổ tay lỗi sai
        </span>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Lọc theo chủ đề:</span>
          <select
            value={filterTopicId}
            onChange={(e) => setFilterTopicId(Number(e.target.value))}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value={0}>Tất cả chủ đề</option>
            {allTopics.map((t) => (
              <option key={t.id} value={t.id}>
                #{t.order_index} {t.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Error Logs List */}
      <div className="space-y-4">
        {filteredLogs.map((item) => {
          const topic = item.topic_id ? getTopicById(item.topic_id) : undefined;

          return (
            <div
              key={item.id}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-2xs hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-400">
                    {new Date(item.created_at).toLocaleDateString("vi-VN")}
                  </span>
                  {topic && (
                    <Link
                      href={`/roadmap/${topic.phase_id}/${topic.id}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md hover:underline"
                    >
                      <BookOpen size={11} />
                      <span>{topic.title}</span>
                    </Link>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  title="Đã nắm vững, xóa khỏi sổ"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Question Text */}
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-relaxed">
                {item.question_text}
              </p>

              {/* Correct Answer Box */}
              <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/40 text-xs font-semibold text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Đáp án đúng: <strong className="font-extrabold">{item.correct_answer}</strong></span>
              </div>

              {/* Reason Box */}
              <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
                <span className="font-bold">Lý do sai & bẫy cần ghi nhớ: </span>
                {item.reason}
              </div>
            </div>
          );
        })}

        {filteredLogs.length === 0 && (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">
            Chưa có câu hỏi nào trong sổ tay lỗi sai. Hãy ghi lại bất kỳ câu nào bạn làm sai để ôn tập nhé!
          </div>
        )}
      </div>
    </div>
  );
}
