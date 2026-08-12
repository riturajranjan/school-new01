"use client";

import { useEffect, useState } from "react";

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

export default function Header() {
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > 16);
    };

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

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.12, 0.28, 0.44],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header${isCompact ? " is-compact" : ""}${isMenuOpen ? " menu-open" : ""}`} data-header>
      <div className="utility-bar">
        <div className="utility-inner">
          <span>CBSE Affiliation</span>
          <span>Parent Portal</span>
          <a href="tel:+911234567890">+91 12345 67890</a>
          <span>English / हिन्दी</span>
        </div>
      </div>

      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="School home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <span>S</span>
          </span>
          <span>
            <strong>Sarvottam International School</strong>
            <small>Classes 0-12</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="nav-links" id="primary-navigation">
          {navItems.map((item) => (
            <a
              href={item.href}
              className={activeSection === item.sectionId ? "is-active" : ""}
              aria-current={activeSection === item.sectionId ? "page" : undefined}
              onClick={closeMenu}
              key={item.sectionId}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="search-button" type="button" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
            </svg>
          </button>
          <a className="apply-button" href="#admissions" onClick={closeMenu}>
            Apply Now
          </a>
        </div>
      </nav>
    </header>
  );
}
