import type { ReactNode } from "react";
import { DrawPath } from "../motion/DrawPath";
import { Reveal } from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import { cn } from "../ui/cn";

const svg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

type Node = { title: string; copy: string; tint: string; icon: ReactNode };

const nodes: Node[] = [
  {
    title: "Concept Clarity",
    copy: "Connect ideas and apply concepts across subjects.",
    tint: "bg-indigo",
    icon: (<svg {...svg}><path d="M12 3a6 6 0 0 0-4 10c1 1 1.5 2 1.5 4h5c0-2 .5-3 1.5-4A6 6 0 0 0 12 3Z" /><path d="M9.5 21h5" /></svg>),
  },
  {
    title: "Experiential Learning",
    copy: "Projects, labs and field inquiry turn lessons into understanding.",
    tint: "bg-teal",
    icon: (<svg {...svg}><path d="M9 3h6M10 3v6l-5 8a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-8V3" /></svg>),
  },
  {
    title: "Technology",
    copy: "Digital fluency through smart tools and responsible use.",
    tint: "bg-blue",
    icon: (<svg {...svg}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>),
  },
  {
    title: "Creativity",
    copy: "Art, design and expression woven into everyday learning.",
    tint: "bg-orange",
    icon: (<svg {...svg}><path d="M12 19a7 7 0 1 1 7-7c0 2-1 3-3 3h-1a2 2 0 0 0-2 2 2 2 0 0 1-1 2Z" /><circle cx="8.5" cy="10.5" r="1" /><circle cx="12" cy="8" r="1" /><circle cx="15.5" cy="10.5" r="1" /></svg>),
  },
  {
    title: "Sports & Wellbeing",
    copy: "Fitness, teamwork and resilience through structured PE.",
    tint: "bg-coral",
    icon: (<svg {...svg}><circle cx="12" cy="12" r="9" /><path d="M12 3c3 3 3 15 0 18M3 12c3-3 15-3 18 0" /></svg>),
  },
  {
    title: "Character & Leadership",
    copy: "Values, empathy and leadership built through school life.",
    tint: "bg-stage-senior",
    icon: (<svg {...svg}><path d="M12 3 5 6v5c0 5 3.5 8 7 10 3.5-2 7-5 7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>),
  },
];

function NodeCard({ node, className }: { node: Node; className?: string }) {
  return (
    <div className={cn("w-44 text-center", className)}>
      <span className={cn("mx-auto grid size-12 place-items-center rounded-2xl text-white shadow-card [&_svg]:size-6", node.tint)}>
        {node.icon}
      </span>
      <h3 className="mt-3 type-card text-[1.05rem] text-navy">{node.title}</h3>
      <p className="mt-1 text-[12.5px] font-medium leading-snug text-muted">{node.copy}</p>
    </div>
  );
}

export default function LearningApproach() {
  return (
    <section
      id="learning-approach"
      data-no-reveal
      aria-labelledby="learning-title"
      className="relative overflow-hidden bg-soft-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-wide px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="type-eyebrow inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-indigo shadow-soft">
              <span className="size-1.5 rounded-full bg-indigo" />
              Learning Approach
            </span>
            <h2 id="learning-title" className="type-h2 mt-4 text-navy">
              Learning that moves from concept to confidence.
            </h2>
          </div>
        </Reveal>

        {/* ---- desktop curved journey ---- */}
        <div className="relative mt-14 hidden h-[22rem] lg:block">
          <div className="absolute inset-x-8 top-1/2 -translate-y-1/2">
            <DrawPath
              d="M4 40 C 200 4, 340 76, 540 40 S 900 4, 1180 40"
              viewBox="0 0 1184 80"
              className="h-20 w-full text-indigo/35"
              strokeWidth={3}
              duration={1.4}
            />
          </div>
          <StaggerGroup className="absolute inset-0 flex items-center justify-between px-2" stagger={0.09}>
            {nodes.map((n, i) => (
              <StaggerItem key={n.title} className="relative flex h-full w-44 items-center justify-center">
                <span className={cn("absolute left-1/2 top-1/2 z-10 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-soft-cream", n.tint)} />
                <NodeCard node={n} className={cn("absolute left-1/2 -translate-x-1/2", i % 2 === 0 ? "bottom-1/2 mb-8" : "top-1/2 mt-8")} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* ---- mobile vertical journey ---- */}
        <StaggerGroup className="relative mt-10 lg:hidden" stagger={0.08}>
          <span aria-hidden className="absolute bottom-4 left-6 top-4 w-0.5 rounded-full bg-navy/10" />
          <ol className="flex list-none flex-col gap-6">
            {nodes.map((n) => (
              <StaggerItem key={n.title}>
                <li className="relative flex items-start gap-4 pl-0">
                  <span className={cn("relative z-10 grid size-12 shrink-0 place-items-center rounded-2xl text-white shadow-card [&_svg]:size-6", n.tint)}>
                    {n.icon}
                  </span>
                  <div className="pt-1">
                    <h3 className="type-card text-[1.05rem] text-navy">{n.title}</h3>
                    <p className="mt-1 text-[13px] font-medium leading-snug text-muted">{n.copy}</p>
                  </div>
                </li>
              </StaggerItem>
            ))}
          </ol>
        </StaggerGroup>
      </div>
    </section>
  );
}
