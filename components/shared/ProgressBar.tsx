import React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number; // 0 to 100
  className?: string;
  height?: string;
  showText?: boolean;
  colorVariant?: "indigo" | "emerald" | "amber" | "gradient";
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className,
  height = "h-2.5",
  showText = false,
  colorVariant = "gradient",
}) => {
  const clamped = Math.min(100, Math.max(0, Math.round(progress)));

  const colorClasses = {
    indigo: "bg-indigo-600 dark:bg-indigo-500",
    emerald: "bg-emerald-500 dark:bg-emerald-400",
    amber: "bg-amber-500 dark:bg-amber-400",
    gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500",
  }[colorVariant];

  return (
    <div className={cn("w-full flex items-center gap-3", className)}>
      <div className={cn("w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner", height)}>
        <div
          className={cn("h-full rounded-full transition-all duration-500 ease-out", colorClasses)}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showText && (
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 shrink-0 min-w-[38px] text-right">
          {clamped}%
        </span>
      )}
    </div>
  );
};
