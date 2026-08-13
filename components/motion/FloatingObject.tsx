"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type FloatingObjectProps = {
  children: ReactNode;
  className?: string;
  /** Vertical float amplitude in px (5–10 recommended). */
  amplitude?: number;
  /** Rotation amplitude in degrees (1–3 recommended). */
  rotate?: number;
  duration?: number;
  delay?: number;
};

/**
 * Subtle continuous float + micro-rotation for decorative 3D objects.
 * Reduced motion → completely static. Keep amplitudes small; this is
 * ambient, not attention-grabbing.
 */
export function FloatingObject({
  children,
  className,
  amplitude = 8,
  rotate = 2,
  duration = 6,
  delay = 0,
}: FloatingObjectProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0], rotate: [0, rotate, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
