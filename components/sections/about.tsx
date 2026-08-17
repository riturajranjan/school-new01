"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { IMAGES } from "@/lib/content";

const JOURNEY = [
  {
    year: "2021",
    title: "Founded",
    desc: "A small school with a big dream opens its doors to 40 students.",
  },
  {
    year: "2022",
    title: "CBSE Affiliation",
    desc: "Earns CBSE affiliation and grows to a full K-12 institution.",
  },
  {
    year: "2024",
    title: "Smart Campus",
    desc: "Inaugurates a solar-powered, tech-enabled campus.",
  },
  {
    year: "2025",
    title: "IB Programme",
    desc: "Becomes an IB World School offering the Diploma Programme.",
  },
  {
    year: "2026",
    title: "Global Recognition",
    desc: "Ranked among the top 10 schools in the region.",
  },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Our Philosophy"
          title={
            <>
              Education that <span className="text-gradient">endures</span>{" "}
              beyond the classroom
            </>
          }
          description="For three decades, Novyra has believed that a great school does not fill a bucket — it lights a fire. We blend timeless values with the tools of tomorrow."
        />

        {/* Editorial split */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <motion.div style={{ y }} className="absolute inset-[-12%]">
              <Image
                src={IMAGES.campus}
                alt="Novyra campus"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-5">
              <p className="font-display text-lg text-white">
                &quot;A school is a place where the future is rehearsed.&quot;
              </p>
              <p className="mt-1 text-sm text-white/60">
                — Dr. R. Marco, Founder
              </p>
            </div>
          </div>

          <div>
            <Reveal>
              <h3 className="font-display text-2xl font-semibold text-primary sm:text-3xl">
                Our Mission
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To nurture curious, courageous and compassionate learners who
                think critically, act ethically and lead with empathy in a
                rapidly changing world.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h3 className="mt-10 font-display text-2xl font-semibold text-primary sm:text-3xl">
                Our Vision
              </h3>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To be a beacon of progressive education — where tradition meets
                innovation, and every child is empowered to discover their
                unique brilliance.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/15 text-secondary font-semibold">
                    RM
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Dr. R. Marco</p>
                    <p className="text-sm text-muted-foreground">Principal</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  &quot;We do not teach children what to think. We teach them how to
                  think — and give them the courage to act on it.&quot;
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24" ref={ref}>
          <Reveal>
            <h3 className="text-center font-display text-3xl font-semibold text-primary sm:text-4xl">
              Our Journey
            </h3>
          </Reveal>
          <div className="relative mt-14">
            {/* progress line */}
            <div className="absolute left-0 top-3 h-px w-full bg-border" />
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute left-0 top-3 h-px w-full origin-left bg-gradient-to-r from-secondary to-accent"
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {JOURNEY.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.1}>
                  <div className="relative pt-8">
                    <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-secondary bg-background">
                      <span className="h-2 w-2 rounded-full bg-secondary" />
                    </span>
                    <p className="font-display text-xl font-semibold text-secondary">
                      {item.year}
                    </p>
                    <p className="mt-1 font-semibold text-primary">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
