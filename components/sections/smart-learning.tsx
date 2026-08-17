'use client';

import Image from 'next/image';
import {
  Brain,
  MonitorSmartphone,
  FlaskConical,
  Code2,
  Bot,
  Atom,
  Clapperboard,
  Glasses,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal, StaggerGroup, staggerItem } from '@/components/reveal';
import { motion } from 'framer-motion';
import { SMART_LEARNING, IMAGES } from '@/lib/content';

const ICONS: Record<string, LucideIcon> = {
  Brain,
  MonitorSmartphone,
  FlaskConical,
  Code2,
  Bot,
  Atom,
  Clapperboard,
  Glasses,
};

export function SmartLearning() {
  return (
    <section id="smart-learning" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={IMAGES.coding}
                alt="Students learning coding and robotics"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/60 via-transparent to-transparent" />
            </div>
            {/* floating glass card */}
            <div className="absolute -bottom-6 -right-4 hidden w-56 rounded-2xl glass p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Robotics Lab</p>
                  <p className="text-xs text-muted-foreground">National winners 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Smart Learning"
              title={
                <>
                  The future, <span className="text-gradient">taught today</span>
                </>
              }
              description="From AI tutors to immersive VR, our technology stack turns every lesson into an experience."
            />

            <StaggerGroup className="mt-10 grid grid-cols-2 gap-4">
              {SMART_LEARNING.map((item) => {
                const Icon = ICONS[item.icon] ?? Brain;
                return (
                  <motion.div
                    key={item.title}
                    variants={staggerItem}
                    className="group rounded-2xl border border-border bg-card p-5 transition-all duration-400 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
