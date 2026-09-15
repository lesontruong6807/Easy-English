"use client";

import React, { useState, useEffect } from "react";
import {
  Download,
  Smartphone,
  Share,
  PlusSquare,
  CheckCircle2,
  X,
  Sparkles,
  Info,
} from "lucide-react";

interface InstallAppButtonProps {
  variant?: "navbar" | "banner" | "button" | "card";
  className?: string;
}

export const InstallAppButton: React.FC<InstallAppButtonProps> = ({
  variant = "navbar",
  className = "",
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [showGenericModal, setShowGenericModal] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // 1. Kiểm tra nếu app đã chạy ở chế độ standalone (đã cài đặt)
    const checkStandalone = () => {
      const standalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as any).standalone === true ||
        document.referrer.includes("android-app://");
      setIsStandalone(standalone);
    };
    checkStandalone();

    // 2. Nhận diện thiết bị iOS (iPhone / iPad)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice =
      /iphone|ipad|ipod/.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIOS(isIOSDevice);

    // 3. Bắt sự kiện beforeinstallprompt (Android, Chrome, Edge, PC)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  // Xử lý khi người dùng nhấn nút Tải App
  const handleInstallClick = async () => {
    // Đã cài đặt rồi
    if (isStandalone || isInstalled) {
      alert("Ứng dụng Easy English đã được cài đặt trên máy của bạn! Bạn có thể mở trực tiếp từ màn hình chính.");
      return;
    }

    // Android / PC có deferredPrompt -> Kích hoạt bảng hỏi cài đặt Native của trình duyệt
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === "accepted") {
          setIsInstalled(true);
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.error("Error triggering native install prompt:", err);
      }
      return;
    }

    // Thiết bị iOS (Safari / WebKit) -> Apple không cho phép JS tự bấm, hiển thị hướng dẫn trực quan 2 bước
    if (isIOS) {
      setShowIOSModal(true);
      return;
    }

    // Các trường hợp khác (Chrome Android chưa kích hoạt prompt hoặc browser khác)
    setShowGenericModal(true);
  };

  // Nếu đang mở dưới dạng App độc lập (đã cài) thì không cần hiện nút nữa
  if (isStandalone || isInstalled) {
    return null;
  }

  return (
    <>
      {/* 1. VARIANT: NAVBAR BUTTON */}
      {variant === "navbar" && (
        <button
          onClick={handleInstallClick}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-sm shadow-indigo-500/20 active:scale-95 transition-all ${className}`}
          title="Cài đặt Easy English về điện thoại / máy tính"
        >
          <Download size={14} className="animate-bounce" />
          <span className="hidden xs:inline">Tải App</span>
        </button>
      )}

      {/* 2. VARIANT: BANNER */}
      {variant === "banner" && (
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-4 text-white shadow-lg shadow-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0">
              <Smartphone size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-extrabold text-sm sm:text-base">Cài đặt Easy English về máy</h4>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
                  Miễn phí
                </span>
              </div>
              <p className="text-xs text-indigo-100 mt-0.5">
                Học mượt mà không quảng cáo, mở ngay từ màn hình chính, tra từ vựng offline!
              </p>
            </div>
          </div>
          <button
            onClick={handleInstallClick}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 shrink-0"
          >
            <Download size={16} />
            <span>Cài đặt ngay</span>
          </button>
        </div>
      )}

      {/* 3. VARIANT: STANDARD BUTTON */}
      {variant === "button" && (
        <button
          onClick={handleInstallClick}
          className={`w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${className}`}
        >
          <Download size={16} />
          <span>Tải ứng dụng về thiết bị</span>
        </button>
      )}

      {/* 4. VARIANT: CARD */}
      {variant === "card" && (
        <div
          onClick={handleInstallClick}
          className={`cursor-pointer group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-950 hover:border-indigo-400 dark:hover:border-indigo-700 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-3 ${className}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Download size={20} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>Cài App về điện thoại</span>
                <Sparkles size={13} className="text-amber-500" />
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Mở nhanh từ màn hình chính, ôn tập mọi lúc
              </div>
            </div>
          </div>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            Cài ngay
          </span>
        </div>
      )}

      {/* ================= MODAL DÀNH CHO IPHONE / IPAD (IOS) ================= */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-slate-100 relative">
            <button
              onClick={() => setShowIOSModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                <Smartphone size={24} />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Cài Easy English lên iPhone / iPad
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Chỉ cần 2 bước trên trình duyệt Safari
                </p>
              </div>
            </div>

            <div className="space-y-3.5 my-5">
              {/* Bước 1 */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  Nhìn xuống thanh công cụ dưới đáy Safari, bấm vào biểu tượng{" "}
                  <span className="inline-flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800">
                    <Share size={13} /> Chia sẻ (Share)
                  </span>
                </div>
              </div>

              {/* Bước 2 */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  Cuộn xuống danh sách và chọn{" "}
                  <span className="inline-flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800">
                    <PlusSquare size={13} /> Thêm vào MH chính (Add to Home Screen)
                  </span>
                </div>
              </div>

              {/* Bước 3 */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  Bấm nút <span className="font-bold text-emerald-600 dark:text-emerald-400">"Thêm" (Add)</span> ở góc trên bên phải để hoàn tất!
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-center gap-2 text-[11px] text-amber-800 dark:text-amber-300">
              <Info size={16} className="shrink-0 text-amber-600" />
              <span>
                Lưu ý: Bạn cần mở trang web bằng trình duyệt <strong>Safari</strong> trên iOS để kích hoạt tính năng này.
              </span>
            </div>

            <button
              onClick={() => setShowIOSModal(false)}
              className="w-full mt-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      )}

      {/* ================= MODAL HƯỚNG DẪN CHUNG CHO ANDROID / DESKTOP (KHI PROMPT CHƯA BẮT ĐƯỢC) ================= */}
      {showGenericModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-slate-100 relative">
            <button
              onClick={() => setShowGenericModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                <Download size={24} />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Cài đặt Easy English
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Thao tác nhanh trên trình duyệt Chrome / Cốc Cốc
                </p>
              </div>
            </div>

            <div className="space-y-3 my-4 text-xs text-slate-700 dark:text-slate-300">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                1. Bấm vào biểu tượng <strong>menu 3 chấm (⋮)</strong> ở góc trên bên phải trình duyệt.
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                2. Chọn mục <strong>"Cài đặt ứng dụng"</strong> hoặc <strong>"Thêm vào màn hình chính"</strong>.
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                3. Bấm <strong>"Cài đặt"</strong> để app tự động xuất hiện ngoài màn hình chính như app tải từ CH Play!
              </div>
            </div>

            <button
              onClick={() => setShowGenericModal(false)}
              className="w-full mt-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      )}
    </>
  );
};
