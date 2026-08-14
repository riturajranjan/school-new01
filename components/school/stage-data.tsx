import type { ReactNode } from "react";

export type StageKey = "pre" | "primary" | "middle" | "secondary" | "senior";

export type Stage = {
  key: StageKey;
  label: string;
  classes: string;
  age: string;
  title: string;
  copy: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  /** Tailwind utilities driven by the centralized --stage-* tokens. */
  text: string;
  bg: string;
  bgSoft: string;
  ring: string;
  border: string;
  gradient: string;
  icon: ReactNode;
};

const svg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const icons: Record<StageKey, ReactNode> = {
  pre: (
    <svg {...svg}>
      <rect x="3" y="12" width="7" height="8" rx="2" />
      <rect x="13" y="7" width="7" height="13" rx="2" />
      <path d="M6.5 4.5 3 9h7z" />
    </svg>
  ),
  primary: (
    <svg {...svg}>
      <path d="M4 5.5c3-1.3 6-.8 8 1v12c-2-1.8-5-2.3-8-1z" />
      <path d="M20 5.5c-3-1.3-6-.8-8 1v12c2-1.8 5-2.3 8-1z" />
    </svg>
  ),
  middle: (
    <svg {...svg}>
      <path d="M9 3h6M10 3v6l-5 8a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-8V3" />
      <path d="M8 15h8" />
    </svg>
  ),
  secondary: (
    <svg {...svg}>
      <path d="m3 8 9-5 9 5-9 5z" />
      <path d="M6 11v6l6 3 6-3v-6" />
      <path d="M21 8v6" />
    </svg>
  ),
  senior: (
    <svg {...svg}>
      <path d="M4 20V11h4v9M10 20V6h4v14M16 20V3h4v17" />
      <path d="m3 8 6-3 4 1 8-4" />
    </svg>
  ),
};

export const stages: Stage[] = [
  {
    key: "pre",
    label: "Pre-Primary",
    classes: "Nursery–KG",
    age: "Age 3–5",
    title: "Joyful foundations through play",
    copy: "Gentle routines, language-rich classrooms and sensory play help young children feel secure, expressive and school-ready.",
    highlights: ["Phonics & early numeracy", "Art, music & movement", "Warm transition support"],
    image: "/assets/stage-pre.png",
    imageAlt: "Pre-primary children learning through play at Sarvottam International School",
    text: "text-stage-pre",
    bg: "bg-stage-pre",
    bgSoft: "bg-stage-pre/12",
    ring: "ring-stage-pre",
    border: "border-stage-pre/25",
    gradient: "from-stage-pre to-stage-pre-2",
    icon: icons.pre,
  },
  {
    key: "primary",
    label: "Primary",
    classes: "Class 1–5",
    age: "Foundation Years",
    title: "Curious minds, confident basics",
    copy: "Reading fluency, mathematical thinking and project work build strong habits while keeping school joyful and personal.",
    highlights: ["Concept clarity", "Activity-based projects", "Communication confidence"],
    image: "/assets/stage-primary.png",
    imageAlt: "Primary students reading and collaborating in class",
    text: "text-stage-primary",
    bg: "bg-stage-primary",
    bgSoft: "bg-stage-primary/12",
    ring: "ring-stage-primary",
    border: "border-stage-primary/25",
    gradient: "from-stage-primary to-stage-primary/65",
    icon: icons.primary,
  },
  {
    key: "middle",
    label: "Middle",
    classes: "Class 6–8",
    age: "Preparatory Years",
    title: "Inquiry, collaboration & independence",
    copy: "Students move from guided learning to deeper investigation with labs, digital work and structured academic mentoring.",
    highlights: ["STEM exploration", "Research & teamwork", "Leadership habits"],
    image: "/assets/stage-middle.png",
    imageAlt: "Middle school students working with science and technology",
    text: "text-stage-middle",
    bg: "bg-stage-middle",
    bgSoft: "bg-stage-middle/12",
    ring: "ring-stage-middle",
    border: "border-stage-middle/25",
    gradient: "from-stage-middle to-stage-middle/65",
    icon: icons.middle,
  },
  {
    key: "secondary",
    label: "Secondary",
    classes: "Class 9–10",
    age: "Board Readiness",
    title: "Focused preparation with balance",
    copy: "Rigorous CBSE preparation is supported by regular diagnostics, study planning and opportunities beyond the textbook.",
    highlights: ["Board exam strategy", "Lab-led concepts", "Mentor feedback"],
    image: "/assets/stage-secondary.png",
    imageAlt: "Secondary students in a focused lab session",
    text: "text-stage-secondary",
    bg: "bg-stage-secondary",
    bgSoft: "bg-stage-secondary/12",
    ring: "ring-stage-secondary",
    border: "border-stage-secondary/25",
    gradient: "from-stage-secondary to-stage-secondary/65",
    icon: icons.secondary,
  },
  {
    key: "senior",
    label: "Senior Secondary",
    classes: "Class 11–12",
    age: "Streams & Futures",
    title: "Future-ready pathways and purpose",
    copy: "Science, Commerce and Humanities streams with career guidance and advanced projects prepare students for university and life.",
    highlights: ["Science · Commerce · Humanities", "University readiness", "Career counselling"],
    image: "/assets/stage-senior.png",
    imageAlt: "Senior secondary students working on future-ready projects",
    text: "text-stage-senior",
    bg: "bg-stage-senior",
    bgSoft: "bg-stage-senior/12",
    ring: "ring-stage-senior",
    border: "border-stage-senior/25",
    gradient: "from-stage-senior to-stage-senior/65",
    icon: icons.senior,
  },
];

export const stageMap = Object.fromEntries(stages.map((s) => [s.key, s])) as Record<
  StageKey,
  Stage
>;

/** Senior Secondary streams — merged in from the removed standalone section. */
export const seniorStreams = [
  {
    title: "Science",
    subjects: "Physics · Chemistry · Maths · Biology · Computer Science",
    direction: "Engineering, medicine, research, data & technology",
  },
  {
    title: "Commerce",
    subjects: "Accountancy · Business Studies · Economics · Maths",
    direction: "Business, finance, management, economics & law",
  },
  {
    title: "Humanities",
    subjects: "History · Political Science · Psychology · Sociology · English",
    direction: "Civil services, law, design, media, policy & liberal arts",
  },
];
