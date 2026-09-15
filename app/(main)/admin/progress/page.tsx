"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  getCurrentUser,
  getGroupProgressOverview,
  getLiveGroupProgressOverview,
  setCurrentUser,
  DEFAULT_USERS,
} from "@/lib/data/store";
import { ProgressBar } from "@/components/shared/ProgressBar";
import {
  ShieldCheck,
  Award,
  BookOpen,
  Map,
  Clock,
  Sparkles,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export default function AdminProgressPage() {
  const [currentUser, setCurrentUserState] = useState(getCurrentUser());
  const [groupStats, setGroupStats] = useState<any[]>([]);

  const loadData = async () => {
    setCurrentUserState(getCurrentUser());
    const stats = await getLiveGroupProgressOverview();
    setGroupStats(stats);
  };

  useEffect(() => {
    loadData();
    window.addEventListener("user-changed", loadData);
    return () => window.removeEventListener("user-changed", loadData);
  }, []);

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-fade-in pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">
            <ShieldCheck size={14} />
            <span>Khu vực Quản trị & Theo dõi nhóm học</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tiến Độ Học Tập Toàn Nhóm
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Bảng so sánh tiến độ thực tế giữa các học viên: % hoàn thành lộ trình, số từ vựng đã thuộc vững và các hoạt động ôn tập.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/topics"
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors"
          >
            Quản lý lý thuyết
          </Link>
          <Link
            href="/admin/vocab"
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors"
          >
            Quản lý từ vựng
          </Link>
        </div>
      </div>

      {/* Group Comparison Table */}
      <div className="overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-xs uppercase font-bold text-slate-500 dark:text-slate-400 border-b border-slate-200/80 dark:border-slate-800/80">
              <tr>
                <th className="px-6 py-4">Học viên</th>
                <th className="px-6 py-4">Tiến độ Lộ trình</th>
                <th className="px-6 py-4">Từ vựng Mastered</th>
                <th className="px-6 py-4">Cần ôn hôm nay</th>
                <th className="px-6 py-4">Sổ lỗi</th>
                <th className="px-6 py-4 text-right">Đăng nhập thử</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {groupStats.map((item) => (
                <tr
                  key={item.user.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-extrabold flex items-center justify-center text-sm border border-indigo-100 dark:border-indigo-900/60">
                        {item.user.full_name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">
                          {item.user.full_name}
                        </div>
                        <span className="text-[11px] text-slate-400">
                          {item.lastActive}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="min-w-[140px] space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-600 dark:text-slate-400">
                          {item.doneTopics}/{item.totalTopics} bài
                        </span>
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">
                          {item.roadmapPercent}%
                        </span>
                      </div>
                      <ProgressBar progress={item.roadmapPercent} height="h-2" />
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                      <Sparkles size={15} />
                      <span>{item.masteredVocab} từ</span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/40 font-bold text-xs">
                      {item.dueTodayVocab} từ
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span className="font-medium text-slate-600 dark:text-slate-400 text-xs">
                      {item.errorCount} lỗi
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentUser(item.user);
                      }}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 transition-colors border border-indigo-200/60 dark:border-indigo-800/60"
                    >
                      Đổi góc nhìn
                    </button>
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
