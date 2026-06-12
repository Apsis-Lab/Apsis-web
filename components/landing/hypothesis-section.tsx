"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-context";
import { fadeUp } from "./motion-variants";
import { SectionHeader } from "./section-header";

export function HypothesisSection() {
  const { t } = useLanguage();
  const { hypothesis } = t;

  return (
    <section id="hypothesis" className="scroll-mt-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-4xl"
        >
          <SectionHeader tag={hypothesis.sectionTag} meta={hypothesis.sectionMeta} />
          <h2 className="section-title">{hypothesis.title}</h2>
          <div className="mt-8 space-y-5">
            {hypothesis.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`font-mono text-sm leading-relaxed md:text-[0.9375rem] ${
                  index === hypothesis.paragraphs.length - 1
                    ? "border-l border-accent/40 pl-5 text-white/85"
                    : "text-muted"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
