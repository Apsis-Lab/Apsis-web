"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-context";
import { fadeUp } from "./motion-variants";
import { SectionHeader } from "./section-header";

export function EngineSection() {
  const { t } = useLanguage();
  const { engine } = t;

  return (
    <section id="engine" className="scroll-mt-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionHeader tag={engine.sectionTag} meta={engine.sectionMeta} />
          <h2 className="section-title">{engine.title}</h2>
          <p className="mt-6 max-w-3xl font-mono text-sm leading-relaxed text-muted md:text-[0.9375rem]">
            {engine.intro}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="border border-ice/25 bg-ice/[0.04] p-6 md:p-7">
              <span className="mono-label text-ice">[ SEMANTIC ]</span>
              <h3 className="mt-4 font-sans text-base font-semibold text-white md:text-lg">
                {engine.semanticTitle}
              </h3>
              <p className="mt-3 font-mono text-xs leading-relaxed text-muted md:text-sm">
                {engine.semanticBody}
              </p>
            </div>
            <div className="border border-accent/30 bg-accent/[0.04] p-6 md:p-7">
              <span className="mono-label text-accent">[ EXECUTION ]</span>
              <h3 className="mt-4 font-sans text-base font-semibold text-white md:text-lg">
                {engine.executionTitle}
              </h3>
              <p className="mt-3 font-mono text-xs leading-relaxed text-muted md:text-sm">
                {engine.executionBody}
              </p>
            </div>
          </div>

          <p className="mt-6 font-mono text-xs text-muted-dim md:text-sm">
            {engine.boundary}
          </p>
          <p className="mt-4 border-l border-accent/35 pl-5 font-mono text-sm leading-relaxed text-white/80 md:text-[0.9375rem]">
            {engine.rule}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
