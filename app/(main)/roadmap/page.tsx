"use client";

import React, { useState, useEffect } from "react";
import { getAllPhases, getTopicProgressMap, getCurrentUser } from "@/lib/data/store";
import { Phase, TopicProgressStatus } from "@/lib/types";
import { PhaseCard } from "@/components/roadmap/PhaseCard";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { Map, CheckCircle2, Award } from "lucide-react";

export default function RoadmapOverviewPage() {
  const [phases, setPhases] = useState<Phase[]>([]);
  const [progressMap, setProgressMap] = useState<Record<number, TopicProgressStatus>>({});

  useEffect(() => {
    const loadData = () => {
      const user = getCurrentUser();
      setPhases(getAllPhases());
      setProgressMap(getTopicProgressMap(user.id));
    };

    loadData();
    window.addEventListener("user-changed", loadData);
    return () => window.removeEventListener("user-changed", loadData);
  }, []);

  let totalTopics = 0;
  let totalDone = 0;

  phases.forEach((p) => {
    const tList = p.topics || [];
    totalTopics += tList.length;
    tList.forEach((t) => {
      if (progressMap[t.id] === "done") totalDone++;
    });
  });

  const overallPercent = totalTopics > 0 ? Math.round((totalDone / totalTopics) * 100) : 0;

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            <Map size={14} />
            <span>Lộ trình chuẩn hóa 4 Giai đoạn</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Lộ Trình Ôn Thi Tiếng Anh THPTQG
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Học lý thuyết cô đọng, xem ví dụ minh họa và mở sách bài tập thực hành theo số trang chỉ định.
          </p>
        </div>

        {/* Overall Progress Widget */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm min-w-[240px]">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            <span>Tiến độ toàn khóa</span>
            <span className="text-indigo-600 dark:text-indigo-400">{overallPercent}%</span>
          </div>
          <ProgressBar progress={overallPercent} height="h-2.5" />
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1">
            <CheckCircle2 size={13} className="text-emerald-500" />
            <span>Đã hoàn thành {totalDone}/{totalTopics} chủ đề</span>
          </div>
        </div>
      </div>

      {/* 4 Phases List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {phases.map((phase) => (
          <PhaseCard
            key={phase.id}
            phase={phase}
            topicProgressMap={progressMap}
          />
        ))}
      </div>
    </div>
  );
}
