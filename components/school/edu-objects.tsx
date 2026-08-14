// Original soft-3D educational objects (inline SVG, brand palette).

type P = { className?: string };

export function GradCap({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M4 24 32 12l28 12-28 12z" fill="#0B2345" />
      <path d="M4 24 32 34l28-10-28-6z" fill="#5C4AE4" />
      <path d="M18 30v10c0 4 6 8 14 8s14-4 14-8V30l-14 6z" fill="#3486D3" />
      <circle cx="60" cy="24" r="2.4" fill="#FFC83D" />
      <path d="M60 24v9" stroke="#FFC83D" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function BookStack({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="10" y="40" width="44" height="12" rx="3" fill="#FF6D5F" />
      <rect x="14" y="28" width="40" height="12" rx="3" fill="#20AAA5" />
      <rect x="8" y="16" width="44" height="12" rx="3" fill="#FF8A32" />
      <rect x="8" y="16" width="8" height="12" fill="#0B2345" opacity=".18" />
    </svg>
  );
}

export function PaperPlane({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M56 10 8 30l18 6 6 18z" fill="#5C4AE4" />
      <path d="M56 10 26 36l6 18z" fill="#3486D3" />
      <path d="M56 10 26 36l-18-6z" fill="#7d6ff0" />
    </svg>
  );
}

export function Compass({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="24" fill="#0B2345" />
      <circle cx="32" cy="32" r="24" fill="none" stroke="#5C4AE4" strokeWidth="3" />
      <path d="M32 16 38 34 20 40z" fill="#FF8A32" />
      <path d="M32 48 26 30 44 24z" fill="#FFFFFF" opacity=".85" />
      <circle cx="32" cy="32" r="3" fill="#FFC83D" />
    </svg>
  );
}

export function Sphere({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="24" fill="#20AAA5" />
      <ellipse cx="26" cy="24" rx="8" ry="5" fill="#FFFFFF" opacity=".35" />
    </svg>
  );
}

export function Plant({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M24 54h16l-2-14H26z" fill="#FF8A32" />
      <path d="M32 40C32 28 24 22 16 22c0 12 8 18 16 18z" fill="#20AAA5" />
      <path d="M32 40c0-14 8-20 16-20 0 14-8 20-16 20z" fill="#3486D3" />
      <path d="M32 40V26" stroke="#0B2345" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
