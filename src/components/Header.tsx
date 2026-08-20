import { useEffect, useState } from 'react';
import { Phone, Mail, Clock, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from './Link';
import { Logo } from './Logo';
import { navLinks, homeVariants } from '@/data/site';
import { useRoute } from '@/lib/router';

export function Header() {
  const path = useRoute();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [path]);

  const isActive = (to: string) => path === to;

  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-ink-900 text-ink-100 lg:block">
        <div className="container-x flex items-center justify-between py-2.5 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+911234567890" className="flex items-center gap-2 transition-colors hover:text-brand-300">
              <Phone className="h-4 w-4 text-brand-400" /> +91 1234567890
            </a>
            <a href="mailto:hello@novyratech.in" className="flex items-center gap-2 transition-colors hover:text-brand-300">
              <Mail className="h-4 w-4 text-brand-400" /> hello@a.school
            </a>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-400" /> Mon – Fri: 7:30 AM – 6:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-ink-300">Follow us:</span>
            {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((s) => (
              <a key={s} href="#" className="text-ink-300 transition-colors hover:text-brand-400">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-3d' : 'bg-white'
        }`}
      >
        <div className="container-x flex items-center justify-between py-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {/* Home dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHomeOpen(true)}
              onMouseLeave={() => setHomeOpen(false)}
            >
              <button className="flex items-center gap-1 rounded-full px-4 py-2 font-display font-semibold text-ink-700 transition-colors hover:text-brand-600">
                Home
                <ChevronDown className={`h-4 w-4 transition-transform ${homeOpen ? 'rotate-180' : ''}`} />
              </button>
              {homeOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="grid w-64 grid-cols-2 gap-2 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink-100">
                    {homeVariants.map((h) => (
                      <Link
                        key={h.to}
                        to={h.to}
                        className={`rounded-xl p-2 text-sm font-semibold transition-colors ${
                          isActive(h.to) ? 'bg-brand-50 text-brand-600' : 'text-ink-600 hover:bg-ink-50'
                        }`}
                      >
                        {h.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-full px-4 py-2 font-display font-semibold transition-colors ${
                  isActive(link.to) ? 'text-brand-600' : 'text-ink-700 hover:text-brand-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Enroll Now
            </Link>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-xl bg-ink-50 text-ink-700 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-ink-100 bg-white lg:hidden">
            <nav className="container-x flex flex-col gap-1 py-4">
              <div className="mb-2">
                <p className="px-3 pb-1 text-xs font-bold uppercase tracking-wider text-ink-400">Home Variants</p>
                {homeVariants.map((h) => (
                  <Link
                    key={h.to}
                    to={h.to}
                    className={`rounded-lg px-3 py-2 font-display font-semibold ${
                      isActive(h.to) ? 'bg-brand-50 text-brand-600' : 'text-ink-700'
                    }`}
                  >
                    {h.label}
                  </Link>
                ))}
              </div>
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-lg px-3 py-2 font-display font-semibold ${
                    isActive(link.to) ? 'bg-brand-50 text-brand-600' : 'text-ink-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary mt-3 justify-center">
                Enroll Now
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
