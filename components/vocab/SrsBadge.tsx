import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles, BookOpen, CheckCircle2 } from "lucide-react";

interface SrsBadgeProps {
  level: number;
  status?: "new" | "learning" | "mastered";
  className?: string;
}

export const SrsBadge: React.FC<SrsBadgeProps> = ({ level, status, className }) => {
  const getBadgeConfig = () => {
    if (level >= 5) {
      return {
        label: "Mastered (Level 5)",
        icon: Sparkles,
        style: "bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800",
      };
    }
    if (level === 4) {
      return {
        label: "Thuộc vững (Level 4)",
        icon: CheckCircle2,
        style: "bg-teal-100 text-teal-800 border-teal-300 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800",
      };
    }
    if (level === 3) {
      return {
        label: "Nhớ tốt (Level 3)",
        icon: BookOpen,
        style: "bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800",
      };
    }
    if (level === 2) {
      return {
        label: "Đang học (Level 2)",
        icon: BookOpen,
        style: "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800",
      };
    }
    if (level === 1) {
      return {
        label: "Mới ôn (Level 1)",
        icon: BookOpen,
        style: "bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800",
      };
    }
    return {
      label: status === "new" ? "Chưa học" : "Level 0",
      icon: BookOpen,
      style: "bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800/80 dark:text-slate-300 dark:border-slate-700",
    };
  };

  const { label, icon: Icon, style } = getBadgeConfig();

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border shadow-2xs",
        style,
        className
      )}
    >
      <Icon size={12} className="shrink-0" />
      <span>{label}</span>
    </span>
  );
};
