"use client";

import { useState } from "react";

const stages = {
  "pre-primary": {
    className: "stage-pre-primary",
    icon: "smile",
    imageLabel: "Pre-primary children learning through play",
    age: "Age 3-5 | Nursery-KG",
    title: "Joyful foundations through play",
    copy:
      "Gentle routines, language-rich classrooms and sensory learning help young children feel secure, expressive and ready for school.",
    highlights: ["Phonics and early numeracy", "Art, music and movement", "Warm transition support"],
    label: "Pre-Primary",
  },
  primary: {
    className: "stage-primary",
    icon: "book",
    imageLabel: "Primary students reading and building a classroom project",
    age: "Class 1-5 | Foundation Years",
    title: "Curious minds, confident basics",
    copy:
      "Reading fluency, mathematical thinking and project work build strong habits while keeping school joyful and personal.",
    highlights: ["Concept clarity", "Activity-based projects", "Communication confidence"],
    label: "Class 1-5",
  },
  middle: {
    className: "stage-middle",
    icon: "lab",
    imageLabel: "Middle school students collaborating with science and technology",
    age: "Class 6-8 | Preparatory Years",
    title: "Inquiry, collaboration and independence",
    copy:
      "Students move from guided learning to deeper investigation with labs, digital work and structured academic mentoring.",
    highlights: ["STEM exploration", "Research and teamwork", "Leadership habits"],
    label: "Class 6-8",
  },
  secondary: {
    className: "stage-secondary",
    icon: "target",
    imageLabel: "Secondary students learning through focused lab experiments",
    age: "Class 9-10 | Board Readiness",
    title: "Focused preparation with balance",
    copy:
      "Rigorous CBSE preparation is supported by regular diagnostics, study planning and opportunities beyond the textbook.",
    highlights: ["Board exam strategy", "Lab-led concepts", "Mentor feedback"],
    label: "Class 9-10",
  },
  senior: {
    className: "stage-senior",
    icon: "cap",
    imageLabel: "Senior secondary students working on future-ready STEM learning",
    age: "Class 11-12 | Senior Secondary",
    title: "Future-ready pathways and purpose",
    copy:
      "Academic streams, career guidance and advanced projects help students prepare for university, leadership and life.",
    highlights: ["Stream guidance", "Competitive readiness", "Innovation projects"],
    label: "Class 11-12",
  },
};

type StageKey = keyof typeof stages;

const stageOrder: StageKey[] = ["pre-primary", "primary", "middle", "secondary", "senior"];

function StageIcon({ type }: { type: string }) {
  if (type === "book") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H20v17H8.5A3.5 3.5 0 0 0 5 22Z" />
        <path d="M5 5.5V22M8 6h8" />
      </svg>
    );
  }

  if (type === "lab") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 3h6M10 3v5l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V3" />
        <path d="M8 15h8" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M15 9l4-4M19 5h-4V1" />
      </svg>
    );
  }

  if (type === "cap") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 8 9-5 9 5-9 5Z" />
        <path d="M7 11v5c3 2 7 2 10 0v-5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="8.5" cy="9" r="1.2" />
      <circle cx="15.5" cy="9" r="1.2" />
      <path d="M8 14c1.8 2 6.2 2 8 0" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function StageSymbol({ stageKey }: { stageKey: StageKey }) {
  const symbolType =
    stageKey === "primary"
      ? "book"
      : stageKey === "middle"
        ? "lab"
        : stageKey === "secondary"
          ? "target"
          : stageKey === "senior"
            ? "bulb"
            : "blocks";

  if (symbolType === "bulb") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M24 49h16M26 56h12" />
        <path d="M22 28a10 10 0 1 1 20 0c0 7-6 9-6 16h-8c0-7-6-9-6-16Z" />
        <path d="M32 7v6M48 16l-4 4M16 16l4 4" />
      </svg>
    );
  }

  if (symbolType === "target") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="18" />
        <circle cx="32" cy="32" r="8" />
        <path d="M38 26 51 13M51 13h-9M51 13v9" />
      </svg>
    );
  }

  if (symbolType === "lab") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M25 10h14M28 10v14L16 46a6 6 0 0 0 5 9h22a6 6 0 0 0 5-9L36 24V10" />
        <path d="M22 42h20" />
      </svg>
    );
  }

  if (symbolType === "book") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M14 16h16a8 8 0 0 1 8 8v28a8 8 0 0 0-8-8H14Z" />
        <path d="M50 16H38a8 8 0 0 0-8 8v28a8 8 0 0 1 8-8h12Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="34" width="16" height="16" rx="4" />
      <rect x="28" y="22" width="16" height="28" rx="4" />
      <rect x="46" y="32" width="10" height="18" rx="3" />
      <path d="M36 22 28 34h16Z" />
    </svg>
  );
}

function HighlightIcon({ stageKey, index }: { stageKey: StageKey; index: number }) {
  const icon =
    stageKey === "senior"
      ? ["path", "target", "bulb"][index]
      : stageKey === "secondary"
        ? ["target", "lab", "chat"][index]
        : stageKey === "middle"
          ? ["lab", "team", "spark"][index]
          : stageKey === "primary"
            ? ["book", "blocks", "chat"][index]
            : ["abc", "music", "heart"][index];

  if (icon === "path") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 19c4 0 4-14 8-14h6" />
        <path d="m16 2 3 3-3 3" />
      </svg>
    );
  }

  if (icon === "bulb" || icon === "spark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 18h6M10 22h4" />
        <path d="M8 10a4 4 0 1 1 8 0c0 3-2 4-2 7h-4c0-3-2-4-2-7Z" />
      </svg>
    );
  }

  if (icon === "target") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }

  if (icon === "lab") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 3h6M10 3v5l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V3" />
      </svg>
    );
  }

  if (icon === "book") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5h8a4 4 0 0 1 4 4v10a4 4 0 0 0-4-4H5Z" />
      </svg>
    );
  }

  if (icon === "team" || icon === "chat") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 7h14v9H8l-3 3Z" />
      </svg>
    );
  }

  if (icon === "blocks") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="12" width="7" height="7" rx="2" />
        <rect x="13" y="7" width="7" height="12" rx="2" />
      </svg>
    );
  }

  if (icon === "music") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 18a3 3 0 1 1-2-2.83V6l10-2v10" />
        <path d="M17 16a3 3 0 1 1-2-2.83" />
      </svg>
    );
  }

  if (icon === "heart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z" />
      </svg>
    );
  }

  return <span aria-hidden="true">ABC</span>;
}

export default function GradeExplorer() {
  const [activeStage, setActiveStage] = useState<StageKey>("pre-primary");
  const stage = stages[activeStage];

  return (
    <section
      className={`grade-explorer ${stage.className}`}
      id="grade-explorer"
      aria-labelledby="grade-title"
      data-grade-explorer
    >
      <div className="stage-shape stage-shape-a" aria-hidden="true"></div>
      <div className="stage-shape stage-shape-b" aria-hidden="true"></div>
      <div className="grade-desk-decor" aria-hidden="true">
        <span className="decor-book decor-book-one"></span>
        <span className="decor-book decor-book-two"></span>
        <span className="decor-plant">
          <i></i>
        </span>
        <span className="decor-sphere"></span>
      </div>

      <div className="grade-inner">
        <div className="section-kicker">FIND YOUR LEARNING STAGE</div>
        <div className="grade-layout">
          <div className="grade-left">
            <h2 id="grade-title">
              A thoughtful
              <br />
              path from first
              <br />
              steps to <em>future</em>
              <br />
              choices.
            </h2>
            <p className="grade-intro">
              Choose a stage to see how learning, support and independence evolve across the school
              years.
            </p>

            <div className="stage-tabs" role="tablist" aria-label="Learning stages">
              {stageOrder.map((stageKey) => {
                const isActive = stageKey === activeStage;

                return (
                  <button
                    className={`stage-tab${isActive ? " is-active" : ""}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    data-stage={stageKey}
                    key={stageKey}
                    onClick={() => setActiveStage(stageKey)}
                  >
                    <span className="stage-tab-icon">
                      <StageIcon type={stages[stageKey].icon} />
                    </span>
                    <span className="stage-tab-copy">
                      <strong>{stages[stageKey].label}</strong>
                      {stageKey === "pre-primary" && <small>Age 3-5 | Nursery-KG</small>}
                    </span>
                    <span className="stage-tab-arrow" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <article className="stage-panel stage-switching" data-stage-panel key={activeStage}>
            <div className="stage-image-wrap">
              <div className="stage-image" role="img" aria-label={stage.imageLabel}></div>
              <div className="stage-photo-icon" aria-hidden="true">
                <StageIcon type="cap" />
              </div>
              <div className="stage-orbit" aria-hidden="true">
                <StageSymbol stageKey={activeStage} />
              </div>
            </div>

            <div className="stage-content">
              <span className="stage-age" data-stage-age>
                {stage.age}
              </span>
              <h3 data-stage-title>{stage.title}</h3>
              <p data-stage-copy>{stage.copy}</p>

              <div className="stage-highlights" data-stage-highlights>
                {stage.highlights.map((highlight, index) => (
                  <span key={highlight}>
                    <i aria-hidden="true">
                      <HighlightIcon stageKey={activeStage} index={index} />
                    </i>
                    {highlight}
                  </span>
                ))}
              </div>

              <a className="stage-cta" href="#academics">
                Explore Stage
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
