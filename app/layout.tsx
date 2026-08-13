import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
// Import order matters:
// 1) theme.css  -> Tailwind tokens + utilities (no preflight)
// 2) globals.css -> legacy stylesheet (authoritative for its own scalars)
// 3) brand.css   -> approved palette / stage / radius / font overrides (wins)
import "./theme.css";
import "./globals.css";
import "./brand.css";

const display = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display-next",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-body-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sarvottam International School | CBSE Classes 0–12",
    template: "%s | Sarvottam International School",
  },
  description:
    "A premium CBSE school for Classes 0–12 — joyful early years, strong academics, modern facilities and future-ready senior secondary pathways.",
  applicationName: "Sarvottam International School",
  openGraph: {
    title: "Sarvottam International School | CBSE Classes 0–12",
    description:
      "A premium CBSE school for Classes 0–12 — joyful early years, strong academics and future-ready pathways.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Temporary compatibility shim: legacy globals.css still uses
            literal "Inter" / "Plus Jakarta Sans" family names in ~33
            places. Removed in Phase 8 once those migrate to var(--font-*). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
