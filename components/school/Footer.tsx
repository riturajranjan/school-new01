const quickLinks = ["About", "Academics", "Admissions", "Facilities", "Student Life"];

const parentResources = [
  "Fee Structure",
  "Calendar",
  "Transport",
  "Parent Portal",
  "Mandatory Disclosure",
];

const socialLinks = ["Instagram", "Facebook", "YouTube", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact" aria-labelledby="footer-title">
      <div className="footer-pattern" aria-hidden="true"></div>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand-panel">
            <a className="footer-brand" href="#" aria-label="School home">
              <span className="footer-brand-mark" aria-hidden="true">
                <span>S</span>
              </span>
              <span>
                <strong>Sarvottam International School</strong>
                <small>Classes 0-12</small>
              </span>
            </a>
            <h2 id="footer-title">A school where curiosity grows into capability.</h2>
            <p>
              Premium CBSE-aligned learning for early years through senior secondary, with
              strong academics, expressive student life and a safe, future-ready campus.
            </p>
          </div>

          <div className="footer-map-card" aria-label="Google Maps preview area">
            <div className="footer-map-visual" aria-hidden="true">
              <span className="map-road map-road-one"></span>
              <span className="map-road map-road-two"></span>
              <span className="map-pin"></span>
            </div>
            <div className="footer-map-copy">
              <span>Google Maps Preview</span>
              <strong>Visit our campus</strong>
              <a href="#">Open in Maps</a>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <nav className="footer-link-panel" aria-label="Footer quick links">
            <h3>Quick Links</h3>
            {quickLinks.map((link) => (
              <a href="#" key={link}>{link}</a>
            ))}
          </nav>

          <nav className="footer-link-panel parent-panel" aria-label="Parent resources">
            <h3>Parent Resources</h3>
            {parentResources.map((link) => (
              <a href="#" key={link}>{link}</a>
            ))}
          </nav>

          <address className="footer-contact-panel">
            <h3>Contact</h3>
            <p>
              <span>Address</span>
              Sector 12, Education Avenue, New Delhi, India
            </p>
            <p>
              <span>Phone</span>
              <a href="tel:+911234567890">+91 12345 67890</a>
            </p>
            <p>
              <span>Email</span>
              <a href="mailto:admissions@sarvottamschool.edu">admissions@sarvottamschool.edu</a>
            </p>
            <p>
              <span>WhatsApp</span>
              <a href="#">Start a chat</a>
            </p>
          </address>

          <div className="footer-disclosure">
            <div>
              <span>CBSE</span>
              <strong>Affiliation &amp; Mandatory Disclosure</strong>
            </div>
            <p>
              View affiliation details, statutory certificates, academic calendar and public
              disclosure documents.
            </p>
            <a href="#">View Disclosure</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-wordmark" aria-hidden="true">SARVOTTAM</div>
          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <a href="#" key={link}>{link}</a>
            ))}
          </div>
          <nav className="footer-legal" aria-label="Legal links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
