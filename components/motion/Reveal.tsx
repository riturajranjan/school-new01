"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useHydrated } from "./use-hydrated";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Vertical travel distance in px (20–28 recommended). */
  y?: number;
  delay?: number;
  duration?: number;
};

/**
 * Default section-entrance reveal: opacity + short translateY, premium
 * easing, plays once. Fail-safe: renders fully visible on the server and
 * when JavaScript is disabled or reduced-motion is requested — content is
 * never hidden behind animation.
 */
export function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
  duration = 0.65,
}: RevealProps) {
  const reduce = useReducedMotion();
  const ready = useHydrated();

  if (reduce || !ready) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
