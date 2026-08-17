import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumiere.edu"),
  title: {
    default: "Novyra International School — Shaping Future Leaders",
    template: "%s | Novyra International School",
  },
  description:
    "Novyra International School delivers world-class CBSE & IB education with smart classrooms, STEM labs, robotics, sports excellence and a cinematic campus experience. Admissions open.",
  keywords: [
    "best school",
    "CBSE school",
    "ICSE school",
    "IB school",
    "international school",
    "modern school",
    "admissions open",
    "STEM education",
    "robotics school",
    "premium school",
    "primary school",
    "senior secondary school",
  ],
  authors: [{ name: "Novyra International School" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lumiere.edu",
    siteName: "Novyra International School",
    title: "Novyra International School — Shaping Future Leaders",
    description:
      "World-class education with smart classrooms, STEM labs, robotics and sports excellence. Admissions open.",
    images: [
      {
        url: "https://images.pexels.com/photos/5212342/pexels-photo-5212342.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Students learning at Novyra International School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novyra International School — Shaping Future Leaders",
    description:
      "World-class education with smart classrooms, STEM labs, robotics and sports excellence. Admissions open.",
    images: [
      "https://images.pexels.com/photos/5212342/pexels-photo-5212342.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lumiere.edu" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Novyra International School",
  description:
    "World-class CBSE & IB education with smart classrooms, STEM labs, robotics and sports excellence.",
  url: "https://lumiere.edu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Knowledge Park, Education City",
    addressLocality: "New Delhi",
    addressRegion: "DL",
    postalCode: "110001",
    addressCountry: "IN",
  },
  telephone: "+91-98765-43210",
  email: "admissions@lumiere.edu",
  sameAs: [
    "https://www.instagram.com/lumiere.school",
    "https://www.youtube.com/@lumiereschool",
    "https://www.facebook.com/lumiere.school",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-body antialiased`}>
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
