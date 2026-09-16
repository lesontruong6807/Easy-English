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
import { BookReferenceBox } from "@/components/roadmap/BookReferenceBox";
import { RichTheoryRenderer } from "@/components/roadmap/RichTheoryRenderer";
import { InteractiveQuizSection } from "@/components/roadmap/InteractiveQuizSection";
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
        <p className="text-[#70685e] dark:text-[#9e968b]">Không tìm thấy chủ đề học.</p>
        <Link href={`/roadmap/${phaseId}`} className="text-emerald-700 dark:text-emerald-400 font-bold mt-2 inline-block">
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
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#70685e] hover:text-[#2d2926] dark:text-[#9e968b] dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Quay lại Giai đoạn {phase?.order_index || phaseId}</span>
        </Link>

        {isSaved && (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 animate-fade-in">
            <Sparkles size={14} />
            <span>Đã lưu trạng thái!</span>
          </span>
        )}
      </div>

      {/* Header Container */}
      <div className="rounded-3xl bg-[#fdfbf7] dark:bg-[#201e1c] border border-[#e8e0d0] dark:border-[#36332e] p-6 sm:p-8 shadow-xs">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#f2ebd9] dark:bg-[#2b2723] text-[#54493b] dark:text-[#d4c9b8] border border-[#e0d6c1] dark:border-[#3d3731]">
            Chủ đề #{topic.order_index}
          </span>
          <span className="text-xs text-[#b0a494]">|</span>
          <span className="text-xs font-medium text-[#70685e] dark:text-[#9e968b]">
            {phase?.title}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2d2926] dark:text-[#e8e2d8] tracking-tight mb-6">
          {topic.title}
        </h1>

        {/* Status Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#ede5d6] dark:border-[#2d2a26]">
          <button
            type="button"
            onClick={() => handleUpdateStatus("learning")}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all active:scale-95",
              status === "learning"
                ? "bg-[#b45309] text-white border-[#b45309] shadow-xs"
                : "bg-[#fdf8eb] dark:bg-[#2a241b] text-[#854d0e] dark:text-[#fde047] border-[#eedaa2] dark:border-[#5c491e] hover:bg-[#faf3de]"
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
                ? "bg-emerald-700 dark:bg-emerald-600 text-white border-emerald-700 shadow-xs"
                : "bg-[#f0f7f3] dark:bg-[#1a2620] text-[#166534] dark:text-[#86efac] border-[#b8ded0] dark:border-[#274f3d] hover:bg-[#e6f2eb]"
            )}
          >
            <CheckCircle2 size={16} />
            <span>Đánh dấu: Đã học xong</span>
          </button>

          {status === "not_started" && (
            <span className="text-xs text-[#8c8274] dark:text-[#8f887c] italic ml-auto">
              Chưa học chủ đề này
            </span>
          )}
        </div>
      </div>

      {/* Theory Markdown Content (Includes Section 3 Examples before Section 4 Mnemonics) */}
      <div className="rounded-3xl bg-[#fdfbf7] dark:bg-[#201e1c] border border-[#e8e0d0] dark:border-[#36332e] p-6 sm:p-8 shadow-xs">
        <div className="text-xs font-bold uppercase tracking-wider text-[#8c8274] dark:text-[#8f887c] mb-4 pb-2 border-b border-[#ede5d6] dark:border-[#2d2a26]">
          Lý thuyết cốt lõi & Phân tích ví dụ
        </div>

        <RichTheoryRenderer content={topic.theory_md} />
      </div>

      {/* Interactive 3-Question Quick Quiz */}
      <InteractiveQuizSection quiz={topic.quiz} />

      {/* Book Reference Box (Quyển 1 & Quyển 2) */}
      <BookReferenceBox
        book1_ref={topic.book1_ref}
        book2_p1_ref={topic.book2_p1_ref}
        book2_p2_ref={topic.book2_p2_ref}
      />

      {/* Bottom Sticky-like Action & Next/Prev Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#ede5d6] dark:border-[#2d2a26]">
        <div>
          {prevTopic ? (
            <Link
              href={`/roadmap/${phaseId}/${prevTopic.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#fdfbf7] dark:bg-[#201e1c] border border-[#e8e0d0] dark:border-[#36332e] text-xs font-bold text-[#4a4237] dark:text-[#d6cebf] hover:bg-[#f5efe3] transition-colors"
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
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 text-white font-bold text-sm shadow-xs active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <CheckCircle2 size={18} />
          <span>Tôi đã làm xong bài tập, hoàn thành!</span>
        </button>

        <div>
          {nextTopic ? (
            <Link
              href={`/roadmap/${phaseId}/${nextTopic.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#f2ebd9] dark:bg-[#2b2723] border border-[#e0d6c1] dark:border-[#3d3731] text-xs font-bold text-[#54493b] dark:text-[#d4c9b8] hover:bg-[#eae0ca] transition-colors"
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
