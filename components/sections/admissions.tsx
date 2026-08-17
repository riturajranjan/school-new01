'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { Magnetic } from '@/components/magnetic';
import { ADMISSION_STEPS } from '@/lib/content';

export function Admissions() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="admissions" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Admissions"
          title={
            <>
              Five steps to <span className="text-gradient">join us</span>
            </>
          }
          description="A simple, transparent journey — designed to welcome your family, not test it."
        />

        <div ref={ref} className="relative mt-20">
          {/* vertical track (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-1/2 top-0 hidden h-full w-px origin-top -translate-x-1/2 bg-gradient-to-b from-secondary to-accent lg:block"
          />

          {/* horizontal track (mobile) */}
          <div className="absolute left-0 top-7 h-px w-full bg-border lg:hidden" />

          <div className="flex flex-col gap-12 lg:gap-0">
            {ADMISSION_STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.step}
                  className="relative flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16"
                >
                  {/* node */}
                  <span className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-secondary bg-background text-secondary font-display text-lg font-semibold lg:left-1/2 lg:-translate-x-1/2">
                    {step.step}
                  </span>

                  <Reveal
                    className={isLeft ? 'lg:col-start-1 lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}
                  >
                    <div className="ml-20 lg:ml-0">
                      <h3 className="font-display text-2xl font-semibold text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground lg:ml-auto">
                        {step.desc}
                      </p>
                    </div>
                  </Reveal>

                  {/* spacer for alternating layout */}
                  <div className={isLeft ? 'hidden lg:block lg:col-start-2' : 'hidden lg:block lg:col-start-1 lg:row-start-1'} />
                </div>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-16 text-center">
          <Magnetic>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary/90"
            >
              Start your application
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
