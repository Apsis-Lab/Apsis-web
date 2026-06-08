"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center border border-white/10 bg-white/[0.02]">
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-3 py-2 font-mono text-sm uppercase tracking-wider transition-colors md:px-4 md:text-base ${
          locale === "en"
            ? "bg-accent/10 text-accent"
            : "text-muted-faint hover:text-muted"
        }`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <span className="h-4 w-px bg-white/10" />
      <button
        type="button"
        onClick={() => setLocale("zh")}
        className={`px-3 py-2 font-mono text-sm tracking-wider transition-colors md:px-4 md:text-base ${
          locale === "zh"
            ? "bg-accent/10 text-accent"
            : "text-muted-faint hover:text-muted"
        }`}
        aria-pressed={locale === "zh"}
      >
        中文
      </button>
    </div>
  );
}
