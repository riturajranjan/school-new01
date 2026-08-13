"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import EnquiryTrigger from "./enquiry/EnquiryTrigger";
import { cn } from "../ui/cn";

const navItems = [
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Academics", href: "#academics", sectionId: "academics" },
  { label: "Admissions", href: "#admissions", sectionId: "admissions" },
  { label: "Student Life", href: "#student-life", sectionId: "student-life" },
  { label: "Facilities", href: "#facilities", sectionId: "facilities" },
  { label: "Achievements", href: "#achievements", sectionId: "achievements" },
  { label: "News & Events", href: "#news-events", sectionId: "news-events" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function BrandMark() {
  return (
    <span
      className="relative grid size-11 place-items-center overflow-hidden rounded-[14px] text-white shadow-[0_10px_24px_-8px_rgba(92,74,228,0.55)]"
      style={{
        background: "linear-gradient(135deg, var(--deep-navy), var(--royal-indigo))",
      }}
      aria-hidden
    >
      <span className="font-display text-lg font-extrabold">S</span>
      <span className="absolute -bottom-1 -right-1 size-4 rounded-full bg-orange" />
    </span>
  );
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="size-[18px]" aria-hidden>
      <path d="M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3" />
      <path d="M14 2v4M8 10v4M16 18v4" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const prevOverflow = useRef("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.12, 0.28, 0.44] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Body scroll-lock + focus management for the mobile sheet.
  useEffect(() => {
    if (!menuOpen) return;
    const opener = menuButtonRef.current;
    prevOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = sheetRef.current?.querySelector<HTMLElement>(focusableSelector);
    const timer = window.setTimeout(() => first?.focus(), 60);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prevOverflow.current;
      opener?.focus();
    };
  }, [menuOpen]);

  const onSheetKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closeMenu();
      return;
    }
    if (event.key !== "Tab" || !sheetRef.current) return;
    const focusable = Array.from(
      sheetRef.current.querySelectorAll<HTMLElement>(focusableSelector),
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const openCustomizer = () =>
    window.dispatchEvent(new CustomEvent("school:open-customizer"));

  return (
    <header className="sticky top-0 z-40" data-header>
      {/* Utility strip — desktop only, slides away on scroll */}
      <div
        className={cn(
          "hidden overflow-hidden bg-navy text-white transition-all duration-300 lg:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100",
        )}
      >
        <div className="mx-auto flex w-full max-w-wide items-center justify-end gap-6 px-8 py-2 text-[12px] font-semibold text-white/85">
          <span>CBSE Affiliation</span>
          <a href="#contact" className="hover:text-white">Parent Portal</a>
          <a href="tel:+911234567890" className="hover:text-white">+91 12345 67890</a>
          <span className="text-white/70">English / हिन्दी</span>
        </div>
      </div>

      {/* Main navigation bar */}
      <div
        className={cn(
          "border-b backdrop-blur-md transition-all duration-300",
          scrolled
            ? "border-navy/10 bg-cream/90 shadow-[0_10px_30px_-18px_rgba(11,35,69,0.45)]"
            : "border-transparent bg-cream/70",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex w-full max-w-wide items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-6 lg:px-8",
            scrolled ? "h-[64px]" : "h-[72px]",
          )}
        >
          <a href="#top" onClick={closeMenu} className="flex items-center gap-3" aria-label="Sarvottam International School — home">
            <BrandMark />
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-extrabold text-navy sm:text-base">
                Sarvottam International School
              </span>
              <span className="type-eyebrow block text-[11px] text-indigo">Classes 0–12</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden list-none items-center gap-1 xl:flex">
            {navItems.map((item) => {
              const active = activeSection === item.sectionId;
              return (
                <li key={item.sectionId}>
                  <a
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-bold transition-colors",
                      active ? "text-indigo" : "text-navy/70 hover:text-navy",
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-indigo" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openCustomizer}
              aria-label="Customize website"
              className="hidden size-10 place-items-center rounded-full border border-navy/10 bg-white text-navy shadow-soft transition hover:-translate-y-0.5 hover:text-indigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-cream lg:grid"
            >
              <SettingsIcon />
            </button>

            <EnquiryTrigger className="group hidden min-h-10 items-center gap-1.5 rounded-full bg-orange px-5 text-[13px] font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:inline-flex">
              <span>Apply Now</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden>
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </EnquiryTrigger>

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="grid size-11 place-items-center rounded-full border border-navy/10 bg-white text-navy shadow-soft xl:hidden"
            >
              <span className="relative block h-3.5 w-5" aria-hidden>
                <span className={cn("absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300", menuOpen ? "top-1.5 rotate-45" : "top-0")} />
                <span className={cn("absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300", menuOpen && "opacity-0")} />
                <span className={cn("absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300", menuOpen ? "top-1.5 -rotate-45" : "top-3")} />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile / tablet full-screen sheet */}
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm xl:hidden"
          />
          <div
            ref={sheetRef}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            onKeyDown={onSheetKeyDown}
            className="fixed inset-x-3 top-3 z-50 max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-[28px] border border-navy/10 bg-cream p-5 shadow-[0_40px_80px_-30px_rgba(11,35,69,0.5)] xl:hidden"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="flex items-center gap-3">
                <BrandMark />
                <span className="font-display text-[15px] font-extrabold text-navy">Sarvottam</span>
              </span>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-full border border-navy/10 bg-white text-navy"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-5" aria-hidden>
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <ul className="grid list-none gap-1">
              {navItems.map((item) => {
                const active = activeSection === item.sectionId;
                return (
                  <li key={item.sectionId}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex min-h-11 items-center justify-between rounded-2xl px-4 text-[15px] font-bold transition-colors",
                        active ? "bg-white text-indigo shadow-soft" : "text-navy hover:bg-white",
                      )}
                    >
                      {item.label}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-4 text-navy/40" aria-hidden>
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 grid gap-2 border-t border-navy/10 pt-4">
              <a href="#contact" onClick={closeMenu} className="flex min-h-11 items-center rounded-2xl px-4 text-[15px] font-bold text-navy hover:bg-white">
                Parent Portal
              </a>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    openCustomizer();
                  }}
                  aria-label="Customize website"
                  className="grid size-11 shrink-0 place-items-center rounded-2xl border border-navy/10 bg-white text-navy"
                >
                  <SettingsIcon />
                </button>
                <EnquiryTrigger className="group flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-2xl bg-orange px-5 text-[15px] font-bold text-white shadow-card">
                  <span>Apply Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden>
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </EnquiryTrigger>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
