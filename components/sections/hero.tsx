"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Play, ChevronDown, Sparkles } from "lucide-react";
import { Magnetic } from "@/components/magnetic";
import { IMAGES, STATS } from "@/lib/content";
import { useCounter } from "@/components/use-counter";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, value: display } = useCounter(value, 2200);
  return (
    <div className="text-center sm:text-left">
      <div
        ref={ref}
        className="font-display text-3xl font-semibold text-white sm:text-4xl">
        {display}
        <span className="text-secondary">{suffix}</span>
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-white/50 sm:text-sm">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduce ? "0%" : "30%"],
  );
  const yContent = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduce ? "0%" : "40%"],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.15]);

  const titleWords = ["Shaping", "Future", "Leaders"];

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ y: yBg, scale }} className="absolute inset-0">
        <Image
          src={IMAGES.heroStudents}
          alt="Students learning at Novyra International School"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/55 to-dark/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-transparent to-transparent" />

      {/* Light rays */}
      <div className="pointer-events-none absolute -top-1/4 left-1/4 h-[60%] w-[40%] rounded-full bg-secondary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[50%] w-[35%] rounded-full bg-accent/15 blur-[120px]" />

      {/* Floating particles */}
      {!reduce && (
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/40"
              style={{
                left: `${(i * 73) % 100}%`,
                top: `${(i * 41) % 100}%`,
              }}
              animate={{ y: [0, -24, 0], opacity: [0.2, 0.7, 0.2] }}
              transition={{
                duration: 6 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 sm:px-6">
        {/* Admissions badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          Admissions Open · 2026–27
          <Sparkles className="h-3.5 w-3.5 text-accent" />
        </motion.div>

        {/* Headline */}
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl">
          {titleWords.map((word, i) => (
            <span key={word} className="mr-4 inline-block overflow-hidden pb-2">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4 + i * 0.12,
                }}>
                {word === "Leaders" ? (
                  <span className="text-gradient">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="mt-6 max-w-xl text-lg text-white/75 sm:text-xl">
          Building Knowledge, Character, Innovation and Success — in a campus
          designed for the curious, the bold and the brilliant.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.05 }}
          className="mt-9 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href="#admissions"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-xl shadow-black/20 transition-all hover:shadow-2xl">
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#gallery"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <Play className="h-3 w-3 fill-white text-white" />
              </span>
              Virtual Tour
            </a>
          </Magnetic>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
          className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4 sm:gap-8">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
