'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em]',
              light ? 'text-accent' : 'text-secondary'
            )}
          >
            <span className="h-px w-8 bg-current opacity-60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            'mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl',
            light ? 'text-white' : 'text-primary'
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              'mt-6 text-lg leading-relaxed',
              light ? 'text-white/70' : 'text-muted-foreground'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
