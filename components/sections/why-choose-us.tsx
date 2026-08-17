"use client";

import {
  ShieldCheck,
  GraduationCap,
  Cpu,
  HeartHandshake,
  Trophy,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { Reveal, StaggerGroup, staggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { WHY_CHOOSE } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  GraduationCap,
  Cpu,
  HeartHandshake,
  Trophy,
  Leaf,
};

export function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-dark py-24 sm:py-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[40%] w-[40%] rounded-full bg-secondary/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[40%] w-[40%] rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          light
          eyebrow="Why Novyra"
          title={
            <>
              Why parents <span className="text-gradient">choose us</span>
            </>
          }
          description="Six promises we make to every family that walks through our gates — and keep, every single day."
        />

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item) => {
            const Icon = ICONS[item.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 text-secondary transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">
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
