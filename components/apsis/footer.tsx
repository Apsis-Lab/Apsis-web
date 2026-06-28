"use client";

import {
  CONTACT_EMAIL,
  GITHUB_URL,
  SOCIAL_X_HANDLE,
  SOCIAL_X_URL,
} from "@/lib/contact";
import { useLanguage } from "@/lib/i18n/language-context";

export function ApsisFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold tracking-[0.2em] text-zinc-300 sm:text-base">
            {t.footer.brand}
          </p>
          <p className="mt-2 font-mono text-[11px] text-muted-faint">
            {t.footer.copyright}
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-6">
          <a
            href={SOCIAL_X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-wider text-muted-dim transition-colors hover:text-zinc-300"
          >
            {SOCIAL_X_HANDLE}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-wider text-muted-dim transition-colors hover:text-zinc-300"
          >
            GitHub
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-mono text-[11px] uppercase tracking-wider text-muted-dim transition-colors hover:text-zinc-300"
          >
            {t.footer.contact}
          </a>
          <a
            href="#"
            className="font-mono text-[11px] uppercase tracking-wider text-muted-dim transition-colors hover:text-zinc-300"
          >
            {t.footer.privacy}
          </a>
        </nav>
      </div>
    </footer>
  );
}
