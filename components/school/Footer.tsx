const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Facilities", href: "#facilities" },
  { label: "Student Life", href: "#student-life" },
];

const parentResources = [
  { label: "Fee Structure", href: "#admissions" },
  { label: "Calendar", href: "#news-events" },
  { label: "Transport", href: "#contact" },
  { label: "Parent Portal", href: "#contact" },
  { label: "Mandatory Disclosure", href: "#mandatory-disclosure" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M17.5 6.8h.01" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8h2V4h-2.5A4.5 4.5 0 0 0 9 8.5V11H7v4h2v5h4v-5h3l1-4h-4V8.8c0-.5.4-.8 1-.8Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 12s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C17.4 5.2 12 5.2 12 5.2s-5.4 0-6.9.4c-.8.2-1.5.9-1.7 1.7C3 8.8 3 12 3 12s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.5.4 6.9.4 6.9.4s5.4 0 6.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7Z" />
        <path d="m10 9 5 3-5 3Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 10V20" />
        <path d="M6.5 6.5v.01" />
        <path d="M11 20v-5.5a4 4 0 0 1 8 0V20" />
        <path d="M11 10v10" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact" aria-labelledby="footer-title">
      <div className="footer-pattern" aria-hidden="true"></div>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand-panel">
            <a className="footer-brand" href="#top" aria-label="School home">
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
              <a href="https://maps.google.com/">Open in Maps</a>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <nav className="footer-link-panel" aria-label="Footer quick links">
            <h3>Quick Links</h3>
            {quickLinks.map((link) => (
              <a href={link.href} key={link.label}>{link.label}</a>
            ))}
          </nav>

          <nav className="footer-link-panel parent-panel" aria-label="Parent resources">
            <h3>Parent Resources</h3>
            {parentResources.map((link) => (
              <a href={link.href} key={link.label}>{link.label}</a>
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
              <a href="https://wa.me/911234567890">Start a chat</a>
            </p>
          </address>

          <div className="footer-disclosure" id="mandatory-disclosure">
            <div>
              <span>CBSE</span>
              <strong>Affiliation &amp; Mandatory Disclosure</strong>
            </div>
            <p>
              View affiliation details, statutory certificates, academic calendar and public
              disclosure documents.
            </p>
            <a href="#mandatory-disclosure">View Disclosure</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-wordmark" aria-hidden="true">SARVOTTAM</div>
          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" key={link.label}>
                {link.icon}
              </a>
            ))}
          </div>
          <nav className="footer-legal" aria-label="Legal links">
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms</a>
            <a href="#contact">Accessibility</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
