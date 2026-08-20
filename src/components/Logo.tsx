import { Link } from './Link';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-500 font-display text-2xl font-bold text-white shadow-pop transition-transform duration-300 hover:rotate-6">
        A
      </span>
      <span className={`font-display text-2xl font-bold tracking-tight ${light ? 'text-white' : 'text-ink-900'}`}>
        for<span className="text-brand-500">Apple</span>
      </span>
    </Link>
  );
}
