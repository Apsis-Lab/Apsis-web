"use client";

import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { BRAND_NAME } from "@/lib/landing-content";
import { useLanguage } from "@/lib/i18n/language-context";
import { HeroAmbient } from "./hero-ambient";
import { HeroEngineVisual } from "./hero-engine-visual";
import { HeroMouseGlow } from "./hero-mouse-glow";
import { fadeUp } from "./motion-variants";
import { PageModuleBar, PageTopBar } from "./section-header";

export function HeroSection() {
  const { t } = useLanguage();
  const { hero } = t;
  const [mouse, setMouse] = useState({ x: 0.72, y: 0.38 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      setMouse({
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      });
    },
    [],
  );

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] scroll-mt-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <HeroAmbient />
      <HeroMouseGlow mouse={mouse} />

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-px bg-white/[0.06]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-px bg-white/[0.06]" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-6 py-10 md:px-12 md:py-14 lg:px-16">
        <motion.header
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <PageTopBar
            sysInit={hero.sysInit}
            brand={BRAND_NAME}
            operational={hero.operational}
          />
        </motion.header>

        <div className="flex flex-1 flex-col justify-center py-12 md:py-20">
          <motion.div
            custom={0.08}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <PageModuleBar
              moduleLabel={hero.moduleLabel}
              entryPoint={hero.entryPoint}
            />
          </motion.div>

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
            <div>
              <motion.h1
                custom={0.14}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="hero-headline max-w-2xl text-white"
              >
                {hero.titleLines.map((line, index) => (
                  <span key={line} className="block">
                    <span
                      className={
                        index === hero.titleHighlightIndex
                          ? "text-accent"
                          : index >= 2
                            ? "text-white/75"
                            : "text-white"
                      }
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </motion.h1>

              <motion.div
                custom={0.22}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-8 max-w-xl space-y-4 border-l border-accent/30 pl-5 md:mt-10"
              >
                <p className="font-mono text-sm leading-relaxed text-muted md:text-[0.9375rem]">
                  {hero.paragraph1}
                </p>
              </motion.div>

              <motion.div
                custom={0.3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-6 max-w-2xl space-y-3 md:mt-8"
              >
                <p className="font-mono text-sm leading-relaxed text-muted-dim md:text-[0.9375rem]">
                  {hero.paragraph2}
                </p>
                <p className="font-mono text-sm leading-relaxed text-muted-faint md:text-[0.9375rem]">
                  {hero.paragraph3}
                </p>
              </motion.div>

              <motion.div
                custom={0.38}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 border border-accent/40 bg-accent/5 px-6 py-3 font-mono text-xs uppercase tracking-widest text-white shadow-edge-accent transition-colors hover:border-accent/60 hover:bg-accent/10"
                >
                  <span className="text-accent transition-colors group-hover:text-white">
                    →
                  </span>
                  {hero.ctaPrimary}
                </a>
                <a
                  href="#technologies"
                  className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] px-6 py-3 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-white/20 hover:text-white"
                >
                  {hero.ctaSecondary}
                </a>
              </motion.div>
            </div>

            <motion.div
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="hidden lg:block"
            >
              <HeroEngineVisual labels={hero.visual} mouse={mouse} />
            </motion.div>
          </div>

          <motion.div
            custom={0.25}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 lg:hidden"
          >
            <HeroEngineVisual labels={hero.visual} mouse={mouse} />
          </motion.div>
        </div>

        <motion.footer
          custom={0.46}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="border-t border-white/[0.06] pt-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {hero.status.map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-4 border border-white/[0.06] bg-white/[0.02] px-4 py-3 sm:flex-col sm:items-start sm:justify-start"
              >
                <span className="mono-label text-muted-faint">
                  [ {item.label} ]
                </span>
                <span className="font-mono text-sm text-white/80">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
