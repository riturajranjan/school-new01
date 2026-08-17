"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";

const CONTACTS = [
  {
    icon: MapPin,
    label: "Visit",
    value: "12 Knowledge Park, Education City, New Delhi 110001",
  },
  { icon: Phone, label: "Call", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "admissions@lumiere.edu" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 98765 43210" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-dark py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/4 top-0 h-[40%] w-[40%] rounded-full bg-secondary/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          light
          eyebrow="Contact"
          title={
            <>
              Let's start a <span className="text-gradient">conversation</span>
            </>
          }
          description="Book a campus visit, ask a question, or begin your child's journey with Novyra."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: contact info + map */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {CONTACTS.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.08}>
                  <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all hover:border-secondary/40 hover:bg-white/[0.07]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary transition-transform group-hover:scale-110">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
                      {c.label}
                    </p>
                    <p className="mt-1 text-sm text-white/85">{c.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Map */}
            <Reveal delay={0.2}>
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Novyra campus location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.1%2C28.55%2C77.3%2C28.7&layer=mapnik&marker=28.6139%2C77.2090"
                  className="h-64 w-full grayscale-[0.3]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Parent name"
                  name="name"
                  placeholder="Your full name"
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 ..."
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                />
                <Field
                  label="Child's grade"
                  name="grade"
                  placeholder="e.g. Grade 5"
                />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us what you'd like to know..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-secondary focus:bg-white/10"
                />
              </div>
              <Magnetic className="mt-6 w-full">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-secondary/20 transition-all hover:bg-secondary/90">
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Message sent
                    </>
                  ) : (
                    <>
                      Send enquiry
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-secondary focus:bg-white/10"
      />
    </div>
  );
}
