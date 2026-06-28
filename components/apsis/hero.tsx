"use client";

import { CONTACT_EMAIL } from "@/lib/contact";
import { useLanguage } from "@/lib/i18n/language-context";
import { ExecutionBridgeViz } from "@/components/apsis/execution-bridge-viz";

export function ApsisHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden pt-[4.5rem] sm:pt-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-20 pt-12 lg:flex-row lg:items-center lg:gap-10 lg:pb-24 lg:pt-16">
        <div className="flex-1">
          <p className="mb-5 font-mono text-sm font-medium uppercase tracking-[0.3em] text-neon-green/80 sm:text-base">
            {t.hero.eyebrow}
          </p>

          <h1 className="max-w-2xl text-[2rem] font-semibold leading-[1.12] tracking-tight text-zinc-50 sm:text-5xl lg:text-[3.5rem]">
            {t.hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.hero.emailSubject)}`}
              className="group inline-flex items-center gap-2 border border-neon-green/50 bg-neon-green/5 px-6 py-3 font-mono text-xs uppercase tracking-wider text-neon-green transition-all hover:bg-neon-green/10 hover:shadow-neon-green"
            >
              {t.hero.cta}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-faint">
              {t.hero.ctaNote}
            </span>
          </div>
        </div>

        <div className="relative w-full flex-1 lg:max-w-[580px]">
          <ExecutionBridgeViz viz={t.hero.viz} />
        </div>
      </div>
    </section>
  );
}
