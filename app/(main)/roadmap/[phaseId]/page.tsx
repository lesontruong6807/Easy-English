"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getPhaseById, getTopicProgressMap, getCurrentUser } from "@/lib/data/store";
import { Phase, TopicProgressStatus } from "@/lib/types";
import { TopicCard } from "@/components/roadmap/TopicCard";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { ArrowLeft, CheckCircle2, Filter, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PhaseDetailPage() {
  const params = useParams();
  const phaseId = params?.phaseId ? Number(params.phaseId) : 1;

  const [phase, setPhase] = useState<Phase | null>(null);
  const [progressMap, setProgressMap] = useState<Record<number, TopicProgressStatus>>({});
  const [filter, setFilter] = useState<"all" | "done" | "learning" | "not_started">("all");

  const loadData = () => {
    const user = getCurrentUser();
    const p = getPhaseById(phaseId);
    setPhase(p || null);
    setProgressMap(getTopicProgressMap(user.id));
  };

  useEffect(() => {
    loadData();
    window.addEventListener("user-changed", loadData);
    return () => window.removeEventListener("user-changed", loadData);
  }, [phaseId]);

  if (!phase) {
    return (
      <div className="text-center py-16">
        <p className="text-slate-500">Không tìm thấy giai đoạn học.</p>
        <Link href="/roadmap" className="text-indigo-600 font-bold mt-2 inline-block">
          Quay lại Lộ trình
        </Link>
      </div>
    );
  }

  const topics = phase.topics || [];
  let doneCount = 0;
  let learningCount = 0;

  topics.forEach((t) => {
    const st = progressMap[t.id];
    if (st === "done") doneCount++;
    else if (st === "learning") learningCount++;
  });

  const percentage = topics.length > 0 ? Math.round((doneCount / topics.length) * 100) : 0;

  const filteredTopics = topics.filter((t) => {
    const st = progressMap[t.id] || "not_started";
    if (filter === "all") return true;
    return st === filter;
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
      {/* Back Button */}
      <Link
        href="/roadmap"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Quay lại danh sách 4 Giai đoạn</span>
      </Link>

      {/* Phase Header Card */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Giai đoạn {phase.order_index}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              {phase.title}
            </h1>
          </div>
          <div className="text-right shrink-0">
            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
              {percentage}%
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {doneCount}/{topics.length} hoàn thành
            </p>
          </div>
        </div>

        {phase.description && (
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            {phase.description}
          </p>
        )}

        <ProgressBar progress={percentage} height="h-2" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {[
            { key: "all", label: `Tất cả (${topics.length})` },
            { key: "learning", label: `Đang học (${learningCount})` },
            { key: "done", label: `Đã hoàn thành (${doneCount})` },
            {
              key: "not_started",
              label: `Chưa học (${topics.length - doneCount - learningCount})`,
            },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors",
                filter === tab.key
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Link
          href={`/vocab?phaseId=${phase.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <Layers size={14} />
          <span>Xem từ vựng Giai đoạn {phase.order_index}</span>
        </Link>
      </div>

      {/* Topics List */}
      <div className="space-y-3">
        {filteredTopics.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 text-slate-500 text-xs">
            Không có chủ đề nào phù hợp với bộ lọc.
          </div>
        ) : (
          filteredTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              phaseId={phase.id}
              status={progressMap[topic.id]}
            />
          ))
        )}
      </div>
    </div>
  );
}
