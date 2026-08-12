export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-bg-shape shape-indigo" aria-hidden="true"></div>
      <div className="hero-bg-shape shape-yellow" aria-hidden="true"></div>
      <div className="hero-bg-shape shape-teal" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="admission-badge reveal">
            <span></span>
            ADMISSIONS OPEN 2026-27
          </div>
          <h1 id="hero-title" className="reveal">
            <span>LEARN.</span>
            <span>DISCOVER.</span>
            <span>GROW.</span>
          </h1>
          <p className="hero-text reveal">
            From the first day of school to future-ready learning, we help every student grow with
            curiosity, confidence and purpose.
          </p>
          <div className="hero-actions reveal">
            <a className="primary-cta" href="#">
              APPLY FOR ADMISSION
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <a className="secondary-cta" href="#">
              BOOK CAMPUS VISIT
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="school-stages reveal" aria-label="Supported school stages">
            <span>Pre-Primary</span>
            <span>Class 1-5</span>
            <span>Class 6-8</span>
            <span>Class 9-10</span>
            <span>Class 11-12</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Students at a modern Indian school campus">
          <div className="photo-shell">
            <img
              src="/assets/hero-students.png"
              alt="Indian students from primary to senior classes standing together on a modern school campus"
            />
            <div className="photo-glow" aria-hidden="true"></div>
          </div>

          <div className="glass-card card-cbse">
            <strong>CBSE</strong>
            <span>Affiliated curriculum</span>
          </div>
          <div className="glass-card card-classes">
            <strong>Classes 0-12</strong>
            <span>Complete school journey</span>
          </div>
          <div className="glass-card card-campus">
            <strong>Safe Campus</strong>
            <span>Secure and caring</span>
          </div>
          <div className="glass-card card-learning">
            <strong>Future-ready Learning</strong>
            <span>STEM, arts and leadership</span>
          </div>

          <div className="float-object book" aria-hidden="true">
            <span></span>
          </div>
          <div className="float-object globe" aria-hidden="true">
            <span></span>
          </div>
          <div className="float-object pencil" aria-hidden="true"></div>
          <div className="float-object science" aria-hidden="true">
            <span></span>
            <i></i>
          </div>
        </div>
      </div>
    </section>
  );
}
