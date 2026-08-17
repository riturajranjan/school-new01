'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { Reveal, StaggerGroup, staggerItem } from '@/components/reveal';
import { FACULTY } from '@/lib/content';

export function Faculty() {
  return (
    <section id="faculty" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Faculty"
          title={
            <>
              Mentors, not just <span className="text-gradient">teachers</span>
            </>
          }
          description="120+ educators from the world's best universities — chosen for their craft, their care and their curiosity."
        />

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACULTY.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-xl font-semibold text-white shadow-lg">
                  {member.avatar}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-secondary">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{member.specialty}</p>
              <div className="mt-4 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-secondary to-accent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
