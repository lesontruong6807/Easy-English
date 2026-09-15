import React from "react";
import Link from "next/link";
import { VocabForm } from "@/components/vocab/VocabForm";
import { ArrowLeft } from "lucide-react";

export default function AddVocabPage() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto animate-fade-in pb-12">
      <Link
        href="/vocab"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Quay lại Kho từ vựng</span>
      </Link>

      <VocabForm />
    </div>
  );
}
