"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { ReactNode } from "react";
import EnquiryTrigger from "./enquiry/EnquiryTrigger";
import { Reveal } from "../motion/Reveal";
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

function Pencil({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="26" y="8" width="12" height="38" rx="3" transform="rotate(35 32 27)" fill="#FFC83D" />
      <path d="M43 43l6 9-10-3z" fill="#0B2345" />
      <path d="M43 43l6 9-4-1 3-5z" fill="#FF8A32" />
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
    label: "Nursery–Class 12",
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

  const photoX = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const photoY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const badgeX = useTransform(sx, [-0.5, 0.5], [-16, 16]);
  const badgeY = useTransform(sy, [-0.5, 0.5], [-16, 16]);
  const objX = useTransform(sx, [-0.5, 0.5], [-26, 26]);
  const objY = useTransform(sy, [-0.5, 0.5], [-26, 26]);

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

  const parallax = (x: typeof photoX, y: typeof photoY, children: ReactNode, className?: string) =>
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
      {/* background decorative shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 size-72 rounded-full bg-indigo/10 blur-2xl" />
        <div className="absolute right-[8%] top-8 size-40 rounded-full bg-yellow/20 blur-xl" />
        <div className="absolute bottom-0 left-1/3 size-56 rounded-full bg-teal/10 blur-2xl" />
      </div>

      <div className="mx-auto grid w-full max-w-normal grid-cols-1 items-center gap-10 px-5 pb-16 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-8 lg:pb-24 lg:pt-14">
        {/* LEFT — copy */}
        <StaggerGroup className="relative z-10 flex flex-col items-start gap-5 lg:col-span-5">
          <StaggerItem>
            <span className="type-eyebrow inline-flex items-center gap-2 rounded-full border border-orange/20 bg-white/80 px-4 py-2 text-navy shadow-soft backdrop-blur-sm">
              <span className="size-1.5 animate-pulse rounded-full bg-orange" />
              Admissions Open 2026–27
            </span>
          </StaggerItem>

          <StaggerItem>
            <h1 id="hero-title" className="type-display text-navy">
              <span className="block">LEARN.</span>
              <span className="block text-indigo">DISCOVER.</span>
              <span className="relative inline-block">
                GROW.
                <svg
                  viewBox="0 0 220 24"
                  className="absolute -bottom-2 left-0 h-3 w-[86%] text-orange"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 16c48-12 120-14 212-6"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="type-lead max-w-md text-muted">
              From the first day of school to future-ready learning, we help every
              child grow with curiosity, confidence and purpose.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <EnquiryTrigger className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-orange px-7 text-[15px] font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-cream">
                <span>Apply for Admission</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="size-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden>
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </EnquiryTrigger>
              <a
                href="#admissions"
                className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-navy/12 bg-white px-6 text-[15px] font-bold text-navy shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
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

          <StaggerItem>
            <ul className="mt-1 flex flex-wrap gap-x-5 gap-y-2">
              {trust.map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-[13px] font-bold text-navy/80">
                  <span className={item.tone}>{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>
          </StaggerItem>
        </StaggerGroup>

        {/* RIGHT — visual composition */}
        <div
          className="relative z-0 lg:col-span-7"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          <div className="relative mx-auto aspect-[7/6] w-full max-w-[560px] lg:max-w-none">
            {/* offset colored backplate */}
            {parallax(
              photoX,
              photoY,
              <div className="size-full rounded-[46px_46px_130px_46px] bg-gradient-to-br from-indigo/25 to-teal/25" />,
              "absolute inset-0 translate-x-4 translate-y-5",
            )}

            {/* main photo in organic frame */}
            {parallax(
              photoX,
              photoY,
              <ImageReveal radius={46} className="relative size-full overflow-hidden rounded-[46px_46px_130px_46px] shadow-elevated">
                <Image
                  src="/assets/hero-students.png"
                  alt="Students from primary to senior classes together on a modern Indian school campus"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 640px"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[46px_46px_130px_46px] bg-gradient-to-t from-navy/25 to-transparent" />
              </ImageReveal>,
              "absolute inset-0",
            )}

            {/* floating glass badges */}
            {parallax(
              badgeX,
              badgeY,
              <FloatingBadge title="CBSE" sub="Affiliated curriculum" accent="bg-indigo" className="left-[-4%] top-[12%]" />,
              "contents",
            )}
            {parallax(
              badgeX,
              badgeY,
              <FloatingBadge title="Classes 0–12" sub="One complete journey" accent="bg-teal" className="right-[-3%] top-[42%]" />,
              "contents",
            )}
            {parallax(
              badgeX,
              badgeY,
              <FloatingBadge title="Safe Campus" sub="Secure & caring" accent="bg-orange" className="bottom-[8%] left-[6%]" />,
              "contents",
            )}

            {/* soft-3D floating objects */}
            {parallax(
              objX,
              objY,
              <>
                <FloatingObject amplitude={7} rotate={2} duration={6} className="absolute -right-2 -top-4 z-20 drop-shadow-lg">
                  <GradCap className="size-14" />
                </FloatingObject>
                <FloatingObject amplitude={6} rotate={-2} duration={7} delay={0.4} className="absolute -left-6 top-[46%] z-20 drop-shadow-lg">
                  <BookStack className="size-12" />
                </FloatingObject>
                <FloatingObject amplitude={8} rotate={2} duration={5.5} delay={0.8} className="absolute -bottom-3 right-[18%] z-20 hidden drop-shadow-lg sm:block">
                  <PaperPlane className="size-12" />
                </FloatingObject>
              </>,
              "contents",
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
