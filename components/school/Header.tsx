"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${isCompact ? " is-compact" : ""}`} data-header>
      <div className="utility-bar">
        <div className="utility-inner">
          <span>CBSE Affiliation</span>
          <span>Parent Portal</span>
          <a href="tel:+911234567890">+91 12345 67890</a>
          <span>English / हिन्दी</span>
        </div>
      </div>

      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#" aria-label="School home">
          <span className="brand-mark" aria-hidden="true">
            <span>S</span>
          </span>
          <span>
            <strong>Sarvottam International School</strong>
            <small>Classes 0-12</small>
          </span>
        </a>

        <button className="menu-button" type="button" aria-label="Open navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="nav-links">
          <a href="#">About</a>
          <a href="#">Academics</a>
          <a href="#">Admissions</a>
          <a href="#">Student Life</a>
          <a href="#">Facilities</a>
          <a href="#">Achievements</a>
          <a href="#">News &amp; Events</a>
          <a href="#">Contact</a>
        </div>

        <div className="nav-actions">
          <button className="search-button" type="button" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
            </svg>
          </button>
          <a className="apply-button" href="#">
            Apply Now
          </a>
        </div>
      </nav>
    </header>
  );
}
