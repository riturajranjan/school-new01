"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useHydrated } from "./use-hydrated";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  /** Delay between children in seconds (0.06–0.09 recommended). */
  stagger?: number;
};

/**
 * Parent for a staggered reveal of child cards. Pair with <StaggerItem>.
 * Fail-safe: static and fully visible on the server / without JS / with
 * reduced motion.
 */
export function StaggerGroup({
  children,
  className,
  stagger = 0.075,
}: StaggerGroupProps) {
  const reduce = useReducedMotion();
  const ready = useHydrated();

  if (reduce || !ready) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
};

export function StaggerItem({ children, className, y = 22 }: StaggerItemProps) {
  const reduce = useReducedMotion();
  const ready = useHydrated();

  if (reduce || !ready) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
