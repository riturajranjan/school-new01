import { Link } from './Link';
import { ChevronRight, Sparkles } from 'lucide-react';

export function PageBanner({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-sunny-50 to-sky-50 py-16">
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-sunny-200/40 blur-3xl animate-float" />
      <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute right-1/4 top-4 h-12 w-12 animate-bounce-soft rounded-2xl bg-gradient-to-br from-brand-300 to-brand-500 opacity-60 shadow-3d" style={{ transform: 'rotate(15deg) translateZ(20px)' }} />
      <div className="pointer-events-none absolute left-1/4 bottom-4 h-8 w-8 animate-float rounded-full bg-gradient-to-br from-berry-300 to-berry-500 opacity-60 shadow-3d" />
      <div className="container-x relative text-center perspective">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-brand-600 shadow-card backdrop-blur">
          <Sparkles className="h-4 w-4" /> A School
        </span>
        <h1 className="mt-5 section-title text-balance" style={{ transform: 'translateZ(30px)' }}>{title}</h1>
        <nav className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-ink-500">
          <Link to="/" className="transition-colors hover:text-brand-600">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-brand-600">{crumb}</span>
        </nav>
      </div>
    </section>
  );
}
