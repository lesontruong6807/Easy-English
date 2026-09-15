"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  getVocabWithProgress,
  getAllPhases,
  getCurrentUser,
  cacheVocabAudioUrl,
  getDailyStudySet,
  DailyStudySet,
} from "@/lib/data/store";
import { VocabWithProgress, Phase } from "@/lib/types";
import { SoundButton, SoundButtonGroup } from "@/components/shared/SoundButton";
import { SrsBadge } from "@/components/vocab/SrsBadge";
import { HighlightedSentence } from "@/components/vocab/HighlightedSentence";
import {
  BookOpen,
  Layers,
  HelpCircle,
  PlusCircle,
  Search,
  Filter,
  Volume2,
  Clock,
  Sparkles,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { isDueForReview } from "@/lib/srs";

function VocabOverviewContent() {
  const searchParams = useSearchParams();
  const initialPhase = searchParams?.get("phaseId")
    ? Number(searchParams.get("phaseId"))
    : 0;

  const [vocabList, setVocabList] = useState<VocabWithProgress[]>([]);
  const [phases, setPhases] = useState<Phase[]>([]);
  const [selectedPhase, setSelectedPhase] = useState<number>(initialPhase);
  const [selectedTheme, setSelectedTheme] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dailySet, setDailySet] = useState<DailyStudySet | null>(null);

  const loadData = () => {
    const user = getCurrentUser();
    setPhases(getAllPhases());
    setVocabList(getVocabWithProgress(user.id));
    setDailySet(getDailyStudySet(user.id));
  };

  useEffect(() => {
    loadData();
    window.addEventListener("user-changed", loadData);
    return () => window.removeEventListener("user-changed", loadData);
  }, []);

  const themes = useMemo(() => {
    const set = new Set<string>();
    vocabList.forEach((w) => {
      if (w.theme) set.add(w.theme);
    });
    return Array.from(set).sort();
  }, [vocabList]);

  // Filtered vocabulary list
  const filteredWords = useMemo(() => {
    return vocabList.filter((w) => {
      if (selectedPhase !== 0 && w.phase_id !== selectedPhase) return false;
      if (selectedTheme !== "all" && w.theme !== selectedTheme) return false;
      if (selectedStatus !== "all" && w.progress?.status !== selectedStatus)
        return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchWord = w.word.toLowerCase().includes(q);
        const matchMeaning = w.meaning_vi.toLowerCase().includes(q);
        if (!matchWord && !matchMeaning) return false;
      }
      return true;
    });
  }, [vocabList, selectedPhase, selectedTheme, selectedStatus, searchQuery]);

  const dueTodayCount = vocabList.filter((w) =>
    isDueForReview(w.progress?.next_review_date)
  ).length;

  const masteredCount = vocabList.filter(
    (w) => w.progress?.status === "mastered"
  ).length;

  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
      {/* Top Header & Fast Action Hub */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            <BookOpen size={14} />
            <span>Kho Từ Vựng Chuẩn Hóa THPTQG</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Từ Vựng & Spaced Repetition (SRS)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Học thẻ lật Flashcard 3D và làm trắc nghiệm Quiz mỗi ngày. Thuật toán tự động giãn cách ngày ôn giúp nhớ từ lâu bền.
          </p>
        </div>

        {/* Shortcuts */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/vocab/flashcard"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
          >
            <Layers size={16} />
            <span>Ôn Flashcard ({dueTodayCount})</span>
          </Link>

          <Link
            href="/vocab/quiz"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-600/20 active:scale-95 transition-all"
          >
            <HelpCircle size={16} />
            <span>Làm Quiz</span>
          </Link>

          <Link
            href="/vocab/add"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 active:scale-95 transition-all"
          >
            <PlusCircle size={16} className="text-indigo-600 dark:text-indigo-400" />
            <span>Thêm từ</span>
          </Link>
        </div>
      </div>

      {/* ================= BÀI HỌC HÔM NAY (10 TỪ MỚI + TỪ CẦN ÔN) ================= */}
      {dailySet && (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-800 p-5 sm:p-6 text-white shadow-xl shadow-indigo-500/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold text-indigo-100 mb-2.5 border border-white/15">
              <Calendar size={14} className="text-amber-300" />
              <span>Lộ trình thông minh hôm nay ({dailySet.date})</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black tracking-tight mb-1">
              Bài học hôm nay: {dailySet.totalCount} từ vựng
            </h3>
            <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              Bao gồm <strong>{dailySet.newWords.length} từ mới ngẫu nhiên</strong> +{" "}
              <strong>{dailySet.reviewWords.length} từ cũ cần ôn</strong> theo thuật toán Spaced Repetition từ 2-3 hôm trước.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-2.5 shrink-0">
            <Link
              href="/vocab/flashcard"
              className="px-5 py-2.5 rounded-2xl bg-white text-indigo-700 hover:bg-indigo-50 font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <Layers size={16} />
              <span>Học Flashcard hôm nay ({dailySet.totalCount})</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-sm space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm từ tiếng Anh hoặc nghĩa tiếng Việt..."
            className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 dark:text-slate-100"
          />
        </div>

        {/* Dropdowns row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Primary Filter: Phase (1-4) */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
              1. Giai đoạn (Khớp với Roadmap)
            </label>
            <select
              value={selectedPhase}
              onChange={(e) => setSelectedPhase(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value={0}>Tất cả các giai đoạn</option>
              {phases.map((p) => (
                <option key={p.id} value={p.id}>
                  Giai đoạn {p.order_index}: {p.title}
                </option>
              ))}
            </select>
          </div>

          {/* Secondary Filter: Theme */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              2. Chủ đề (Theme)
            </label>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="w-full px-3 py-2 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">Tất cả chủ đề</option>
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Filter 3: Status */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              3. Trạng thái học
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="new">Chưa học (Mới)</option>
              <option value="learning">Đang học (Level 1-3)</option>
              <option value="mastered">Đã thuộc vững (Level 4-5)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Result Counter */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 px-1">
        <span>Hiển thị {filteredWords.length} từ vựng</span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
            <Clock size={13} /> {dueTodayCount} cần ôn hôm nay
          </span>
          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
            <Sparkles size={13} /> {masteredCount} đã thuộc
          </span>
        </div>
      </div>

      {/* Vocabulary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWords.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header row */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">
                    {item.word}
                  </h3>
                  <SoundButtonGroup
                    word={item.word}
                    cachedAudioUrl={item.audio_url}
                    onAudioCached={(url) => cacheVocabAudioUrl(item.id, url)}
                    size="sm"
                  />
                </div>
                <SrsBadge
                  level={item.progress?.srs_level || 0}
                  status={item.progress?.status}
                />
              </div>

              {item.ipa && (
                <div className="inline-block mb-2">
                  <span className="text-xs font-mono font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-950/70 px-2.5 py-0.5 rounded-lg border border-indigo-200/60 dark:border-indigo-800/60 shadow-2xs tracking-wider">
                    /{item.ipa.replace(/^\/|\/$/g, "")}/
                  </span>
                </div>
              )}

              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3 leading-snug">
                {item.meaning_vi}
              </p>

              {item.example_sentence && (
                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-800/60 mb-3">
                  <HighlightedSentence
                    sentence={item.example_sentence}
                    targetWord={item.word}
                    translation={item.example_vi}
                  />
                </div>
              )}
            </div>

            {/* Card footer info */}
            <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                Giai đoạn {item.phase_id}
              </span>
              {item.theme && (
                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md text-[10px]">
                  {item.theme}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredWords.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">
          Không tìm thấy từ vựng nào với điều kiện lọc hiện tại.
        </div>
      )}
    </div>
  );
}

export default function VocabOverviewPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-xs text-slate-400 font-semibold animate-pulse">
          Đang tải kho từ vựng...
        </div>
      }
    >
      <VocabOverviewContent />
    </Suspense>
  );
}

