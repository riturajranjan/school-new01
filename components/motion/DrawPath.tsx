"use client";

import { motion, useReducedMotion } from "motion/react";
import { useHydrated } from "./use-hydrated";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type DrawPathProps = {
  /** SVG path data. */
  d: string;
  viewBox?: string;
  className?: string;
  stroke?: string;
  strokeWidth?: number;
  duration?: number;
  /** Optional nodes rendered as dots along the journey. */
  nodes?: Array<{ x: number; y: number; r?: number }>;
};

/**
 * Progressive SVG line drawing (stroke-dashoffset via pathLength) for
 * learning-journey / process connectors. Fail-safe: the path renders fully
 * drawn on the server, without JS, and with reduced motion.
 */
export function DrawPath({
  d,
  viewBox = "0 0 100 100",
  className,
  stroke = "currentColor",
  strokeWidth = 3,
  duration = 1.2,
  nodes,
}: DrawPathProps) {
  const reduce = useReducedMotion();
  const ready = useHydrated();

  const dots = nodes?.map((node, index) => (
    <circle
      key={index}
      cx={node.x}
      cy={node.y}
      r={node.r ?? 3}
      fill={stroke}
    />
  ));

  if (reduce || !ready) {
    return (
      <svg
        className={className}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d={d}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {dots}
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <motion.path
        d={d}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration, ease: EASE }}
      />
      {dots}
    </svg>
  );
}
