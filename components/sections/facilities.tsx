"use client";

import {
  Library,
  FlaskConical,
  Laptop,
  Music,
  PersonStanding,
  Trophy,
  Stethoscope,
  Bus,
  BedDouble,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, StaggerGroup, staggerItem } from "@/components/reveal";
import { motion } from "framer-motion";
import { FACILITIES } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  Library,
  FlaskConical,
  Laptop,
  Music,
  PersonStanding,
  Trophy,
  Stethoscope,
  Bus,
  BedDouble,
  ShieldCheck,
};

export function Facilities() {
  return (
    <section
      id="facilities"
      className="relative overflow-hidden bg-dark py-24 sm:py-32">
      <div className="pointer-events-none absolute right-1/3 top-0 h-[35%] w-[35%] rounded-full bg-secondary/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          light
          eyebrow="Facilities"
          title={
            <>
              Spaces that <span className="text-gradient">inspire</span>
            </>
          }
          description="World-class infrastructure designed for comfort, safety and discovery — every detail considered."
        />

        <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {FACILITIES.map((item) => {
            const Icon = ICONS[item.icon] ?? Library;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-secondary/40 hover:bg-white/[0.07]">
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/25 to-secondary/5 text-secondary transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
