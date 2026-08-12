const achievements = [
  {
    className: "achievement-board",
    label: "Board Results",
    number: "95%+",
    note: "Sample demo benchmark",
    image: "grade",
  },
  {
    className: "achievement-olympiad",
    label: "Olympiads",
    number: "28",
    note: "Sample demo recognitions",
    image: "science",
  },
  {
    className: "achievement-sports",
    label: "Sports",
    number: "12",
    note: "Sample demo medals",
    image: "sports",
  },
  {
    className: "achievement-competitions",
    label: "Competitions",
    number: "40+",
    note: "Sample demo participations",
    image: "debate",
  },
  {
    className: "achievement-admissions",
    label: "University Admissions",
    number: "1:1",
    note: "Sample demo counselling",
    image: "senior",
  },
];

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements" aria-labelledby="achievements-title">
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
                <strong>{item.number}</strong>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
