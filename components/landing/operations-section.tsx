"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-context";
import { fadeUp } from "./motion-variants";
import { SectionHeader } from "./section-header";

export function OperationsSection() {
  const { t } = useLanguage();
  const { operations } = t;

  return (
    <section id="operations" className="scroll-mt-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-12 max-w-3xl"
        >
          <SectionHeader tag={operations.sectionTag} meta={operations.sectionMeta} />
          <h2 className="section-title">{operations.title}</h2>
        </motion.div>

        <div className="space-y-px bg-white/[0.06]">
          {operations.items.map((item, index) => (
            <motion.article
              key={item.title}
              custom={0.04 + index * 0.04}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="bg-void-surface"
            >
              <div className="grid grid-cols-1 gap-4 border border-white/[0.06] bg-white/[0.02] p-6 md:grid-cols-[200px_1fr] md:p-8">
                <div>
                  <span className="mono-label text-accent">
                    [ OP_{String(index + 1).padStart(2, "0")} ]
                  </span>
                  <h3 className="mt-3 font-sans text-base font-semibold text-white md:text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="font-mono text-sm leading-relaxed text-muted md:text-[0.9375rem]">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
