"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap, Lock, User, ArrowRight, Loader2, CheckCircle2, BookOpen } from "lucide-react";
import { loginWithUsername, registerWithUsername } from "@/lib/supabase/auth";
import { setCurrentUser } from "@/lib/data/store";
import { cn } from "@/lib/utils";
import { InstallAppButton } from "@/components/shared/InstallAppButton";

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  // Form states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      if (tab === "signin") {
        if (!username.trim()) {
          setErrorMsg("Vui lòng nhập tên đăng nhập");
          setLoading(false);
          return;
        }

        const res = await loginWithUsername(username.trim(), password);
        if (res.error) {
          setErrorMsg(res.error);
        } else if (res.user) {
          setCurrentUser(res.user);
          router.push("/");
        }
      } else {
        if (!fullName.trim()) {
          setErrorMsg("Vui lòng nhập họ và tên của bạn");
          setLoading(false);
          return;
        }

        const cleanUsername = username.trim().toLowerCase().replace(/[^a-z0-9_.-]/g, "");
        if (!cleanUsername || cleanUsername.length < 3) {
          setErrorMsg("Tên đăng nhập cần ít nhất 3 ký tự (chỉ bao gồm chữ cái, chữ số, dấu gạch dưới)");
          setLoading(false);
          return;
        }

        const res = await registerWithUsername(
          cleanUsername,
          password,
          fullName.trim()
        );

        if (res.error) {
          setErrorMsg(res.error);
        } else {
          setSuccessMsg("Đăng ký tài khoản thành công! Đang vào lớp học...");
          if (res.user) {
            setCurrentUser(res.user);
          }
          setTimeout(() => {
            router.push("/");
          }, 1000);
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Đã xảy ra lỗi trong quá trình xử lý");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 selection:bg-indigo-500 selection:text-white">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-2xl">
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-xl shadow-indigo-600/25 mb-3.5">
            <GraduationCap size={34} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Easy English
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Đăng nhập để đồng bộ tiến độ học tập trên mọi thiết bị
          </p>
        </div>

        {/* Tab switch: Đăng nhập vs Đăng ký */}
        <div className="grid grid-cols-2 gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 mb-6">
          <button
            type="button"
            onClick={() => {
              setTab("signin");
              setErrorMsg(null);
            }}
            className={cn(
              "py-2 rounded-xl text-xs font-bold transition-all",
              tab === "signin"
                ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400"
            )}
          >
            Đăng nhập
          </button>
          <button
            type="button"
            onClick={() => {
              setTab("signup");
              setErrorMsg(null);
            }}
            className={cn(
              "py-2 rounded-xl text-xs font-bold transition-all",
              tab === "signup"
                ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400"
            )}
          >
            Đăng ký học viên
          </button>
        </div>

        {/* Alerts */}
        {errorMsg && (
          <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-400 text-xs font-semibold mb-5 leading-relaxed">
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-5 flex items-center gap-2">
            <CheckCircle2 size={16} />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {tab === "signup" && (
            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                Họ và tên của bạn <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn A"
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
              Tên đăng nhập <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={tab === "signin" ? "Ví dụ: truongleson687" : "Ví dụ: nguyenvana (viết liền không dấu)"}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-slate-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
              Mật khẩu <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Lock
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ít nhất 6 ký tự"
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-slate-100"
              />
            </div>
          </div>

          {tab === "signup" && (
            <div className="p-3 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 flex items-center gap-2.5 text-indigo-700 dark:text-indigo-300">
              <BookOpen size={16} className="shrink-0" />
              <div className="text-[11px] leading-tight font-medium">
                Tài khoản đăng ký mới sẽ mặc định là <strong>Học viên</strong> để đồng bộ tiến độ ôn thi THPTQG.
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/25 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <>
                <span>{tab === "signin" ? "Đăng nhập ngay" : "Tạo tài khoản & Bắt đầu học"}</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Security Note */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Dữ liệu học tập, tiến độ Spaced Repetition và sổ tay lỗi sai được đồng bộ trực tiếp lên Supabase Cloud.
          </p>
        </div>
      </div>

      {/* Install App Quick Access */}
      <div className="w-full max-w-md mt-4">
        <InstallAppButton variant="card" />
      </div>
    </div>
  );
}
