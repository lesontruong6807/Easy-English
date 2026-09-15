"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getSessionUser } from "@/lib/supabase/auth";
import { setCurrentUser } from "@/lib/data/store";
import { GraduationCap, Loader2 } from "lucide-react";

export const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function checkAuth() {
      const user = await getSessionUser();
      if (!isMounted) return;

      if (!user) {
        setIsAuthenticated(false);
        router.replace("/login");
      } else {
        setCurrentUser(user);
        setIsAuthenticated(true);
      }
    }

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [pathname, router]);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-indigo-600/25 mb-4 animate-bounce">
          <GraduationCap size={32} />
        </div>
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
          <Loader2 size={16} className="animate-spin" />
          <span>Đang xác thực tài khoản Easy English...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};
