export default function QuickAccess() {
  return (
    <section className="quick-access" id="quick-access" aria-label="Quick access for parents">
      <div className="quick-access-inner">
        <a className="quick-tile tile-orange" href="#admissions">
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M7 11.5 10.2 15 17 8" />
              <path d="M5 4h14v16H5z" />
            </svg>
          </span>
          <span>Apply Online</span>
        </a>
        <a className="quick-tile tile-indigo" href="#admissions">
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M7 7h10M7 12h10M7 17h6" />
              <path d="M5 3h14v18H5z" />
            </svg>
          </span>
          <span>Fee Structure</span>
        </a>
        <a className="quick-tile tile-yellow" href="#news-events">
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M7 3v4M17 3v4M4 9h16" />
              <path d="M5 5h14v16H5z" />
            </svg>
          </span>
          <span>Academic Calendar</span>
        </a>
        <a className="quick-tile tile-teal" href="#contact">
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M4 16V7h11l4 4v5" />
              <path d="M7 17.5h.1M17 17.5h.1M6 17.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM16 17.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
            </svg>
          </span>
          <span>Transport</span>
        </a>
        <a className="quick-tile tile-coral" href="#contact">
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
              <path d="M4 21a8 8 0 0 1 16 0" />
            </svg>
          </span>
          <span>Parent Portal</span>
        </a>
        <a className="quick-tile tile-navy" href="#mandatory-disclosure">
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M8 6h8M8 10h8M8 14h5" />
              <path d="M6 3h9l3 3v15H6z" />
            </svg>
          </span>
          <span>Mandatory Disclosure</span>
        </a>
      </div>
    </section>
  );
}
