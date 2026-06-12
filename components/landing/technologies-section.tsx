"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-context";
import { fadeUp } from "./motion-variants";
import { ReadSpecLink } from "./spec-link";
import { SectionHeader } from "./section-header";

export function TechnologiesSection() {
  const { t } = useLanguage();
  const { technologies } = t;

  return (
    <section id="technologies" className="scroll-mt-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 max-w-3xl"
        >
          <SectionHeader
            tag={technologies.sectionTag}
            meta={technologies.sectionMeta}
          />
          <h2 className="section-title">{technologies.title}</h2>
          <p className="mt-4 font-mono text-sm leading-relaxed text-muted md:text-base">
            {technologies.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {technologies.items.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.a
                key={tech.id}
                href={`#${tech.id}`}
                custom={0.03 + index * 0.02}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className={`group relative flex flex-col justify-between border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-accent/30 hover:bg-white/[0.07] md:p-6 ${tech.span}`}
              >
                <div>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="mono-label text-muted-faint">
                      [ {tech.module} ]
                    </span>
                    <Icon
                      className="h-4 w-4 text-muted-faint transition-colors group-hover:text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-mono text-sm font-medium leading-snug text-white md:text-base">
                    {tech.shortTitle}
                  </h3>
                  <p className="mt-3 line-clamp-3 font-mono text-xs leading-relaxed text-muted-dim">
                    {tech.paragraphs[0]}
                  </p>
                </div>
                <ReadSpecLink index={index} label={technologies.readSpec} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
