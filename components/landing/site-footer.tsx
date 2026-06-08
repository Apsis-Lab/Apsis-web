"use client";

import { motion } from "framer-motion";
import { CONTACT_EMAIL, SOCIAL_X_URL } from "@/lib/contact";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeader } from "./section-header";
import { fadeUp } from "./motion-variants";

export function SiteFooter() {
  const { t } = useLanguage();
  const { footer } = t;

  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-white/[0.06] bg-void-deep"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:px-16">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <SectionHeader tag={footer.contactTag} meta="" size="md" />

          <h2 className="section-title text-white/85">
            {footer.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p className="mt-6 font-mono text-sm leading-relaxed text-muted">
            {footer.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-3 border border-accent/40 bg-accent/5 px-6 py-3 font-mono text-xs uppercase tracking-widest text-white shadow-edge-accent transition-colors hover:border-accent/60 hover:bg-accent/10"
            >
              <span className="text-accent transition-colors group-hover:text-white">
                →
              </span>
              {footer.email}
            </a>
            <a
              href={SOCIAL_X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] px-6 py-3 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-white/20 hover:text-white"
            >
              {footer.twitter}
            </a>
          </div>
        </motion.div>

        <motion.div
          custom={0.12}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-8"
        >
          <span className="mono-label text-muted-faint">{footer.brandLine}</span>
          <span className="mono-label text-muted-faint">{footer.tagline}</span>
        </motion.div>
      </div>
    </footer>
  );
}
