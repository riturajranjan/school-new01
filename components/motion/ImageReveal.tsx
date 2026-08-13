"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useHydrated } from "./use-hydrated";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  /** Corner rounding used inside the clip-path (px). */
  radius?: number;
  duration?: number;
};

/**
 * Clip-path + scale image reveal (mask wipe from the right, 1.04 -> 1).
 * Wrap an <img>/<Image> or a background element. Fail-safe: static and
 * fully visible without JS or with reduced motion.
 */
export function ImageReveal({
  children,
  className,
  radius = 24,
  duration = 0.85,
}: ImageRevealProps) {
  const reduce = useReducedMotion();
  const ready = useHydrated();

  if (reduce || !ready) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={{ willChange: "clip-path, transform" }}
      initial={{
        clipPath: `inset(0 14% 0 0 round ${radius}px)`,
        scale: 1.04,
      }}
      whileInView={{ clipPath: `inset(0 0% 0 0 round ${radius}px)`, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
