'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Check } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { ACADEMICS } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Academics() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="academics" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Academics"
          title={
            <>
              A journey from <span className="text-gradient">first steps</span> to first choice
            </>
          }
          description="A continuum of care and challenge — designed to grow with your child at every stage."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {ACADEMICS.map((item, i) => {
            const isOpen = active === i;
            return (
              <Reveal key={item.level} delay={i * 0.08} className="h-full">
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className={cn(
                    'group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border p-6 text-left transition-all duration-500',
                    isOpen
                      ? 'border-primary bg-primary text-white lg:col-span-2'
                      : 'border-border bg-card hover:border-primary/40 hover:bg-primary/[0.03]'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        'text-xs font-semibold uppercase tracking-widest',
                        isOpen ? 'text-accent' : 'text-secondary'
                      )}
                    >
                      {item.grades}
                    </span>
                    <span
                      className={cn(
                        'flex h-7 w-7 items-center justify-center rounded-full border transition-all',
                        isOpen
                          ? 'border-white/30 text-white'
                          : 'border-border text-muted-foreground group-hover:border-primary/40'
                      )}
                    >
                      <Plus
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-500',
                          isOpen && 'rotate-45'
                        )}
                      />
                    </span>
                  </div>

                  <h3
                    className={cn(
                      'mt-6 font-display text-2xl font-semibold transition-colors',
                      isOpen ? 'text-white' : 'text-primary'
                    )}
                  >
                    {item.level}
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-sm leading-relaxed text-white/75">
                          {item.desc}
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {item.highlights.map((h) => (
                            <li
                              key={h}
                              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/85"
                            >
                              <Check className="h-3 w-3 text-accent" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isOpen && (
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
