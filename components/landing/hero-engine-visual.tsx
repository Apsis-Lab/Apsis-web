"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export type HeroVisualLabels = {
  blockLabel: string;
  contractLabel: string;
  staticTrack: string;
  dynamicTrack: string;
  forkExec: string;
  profitGate: string;
  verdict: string;
  caption: string;
};

type HeroEngineVisualProps = {
  labels: HeroVisualLabels;
  mouse: { x: number; y: number };
};

function ChainBlocks({ label, offsetX }: { label: string; offsetX: number }) {
  return (
    <div
      className="flex items-center gap-1.5"
      style={{ transform: `translateX(${offsetX}px)` }}
    >
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-1">
          <motion.div
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.35 }}
            className="h-4 w-4 border border-white/15 bg-white/[0.04]"
          />
          {i < 2 && <div className="h-px w-2 bg-white/12" />}
        </div>
      ))}
      <span className="ml-1 font-mono text-[9px] tracking-wide text-muted-faint">
        {label}
      </span>
    </div>
  );
}

function ContractCore({ label, offsetX, offsetY }: {
  label: string;
  offsetX: number;
  offsetY: number;
}) {
  return (
    <div
      className="w-[156px] border border-white/14 bg-void-surface/95 px-3.5 py-3 backdrop-blur-sm"
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[9px] text-ice/90">{label}</span>
        <span className="font-mono text-[8px] text-muted-faint">0x…4F2A</span>
      </div>
      <div className="space-y-1.5 font-mono text-[8px] leading-none text-white/25">
        <div className="text-ice/50">function withdraw()</div>
        <div className="pl-2 text-white/20">require(balance {'>'} 0)</div>
        <div className="pl-2 text-accent/40">transfer(msg.sender)</div>
      </div>
    </div>
  );
}

export function HeroEngineVisual({ labels, mouse }: HeroEngineVisualProps) {
  const springX = useSpring(mouse.x, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouse.y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    springX.set(mouse.x);
    springY.set(mouse.y);
  }, [mouse.x, mouse.y, springX, springY]);

  const spotLeft = useTransform(springX, (v) => `${v * 100}%`);
  const spotTop = useTransform(springY, (v) => `${v * 100}%`);
  const crosshairTop = useTransform(springY, (v) => `${v * 100}%`);
  const crosshairLeft = useTransform(springX, (v) => `${v * 100}%`);

  const parallaxX = (mouse.x - 0.5) * 14;
  const parallaxY = (mouse.y - 0.5) * 10;

  return (
    <div className="relative mx-auto w-full max-w-[320px] select-none" aria-hidden>
      <div className="relative h-[280px] overflow-hidden rounded-sm border border-white/[0.08] bg-white/[0.02]">
        <motion.div
          className="pointer-events-none absolute z-0 h-32 w-32 rounded-full bg-accent/15 blur-3xl"
          style={{ left: spotLeft, top: spotTop, x: "-50%", y: "-50%" }}
        />
        <motion.div
          className="pointer-events-none absolute z-0 h-20 w-20 rounded-full bg-ice/10 blur-2xl"
          style={{
            left: spotLeft,
            top: spotTop,
            x: "-20%",
            y: "-70%",
          }}
        />

        <motion.div
          className="pointer-events-none absolute left-0 z-10 h-px w-full bg-white/10"
          style={{ top: crosshairTop }}
        />
        <motion.div
          className="pointer-events-none absolute top-0 z-10 h-full w-px bg-white/10"
          style={{ left: crosshairLeft }}
        />
        <motion.div
          className="pointer-events-none absolute z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/50 bg-accent/20"
          style={{ left: spotLeft, top: spotTop }}
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-between px-4 py-5">
          <ChainBlocks label={labels.blockLabel} offsetX={parallaxX * 0.3} />

          <ContractCore
            label={labels.contractLabel}
            offsetX={parallaxX}
            offsetY={parallaxY * 0.5}
          />

          <div className="flex w-full justify-between gap-3">
            <motion.div
              className="flex flex-1 flex-col items-center"
              style={{ transform: `translateX(${-parallaxX * 0.6}px)` }}
            >
              <div className="mb-1 h-6 w-px bg-gradient-to-b from-white/20 to-ice/40" />
              <div className="w-full border border-ice/30 bg-ice/[0.07] px-2 py-2 text-center">
                <span className="block font-mono text-[9px] leading-tight text-ice">
                  {labels.staticTrack}
                </span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-1 flex-col items-center"
              style={{ transform: `translateX(${parallaxX * 0.6}px)` }}
            >
              <div className="mb-1 h-6 w-px bg-gradient-to-b from-white/20 to-accent/50" />
              <div className="w-full border border-accent/35 bg-accent/[0.07] px-2 py-2 text-center">
                <span className="block font-mono text-[9px] leading-tight text-accent">
                  {labels.dynamicTrack}
                </span>
                <span className="mt-0.5 block font-mono text-[8px] text-muted-faint">
                  {labels.forkExec}
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col items-center"
            style={{ transform: `translateY(${parallaxY * 0.4}px)` }}
          >
            <div className="mb-1.5 flex w-28 justify-between">
              <div className="h-3 w-px origin-bottom -rotate-[40deg] bg-white/12" />
              <div className="h-3 w-px origin-bottom rotate-[40deg] bg-white/12" />
            </div>
            <div className="border border-accent/40 bg-accent/[0.1] px-3 py-1">
              <span className="font-mono text-[9px] font-medium text-accent">
                {labels.profitGate}
              </span>
            </div>
            <motion.span
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="mt-1 font-mono text-[9px] text-white/65"
            >
              {labels.verdict}
            </motion.span>
          </motion.div>
        </div>
      </div>

      <p className="mt-3 px-1 text-center font-mono text-[10px] leading-relaxed text-muted-dim">
        {labels.caption}
      </p>
    </div>
  );
}
