"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-context";
import { BackToGridLink } from "./spec-link";
import { SectionHeader } from "./section-header";
import { fadeUp } from "./motion-variants";

export function TechnologyDetails() {
  const { t } = useLanguage();
  const { technologies } = t;

  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12 lg:px-16">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14 md:mb-16"
        >
          <SectionHeader
            tag={technologies.specSheet}
            meta={technologies.specMeta}
            size="md"
          />
        </motion.div>

        <div className="space-y-px bg-white/[0.06]">
          {technologies.items.map((tech, index) => {
            const Icon = tech.icon;
            const num = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={tech.id}
                id={tech.id}
                custom={0.05 + index * 0.04}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="scroll-mt-24 bg-void-surface"
              >
                <div className="grid grid-cols-1 gap-8 border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm md:grid-cols-[220px_1fr] md:p-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center border border-accent/40 bg-accent/15 font-sans text-sm font-bold text-accent">
                        {num}
                      </span>
                      <span className="mono-label text-accent">
                        {tech.module}
                      </span>
                    </div>
                    <Icon
                      className="h-5 w-5 text-muted-faint"
                      strokeWidth={1.5}
                    />
                    <BackToGridLink
                      index={index}
                      label={technologies.backToGrid}
                    />
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-sans text-xl font-bold tracking-tight text-white md:text-2xl">
                      {tech.title}
                    </h3>

                    <div className="space-y-4">
                      {tech.paragraphs.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="max-w-3xl font-mono text-sm leading-relaxed text-muted md:text-[0.9375rem]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
