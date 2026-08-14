"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { stages, type StageKey } from "./stage-data";
import { FloatingObject } from "../motion/FloatingObject";
import { Reveal } from "../motion/Reveal";
import { cn } from "../ui/cn";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function GradeExplorer() {
  const [activeKey, setActiveKey] = useState<StageKey>("pre");
  const reduce = useReducedMotion();
  const active = stages.find((s) => s.key === activeKey) ?? stages[0];

  const swap = (extra?: object) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 10, ...extra },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.4, ease: EASE },
        };

  return (
    <section
      id="grade-explorer"
      data-no-reveal
      aria-labelledby="grade-title"
      className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 size-64 rounded-full bg-stage-primary/8 blur-3xl"
      />
      <div className="mx-auto grid w-full max-w-wide grid-cols-1 gap-8 px-5 sm:px-6 lg:grid-cols-[30fr_38fr_30fr] lg:items-center lg:gap-6 lg:px-8">
        {/* LEFT — headline + selector */}
        <div className="flex flex-col gap-5 lg:gap-6">
          <Reveal>
            <span className="type-eyebrow inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-indigo shadow-soft">
              <span className="size-1.5 rounded-full bg-indigo" />
              Find your learning stage
            </span>
            <h2 id="grade-title" className="type-h2 mt-4 text-navy">
              A thoughtful path from first steps to{" "}
              <span className="relative inline-block italic text-indigo">
                future
                <svg viewBox="0 0 120 12" preserveAspectRatio="none" className="absolute -bottom-1 left-0 h-[0.22em] w-full text-orange" fill="none" aria-hidden>
                  <path d="M3 8C35 3 85 3 117 7" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              choices.
            </h2>
            <p className="type-body mt-3 max-w-sm text-muted">
              Choose a stage to see how learning, support and independence evolve across the school years.
            </p>
          </Reveal>

          <div role="tablist" aria-label="Learning stages" className="flex snap-x gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-2.5 lg:overflow-visible no-scrollbar">
            {stages.map((s) => {
              const isActive = s.key === activeKey;
              return (
                <button
                  key={s.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveKey(s.key)}
                  className={cn(
                    "group flex shrink-0 snap-start items-center gap-3 rounded-2xl border p-2.5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo lg:w-full",
                    isActive
                      ? cn("border-transparent text-white shadow-card bg-gradient-to-br", s.gradient)
                      : "border-navy/8 bg-white text-navy shadow-soft hover:-translate-y-0.5 hover:shadow-card",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-10 shrink-0 place-items-center rounded-xl [&_svg]:size-5",
                      isActive ? "bg-white/20 text-white" : cn(s.bgSoft, s.text),
                    )}
                  >
                    {s.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13.5px] font-extrabold leading-tight">{s.label}</span>
                    <span className={cn("block text-[11.5px] font-semibold leading-tight", isActive ? "text-white/80" : "text-muted")}>
                      {s.classes}
                    </span>
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={cn("size-4 transition-transform group-hover:translate-x-0.5", isActive ? "text-white" : "text-navy/30")} aria-hidden>
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              );
            })}
          </div>
        </div>

        {/* CENTER — active stage image */}
        <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
          <div className="relative aspect-[4/4.6]">
            <div className={cn("absolute inset-0 translate-x-3 translate-y-4 rounded-[36px_36px_100px_36px] bg-gradient-to-br opacity-90", active.gradient)} />
            <motion.div key={active.key} {...swap({ scale: 1.03 })} className="absolute inset-0 overflow-hidden rounded-[34px_34px_96px_34px] shadow-elevated ring-[5px] ring-white">
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent" />
            </motion.div>
            {/* floating stage icon */}
            <FloatingObject amplitude={7} rotate={2} className="absolute -right-3 -top-3 z-10">
              <span className={cn("grid size-14 place-items-center rounded-2xl text-white shadow-card [&_svg]:size-7 bg-gradient-to-br", active.gradient)}>
                {active.icon}
              </span>
            </FloatingObject>
          </div>
        </div>

        {/* RIGHT — detail panel */}
        <motion.div key={`${active.key}-detail`} {...swap()} className="flex flex-col gap-4">
          <span className={cn("type-eyebrow inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-2", active.bgSoft, active.text)}>
            {active.age} · {active.classes}
          </span>
          <h3 className="type-sub text-navy">{active.title}</h3>
          <p className="type-body text-muted">{active.copy}</p>
          <ul className="flex list-none flex-col gap-2">
            {active.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2.5 text-[14px] font-bold text-navy/85">
                <span className={cn("grid size-6 shrink-0 place-items-center rounded-full text-white [&_svg]:size-3.5 bg-gradient-to-br", active.gradient)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12.5 10 17l9-10" />
                  </svg>
                </span>
                {h}
              </li>
            ))}
          </ul>
          <a
            href="#academics"
            className={cn("group mt-1 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-[14px] font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated bg-gradient-to-br", active.gradient)}
          >
            Explore Stage
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden>
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
