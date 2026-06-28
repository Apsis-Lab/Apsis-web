"use client";

import { CONTACT_EMAIL } from "@/lib/contact";
import { useLanguage } from "@/lib/i18n/language-context";
import { LanguageToggle } from "@/components/apsis/language-toggle";

export function ApsisNav() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-black/75 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-6 sm:h-20">
        <a href="#" className="flex shrink-0 items-baseline gap-3">
          <span className="font-mono text-2xl font-bold tracking-[0.18em] text-zinc-50 sm:text-3xl">
            APSIS
          </span>
          <span className="border border-border px-2 py-0.5 font-mono text-xs tracking-[0.15em] text-muted-dim sm:text-sm">
            LAB
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#moat"
            className="font-mono text-xs uppercase tracking-wider text-muted-dim transition-colors hover:text-zinc-300"
          >
            {t.nav.stack}
          </a>
          <a
            href="#paradigm"
            className="font-mono text-xs uppercase tracking-wider text-muted-dim transition-colors hover:text-zinc-300"
          >
            {t.nav.paradigm}
          </a>
          <a
            href="#evidence"
            className="font-mono text-xs uppercase tracking-wider text-muted-dim transition-colors hover:text-zinc-300"
          >
            {t.nav.evidence}
          </a>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageToggle />
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.hero.emailSubject)}`}
            className="hidden border border-border bg-void-elevated px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-zinc-300 transition-colors hover:border-neon-green/40 hover:text-neon-green sm:inline-block"
          >
            {t.nav.earlyAccess}
          </a>
        </div>
      </div>
    </header>
  );
}
