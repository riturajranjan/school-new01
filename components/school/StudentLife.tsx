const lifeItems = [
  { className: "life-sports life-tall", label: "Sports" },
  { className: "life-music", label: "Music" },
  { className: "life-dance life-wide", label: "Dance" },
  { className: "life-art", label: "Art" },
  { className: "life-robotics life-tall", label: "Robotics" },
  { className: "life-debate", label: "Debate" },
  { className: "life-clubs life-wide", label: "Clubs" },
  { className: "life-trips", label: "Trips" },
  { className: "life-events", label: "Events" },
];

export default function StudentLife() {
  return (
    <section className="student-life" id="student-life" aria-labelledby="student-life-title">
      <div className="life-shape life-shape-one" aria-hidden="true"></div>
      <div className="life-shape life-shape-two" aria-hidden="true"></div>

      <div className="student-life-inner">
        <div className="student-life-header">
          <div>
            <div className="section-kicker">STUDENT LIFE</div>
            <h2 id="student-life-title">A lively campus rhythm beyond the classroom.</h2>
          </div>
          <p>
            Students discover interests, friendships and confidence through sport, performance,
            clubs, competitions, trips and school celebrations.
          </p>
        </div>

        <div className="life-gallery" aria-label="Student life gallery">
          {lifeItems.map((item) => (
            <article className={`life-tile ${item.className}`} key={item.label}>
              <div className="life-image" aria-hidden="true"></div>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
