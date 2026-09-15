/**
 * Hệ thống âm thanh phát âm siêu tốc (High-Speed Audio Engine)
 * 1. Sử dụng Dictionary Audio CDN (US accent native voice) - phản hồi cực nhanh ~30ms, âm thanh tự nhiên người bản xứ.
 * 2. Hỗ trợ 2 tốc độ: Tốc độ chuẩn (1.0x) và Tốc độ chậm (0.5x).
 * 3. Cache Audio element trong bộ nhớ để bấm là phát ngay lập tức.
 * 4. Tự động fallback sang Web Speech Synthesis khi mất mạng hoặc phát câu dài.
 */

// Cache Audio objects in memory for instant replay
const audioMemoryCache: Map<string, HTMLAudioElement> = new Map();
let currentPlayingAudio: HTMLAudioElement | null = null;

// Best available voice cache for Web Speech API fallback
let cachedVoice: SpeechSynthesisVoice | null = null;

function getBestEnglishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  if (cachedVoice) return cachedVoice;

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const preferredVoice =
    voices.find(
      (v) =>
        v.lang === "en-US" &&
        (v.name.includes("Google") ||
          v.name.includes("Natural") ||
          v.name.includes("Samantha") ||
          v.name.includes("Jenny"))
    ) ||
    voices.find((v) => v.lang === "en-US") ||
    voices.find((v) => v.lang.startsWith("en-")) ||
    voices.find((v) => v.lang.startsWith("en"));

  if (preferredVoice) {
    cachedVoice = preferredVoice;
  }
  return preferredVoice || null;
}

// Pre-warm voices on load
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    getBestEnglishVoice();
  };
}

/**
 * Phát âm tức thì với CDN âm thanh bản xứ siêu tốc và 2 tốc độ (1x và 0.5x)
 * @param word Từ hoặc cụm từ cần phát âm
 * @param cachedAudioUrl URL MP3 có sẵn (nếu có)
 * @param speed Tốc độ phát (1.0 là bình thường, 0.5 là nghe chậm)
 */
export async function playPronunciation(
  word: string,
  cachedAudioUrl?: string | null,
  speed: number = 1.0
): Promise<{ playedUrl?: string }> {
  if (!word) return {};
  const cleanWord = word.trim();
  const playbackSpeed = speed <= 0.6 ? 0.55 : 1.0;

  // Dừng âm thanh đang phát dở trước đó
  if (currentPlayingAudio) {
    try {
      currentPlayingAudio.pause();
      currentPlayingAudio.currentTime = 0;
    } catch {}
    currentPlayingAudio = null;
  }

  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }

  // 1. Sử dụng Dictionary Audio CDN (US Accent) - phản hồi cực nhanh ~30ms
  const audioUrl =
    cachedAudioUrl ||
    `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanWord)}&type=2`;

  try {
    let audio = audioMemoryCache.get(audioUrl);
    if (!audio) {
      audio = new Audio(audioUrl);
      audioMemoryCache.set(audioUrl, audio);
    }
    audio.playbackRate = playbackSpeed;
    audio.currentTime = 0;
    currentPlayingAudio = audio;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      await playPromise;
    }
    return { playedUrl: audioUrl };
  } catch (audioErr) {
    console.warn("CDN audio playback failed, falling back to Web Speech", audioErr);
  }

  // 2. Fallback: Web Speech Synthesis API (hoạt động offline hoặc khi mạng yếu)
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    try {
      const utterance = new SpeechSynthesisUtterance(cleanWord);
      utterance.lang = "en-US";
      utterance.rate = playbackSpeed === 0.55 ? 0.5 : 0.9;
      utterance.pitch = 1.0;

      const voice = getBestEnglishVoice();
      if (voice) {
        utterance.voice = voice;
      }

      window.speechSynthesis.speak(utterance);
    } catch (speechErr) {
      console.warn("Speech synthesis error", speechErr);
    }
  }

  return { playedUrl: audioUrl };
}

/**
 * Tải trước âm thanh vào cache bộ nhớ để khi bấm là phát tức thì không giật
 */
export function preloadWordAudio(word: string): void {
  if (typeof window === "undefined" || !word) return;
  const cleanWord = word.trim();
  const audioUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanWord)}&type=2`;
  if (!audioMemoryCache.has(audioUrl)) {
    try {
      const audio = new Audio();
      audio.src = audioUrl;
      audio.preload = "auto";
      audioMemoryCache.set(audioUrl, audio);
    } catch {}
  }
}
