"use client";

import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    className: "achievement-board",
    label: "Board Results",
    target: 95,
    suffix: "%+",
    note: "Sample demo benchmark",
    image: "grade",
  },
  {
    className: "achievement-olympiad",
    label: "Olympiads",
    target: 28,
    suffix: "",
    note: "Sample demo recognitions",
    image: "science",
  },
  {
    className: "achievement-sports",
    label: "Sports",
    target: 12,
    suffix: "",
    note: "Sample demo medals",
    image: "sports",
  },
  {
    className: "achievement-competitions",
    label: "Competitions",
    target: 40,
    suffix: "+",
    note: "Sample demo participations",
    image: "debate",
  },
  {
    className: "achievement-admissions",
    label: "University Admissions",
    target: 1,
    suffix: ":1",
    note: "Sample demo counselling",
    image: "senior",
  },
];

function CounterNumber({ target, suffix, isActive }: { target: number; suffix: string; isActive: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    let frame = 0;
    const totalFrames = 56;

    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setValue(Math.round(target * progress));

      if (frame < totalFrames) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isActive, target]);

  return (
    <strong>
      {value}
      {suffix}
    </strong>
  );
}

export default function Achievements() {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="achievements-section" id="achievements" aria-labelledby="achievements-title" ref={sectionRef}>
      <div className="achievements-inner">
        <div className="achievements-header">
          <div>
            <div className="section-kicker">ACHIEVEMENTS</div>
            <h2 id="achievements-title">Celebrating progress without overstating claims.</h2>
          </div>
          <p>
            The figures shown here are clearly marked sample demo data for layout preview and can be
            replaced with verified school records.
          </p>
        </div>

        <div className="achievement-mosaic">
          {achievements.map((item) => (
            <article className={`achievement-item ${item.className}`} key={item.label}>
              <div className={`achievement-image ${item.image}`} aria-hidden="true"></div>
              <div className="achievement-copy">
                <span>{item.label}</span>
                <CounterNumber target={item.target} suffix={item.suffix} isActive={isActive} />
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
