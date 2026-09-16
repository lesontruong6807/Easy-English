import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Easy English — Lộ trình Ôn thi THPTQG",
  description:
    "Ứng dụng học tiếng Anh thi THPTQG dành cho người mất gốc, bám sát sách bài tập với 30 chủ đề lý thuyết, 50+ từ vựng Spaced Repetition và sổ tay lỗi sai.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Easy English THPTQG",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ec" },
    { media: "(prefers-color-scheme: dark)", color: "#181715" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Easy English" />
        <meta name="theme-color" content="#f7f4ec" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#181715" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${inter.className} min-h-screen bg-[#f7f4ec] dark:bg-[#181715] text-[#2d2926] dark:text-[#e6dfd3] antialiased selection:bg-[#435585] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
