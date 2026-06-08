"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

type HeroMouseGlowProps = {
  mouse: { x: number; y: number };
};

export function HeroMouseGlow({ mouse }: HeroMouseGlowProps) {
  const springX = useSpring(mouse.x, { stiffness: 60, damping: 24 });
  const springY = useSpring(mouse.y, { stiffness: 60, damping: 24 });

  useEffect(() => {
    springX.set(mouse.x);
    springY.set(mouse.y);
  }, [mouse.x, mouse.y, springX, springY]);

  const left = useTransform(springX, (v) => `${v * 100}%`);
  const top = useTransform(springY, (v) => `${v * 100}%`);

  return (
    <motion.div
      className="pointer-events-none absolute z-0 h-[480px] w-[480px] rounded-full opacity-60"
      style={{
        left,
        top,
        x: "-50%",
        y: "-50%",
        background:
          "radial-gradient(circle, rgba(255,107,0,0.06) 0%, rgba(56,189,248,0.03) 35%, transparent 68%)",
      }}
      aria-hidden
    />
  );
}
