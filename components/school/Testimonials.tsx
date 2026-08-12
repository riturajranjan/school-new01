"use client";

import { useState } from "react";

const testimonials = [
  {
    id: "parents",
    label: "Parents",
    name: "Priya & Rohit Mehra",
    role: "Parents, Class 6",
    quote:
      "The school brings academic structure and genuine warmth together. We see our child becoming more curious, confident and responsible every month.",
    metric: "Family partnership",
  },
  {
    id: "students",
    label: "Students",
    name: "Aarav Sharma",
    role: "Student, Class 10",
    quote:
      "Teachers help us think beyond textbooks. Projects, labs and clubs make learning feel active, and there is always someone guiding the next step.",
    metric: "Voice & confidence",
  },
  {
    id: "alumni",
    label: "Alumni",
    name: "Ananya Iyer",
    role: "Alumna, Class of 2023",
    quote:
      "The senior years gave me discipline, presentation skills and counselling support. I left campus ready for university life, not just exams.",
    metric: "Future readiness",
  },
];

export default function Testimonials() {
  const [activeId, setActiveId] = useState(testimonials[0].id);
  const activeIndex = testimonials.findIndex((item) => item.id === activeId);
  const active = testimonials[activeIndex] ?? testimonials[0];

  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials-inner">
        <div className="testimonial-copy">
          <div className="section-kicker">TESTIMONIALS</div>
          <h2 id="testimonials-title">Voices from our school community.</h2>
          <div className="testimonial-tabs" role="tablist" aria-label="Testimonial categories">
            {testimonials.map((item) => (
              <button
                type="button"
                role="tab"
                aria-selected={active.id === item.id}
                className={active.id === item.id ? "is-active" : ""}
                key={item.id}
                onClick={() => setActiveId(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`testimonial-composition testimonial-${active.id}`}>
          <div className="testimonial-portrait" aria-hidden="true">
            <div className="testimonial-portrait-image"></div>
            <span>{active.metric}</span>
          </div>

          <article className="testimonial-quote-card" key={active.id}>
            <span className="quote-mark">“</span>
            <blockquote>{active.quote}</blockquote>
            <div>
              <h3>{active.name}</h3>
              <p>{active.role}</p>
            </div>
          </article>

          <div className="testimonial-progress" aria-hidden="true">
            {testimonials.map((item, index) => (
              <span className={index <= activeIndex ? "is-filled" : ""} key={item.id}></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
