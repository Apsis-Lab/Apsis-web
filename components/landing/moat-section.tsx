"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-context";
import { fadeUp } from "./motion-variants";
import { SectionHeader } from "./section-header";

export function MoatSection() {
  const { t } = useLanguage();
  const { moat } = t;

  return (
    <section id="moat" className="scroll-mt-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-4xl"
        >
          <SectionHeader tag={moat.sectionTag} meta={moat.sectionMeta} />
          <h2 className="section-title">{moat.title}</h2>
          <p className="mt-6 font-mono text-sm leading-relaxed text-muted md:text-[0.9375rem]">
            {moat.intro}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {moat.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              custom={0.05 + index * 0.05}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-7"
            >
              <span className="mono-label text-muted-faint">
                [ PILLAR_{String(index + 1).padStart(2, "0")} ]
              </span>
              <h3 className="mt-3 font-sans text-base font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 font-mono text-xs leading-relaxed text-muted md:text-sm">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 space-y-4 border border-white/[0.08] bg-white/[0.02] p-6 md:p-8"
        >
          {moat.closing.map((paragraph, index) => (
            <p
              key={index}
              className="font-mono text-sm leading-relaxed text-muted-dim md:text-[0.9375rem]"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
