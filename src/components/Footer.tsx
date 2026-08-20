import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Link } from "./Link";
import { Logo } from "./Logo";
import { navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            A joyful school and kindergarten where curious minds bloom through
            play, creativity and care.
          </p>
          <div className="mt-6 flex gap-3">
            {["Facebook", "Twitter", "Instagram", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl bg-ink-800 text-ink-300 transition-colors hover:bg-brand-500 hover:text-white"
                aria-label={s}>
                <span className="text-xs font-bold">{s[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 font-display text-lg font-bold text-white">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="transition-colors hover:text-brand-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-display text-lg font-bold text-white">
            Get in Touch
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
              <span>123 Patna, Bihar 94086</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand-400" />
              <a href="#" className="hover:text-brand-400">
                +91 1234567890
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand-400" />
              <a href="#" className="hover:text-brand-400">
                hello@sforschool.school
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
              <span>
                Mon – Fri: 7:30 AM – 6:00 PM
                <br />
                Sat – Sun: Closed
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-display text-lg font-bold text-white">
            Newsletter
          </h4>
          <p className="mb-4 text-sm text-ink-400">
            Get tips, news and event updates in your inbox.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-ink-700 bg-ink-800 px-4 py-3 text-sm text-white placeholder-ink-500 focus:border-brand-500 focus:outline-none"
            />
            <button className="grid h-11 w-12 shrink-0 place-items-center rounded-xl bg-brand-500 text-white transition-colors hover:bg-brand-600">
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-ink-500 sm:flex-row">
          <p>© 2026 A School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
