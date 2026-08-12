const streams = [
  {
    className: "stream-science",
    title: "SCIENCE",
    subjects: "Physics, Chemistry, Mathematics, Biology, Computer Science",
    resources: "Science labs, robotics access, research projects",
    direction: "Engineering, medicine, research, data and technology",
  },
  {
    className: "stream-commerce",
    title: "COMMERCE",
    subjects: "Accountancy, Business Studies, Economics, Mathematics",
    resources: "Case studies, entrepreneurship labs, financial literacy",
    direction: "Business, finance, management, economics and law",
  },
  {
    className: "stream-humanities",
    title: "HUMANITIES",
    subjects: "History, Political Science, Psychology, Sociology, English",
    resources: "Debate forums, research writing, social inquiry",
    direction: "Civil services, law, design, media, policy and liberal arts",
  },
];

export default function SeniorSecondary() {
  return (
    <section className="senior-secondary" id="senior-secondary" aria-labelledby="senior-title">
      <div className="senior-inner">
        <div className="senior-header">
          <div className="section-kicker">SENIOR SECONDARY STREAMS</div>
          <h2 id="senior-title">Focused pathways for university and life beyond school.</h2>
          <p>
            A mature academic environment combines subject depth, resources, career direction and
            individual counselling for Classes 11-12.
          </p>
        </div>

        <div className="stream-board" aria-hidden="true">
          <span></span>
          <i></i>
          <b></b>
        </div>

        <div className="stream-grid">
          {streams.map((stream) => (
            <article className={`stream-card ${stream.className}`} key={stream.title}>
              <div className="stream-line" aria-hidden="true"></div>
              <h3>{stream.title}</h3>
              <dl>
                <div>
                  <dt>Subjects</dt>
                  <dd>{stream.subjects}</dd>
                </div>
                <div>
                  <dt>Labs / Resources</dt>
                  <dd>{stream.resources}</dd>
                </div>
                <div>
                  <dt>Career Direction</dt>
                  <dd>{stream.direction}</dd>
                </div>
                <div>
                  <dt>Counselling</dt>
                  <dd>Stream mentoring, aptitude conversations and college planning support.</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
