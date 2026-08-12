"use client";

import { useState } from "react";

const faqs = [
  {
    category: "Admissions",
    question: "How do we begin the admission process?",
    answer:
      "Parents can enquire online, schedule a campus visit, complete the application form and attend an age-appropriate interaction with the admissions team.",
  },
  {
    category: "Transport",
    question: "Is school transport available?",
    answer:
      "Yes. Transport routes are planned around major residential areas, with verified staff, route coordination and regular communication with parents.",
  },
  {
    category: "Curriculum",
    question: "Which curriculum does the school follow?",
    answer:
      "The school follows a CBSE-aligned academic framework with concept-based lessons, experiential projects and future-ready skill development.",
  },
  {
    category: "Fee",
    question: "Where can parents view the fee structure?",
    answer:
      "The fee structure is shared through the admissions office and parent portal, along with payment timelines and applicable transport or activity details.",
  },
  {
    category: "Facilities",
    question: "What facilities are available on campus?",
    answer:
      "Students have access to smart classrooms, science and computer labs, library spaces, sports areas, arts facilities, transport and campus safety systems.",
  },
  {
    category: "School Timings",
    question: "What are the school timings?",
    answer:
      "Timings vary by learning stage. The admissions office shares the current stage-wise schedule during enquiry and orientation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-inner">
        <div className="faq-heading">
          <div className="section-kicker">FAQ</div>
          <h2 id="faq-title">Clear answers for admission-ready families.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={faq.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{faq.category}</span>
                  <strong>{faq.question}</strong>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="faq-panel" id={`faq-panel-${index}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
