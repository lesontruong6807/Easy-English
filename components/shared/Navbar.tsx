"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  Moon,
  Sun,
  User,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  LogOut,
} from "lucide-react";
import { getCurrentUser, setCurrentUser, DEFAULT_USERS } from "@/lib/data/store";
import { Profile } from "@/lib/types";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [currentUser, setUser] = useState<Profile>(DEFAULT_USERS[0]);
  const [isDark, setIsDark] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    setUser(getCurrentUser());

    const handleUserChange = () => {
      setUser(getCurrentUser());
    };
    window.addEventListener("user-changed", handleUserChange);

    // Dark mode check
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }

    return () => {
      window.removeEventListener("user-changed", handleUserChange);
    };
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  const handleSelectUser = (user: Profile) => {
    setCurrentUser(user);
    setUser(user);
    setIsUserMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <GraduationCap size={22} />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Easy English
            </span>
            <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase -mt-0.5">
              Lộ trình THPTQG
            </span>
          </div>
        </Link>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* User selector dropdown (for 2-3 students group + admin) */}
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/60 dark:border-slate-700/60"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[10px] font-bold">
                {currentUser.role === "admin" ? <ShieldCheck size={12} /> : currentUser.full_name[0]}
              </div>
              <span className="max-w-[110px] sm:max-w-[150px] truncate">{currentUser.full_name}</span>
              <ChevronDown size={14} className="text-slate-400" />
            </button>

            {isUserMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsUserMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200/80 dark:border-slate-800/80 py-2.5 z-50 animate-fade-in">
                  <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {currentUser.full_name}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {currentUser.username ? `@${currentUser.username}` : "Tài khoản Supabase"}
                      </span>
                      <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                        currentUser.role === "admin"
                          ? "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400"
                          : "bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400"
                      }`}>
                        {currentUser.role === "admin" ? "Admin" : "Học viên"}
                      </span>
                    </div>
                  </div>

                  {currentUser.role === "admin" && (
                    <div className="py-1 border-b border-slate-100 dark:border-slate-800">
                      <div className="px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Khu vực Quản trị
                      </div>
                      <Link
                        href="/admin/progress"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="w-full px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 transition-colors"
                      >
                        <ShieldCheck size={15} className="text-indigo-500" />
                        <span>Bảng theo dõi tiến độ nhóm</span>
                      </Link>
                      <Link
                        href="/admin/topics"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="w-full px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 transition-colors"
                      >
                        <GraduationCap size={15} className="text-indigo-500" />
                        <span>Quản lý chủ đề lý thuyết</span>
                      </Link>
                      <Link
                        href="/admin/vocab"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="w-full px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 transition-colors"
                      >
                        <Sparkles size={15} className="text-indigo-500" />
                        <span>Quản lý kho từ vựng</span>
                      </Link>
                    </div>
                  )}

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={async () => {
                        setIsUserMenuOpen(false);
                        const { logoutUser } = await import("@/lib/supabase/auth");
                        await logoutUser();
                      }}
                      className="w-full px-4 py-2 text-left text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center gap-2 transition-colors"
                    >
                      <LogOut size={15} />
                      <span>Đăng xuất tài khoản</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={isDark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};
