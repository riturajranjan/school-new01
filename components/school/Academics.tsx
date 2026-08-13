const academicStages = [
  {
    className: "academic-pre",
    stage: "Pre-Primary",
    classes: "Nursery–KG",
    description:
      "Playful discovery, language readiness and early numeracy in warm, expressive classrooms.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="8" width="7" height="7" rx="1" />
        <rect x="14" y="8" width="7" height="7" rx="1" />
        <rect x="8.5" y="2.5" width="7" height="7" rx="1" />
        <path d="M6.5 11.5h0M17.5 11.5h0M12 6h0" />
      </svg>
    ),
  },
  {
    className: "academic-primary",
    stage: "Primary",
    classes: "Class 1–5",
    description:
      "Strong foundations through reading, inquiry, projects and confident communication.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5.5c3-1.3 6-.8 9 1.1v12c-3-1.8-6-2.3-9-1z" />
        <path d="M21 5.5c-3-1.3-6-.8-9 1.1v12c3-1.8 6-2.3 9-1z" />
      </svg>
    ),
  },
  {
    className: "academic-middle",
    stage: "Middle",
    classes: "Class 6–8",
    description:
      "Collaborative STEM, research habits and independent thinking across subjects.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 3h4" />
        <path d="m10 3 1 4-4 3 2 3" />
        <path d="M8 13h7" />
        <path d="M6 17h11" />
        <path d="M8 21h9" />
        <path d="M14 7l3 3" />
      </svg>
    ),
  },
  {
    className: "academic-secondary",
    stage: "Secondary",
    classes: "Class 9–10",
    description:
      "Focused CBSE preparation with labs, mentoring and balanced growth.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 8 9-5 9 5-9 5z" />
        <path d="M6 11v6l6 3 6-3v-6" />
        <path d="M21 8v6" />
      </svg>
    ),
  },
  {
    className: "academic-senior",
    stage: "Senior Secondary",
    classes: "Class 11–12",
    description:
      "Stream guidance, university readiness and advanced future-facing projects.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20V11h4v9" />
        <path d="M10 20V7h4v13" />
        <path d="M16 20V3h4v17" />
        <path d="m4 8 5-3 4 1 7-4" />
      </svg>
    ),
  },
];

export default function Academics() {
  return (
    <section
      className="academics-section"
      id="academics"
      aria-labelledby="academics-title">
      <div className="academics-inner">
        <div className="academics-header">
          <div className="academics-heading">
            <div className="section-kicker">
              <span className="kicker-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 5.5c3-1.3 6-.8 9 1.1v12c-3-1.8-6-2.3-9-1z" />
                  <path d="M21 5.5c-3-1.3-6-.8-9 1.1v12c3-1.8 6-2.3 9-1z" />
                </svg>
              </span>
              LEARNING PATHWAYS
            </div>

            <h2 id="academics-title">
              Learning pathways
              <br />
              with room to <span>explore</span>,
              <br />
              focus and lead.
            </h2>

            <div className="academics-heading-line">
              <span />
              <i />
            </div>
          </div>

          <div className="academics-intro">
            <p>
              From early years to senior secondary,
              <br />
              each stage has a distinct rhythm,
              <br />
              image and academic focus while
              <br />
              staying connected to one school
              <br />
              journey.
            </p>
          </div>

          <div className="academics-decoration" aria-hidden="true">
            <svg viewBox="0 0 230 190">
              <path
                className="dash-path"
                d="M12 170c47-24 60-58 59-94-1-34 25-52 57-51 29 2 57-15 77-22"
              />
              <path className="cap" d="m134 72 34-18 34 18-34 18z" />
              <path className="cap" d="M146 79v21c13 9 31 9 44 0V79" />
              <path className="cap" d="M202 72v29" />
              <circle cx="202" cy="104" r="3" />
            </svg>
          </div>
        </div>

        <div className="academics-grid">
          {academicStages.map((item) => (
            <article
              className={`academic-card ${item.className}`}
              key={item.stage}>
              <div className="academic-card-inner">
                <div className="academic-copy">
                  <div className="academic-meta">
                    <span className="academic-icon">{item.icon}</span>
                    <span className="academic-badge">{item.classes}</span>
                  </div>

                  <h3>{item.stage}</h3>

                  <span className="academic-title-line" />

                  <p>{item.description}</p>

                  <a href="#grade-explorer">
                    Explore
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </a>
                </div>

                <div className="academic-image" aria-hidden="true" />
                <div className="academic-image-fade" aria-hidden="true" />
                <div className="academic-corner" aria-hidden="true" />
              </div>
            </article>
          ))}

          <article className="academic-journey-card">
            <div className="journey-copy">
              <span className="journey-school-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 21h18" />
                  <path d="M5 21V10l7-5 7 5v11" />
                  <path d="M9 21v-6h6v6" />
                  <path d="M12 5V2" />
                  <path d="M12 2h5l-2 2 2 2h-5" />
                </svg>
              </span>

              <h3>
                One School.
                <br />
                <span>Every Stage.</span>
              </h3>

              <i />

              <p>
                A seamless journey with
                <br />
                consistent values, care and
                <br />
                academic excellence.
              </p>
            </div>

            <div className="journey-map" aria-hidden="true">
              <svg viewBox="0 0 300 250">
                <path
                  className="journey-road"
                  d="M52 205c37-36 105-14 137-45 31-31-42-50-6-78 24-19 60-6 83-41"
                />

                <circle className="map-dot dot-one" cx="66" cy="200" r="8" />
                <circle className="map-dot dot-two" cx="190" cy="159" r="8" />
                <circle className="map-dot dot-three" cx="181" cy="77" r="8" />
                <circle className="map-dot dot-four" cx="263" cy="38" r="8" />

                <path className="tree" d="M23 143c11-25 28-25 39 0m-19-12v37" />
                <path
                  className="tree"
                  d="M236 178c12-27 30-27 42 0m-21-13v42"
                />
              </svg>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
