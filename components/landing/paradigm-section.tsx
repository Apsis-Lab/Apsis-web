"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeader } from "./section-header";
import { fadeUp } from "./motion-variants";

export function ParadigmSection() {
  const { t } = useLanguage();
  const { paradigm } = t;

  return (
    <section id="paradigm" className="scroll-mt-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:px-16">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16 max-w-3xl"
        >
          <SectionHeader
            tag={paradigm.sectionTag}
            meta={paradigm.sectionMeta}
          />

          <h2 className="section-title">{paradigm.title}</h2>
        </motion.div>

        <div className="space-y-6">
          {paradigm.blocks.map((block, index) => (
            <motion.div
              key={block.id}
              custom={0.08 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8"
            >
              <div className="mb-4 flex items-center gap-3 border-b border-white/[0.06] pb-4">
                <span className="mono-label text-ice">[ {block.label} ]</span>
                <span className="h-px flex-1 bg-white/[0.06]" />
                <span className="mono-label text-muted-faint">
                  {block.doctrine}
                </span>
              </div>
              <p className="max-w-4xl font-mono text-sm leading-relaxed text-muted md:text-[0.9375rem]">
                {block.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
