const supportingStrengths = [
  {
    className: "support-tech",
    title: "Technology",
    copy: "Digital fluency through smart tools, responsible use and classroom integration.",
  },
  {
    className: "support-creativity",
    title: "Creativity",
    copy: "Art, design and expression woven into everyday learning experiences.",
  },
  {
    className: "support-sports",
    title: "Sports",
    copy: "Fitness, teamwork and resilience through structured physical education.",
  },
  {
    className: "support-character",
    title: "Character Development",
    copy: "Values, empathy and leadership habits built through school life.",
  },
];

export default function LearningApproach() {
  return (
    <section className="learning-approach" id="learning-approach" aria-labelledby="learning-title">
      <div className="learning-shape learning-shape-one" aria-hidden="true"></div>
      <div className="learning-shape learning-shape-two" aria-hidden="true"></div>

      <div className="learning-inner">
        <div className="learning-heading">
          <div className="section-kicker">LEARNING APPROACH</div>
          <h2 id="learning-title">Learning that moves from concept to confidence.</h2>
        </div>

        <div className="learning-grid">
          <article className="learning-feature">
            <div className="learning-feature-copy">
              <span>Core Strength</span>
              <h3>Concept-based Learning</h3>
              <p>
                Students build deep understanding by connecting ideas, asking better questions and
                applying concepts across subjects.
              </p>
            </div>
            <div className="concept-orbit" aria-hidden="true">
              <span></span>
              <i></i>
            </div>
          </article>

          <article className="learning-image-card">
            <img src="/assets/grade-stage-strip.png" alt="Students collaborating in a modern school learning space" />
            <div>
              <strong>Experiential Learning</strong>
              <span>Projects, labs, field inquiry and reflection turn lessons into lived understanding.</span>
            </div>
          </article>

          <div className="learning-supports">
            {supportingStrengths.map((item) => (
              <article className={`learning-support ${item.className}`} key={item.title}>
                <div className="support-mark" aria-hidden="true"></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
