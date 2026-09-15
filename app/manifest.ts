import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Easy English — Ôn thi THPTQG",
    short_name: "Easy English",
    description: "Web App học tiếng Anh THPTQG bám sát bài tập với Spaced Repetition và Sổ tay lỗi sai",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
