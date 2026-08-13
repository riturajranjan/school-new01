"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import type { ReactNode } from "react";
import EnquiryTrigger from "./enquiry/EnquiryTrigger";
import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import { ImageReveal } from "../motion/ImageReveal";
import { FloatingObject } from "../motion/FloatingObject";

/* ---------- soft-3D educational objects (original SVGs) ---------- */

function GradCap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M4 24 32 12l28 12-28 12z" fill="#0B2345" />
      <path d="M4 24 32 34l28-10-28-6z" fill="#5C4AE4" />
      <path d="M18 30v10c0 4 6 8 14 8s14-4 14-8V30l-14 6z" fill="#3486D3" />
      <circle cx="60" cy="24" r="2.4" fill="#FFC83D" />
      <path d="M60 24v9" stroke="#FFC83D" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function BookStack({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="10" y="40" width="44" height="12" rx="3" fill="#FF6D5F" />
      <rect x="14" y="28" width="40" height="12" rx="3" fill="#20AAA5" />
      <rect x="8" y="16" width="44" height="12" rx="3" fill="#FF8A32" />
      <rect x="8" y="16" width="8" height="12" fill="#0B2345" opacity=".18" />
    </svg>
  );
}

function PaperPlane({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M56 10 8 30l18 6 6 18z" fill="#5C4AE4" />
      <path d="M56 10 26 36l6 18z" fill="#3486D3" />
      <path d="M56 10 26 36l-18-6z" fill="#7d6ff0" />
    </svg>
  );
}

/* ---------- small trust icons ---------- */

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "size-[18px]",
  "aria-hidden": true,
};

const trust = [
  {
    label: "CBSE Curriculum",
    tone: "text-indigo",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 4 6v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Classes 0–12",
    tone: "text-teal",
    icon: (
      <svg {...iconProps}>
        <path d="M4 19V9l4-2 4 2 4-2 4 2v10" />
        <path d="M8 19v-6M16 19v-6" />
      </svg>
    ),
  },
  {
    label: "Safe Campus",
    tone: "text-orange",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z" />
      </svg>
    ),
  },
  {
    label: "Holistic Learning",
    tone: "text-coral",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3v3M5 6l2 2M19 6l-2 2M12 21a5 5 0 0 0 5-5c0-3-2-4-2-7H9c0 3-2 4-2 7a5 5 0 0 0 5 5Z" />
      </svg>
    ),
  },
];

function FloatingBadge({
  className,
  title,
  sub,
  accent,
}: {
  className?: string;
  title: string;
  sub: string;
  accent: string;
}) {
  return (
    <div
      className={`absolute z-20 rounded-2xl border border-white/60 bg-white/80 px-3.5 py-2.5 shadow-card backdrop-blur-md ${className ?? ""}`}
    >
      <span className={`mb-1 block h-1 w-6 rounded-full ${accent}`} />
      <strong className="block font-display text-[15px] font-extrabold leading-none text-navy">
        {title}
      </strong>
      <span className="mt-1 block text-[11px] font-semibold text-muted">{sub}</span>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18 });
  const sy = useSpring(my, { stiffness: 55, damping: 18 });

  const photoX = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const photoY = useTransform(sy, [-0.5, 0.5], [-6, 6]);
  const badgeX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const badgeY = useTransform(sy, [-0.5, 0.5], [-14, 14]);
  const objX = useTransform(sx, [-0.5, 0.5], [-22, 22]);
  const objY = useTransform(sy, [-0.5, 0.5], [-22, 22]);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // Real positioned parallax layer that degrades to a static box.
  const layer = (
    x: MotionValue<number>,
    y: MotionValue<number>,
    className: string,
    children: ReactNode = null,
  ) =>
    reduce ? (
      <div className={className}>{children}</div>
    ) : (
      <motion.div className={className} style={{ x, y }}>
        {children}
      </motion.div>
    );

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      data-no-reveal
      className="relative overflow-hidden bg-gradient-to-b from-cream to-soft-cream"
    >
      {/* restrained background wash (two soft accents only) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[6%] top-6 size-52 rounded-full bg-yellow/15 blur-3xl" />
        <div className="absolute -left-24 bottom-8 size-56 rounded-full bg-indigo/8 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-wide grid-cols-1 gap-7 px-5 pb-12 pt-7 sm:px-6 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-8 lg:gap-y-6 lg:px-8 lg:pb-20 lg:pt-12">
        {/* ---- TEXT (mobile row 1 · desktop col 1 / row 1) ---- */}
        <StaggerGroup className="flex flex-col items-start gap-4 sm:gap-5 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-center">
          <StaggerItem>
            <span className="type-eyebrow inline-flex items-center gap-2 rounded-full border border-orange/20 bg-white/80 px-3.5 py-2 text-navy shadow-soft backdrop-blur-sm">
              <span className="size-1.5 animate-pulse rounded-full bg-orange" />
              Admissions Open 2026–27
            </span>
          </StaggerItem>

          <StaggerItem>
            <h1
              id="hero-title"
              className="font-display font-extrabold leading-[0.93] tracking-[-0.045em] text-navy text-[clamp(3rem,14vw,3.625rem)] lg:text-[clamp(4rem,5.6vw,5.75rem)]"
            >
              <span className="block">LEARN.</span>
              <span className="block text-indigo">DISCOVER.</span>
              <span className="relative inline-block">
                GROW.
                <svg
                  viewBox="0 0 200 12"
                  className="absolute -bottom-1 left-1 h-[0.2em] w-[84%] text-orange"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M3 8C55 3 150 3 197 7"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="type-lead max-w-[34ch] text-muted">
              From the first day of school to future-ready learning, we help every
              child grow with curiosity, confidence and purpose.
            </p>
          </StaggerItem>

          <StaggerItem className="w-full sm:w-auto">
            <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <EnquiryTrigger className="group inline-flex min-h-[54px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-orange px-7 text-[15px] font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:min-h-12 sm:w-auto sm:rounded-full">
                <span>Apply for Admission</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="size-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden>
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </EnquiryTrigger>
              <a
                href="#admissions"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-navy/12 bg-white px-6 text-[15px] font-bold text-navy shadow-soft transition hover:-translate-y-0.5 hover:shadow-card sm:min-h-12 sm:w-auto sm:rounded-full"
              >
                <span>Book a Campus Visit</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="size-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden>
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </a>
            </div>
          </StaggerItem>

          <StaggerItem>
            <a href="#academics" className="text-[13px] font-bold text-indigo underline-offset-4 hover:underline">
              Explore Academics →
            </a>
          </StaggerItem>
        </StaggerGroup>

        {/* ---- IMAGE (mobile row 2 · desktop col 2 / rows 1–2) ---- */}
        <div
          className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:self-center"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          <div className="relative mx-auto aspect-[4/4.15] w-full max-w-[440px] sm:max-w-[520px] lg:aspect-[7/6] lg:max-w-none">
            {/* offset colored backplate */}
            {layer(
              photoX,
              photoY,
              "absolute inset-0 translate-x-3 translate-y-4 rounded-[32px_32px_84px_32px] bg-gradient-to-br from-indigo/22 to-teal/18 lg:rounded-[46px_46px_130px_46px]",
            )}

            {/* main photo in organic cream-framed panel */}
            {layer(
              photoX,
              photoY,
              "absolute inset-0",
              <ImageReveal
                radius={30}
                className="relative size-full overflow-hidden rounded-[30px_30px_80px_30px] shadow-elevated ring-[5px] ring-white lg:rounded-[46px_46px_130px_46px]"
              >
                <Image
                  src="/assets/hero-students.png"
                  alt="Students from primary to senior classes together on a modern Indian school campus"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 520px, 640px"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/22 to-transparent" />
              </ImageReveal>,
            )}

            {/* floating badges (Safe Campus lives in the trust strip on mobile) */}
            {layer(
              badgeX,
              badgeY,
              "absolute inset-0",
              <>
                <FloatingBadge title="CBSE" sub="Affiliated curriculum" accent="bg-indigo" className="left-[-3%] top-[9%]" />
                <FloatingBadge title="Classes 0–12" sub="One complete journey" accent="bg-teal" className="right-[-4%] top-[45%]" />
                <FloatingBadge title="Safe Campus" sub="Secure & caring" accent="bg-orange" className="bottom-[7%] left-[5%] hidden lg:block" />
              </>,
            )}

            {/* soft-3D objects — minimal on mobile */}
            {layer(
              objX,
              objY,
              "pointer-events-none absolute inset-0",
              <>
                <FloatingObject amplitude={7} rotate={2} duration={6} className="absolute -right-1 -top-3 z-20 drop-shadow-lg">
                  <GradCap className="size-12 lg:size-14" />
                </FloatingObject>
                <FloatingObject amplitude={6} rotate={-2} duration={7} delay={0.4} className="absolute -left-5 top-[48%] z-20 hidden drop-shadow-lg sm:block">
                  <BookStack className="size-11 lg:size-12" />
                </FloatingObject>
                <FloatingObject amplitude={8} rotate={2} duration={5.5} delay={0.8} className="absolute -bottom-3 right-[16%] z-20 hidden drop-shadow-lg lg:block">
                  <PaperPlane className="size-12" />
                </FloatingObject>
              </>,
            )}
          </div>
        </div>

        {/* ---- TRUST STRIP (mobile row 3 · desktop col 1 / row 2) ---- */}
        <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
          <ul className="no-scrollbar flex list-none snap-x gap-2.5 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible">
            {trust.map((item) => (
              <li
                key={item.label}
                className="flex shrink-0 snap-start items-center gap-2 rounded-2xl border border-navy/8 bg-white/70 px-3.5 py-2.5 text-[13px] font-bold text-navy/85 shadow-soft backdrop-blur-sm"
              >
                <span className={item.tone}>{item.icon}</span>
                <span className="whitespace-nowrap">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
