"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function EvidenceTerminal() {
  const { t } = useLanguage();

  return (
    <section id="evidence" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10 max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-dim">
            {t.evidence.tag}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            {t.evidence.title}
          </h2>
          <p className="mt-4 text-muted">{t.evidence.subtitle}</p>
        </header>

        <div className="border border-border bg-void-surface">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            </div>
            <span className="font-mono text-[10px] text-muted-faint">
              {t.evidence.sessionLabel}
            </span>
            <span className="hidden font-mono text-[10px] text-muted-faint sm:inline">
              bash
            </span>
          </div>

          <div className="overflow-x-auto p-6 font-mono text-sm leading-7">
            <p className="mb-4 text-muted-faint">
              <span className="text-neon-green">$</span> {t.evidence.command}
            </p>

            {t.evidence.lines.map((line) => (
              <p
                key={line.prefix}
                className="terminal-line"
                style={{
                  animationDelay: `${line.delay * 0.35}s`,
                }}
              >
                <span className="text-muted-faint">{line.prefix}</span>{" "}
                <span
                  className={
                    line.accent ? "text-neon-green" : "text-zinc-300"
                  }
                >
                  {line.text}
                </span>
              </p>
            ))}

            <p
              className="terminal-line mt-4 text-muted-faint"
              style={{ animationDelay: "2.1s" }}
            >
              <span className="text-neon-green">$</span>{" "}
              <span className="inline-block h-4 w-2 animate-pulse bg-neon-green/80" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
