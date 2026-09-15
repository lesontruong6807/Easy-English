"use client";

import React, { useState, useEffect } from "react";
import {
  Download,
  Smartphone,
  Monitor,
  Share,
  PlusSquare,
  CheckCircle2,
  X,
  Sparkles,
  Info,
  ExternalLink,
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
  const [deviceType, setDeviceType] = useState<"desktop" | "android" | "ios">("desktop");
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [showDesktopModal, setShowDesktopModal] = useState(false);
  const [showAndroidModal, setShowAndroidModal] = useState(false);
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

    // 2. Phân loại thiết bị chính xác: Desktop vs Android vs iOS
    const ua = window.navigator.userAgent.toLowerCase();
    const isIOSDevice =
      /iphone|ipad|ipod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isAndroidDevice = /android/.test(ua);

    if (isIOSDevice) {
      setDeviceType("ios");
    } else if (isAndroidDevice) {
      setDeviceType("android");
    } else {
      setDeviceType("desktop");
    }

    // 3. Bắt sự kiện beforeinstallprompt (Hoạt động trên Chrome, Edge máy tính & Android)
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
    // Nếu đã cài đặt
    if (isStandalone || isInstalled) {
      alert("Ứng dụng Easy English đã được cài đặt trên máy của bạn! Bạn có thể mở trực tiếp từ màn hình chính / Desktop.");
      return;
    }

    // Nếu trình duyệt đã sẵn sàng sự kiện beforeinstallprompt -> Kích hoạt Native Modal (cả PC và Android)
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

    // Nếu là iOS (iPhone/iPad) -> Apple không cho phép tự động kích hoạt, hiển thị bảng hướng dẫn 2 chạm
    if (deviceType === "ios") {
      setShowIOSModal(true);
      return;
    }

    // Nếu là Máy tính (Chrome/Edge trên PC/Mac) khi prompt chưa bắt được
    if (deviceType === "desktop") {
      setShowDesktopModal(true);
      return;
    }

    // Nếu là Android khi prompt chưa bắt được
    setShowAndroidModal(true);
  };

  // Nếu đang mở dưới dạng App độc lập (đã cài) thì không cần hiện nút nữa
  if (isStandalone || isInstalled) {
    return null;
  }

  const isPC = deviceType === "desktop";
  const isApple = deviceType === "ios";

  return (
    <>
      {/* 1. VARIANT: NAVBAR BUTTON */}
      {variant === "navbar" && (
        <button
          onClick={handleInstallClick}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-sm shadow-indigo-500/20 active:scale-95 transition-all ${className}`}
          title={isPC ? "Cài Easy English vào Máy tính (PC / Mac)" : "Cài Easy English về Điện thoại"}
        >
          {isPC ? <Monitor size={14} className="animate-pulse" /> : <Download size={14} className="animate-bounce" />}
          <span className="hidden xs:inline">
            {isPC ? "Cài vào Máy tính" : "Tải App"}
          </span>
        </button>
      )}

      {/* 2. VARIANT: BANNER (DÀNH CHO TRANG CHỦ / DASHBOARD) */}
      {variant === "banner" && (
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-5 sm:p-6 text-white shadow-xl shadow-indigo-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${className}`}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner">
              {isPC ? <Monitor size={24} /> : <Smartphone size={24} />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-extrabold text-sm sm:text-base">
                  {isPC ? "Cài ứng dụng Easy English cho Máy tính (PC / Mac)" : "Cài đặt Easy English về Điện thoại"}
                </h4>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-slate-950 uppercase tracking-wider">
                  Miễn phí
                </span>
              </div>
              <p className="text-xs text-indigo-100 mt-1 leading-relaxed">
                {isPC
                  ? "Mở riêng trong một cửa sổ riêng biệt không vướng thanh địa chỉ, học tập tập trung & siêu mượt mà!"
                  : "Mở ngay từ màn hình chính, tra cứu từ vựng siêu nhanh, học mọi lúc mọi nơi!"}
              </p>
            </div>
          </div>
          <button
            onClick={handleInstallClick}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 shrink-0"
          >
            {isPC ? <Monitor size={16} /> : <Download size={16} />}
            <span>{isPC ? "Cài đặt vào Máy tính" : "Cài đặt ngay"}</span>
          </button>
        </div>
      )}

      {/* 3. VARIANT: STANDARD BUTTON */}
      {variant === "button" && (
        <button
          onClick={handleInstallClick}
          className={`w-full py-2.5 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${className}`}
        >
          {isPC ? <Monitor size={16} /> : <Download size={16} />}
          <span>{isPC ? "Cài ứng dụng về Máy tính" : "Tải ứng dụng về thiết bị"}</span>
        </button>
      )}

      {/* 4. VARIANT: CARD */}
      {variant === "card" && (
        <div
          onClick={handleInstallClick}
          className={`cursor-pointer group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-3 ${className}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              {isPC ? <Monitor size={20} /> : isApple ? <Smartphone size={20} /> : <Download size={20} />}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>
                  {isPC
                    ? "Cài App trên Máy tính (PC/Mac)"
                    : isApple
                    ? "Cài App trên iPhone / iPad"
                    : "Cài App về điện thoại Android"}
                </span>
                <Sparkles size={13} className="text-amber-500" />
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                {isPC
                  ? "Mở riêng một cửa sổ, chạy nhanh & mượt mà"
                  : "Mở nhanh từ màn hình chính, ôn thi tiện lợi"}
              </div>
            </div>
          </div>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
            Cài ngay
          </span>
        </div>
      )}

      {/* ================= MODAL DÀNH CHO MÁY TÍNH (DESKTOP - CHROME / EDGE / BRAVE / COCCOC) ================= */}
      {showDesktopModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-slate-100 relative">
            <button
              onClick={() => setShowDesktopModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                <Monitor size={24} />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Cài Easy English vào Máy tính
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Dành cho Google Chrome, Microsoft Edge, Cốc Cốc
                </p>
              </div>
            </div>

            <div className="space-y-3.5 my-5">
              <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60">
                <div className="font-bold text-xs text-indigo-700 dark:text-indigo-300 mb-1 flex items-center gap-1.5">
                  <span>Cách 1: Bấm icon Cài đặt trên thanh địa chỉ (Nhanh nhất)</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Nhìn lên <strong>thanh địa chỉ URL</strong> của trình duyệt (ở góc trên cùng bên phải thanh gõ link), bạn sẽ thấy biểu tượng <strong>Cài đặt 🖥️ (Install app)</strong>. Nhấp vào đó và chọn <strong>"Cài đặt"</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="font-bold text-xs text-slate-800 dark:text-slate-200 mb-1">
                  Cách 2: Qua Menu trình duyệt
                </div>
                <ol className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-decimal pl-4">
                  <li>Bấm vào biểu tượng <strong>menu 3 chấm (⋮)</strong> ở góc trên bên phải trình duyệt.</li>
                  <li>Chọn <strong>"Cài đặt Easy English..."</strong> (hoặc "Lưu & chia sẻ" ➔ "Cài đặt trang web này dưới dạng ứng dụng").</li>
                  <li>Bấm <strong>Cài đặt</strong> để hoàn tất.</li>
                </ol>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 flex items-center gap-2 text-[11px] text-emerald-800 dark:text-emerald-300">
              <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
              <span>
                Sau khi cài, app sẽ có icon riêng ngoài Desktop và Taskbar, chạy không có viền trình duyệt!
              </span>
            </div>

            <button
              onClick={() => setShowDesktopModal(false)}
              className="w-full mt-4 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              Đã hiểu
            </button>
          </div>
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
              className="w-full mt-4 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      )}

      {/* ================= MODAL DÀNH CHO ANDROID (CHROME / CỐC CỐC) ================= */}
      {showAndroidModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-slate-100 relative">
            <button
              onClick={() => setShowAndroidModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                <Smartphone size={24} />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Cài đặt Easy English cho Android
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Thao tác trên Chrome, Cốc Cốc, Samsung Internet
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
                3. Bấm <strong>"Cài đặt"</strong> để app tự động xuất hiện ngoài màn hình chính của điện thoại!
              </div>
            </div>

            <button
              onClick={() => setShowAndroidModal(false)}
              className="w-full mt-2 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      )}
    </>
  );
};
