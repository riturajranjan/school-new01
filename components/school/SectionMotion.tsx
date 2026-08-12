"use client";

import { useEffect } from "react";

const sectionAnimationMap: Record<string, string> = {
  "quick-access": "cards",
  "grade-explorer": "panel",
  about: "image-text",
  academics: "cards",
  "learning-approach": "feature",
  facilities: "image-text",
  "student-life": "gallery",
  "senior-secondary": "panel",
  achievements: "cards",
  faculty: "cards",
  "news-events": "cards",
  testimonials: "image-text",
  faq: "panel",
  admissions: "text",
  contact: "minimal",
};

export default function SectionMotion() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id], footer[id]"));

    sections.forEach((section) => {
      section.dataset.reveal = sectionAnimationMap[section.id] ?? "text";
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -14% 0px", threshold: 0.14 },
    );

    sections.forEach((section) => revealObserver.observe(section));

    return () => revealObserver.disconnect();
  }, []);

  return null;
}
