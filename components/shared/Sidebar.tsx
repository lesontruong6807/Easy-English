"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  BookOpen,
  Layers,
  HelpCircle,
  PlusCircle,
  AlertCircle,
  ShieldCheck,
  Flame,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getCurrentUser } from "@/lib/data/store";
import { Profile } from "@/lib/types";
import { InstallAppButton } from "@/components/shared/InstallAppButton";

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [currentUser, setCurrentUser] = useState<Profile | null>(null);

  useEffect(() => {
    setCurrentUser(getCurrentUser());
    const handleUserChange = () => setCurrentUser(getCurrentUser());
    window.addEventListener("user-changed", handleUserChange);
    return () => window.removeEventListener("user-changed", handleUserChange);
  }, []);

  const mainNav = [
    { href: "/", label: "Tổng quan Dashboard", icon: LayoutDashboard },
    { href: "/roadmap", label: "Lộ trình 4 Giai đoạn", icon: Map },
    { href: "/vocab", label: "Kho từ vựng THPTQG", icon: BookOpen },
    { href: "/vocab/flashcard", label: "Học Flashcard SRS", icon: Layers, sub: true },
    { href: "/vocab/quiz", label: "Trắc nghiệm Quiz", icon: HelpCircle, sub: true },
    { href: "/vocab/add", label: "Thêm từ vựng mới", icon: PlusCircle, sub: true },
    { href: "/error-log", label: "Sổ tay lỗi sai", icon: AlertCircle },
  ];

  const adminNav = [
    { href: "/admin/progress", label: "Tiến độ cả nhóm", icon: Award },
    { href: "/admin/topics", label: "Quản lý chủ đề", icon: Map },
    { href: "/admin/vocab", label: "Quản lý từ vựng gốc", icon: BookOpen },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-[#e8e0d0] dark:border-[#36332e] bg-[#f7f4ec]/80 dark:bg-[#181715]/80 backdrop-blur-md p-4 min-h-[calc(100vh-4rem)]">
      <div className="space-y-1">
        <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Chương trình học
        </div>
        {mainNav.map((item) => {
          const Icon = item.icon;
          const isActive = pathname
            ? item.href === "/"
              ? pathname === "/"
              : pathname === item.href
            : false;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 group",
                item.sub && "ml-4 text-xs py-1.5",
                isActive
                  ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold shadow-2xs"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-100"
              )}
            >
              <Icon
                size={item.sub ? 16 : 18}
                className={cn(
                  "shrink-0 transition-transform group-hover:scale-110",
                  isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400"
                )}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {currentUser?.role === "admin" && (
        <div className="mt-6 space-y-1 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
            <ShieldCheck size={14} />
            <span>Khu vực Admin/Giáo viên</span>
          </div>
          {adminNav.map((item) => {
            const Icon = item.icon;
            const isActive = pathname ? pathname === item.href : false;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 group",
                  isActive
                    ? "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-bold shadow-2xs"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                )}
              >
                <Icon
                  size={18}
                  className={cn(
                    "shrink-0",
                    isActive ? "text-amber-600 dark:text-amber-400" : "text-slate-400"
                  )}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}

      {/* Install App Card */}
      <div className="mt-auto pt-4 space-y-3">
        <InstallAppButton variant="card" />

        <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-200/40 dark:border-indigo-800/40 p-3.5">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs mb-1">
            <Flame size={16} className="text-amber-500 fill-amber-500" />
            <span>Mục tiêu THPTQG 8+</span>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
            Học đều đặn 15 phút mỗi ngày theo Spaced Repetition để nhớ sâu ngữ pháp & từ vựng.
          </p>
        </div>
      </div>
    </aside>
  );
};
