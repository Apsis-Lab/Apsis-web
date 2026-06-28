"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function ParadigmSection() {
  const { locale, t } = useLanguage();
  const h = t.paradigm.highlights;

  return (
    <section id="paradigm" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-dim">
              {t.paradigm.tag}
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-3xl lg:text-4xl">
              {t.paradigm.title}
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-muted">
            {locale === "en" ? (
              <>
                <p>
                  Finding a missing modifier is trivial. Static analyzers and LLM
                  reviewers have commoditized syntax-level defects. The remaining
                  attack surface is{" "}
                  <span className="font-mono text-sm text-zinc-300">
                    {h.stateful}
                  </span>
                  ,{" "}
                  <span className="font-mono text-sm text-zinc-300">
                    {h.multiStep}
                  </span>
                  , and{" "}
                  <span className="font-mono text-sm text-zinc-300">
                    {h.economicallyCoupled}
                  </span>
                  .
                </p>
                <p>
                  Apsis Engine does not grep for reentrancy guards. It executes
                  adversarial mutation against live protocol state — oracle
                  coupling, cross-chain latency windows, liquidation cascades,
                  bad debt spirals — and searches for sequences that only emerge
                  under{" "}
                  <span className="font-mono text-sm text-neon-green">
                    {h.physicalExecution}
                  </span>
                  .
                </p>
                <p>{t.paradigm.paragraphs[2]}</p>
              </>
            ) : (
              t.paradigm.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))
            )}

            <p className="border-l border-border pl-4 font-mono text-sm text-muted-dim">
              {t.paradigm.pullQuote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
