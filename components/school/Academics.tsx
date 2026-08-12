const academicStages = [
  {
    className: "academic-featured academic-pre",
    stage: "Pre-Primary",
    classes: "Nursery-KG",
    description: "Playful discovery, language readiness and early numeracy in warm, expressive classrooms.",
  },
  {
    className: "academic-medium academic-primary",
    stage: "Primary",
    classes: "Class 1-5",
    description: "Strong foundations through reading, inquiry, projects and confident communication.",
  },
  {
    className: "academic-medium academic-middle",
    stage: "Middle",
    classes: "Class 6-8",
    description: "Collaborative STEM, research habits and independent thinking across subjects.",
  },
  {
    className: "academic-small academic-secondary",
    stage: "Secondary",
    classes: "Class 9-10",
    description: "Focused CBSE preparation with labs, mentoring and balanced growth.",
  },
  {
    className: "academic-small academic-senior",
    stage: "Senior Secondary",
    classes: "Class 11-12",
    description: "Stream guidance, university readiness and advanced future-facing projects.",
  },
];

export default function Academics() {
  return (
    <section className="academics-section" id="academics" aria-labelledby="academics-title">
      <div className="academics-inner">
        <div className="academics-header">
          <div>
            <div className="section-kicker">ACADEMICS</div>
            <h2 id="academics-title">Learning pathways with room to explore, focus and lead.</h2>
          </div>
          <p>
            From early years to senior secondary, each stage has a distinct rhythm, image and academic
            focus while staying connected to one school journey.
          </p>
        </div>

        <div className="academics-grid">
          {academicStages.map((item) => (
            <article className={`academic-card ${item.className}`} key={item.stage}>
              <div className="academic-image" aria-hidden="true"></div>
              <div className="academic-overlay">
                <span>{item.classes}</span>
                <h3>{item.stage}</h3>
                <p>{item.description}</p>
                <a href="#grade-explorer">
                  Explore
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
