"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { TESTIMONIALS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const go = (dir: number) => setIndex((p) => (p + dir + count) % count);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[40%] w-[30%] rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[40%] w-[30%] rounded-full bg-secondary/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by <span className="text-gradient">families</span>
            </>
          }
          description="Hear from the parents, students and educators who call Novyra home."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-12">
                <Quote className="h-10 w-10 text-secondary/30" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-5 font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                  "{TESTIMONIALS[index].quote}"
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-white">
                    {TESTIMONIALS[index].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-primary">
                      {TESTIMONIALS[index].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {TESTIMONIALS[index].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-400",
                    i === index
                      ? "w-8 bg-secondary"
                      : "w-2 bg-border hover:bg-muted-foreground/40",
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous"
                onClick={() => go(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-all hover:border-primary hover:bg-primary hover:text-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next"
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-all hover:border-primary hover:bg-primary hover:text-white">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
