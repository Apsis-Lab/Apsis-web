"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-context";
import { fadeUp } from "./motion-variants";
import { SectionHeader } from "./section-header";

export function NotSection() {
  const { t } = useLanguage();
  const { notSection } = t;

  return (
    <section id="doctrine" className="scroll-mt-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-4xl"
        >
          <SectionHeader tag={notSection.sectionTag} meta={notSection.sectionMeta} />
          <h2 className="section-title">{notSection.title}</h2>

          <div className="mt-8 space-y-5">
            {notSection.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-mono text-sm leading-relaxed text-muted md:text-[0.9375rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 space-y-3 border-t border-white/[0.08] pt-8">
            {notSection.closing.map((line, index) => (
              <p
                key={index}
                className={`font-sans ${
                  index === notSection.closing.length - 1
                    ? "text-lg font-semibold text-accent md:text-xl"
                    : "text-base text-white/75 md:text-lg"
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
