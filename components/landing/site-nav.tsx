"use client";

import { BRAND_NAME } from "@/lib/landing-content";
import { useLanguage } from "@/lib/i18n/language-context";
import { LanguageToggle } from "./language-toggle";

export function SiteNav() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#technologies", label: t.nav.technologies },
    { href: "#paradigm", label: t.nav.paradigm },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:gap-6 md:px-12 lg:px-16">
        <a
          href="#hero"
          className="font-sans text-base font-bold tracking-tight text-white transition-colors hover:text-accent md:text-lg"
        >
          {BRAND_NAME}
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 font-mono text-sm tracking-wide text-muted transition-colors hover:text-accent md:text-base"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <LanguageToggle />
          <a
            href="#contact"
            className="hidden border border-white/10 px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-accent/40 hover:text-white sm:inline-block md:text-base"
          >
            {t.nav.access}
          </a>
        </div>
      </div>
    </nav>
  );
}
