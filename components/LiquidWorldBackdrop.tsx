"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function LiquidWorldBackdrop() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothedVelocity = useSpring(velocity, { stiffness: 220, damping: 45 });

  const blobOneX = useMotionValue(0);
  const blobOneY = useMotionValue(0);
  const blobTwoX = useMotionValue(0);
  const blobTwoY = useMotionValue(0);
  const blobThreeX = useMotionValue(0);
  const blobThreeY = useMotionValue(0);
  const globeY = useMotionValue(0);

  const phase = useRef(0);

  useAnimationFrame((time, delta) => {
    if (reduceMotion) {
      return;
    }

    const velocityBoost = clamp(Math.abs(smoothedVelocity.get()) / 900, 0, 2.6);
    const speed = 1 + velocityBoost;
    const ms = time * 0.001;
    phase.current += delta * 0.00012 * speed;

    blobOneX.set(Math.sin(ms * 0.5 + phase.current) * (66 + velocityBoost * 20));
    blobOneY.set(Math.cos(ms * 0.35 + phase.current * 0.6) * (42 + velocityBoost * 18));

    blobTwoX.set(Math.cos(ms * 0.42 + phase.current * 0.9) * (76 + velocityBoost * 24));
    blobTwoY.set(Math.sin(ms * 0.3 + phase.current * 0.5) * (55 + velocityBoost * 16));

    blobThreeX.set(Math.sin(ms * 0.33 + phase.current * 1.2) * (92 + velocityBoost * 28));
    blobThreeY.set(Math.cos(ms * 0.45 + phase.current * 0.8) * (36 + velocityBoost * 14));

    globeY.set(Math.sin(ms * 0.3 + phase.current) * (12 + velocityBoost * 5));
  });

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_84%_12%,rgba(99,102,241,0.2),transparent_33%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(248,250,252,0.72))]" />

      <motion.div
        className="absolute left-[4%] top-[10%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),rgba(59,130,246,0.32)_55%,rgba(59,130,246,0.08))] blur-2xl"
        style={{ x: blobOneX, y: blobOneY }}
      />

      <motion.div
        className="absolute right-[8%] top-[28%] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.75),rgba(99,102,241,0.28)_55%,rgba(99,102,241,0.06))] blur-3xl"
        style={{ x: blobTwoX, y: blobTwoY }}
      />

      <motion.div
        className="absolute bottom-[-10%] left-[26%] h-96 w-96 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.68),rgba(45,212,191,0.24)_58%,rgba(45,212,191,0.06))] blur-3xl"
        style={{ x: blobThreeX, y: blobThreeY }}
      />

      <motion.div
        className="absolute right-[14%] top-[54%] h-56 w-56 rounded-full border border-white/55 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-2xl"
        style={{ y: globeY }}
      >
        <div className="absolute inset-4 rounded-full border border-white/60 opacity-65" />
        <div className="absolute inset-9 rounded-full border border-white/40 opacity-55" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/45" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/45" />
      </motion.div>
    </div>
  );
}
