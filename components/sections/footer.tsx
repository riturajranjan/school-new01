"use client";

import {
  GraduationCap,
  Instagram,
  Youtube,
  Facebook,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { NAV_LINKS } from "@/lib/content";

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

const PROGRAMS = [
  "Nursery",
  "Primary",
  "Middle",
  "Secondary",
  "Senior Secondary",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* CTA band */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-secondary/20 via-white/[0.04] to-accent/10 p-8 sm:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/20 blur-[100px]" />
            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  Ready to begin?
                </h3>
                <p className="mt-3 max-w-md text-[#f3f3f3]">
                  Admissions for 2026–27 are open. Reserve your child&apos;s seat
                  today.
                </p>
              </div>
              <a
                href="#admissions"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-primary shadow-xl transition-all hover:shadow-2xl">
                Apply Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Links */}
        <div className="mt-16 grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-primary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold text-white">
                Novyra
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white">
              Novyra International School — shaping future leaders through
              knowledge, character, innovation and success since 1995.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-all hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary">
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.slice(0, 6).map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1 text-sm text-white transition-colors hover:text-white">
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Programs
            </p>
            <ul className="mt-5 space-y-3">
              {PROGRAMS.map((p) => (
                <li key={p}>
                  <a
                    href="#academics"
                    className="text-sm text-white transition-colors hover:text-white">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Novyra International School. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white/70">
              Privacy
            </a>
            <a href="#" className="hover:text-white/70">
              Terms
            </a>
            <a href="#" className="hover:text-white/70">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
