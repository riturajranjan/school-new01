"use client";

import { useState } from "react";

const stages = {
  "pre-primary": {
    className: "stage-pre-primary",
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

      <div className="grade-inner">
        <div className="section-kicker">FIND YOUR LEARNING STAGE</div>
        <div className="grade-layout">
          <div className="grade-left">
            <h2 id="grade-title">A thoughtful path from first steps to future choices.</h2>
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
                    {stages[stageKey].label}
                  </button>
                );
              })}
            </div>
          </div>

          <article className="stage-panel stage-switching" data-stage-panel key={activeStage}>
            <div className="stage-image-wrap">
              <div className="stage-image" role="img" aria-label={stage.imageLabel}></div>
              <div className="stage-orbit" aria-hidden="true">
                <span></span>
                <i></i>
              </div>
            </div>

            <div className="stage-content">
              <span className="stage-age" data-stage-age>
                {stage.age}
              </span>
              <h3 data-stage-title>{stage.title}</h3>
              <p data-stage-copy>{stage.copy}</p>

              <div className="stage-highlights" data-stage-highlights>
                {stage.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
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
