"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  getCurrentUser,
  getDashboardMetrics,
  getAllPhases,
  getTopicProgressMap,
} from "@/lib/data/store";
import { Profile, Phase, TopicProgressStatus } from "@/lib/types";
import { ProgressBar } from "@/components/shared/ProgressBar";
import {
  Map,
  BookOpen,
  Layers,
  HelpCircle,
  AlertCircle,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  Flame,
  Zap,
} from "lucide-react";

export default function DashboardPage() {
  const [currentUser, setCurrentUser] = useState<Profile | null>(null);
  const [metrics, setMetrics] = useState({
    totalTopics: 30,
    doneTopics: 0,
    learningTopics: 0,
    roadmapPercentage: 0,
    totalVocab: 50,
    dueTodayVocab: 0,
    masteredVocab: 0,
    learningVocab: 0,
    errorCount: 0,
  });
  const [phases, setPhases] = useState<Phase[]>([]);
  const [progressMap, setProgressMap] = useState<Record<number, TopicProgressStatus>>({});

  const loadData = () => {
    const user = getCurrentUser();
    setCurrentUser(user);
    const m = getDashboardMetrics(user.id);
    setMetrics(m);
    setPhases(getAllPhases());
    setProgressMap(getTopicProgressMap(user.id));
  };

  useEffect(() => {
    loadData();
    const handleUserChange = () => loadData();
    window.addEventListener("user-changed", handleUserChange);
    return () => window.removeEventListener("user-changed", handleUserChange);
  }, []);

  if (!currentUser) return null;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* ================= HERO WELCOME BANNER ================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-800 text-white p-6 sm:p-8 shadow-xl shadow-indigo-600/15">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-indigo-100 mb-3 border border-white/10">
            <Flame size={14} className="text-amber-300 fill-amber-300" />
            <span>Mục tiêu THPTQG 8+ (Chống liệt & Bứt phá)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Chào {currentUser.full_name.split(" ")[0]}! 🚀
          </h1>
          <p className="text-sm sm:text-base text-indigo-100/90 leading-relaxed mb-6">
            Mỗi ngày dành 15-20 phút học 1 chủ đề ngữ pháp và ôn từ vựng theo chu kỳ Spaced Repetition để kiến thức in sâu vào trí nhớ dài hạn.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              <Map size={16} />
              <span>Tiếp tục lộ trình</span>
            </Link>
            <Link
              href="/vocab/flashcard"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm backdrop-blur-md transition-all active:scale-95 border border-white/20"
            >
              <Layers size={16} />
              <span>Ôn Flashcard ({metrics.dueTodayVocab} từ cần ôn)</span>
            </Link>
          </div>
        </div>

        {/* Decorative background blur shape */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
        <div className="absolute right-12 -top-12 w-48 h-48 rounded-full bg-indigo-400/20 blur-2xl pointer-events-none" />
      </div>

      {/* ================= STATS OVERVIEW CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Roadmap Progress */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Lộ trình học
            </span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Map size={18} />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {metrics.roadmapPercentage}%
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              ({metrics.doneTopics}/{metrics.totalTopics} bài)
            </span>
          </div>
          <ProgressBar progress={metrics.roadmapPercentage} height="h-2" colorVariant="indigo" />
        </div>

        {/* Card 2: Due for review */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Từ vựng cần ôn hôm nay
            </span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Clock size={18} />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-extrabold text-amber-600 dark:text-amber-400">
              {metrics.dueTodayVocab}
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              từ đến hạn
            </span>
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">
            Tổng cộng: {metrics.totalVocab} từ trong kho
          </div>
        </div>

        {/* Card 3: Mastered Vocab */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Đã thuộc sâu (Mastered)
            </span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <CheckCircle2 size={18} />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
              {metrics.masteredVocab}
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              từ Level 4+
            </span>
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">
            {metrics.learningVocab} từ đang ở level 1-3
          </div>
        </div>

        {/* Card 4: Error log notebook */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Sổ tay lỗi sai
            </span>
            <div className="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <AlertCircle size={18} />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-extrabold text-rose-600 dark:text-rose-400">
              {metrics.errorCount}
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              câu ghi chép
            </span>
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">
            Xem lại vào cuối tuần để tránh lặp lại lỗi
          </div>
        </div>
      </div>

      {/* ================= QUICK ACTION MODULES ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/vocab/flashcard"
          className="group p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Layers size={22} />
            </div>
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
              Bắt đầu →
            </span>
          </div>
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">
              Lật thẻ Flashcard 3D
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Học kèm phát âm chuẩn từ Free Dictionary API và thuật toán giãn cách SM-2.
            </p>
          </div>
        </Link>

        <Link
          href="/vocab/quiz"
          className="group p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <HelpCircle size={22} />
            </div>
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
              Bắt đầu →
            </span>
          </div>
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">
              Trắc nghiệm 4 lựa chọn
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Kiểm tra nhanh trí nhớ từ vựng với phản hồi đúng/sai tức thì và câu ví dụ.
            </p>
          </div>
        </Link>

        <Link
          href="/error-log"
          className="group p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-rose-400 dark:hover:border-rose-600 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <AlertCircle size={22} />
            </div>
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 group-hover:translate-x-1 transition-transform">
              Xem sổ →
            </span>
          </div>
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">
              Sổ tay bẫy & Lỗi sai
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Ghi chú những câu làm sai trong sách Quyển 1 & 2 để biến điểm yếu thành điểm mạnh.
            </p>
          </div>
        </Link>
      </div>

      {/* ================= ROADMAP PROGRESS PREVIEW ================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
              Tiến độ 4 Giai đoạn trong Lộ trình
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Toàn bộ 30 chủ đề lý thuyết bám sát kỳ thi THPTQG
            </p>
          </div>
          <Link
            href="/roadmap"
            className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            <span>Chi tiết lộ trình</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="space-y-4">
          {phases.map((phase) => {
            const topics = phase.topics || [];
            let done = 0;
            topics.forEach((t) => {
              if (progressMap[t.id] === "done") done++;
            });
            const percent = topics.length > 0 ? Math.round((done / topics.length) * 100) : 0;

            return (
              <Link
                key={phase.id}
                href={`/roadmap/${phase.id}`}
                className="block p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-900/80 text-indigo-600 dark:text-indigo-400 text-xs font-extrabold flex items-center justify-center">
                      {phase.order_index}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {phase.title}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                    {done}/{topics.length} bài ({percent}%)
                  </span>
                </div>
                <ProgressBar progress={percent} height="h-1.5" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
