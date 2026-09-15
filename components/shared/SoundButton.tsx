"use client";

import React, { useState } from "react";
import { Volume2, Loader2, Snail, Turtle } from "lucide-react";
import { playPronunciation } from "@/lib/vocab/pronounce";
import { cn } from "@/lib/utils";

interface SoundButtonProps {
  word: string;
  cachedAudioUrl?: string | null;
  onAudioCached?: (url: string) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "pill" | "circle" | "ghost";
  speed?: number;
  label?: string;
}

export const SoundButton: React.FC<SoundButtonProps> = ({
  word,
  cachedAudioUrl,
  onAudioCached,
  className,
  size = "md",
  variant = "circle",
  speed = 1.0,
  label,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) return;

    setIsPlaying(true);
    try {
      const result = await playPronunciation(word, cachedAudioUrl, speed);
      if (result.playedUrl && !cachedAudioUrl && onAudioCached) {
        onAudioCached(result.playedUrl);
      }
    } catch (err) {
      console.warn("Pronounce failed", err);
    } finally {
      setTimeout(() => setIsPlaying(false), speed < 0.8 ? 1400 : 800);
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

  const isSlow = speed < 0.8;

  return (
    <button
      type="button"
      onClick={handlePlay}
      disabled={isPlaying}
      title={isSlow ? `Nghe chậm 0.5x: ${word}` : `Phát âm chuẩn: ${word}`}
      aria-label={`Phát âm từ ${word} ở tốc độ ${speed}x`}
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
      ) : isSlow ? (
        <span className="text-sm leading-none">🐢</span>
      ) : (
        <Volume2
          size={iconSizes}
          className="transition-transform group-hover:scale-110"
        />
      )}
      {(variant === "pill" || label) && (
        <span className="ml-1.5 text-xs font-semibold">{label || (isSlow ? "Chậm 0.5x" : "Phát âm")}</span>
      )}
    </button>
  );
};

/**
 * Nhóm 2 nút phát âm: [ 🔊 Chuẩn 1x ] và [ 🐢 Chậm 0.5x ]
 */
export const SoundButtonGroup: React.FC<{
  word: string;
  cachedAudioUrl?: string | null;
  onAudioCached?: (url: string) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}> = ({ word, cachedAudioUrl, onAudioCached, size = "md", className = "" }) => {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      {/* Nút nghe tốc độ bình thường (1.0x) */}
      <SoundButton
        word={word}
        cachedAudioUrl={cachedAudioUrl}
        onAudioCached={onAudioCached}
        size={size}
        speed={1.0}
        variant="pill"
        label="1.0x"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold"
      />

      {/* Nút nghe tốc độ chậm (0.5x) */}
      <SoundButton
        word={word}
        cachedAudioUrl={cachedAudioUrl}
        onAudioCached={onAudioCached}
        size={size}
        speed={0.5}
        variant="circle"
        className="bg-amber-50 dark:bg-amber-950/70 border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/60 px-2.5 py-1.5 rounded-xl font-bold flex items-center gap-1 text-xs"
        label="0.5x"
      />
    </div>
  );
};
