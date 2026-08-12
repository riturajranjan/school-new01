const events = [
  {
    className: "event-featured event-science",
    date: "18 Aug",
    category: "Academics",
    title: "Inter-house STEM showcase and model exhibition",
  },
  {
    className: "event-sports",
    date: "24 Aug",
    category: "Sports",
    title: "Annual athletics heats begin on campus",
  },
  {
    className: "event-arts",
    date: "02 Sep",
    category: "Arts",
    title: "Music, dance and visual art evening",
  },
  {
    className: "event-career",
    date: "10 Sep",
    category: "Counselling",
    title: "Senior secondary university pathways session",
  },
];

export default function NewsEvents() {
  return (
    <section className="news-events" id="news-events" aria-labelledby="events-title">
      <div className="events-inner">
        <div className="events-header">
          <div>
            <div className="section-kicker">NEWS &amp; EVENTS</div>
            <h2 id="events-title">What is happening on campus.</h2>
          </div>
          <a href="#">
            View All
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <article className={`event-card ${event.className}`} key={event.title}>
              <div className="event-image" aria-hidden="true"></div>
              <div className="event-content">
                <time>{event.date}</time>
                <span>{event.category}</span>
                <h3>{event.title}</h3>
                <a href="#">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
