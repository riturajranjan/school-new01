"use client";

import { useState } from "react";

const facilities = [
  {
    key: "smart",
    label: "Smart Classrooms",
    className: "facility-smart",
    description: "Interactive boards and flexible seating support focused, technology-enabled teaching.",
  },
  {
    key: "science",
    label: "Science Labs",
    className: "facility-science",
    description: "Well-equipped labs help students investigate concepts through safe, hands-on experiments.",
  },
  {
    key: "computer",
    label: "Computer Lab",
    className: "facility-computer",
    description: "Digital learning spaces develop coding, research and confident technology habits.",
  },
  {
    key: "robotics",
    label: "Robotics Lab",
    className: "facility-robotics",
    description: "Makerspace experiences introduce robotics, engineering thinking and collaborative problem solving.",
  },
  {
    key: "library",
    label: "Library",
    className: "facility-library",
    description: "Quiet reading corners and curated resources nurture research, imagination and independent study.",
  },
  {
    key: "sports",
    label: "Sports",
    className: "facility-sports",
    description: "Open courts and guided coaching build strength, teamwork and healthy routines.",
  },
  {
    key: "music-art",
    label: "Music & Art",
    className: "facility-music",
    description: "Creative studios give students space for visual art, music practice and performance confidence.",
  },
  {
    key: "auditorium",
    label: "Auditorium",
    className: "facility-auditorium",
    description: "A polished gathering space for assemblies, performances, talks and community celebrations.",
  },
  {
    key: "transport",
    label: "Transport",
    className: "facility-transport",
    description: "Organized bus movement and supervised routes keep daily travel dependable for families.",
  },
  {
    key: "security",
    label: "Security",
    className: "facility-security",
    description: "Monitored entry points and campus protocols support a calm, safe school environment.",
  },
];

export default function Facilities() {
  const [activeFacility, setActiveFacility] = useState(0);
  const facility = facilities[activeFacility];

  return (
    <section className={`facilities-section ${facility.className}`} id="facilities" aria-labelledby="facilities-title">
      <div className="facilities-inner">
        <div className="facilities-copy">
          <div className="section-kicker">FACILITIES</div>
          <h2 id="facilities-title">Spaces designed for discovery, safety and school life.</h2>
          <p>
            Explore the facilities that support academic focus, creative confidence, active wellbeing
            and a secure campus experience.
          </p>

          <div className="facility-selector" role="tablist" aria-label="School facilities">
            {facilities.map((item, index) => {
              const isActive = index === activeFacility;

              return (
                <button
                  className={`facility-tab${isActive ? " is-active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  key={item.key}
                  onClick={() => setActiveFacility(index)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <article className="facility-active-card" key={facility.key}>
          <div className="facility-image" aria-label={facility.label} role="img"></div>
          <div className="facility-glass">
            <span>Active Facility</span>
            <h3>{facility.label}</h3>
            <p>{facility.description}</p>
            <a href="#">
              Explore
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="facility-badge" aria-hidden="true">
            <span></span>
            <i></i>
          </div>
        </article>
      </div>
    </section>
  );
}
