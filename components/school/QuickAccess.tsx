import type { ReactNode } from "react";
import EnquiryTrigger from "./enquiry/EnquiryTrigger";
import { Reveal } from "../motion/Reveal";

const svg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "size-5",
  "aria-hidden": true,
};

type Item = {
  label: string;
  hint: string;
  href?: string;
  enquiry?: boolean;
  wrap: string;
  icon: ReactNode;
};

const items: Item[] = [
  {
    label: "Apply Online",
    hint: "Start admission",
    enquiry: true,
    wrap: "bg-orange/12 text-orange",
    icon: (
      <svg {...svg}>
        <path d="M5 4h14v16H5z" />
        <path d="M8 11.5 10.5 14 16 8" />
      </svg>
    ),
  },
  {
    label: "Fee Structure",
    hint: "Transparent fees",
    href: "#admissions",
    wrap: "bg-indigo/12 text-indigo",
    icon: (
      <svg {...svg}>
        <path d="M5 3h14v18H5z" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    label: "Academic Calendar",
    hint: "Dates & terms",
    href: "#news-events",
    wrap: "bg-teal/12 text-teal",
    icon: (
      <svg {...svg}>
        <path d="M5 5h14v14H5z" />
        <path d="M8 3v4M16 3v4M5 9h14" />
      </svg>
    ),
  },
  {
    label: "Transport",
    hint: "Safe routes",
    href: "#contact",
    wrap: "bg-blue/12 text-blue",
    icon: (
      <svg {...svg}>
        <path d="M4 16V7h11l4 4v5" />
        <path d="M7 17.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM15 17.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
      </svg>
    ),
  },
  {
    label: "Parent Portal",
    hint: "Stay connected",
    href: "#contact",
    wrap: "bg-coral/12 text-coral",
    icon: (
      <svg {...svg}>
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    ),
  },
  {
    label: "Mandatory Disclosure",
    hint: "CBSE norms",
    href: "#mandatory-disclosure",
    wrap: "bg-navy/10 text-navy",
    icon: (
      <svg {...svg}>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M8 9h8M8 13h8M8 17h5" />
      </svg>
    ),
  },
];

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-navy/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-navy" aria-hidden>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

function TileInner({ item }: { item: Item }) {
  return (
    <>
      <span className={`grid size-11 shrink-0 place-items-center rounded-xl transition-transform duration-200 group-hover:-translate-y-0.5 ${item.wrap}`}>
        {item.icon}
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-[13.5px] font-extrabold leading-tight text-navy">{item.label}</span>
        <span className="mt-0.5 hidden text-[11.5px] font-semibold leading-tight text-muted sm:block xl:hidden">{item.hint}</span>
      </span>
      {arrow}
    </>
  );
}

const tileClass =
  "group flex w-full appearance-none items-center gap-3 rounded-2xl border-0 bg-transparent p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo";

export default function QuickAccess() {
  return (
    <section
      id="quick-access"
      aria-label="Quick access for parents"
      data-no-reveal
      className="relative z-10 -mt-6 pb-14 lg:-mt-12 lg:pb-20"
    >
      <div className="mx-auto w-full max-w-wide px-5 sm:px-6 lg:px-8">
        <Reveal y={20}>
          <div className="rounded-[28px] border border-navy/8 bg-white/95 p-3 shadow-card backdrop-blur-sm sm:p-4">
            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2 xl:grid-cols-6 xl:divide-x xl:divide-navy/8">
              {items.map((item) =>
                item.enquiry ? (
                  <EnquiryTrigger key={item.label} className={`${tileClass} xl:px-4`}>
                    <TileInner item={item} />
                  </EnquiryTrigger>
                ) : (
                  <a key={item.label} href={item.href} className={`${tileClass} xl:px-4`}>
                    <TileInner item={item} />
                  </a>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
