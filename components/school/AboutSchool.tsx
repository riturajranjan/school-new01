export default function AboutSchool() {
  return (
    <section className="about-school" id="about" aria-labelledby="about-title">
      <div className="about-shape about-shape-one" aria-hidden="true"></div>
      <div className="about-shape about-shape-two" aria-hidden="true"></div>

      <div className="about-inner">
        <div className="about-media">
          <img
            src="/assets/hero-students.png"
            alt="Indian students on a modern school campus"
          />
          <div className="about-media-card">
            <strong>Classes 0-12</strong>
            <span>One nurturing journey</span>
          </div>
          <div className="about-3d-mark" aria-hidden="true">
            <span></span>
            <i></i>
          </div>
        </div>

        <div className="about-copy">
          <div className="section-kicker">ABOUT SCHOOL</div>
          <h2 id="about-title">A premium Indian school shaped around curiosity and character.</h2>
          <p>
            Sarvottam International School brings together strong academics, thoughtful pastoral care
            and future-ready opportunities in a campus designed for confident, joyful learning.
          </p>

          <div className="about-values">
            <article className="about-value vision-value">
              <div className="about-value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </div>
              <div>
                <h3>Our Vision</h3>
                <p>To inspire compassionate learners who think deeply, act responsibly and grow with purpose.</p>
              </div>
            </article>

            <article className="about-value mission-value">
              <div className="about-value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5" />
                  <path d="M5 8v8M19 8v8" />
                </svg>
              </div>
              <div>
                <h3>Our Mission</h3>
                <p>To create rigorous, caring classrooms where every child discovers strengths and builds confidence.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
