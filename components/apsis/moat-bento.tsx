"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function MoatBento() {
  const { t } = useLanguage();

  return (
    <section id="moat" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-12 max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-dim">
            {t.moat.tag}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            {t.moat.title}
          </h2>
          <p className="mt-4 text-muted">{t.moat.subtitle}</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.moat.cards.map((card) => (
            <article
              key={card.tag}
              className="bento-hover flex flex-col border border-border bg-void-surface p-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-faint">
                {card.tag}
              </span>
              <h3 className="mt-4 font-mono text-sm font-medium leading-snug text-zinc-100">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-dim">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
