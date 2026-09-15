import React from "react";
import Link from "next/link";
import { Topic, TopicProgressStatus } from "@/lib/types";
import { CheckCircle2, Clock, Circle, BookMarked, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopicCardProps {
  topic: Topic;
  status?: TopicProgressStatus;
  phaseId: number;
}

export const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  status = "not_started",
  phaseId,
}) => {
  const getStatusBadge = () => {
    switch (status) {
      case "done":
        return {
          label: "Đã hoàn thành",
          icon: CheckCircle2,
          classes:
            "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
        };
      case "learning":
        return {
          label: "Đang học",
          icon: Clock,
          classes:
            "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800",
        };
      default:
        return {
          label: "Chưa học",
          icon: Circle,
          classes:
            "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700",
        };
    }
  };

  const badge = getStatusBadge();
  const Icon = badge.icon;

  return (
    <Link
      href={`/roadmap/${phaseId}/${topic.id}`}
      className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md transition-all duration-200 group"
    >
      <div className="flex items-start gap-3.5 pr-2">
        <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-indigo-100 dark:border-indigo-900/60">
          #{topic.order_index}
        </div>
        <div>
          <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {topic.title}
          </h4>
          <div className="flex flex-wrap items-center gap-2 mt-1.5">
            <span
              className={cn(
                "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border",
                badge.classes
              )}
            >
              <Icon size={12} />
              {badge.label}
            </span>
            {(topic.book1_ref || topic.book2_p1_ref) && (
              <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-2 py-0.5 rounded-md border border-slate-100 dark:border-slate-800">
                <BookMarked size={11} className="text-indigo-500" />
                Có bài tập sách
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0">
        <ChevronRight size={18} />
      </div>
    </Link>
  );
};
