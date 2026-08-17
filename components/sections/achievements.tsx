'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { useCounter } from '@/components/use-counter';
import { ACHIEVEMENTS, PLACEMENTS } from '@/lib/content';

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: display } = useCounter(value, 2000);
  return (
    <div className="text-center">
      <div ref={ref} className="font-display text-5xl font-semibold text-white sm:text-6xl">
        {display}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-2 text-sm uppercase tracking-widest text-white/50">{label}</div>
    </div>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-dark py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[50%] w-[50%] -translate-x-1/2 rounded-full bg-secondary/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          light
          eyebrow="Results & Achievements"
          title={
            <>
              Numbers that <span className="text-gradient">speak</span>
            </>
          }
          description="A decade of consistent excellence — in the classroom, on the field and on the world stage."
        />

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a) => (
            <Reveal key={a.label}>
              <Counter {...a} />
            </Reveal>
          ))}
        </div>

        {/* University placements marquee */}
        <div className="mt-20">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Our students have earned offers from
            </p>
          </Reveal>
          <div className="relative mt-8 overflow-hidden mask-fade-b">
            <motion.div
              className="flex gap-4"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...PLACEMENTS, ...PLACEMENTS].map((name, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3"
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="whitespace-nowrap font-display text-lg text-white/80">
                    {name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
