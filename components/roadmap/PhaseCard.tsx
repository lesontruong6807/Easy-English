import React from "react";
import Link from "next/link";
import { Phase, TopicProgressStatus } from "@/lib/types";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { ChevronRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhaseCardProps {
  phase: Phase;
  topicProgressMap: Record<number, TopicProgressStatus>;
}

export const PhaseCard: React.FC<PhaseCardProps> = ({ phase, topicProgressMap }) => {
  const topics = phase.topics || [];
  const totalTopics = topics.length;

  let doneCount = 0;
  let learningCount = 0;

  topics.forEach((t) => {
    const st = topicProgressMap[t.id];
    if (st === "done") doneCount++;
    else if (st === "learning") learningCount++;
  });

  const percentage = totalTopics > 0 ? Math.round((doneCount / totalTopics) * 100) : 0;

  const getPhaseBadgeColor = (order: number) => {
    switch (order) {
      case 1:
        return "from-blue-600 to-indigo-600";
      case 2:
        return "from-indigo-600 to-purple-600";
      case 3:
        return "from-purple-600 to-pink-600";
      case 4:
        return "from-emerald-600 to-teal-600";
      default:
        return "from-slate-600 to-slate-800";
    }
  };

  return (
    <Link
      href={`/roadmap/${phase.id}`}
      className="block group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg shadow-md bg-gradient-to-tr",
              getPhaseBadgeColor(phase.order_index)
            )}
          >
            {phase.order_index}
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Giai đoạn {phase.order_index}
            </span>
            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {phase.title}
            </h3>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/60 transition-colors shrink-0">
          <ChevronRight size={18} />
        </div>
      </div>

      {phase.description && (
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 line-clamp-2 leading-relaxed">
          {phase.description}
        </p>
      )}

      {/* Progress */}
      <div className="space-y-2 mt-auto">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emerald-500" />
            Đã hoàn thành: {doneCount}/{totalTopics} chủ đề
          </span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">{percentage}%</span>
        </div>
        <ProgressBar progress={percentage} height="h-2" />
      </div>

      {/* Sub status pill tags */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
        {doneCount === totalTopics && totalTopics > 0 ? (
          <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
            <Sparkles size={13} />
            Đã hoàn tất giai đoạn!
          </span>
        ) : (
          <>
            {learningCount > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200/50 dark:border-amber-800/50">
                <Clock size={11} /> {learningCount} đang học
              </span>
            )}
            <span>{totalTopics - doneCount - learningCount} chưa bắt đầu</span>
          </>
        )}
      </div>
    </Link>
  );
};
