"use client";

import React, { useState } from "react";
import { Volume2, Loader2 } from "lucide-react";
import { playPronunciation } from "@/lib/vocab/pronounce";
import { cn } from "@/lib/utils";

interface SoundButtonProps {
  word: string;
  cachedAudioUrl?: string | null;
  onAudioCached?: (url: string) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "pill" | "circle" | "ghost";
}

export const SoundButton: React.FC<SoundButtonProps> = ({
  word,
  cachedAudioUrl,
  onAudioCached,
  className,
  size = "md",
  variant = "circle",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) return;

    setIsPlaying(true);
    try {
      const result = await playPronunciation(word, cachedAudioUrl);
      if (result.playedUrl && !cachedAudioUrl && onAudioCached) {
        onAudioCached(result.playedUrl);
      }
    } catch (err) {
      console.warn("Pronounce failed", err);
    } finally {
      setTimeout(() => setIsPlaying(false), 900);
    }
  };

  const sizeClasses = {
    sm: "p-1.5 text-xs",
    md: "p-2 text-sm",
    lg: "p-3 text-base",
  }[size];

  const iconSizes = {
    sm: 15,
    md: 18,
    lg: 22,
  }[size];

  const variantClasses = {
    circle:
      "rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900 border border-indigo-200/60 dark:border-indigo-800/60 shadow-sm",
    pill: "rounded-xl px-3 py-1.5 bg-indigo-600 text-white hover:bg-indigo-700 shadow hover:shadow-indigo-500/25",
    ghost:
      "rounded-lg text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800",
  }[variant];

  return (
    <button
      type="button"
      onClick={handlePlay}
      disabled={isPlaying}
      title={`Nghe phát âm: ${word}`}
      aria-label={`Phát âm từ ${word}`}
      className={cn(
        "inline-flex items-center justify-center transition-all duration-200 active:scale-90 group relative",
        sizeClasses,
        variantClasses,
        isPlaying && "ring-2 ring-indigo-400 ring-offset-2 dark:ring-offset-slate-900 animate-pulse",
        className
      )}
    >
      {isPlaying ? (
        <Loader2 size={iconSizes} className="animate-spin text-indigo-500" />
      ) : (
        <Volume2
          size={iconSizes}
          className="transition-transform group-hover:scale-110"
        />
      )}
      {variant === "pill" && <span className="ml-1.5 text-xs font-medium">Phát âm</span>}
    </button>
  );
};
