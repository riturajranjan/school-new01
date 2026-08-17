'use client';

import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { FAQS } from '@/lib/content';

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-gradient">answered</span>
            </>
          }
          description="Everything you need to know before you apply."
        />

        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-border py-1"
              >
                <AccordionTrigger className="text-left font-display text-lg text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
