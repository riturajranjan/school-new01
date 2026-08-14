import Image from "next/image";
import { stages, seniorStreams } from "./stage-data";
import { BookStack, GradCap, Compass, PaperPlane, Plant, Sphere } from "./edu-objects";
import { Reveal } from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import { FloatingObject } from "../motion/FloatingObject";
import { cn } from "../ui/cn";

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden>
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

export default function Academics() {
  return (
    <section
      id="academics"
      data-no-reveal
      aria-labelledby="academics-title"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-wide px-5 sm:px-6 lg:px-8">
        {/* ---- editorial header ---- */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="type-eyebrow inline-flex items-center gap-2 rounded-full border border-navy/10 bg-cream px-4 py-2 text-indigo shadow-soft">
              <span className="size-1.5 rounded-full bg-indigo" />
              Learning Pathways
            </span>
            <h2 id="academics-title" className="type-h2 mt-4 text-navy">
              Learning pathways with room to{" "}
              <span className="text-indigo">explore</span>,{" "}
              <span className="text-blue">focus</span> and{" "}
              <span className="relative inline-block text-coral">
                lead
                <svg viewBox="0 0 90 12" preserveAspectRatio="none" className="absolute -bottom-1 left-0 h-[0.22em] w-full text-coral" fill="none" aria-hidden>
                  <path d="M3 8C25 3 65 3 87 7" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
              .
            </h2>
            <p className="type-lead mt-4 max-w-md text-muted">
              From early years to senior secondary, each stage has its own rhythm, imagery and academic focus — while staying part of one connected school journey.
            </p>
          </Reveal>

          {/* 3D education still-life (no card) */}
          <div aria-hidden className="relative mx-auto hidden h-56 w-full max-w-sm lg:block">
            <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo/10 to-teal/10 blur-2xl" />
            <FloatingObject amplitude={8} rotate={2} className="absolute left-6 top-8 drop-shadow-xl"><BookStack className="size-20" /></FloatingObject>
            <FloatingObject amplitude={7} rotate={-2} duration={7} delay={0.3} className="absolute right-10 top-2 drop-shadow-xl"><GradCap className="size-16" /></FloatingObject>
            <FloatingObject amplitude={6} rotate={2} duration={6.5} delay={0.6} className="absolute bottom-4 right-2 drop-shadow-xl"><Compass className="size-14" /></FloatingObject>
            <FloatingObject amplitude={9} rotate={-2} duration={5.5} delay={0.9} className="absolute bottom-2 left-16 drop-shadow-xl"><PaperPlane className="size-12" /></FloatingObject>
            <FloatingObject amplitude={5} rotate={2} duration={8} delay={0.2} className="absolute left-0 top-1/2 drop-shadow-lg"><Plant className="size-12" /></FloatingObject>
            <FloatingObject amplitude={6} rotate={0} duration={7.5} delay={1.1} className="absolute right-1/3 top-1/2 drop-shadow-lg"><Sphere className="size-9" /></FloatingObject>
          </div>
        </div>

        {/* ---- stage grid (3 x 2) ---- */}
        <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {stages.map((s, i) => {
            const Obj = [BookStack, GradCap, Compass, PaperPlane, Plant][i] ?? Sphere;
            return (
              <StaggerItem key={s.key} className="h-full">
                <article className="group flex h-full flex-row overflow-hidden rounded-[22px] border border-navy/8 bg-white shadow-card transition-shadow hover:shadow-elevated sm:flex-col">
                  <div className="relative w-32 shrink-0 overflow-hidden sm:aspect-[16/10] sm:w-full">
                    <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 640px) 160px, (max-width: 1024px) 45vw, 300px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className={cn("absolute inset-0 bg-gradient-to-t opacity-60 mix-blend-multiply", s.gradient)} />
                    <span className={cn("absolute left-2.5 top-2.5 grid size-8 place-items-center rounded-lg text-white shadow-soft [&_svg]:size-4 bg-gradient-to-br", s.gradient)}>{s.icon}</span>
                  </div>
                  <div className="relative flex flex-1 flex-col gap-1.5 p-3.5 sm:p-4">
                    <span className={cn("type-eyebrow w-fit rounded-full px-2.5 py-1", s.bgSoft, s.text)}>{s.classes}</span>
                    <h3 className="type-card text-navy">{s.label}</h3>
                    <p className="type-body line-clamp-3 text-muted">{s.copy}</p>
                    <a href="#grade-explorer" className={cn("group mt-auto inline-flex w-fit items-center gap-1.5 pt-1 text-[13px] font-bold", s.text)}>
                      Explore {arrow}
                    </a>
                    <FloatingObject amplitude={5} rotate={2} duration={6} className="pointer-events-none absolute -top-6 right-3 hidden drop-shadow-lg sm:block">
                      <Obj className="size-9" />
                    </FloatingObject>
                  </div>
                </article>
              </StaggerItem>
            );
          })}

          {/* One School / Every Stage anchor card */}
          <StaggerItem className="h-full">
            <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] bg-navy p-5 text-white shadow-elevated">
              <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-indigo/30 blur-2xl" />
              <div className="relative">
                <span className="grid size-11 place-items-center rounded-xl bg-white/12 text-white [&_svg]:size-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />
                  </svg>
                </span>
                <h3 className="type-sub mt-4">One School.<br />Every Stage.</h3>
                <p className="type-body mt-2 text-white/70">A seamless journey with consistent values, care and academic excellence.</p>
              </div>
              {/* dotted stage-node journey */}
              <div className="relative mt-5 flex items-center justify-between" aria-hidden>
                <span className="absolute inset-x-1 top-1/2 h-0 -translate-y-1/2 border-t-2 border-dashed border-white/25" />
                {stages.map((s) => (
                  <span key={s.key} className={cn("relative size-3.5 rounded-full ring-4 ring-navy bg-gradient-to-br", s.gradient)} />
                ))}
              </div>
              <a href="#grade-explorer" className="group relative mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-navy">
                Explore stages {arrow}
              </a>
            </article>
          </StaggerItem>
        </StaggerGroup>

        {/* ---- senior secondary streams (merged from standalone section) ---- */}
        <div className="mt-12">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="type-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-stage-senior bg-stage-senior/12">
                <span className="size-1.5 rounded-full bg-stage-senior" />
                Senior Secondary Streams
              </span>
              <p className="type-small text-muted">Classes 11–12 · choose a focused academic direction</p>
            </div>
          </Reveal>
          <StaggerGroup className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {seniorStreams.map((st) => (
              <StaggerItem key={st.title}>
                <article className="h-full rounded-[20px] border border-navy/8 bg-cream p-5 shadow-soft">
                  <div className="mb-3 h-1 w-10 rounded-full bg-stage-senior" />
                  <h3 className="type-card text-navy">{st.title}</h3>
                  <p className="mt-2 text-[13px] font-semibold leading-relaxed text-navy/75">{st.subjects}</p>
                  <p className="mt-2 text-[12.5px] font-medium leading-relaxed text-muted">{st.direction}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
