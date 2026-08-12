import EnquiryTrigger from "./enquiry/EnquiryTrigger";

const journey = ["ENQUIRE", "VISIT", "APPLY", "INTERACTION", "ADMISSION"];

export default function AdmissionsCTA() {
  return (
    <section className="admissions-cta" id="admissions" aria-labelledby="admissions-title">
      <div className="admissions-inner">
        <div className="admissions-content">
          <div className="admissions-badge">ADMISSION JOURNEY</div>
          <h2 id="admissions-title">
            <span>ADMISSIONS OPEN</span>
            <strong>2026–27</strong>
          </h2>
          <p>Give Your Child A Stronger Tomorrow.</p>

          <div className="admissions-actions">
            <EnquiryTrigger className="admissions-primary">ENQUIRE NOW</EnquiryTrigger>
            <a className="admissions-secondary" href="#admissions">BOOK CAMPUS VISIT</a>
          </div>
        </div>

        <div className="admissions-panel">
          <div className="journey-track" aria-label="Admission journey">
            {journey.map((step, index) => (
              <div className="journey-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>

          <div className="admissions-contact">
            <a href="https://wa.me/911234567890">WhatsApp</a>
            <a href="tel:+911234567890">Call</a>
            <a href="#admissions">Download Prospectus</a>
          </div>
        </div>
      </div>
    </section>
  );
}
