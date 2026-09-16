"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  getTopicById,
  getPhaseById,
  getTopicProgressMap,
  setTopicProgress,
  getCurrentUser,
} from "@/lib/data/store";
import { Topic, Phase, TopicProgressStatus } from "@/lib/types";
import { ExampleBlock } from "@/components/roadmap/ExampleBlock";
import { BookReferenceBox } from "@/components/roadmap/BookReferenceBox";
import { RichTheoryRenderer } from "@/components/roadmap/RichTheoryRenderer";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Circle,
  ChevronRight,
  ChevronLeft,
  Share2,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function TopicDetailPage() {
  const params = useParams();
  const router = useRouter();
  const phaseId = params?.phaseId ? Number(params.phaseId) : 1;
  const topicId = params?.topicId ? Number(params.topicId) : 1;

  const [topic, setTopic] = useState<Topic | null>(null);
  const [phase, setPhase] = useState<Phase | null>(null);
  const [status, setStatus] = useState<TopicProgressStatus>("not_started");
  const [isSaved, setIsSaved] = useState(false);

  const loadData = () => {
    const user = getCurrentUser();
    const t = getTopicById(topicId);
    const p = getPhaseById(phaseId);
    setTopic(t || null);
    setPhase(p || null);

    const progressMap = getTopicProgressMap(user.id);
    setStatus(progressMap[topicId] || "not_started");
  };

  useEffect(() => {
    loadData();
    window.addEventListener("user-changed", loadData);
    return () => window.removeEventListener("user-changed", loadData);
  }, [topicId, phaseId]);

  const handleUpdateStatus = (newStatus: TopicProgressStatus) => {
    const user = getCurrentUser();
    setTopicProgress(user.id, topicId, newStatus);
    setStatus(newStatus);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  if (!topic) {
    return (
      <div className="text-center py-16">
        <p className="text-slate-500">Không tìm thấy chủ đề học.</p>
        <Link href={`/roadmap/${phaseId}`} className="text-indigo-600 font-bold mt-2 inline-block">
          Quay lại giai đoạn
        </Link>
      </div>
    );
  }

  // Find prev and next topics in this phase
  const topicsList = phase?.topics || [];
  const currentIndex = topicsList.findIndex((t) => t.id === topic.id);
  const prevTopic = currentIndex > 0 ? topicsList[currentIndex - 1] : null;
  const nextTopic =
    currentIndex >= 0 && currentIndex < topicsList.length - 1
      ? topicsList[currentIndex + 1]
      : null;

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fade-in pb-12">
      {/* Navigation breadcrumb */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href={`/roadmap/${phaseId}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Quay lại Giai đoạn {phase?.order_index || phaseId}</span>
        </Link>

        {isSaved && (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 animate-fade-in">
            <Sparkles size={14} />
            <span>Đã lưu trạng thái!</span>
          </span>
        )}
      </div>

      {/* Header Container */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/60">
            Chủ đề #{topic.order_index}
          </span>
          <span className="text-xs text-slate-400">|</span>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {phase?.title}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          {topic.title}
        </h1>

        {/* Status Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={() => handleUpdateStatus("learning")}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all active:scale-95",
              status === "learning"
                ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                : "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900/50 hover:bg-amber-100"
            )}
          >
            <Clock size={16} />
            <span>Đánh dấu: Đang học</span>
          </button>

          <button
            type="button"
            onClick={() => handleUpdateStatus("done")}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold border transition-all active:scale-95",
              status === "done"
                ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/25"
                : "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50 hover:bg-emerald-100"
            )}
          >
            <CheckCircle2 size={16} />
            <span>Đánh dấu: Đã học xong</span>
          </button>

          {status === "not_started" && (
            <span className="text-xs text-slate-400 italic ml-auto">
              Chưa học chủ đề này
            </span>
          )}
        </div>
      </div>

      {/* Theory Markdown Content */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
          Lý thuyết cốt lõi & Quy tắc ngữ pháp
        </div>

        <RichTheoryRenderer content={topic.theory_md} />
      </div>

      {/* 3 Illustrative Examples */}
      <ExampleBlock examples={topic.examples} />

      {/* Book Reference Box (Quyển 1 & Quyển 2) */}
      <BookReferenceBox
        book1_ref={topic.book1_ref}
        book2_p1_ref={topic.book2_p1_ref}
        book2_p2_ref={topic.book2_p2_ref}
      />

      {/* Bottom Sticky-like Action & Next/Prev Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
        <div>
          {prevTopic ? (
            <Link
              href={`/roadmap/${phaseId}/${prevTopic.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft size={16} />
              <span>Chủ đề trước: #{prevTopic.order_index}</span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <button
          type="button"
          onClick={() => handleUpdateStatus("done")}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <CheckCircle2 size={18} />
          <span>Tôi đã làm xong bài tập, hoàn thành!</span>
        </button>

        <div>
          {nextTopic ? (
            <Link
              href={`/roadmap/${phaseId}/${nextTopic.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/60 text-xs font-bold text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 transition-colors"
            >
              <span>Chủ đề tiếp theo: #{nextTopic.order_index}</span>
              <ChevronRight size={16} />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
