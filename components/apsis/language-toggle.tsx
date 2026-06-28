"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center border border-border bg-void-elevated">
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors sm:px-3 ${
          locale === "en"
            ? "bg-neon-green/10 text-neon-green"
            : "text-muted-faint hover:text-muted-dim"
        }`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <span className="h-4 w-px bg-border" />
      <button
        type="button"
        onClick={() => setLocale("zh")}
        className={`px-2.5 py-1.5 font-mono text-[11px] tracking-wider transition-colors sm:px-3 ${
          locale === "zh"
            ? "bg-neon-green/10 text-neon-green"
            : "text-muted-faint hover:text-muted-dim"
        }`}
        aria-pressed={locale === "zh"}
      >
        中文
      </button>
    </div>
  );
}
