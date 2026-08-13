"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  /** Total travel in px across the scroll range (subtle: 20–60). */
  distance?: number;
};

/**
 * Very subtle scroll parallax for DECORATIVE layers only (never body text,
 * buttons or essential UI). Reduced motion → no transform.
 */
export function ParallaxLayer({
  children,
  className,
  distance = 40,
}: ParallaxLayerProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
