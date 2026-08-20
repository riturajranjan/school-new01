import { useState, useEffect } from "react";
import {
  ArrowRight,
  Star,
  Play,
  Heart,
  Sparkles,
  CheckCircle2,
  Quote,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "@/components/Link";
import { TiltCard } from "@/components/TiltCard";
import { useInView } from "@/lib/useInView";
import {
  classes,
  teachers,
  events,
  testimonials,
  pricingPlans,
  faqs,
  galleryImages,
  stats,
  features,
  blogPosts,
} from "@/data/site";

function FloatingShapes({
  variant = "warm",
}: {
  variant?: "warm" | "cool" | "dark" | "green";
}) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shapes =
    variant === "dark"
      ? ["bg-brand-400/20", "bg-sunny-400/15", "bg-sky-400/15"]
      : variant === "cool"
        ? ["bg-sky-200/50", "bg-berry-200/40", "bg-brand-200/40"]
        : variant === "green"
          ? ["bg-grass-200/50", "bg-sunny-200/50", "bg-brand-200/40"]
          : ["bg-sunny-200/50", "bg-sky-200/50", "bg-berry-200/40"];

  return (
    <>
      <div
        className={`absolute right-0 top-10 h-72 w-72 rounded-full ${shapes[0]} blur-3xl`}
        style={{ transform: `translateY(${offset * 0.15}px)` }}
      />
      <div
        className={`absolute left-0 bottom-0 h-72 w-72 rounded-full ${shapes[1]} blur-3xl`}
        style={{ transform: `translateY(${offset * -0.1}px)` }}
      />
      <div
        className={`absolute left-1/3 top-1/2 h-48 w-48 rounded-full ${shapes[2]} blur-3xl`}
        style={{ transform: `translateY(${offset * 0.08}px)` }}
      />
    </>
  );
}

/* ---------- Hero (Home 1) ---------- */
export function Hero1() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sunny-50 via-brand-50 to-berry-50 pt-12 pb-24 lg:pt-20">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <FloatingShapes variant="warm" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <Sparkles className="h-4 w-4" /> Welcome to School
          </span>
          <h1 className="mt-5 text-5xl font-bold leading-[1.1] text-ink-900 sm:text-6xl lg:text-7xl">
            Where Little <span className="shimmer-text">Minds</span> Bloom Big
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-600">
            A joyful kindergarten and school where children learn through play,
            creativity and care — growing confident, curious and kind.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary group">
              Enroll Now{" "}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/classes" className="btn-secondary">
              <Play className="h-4 w-4" /> Our Classes
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-8">
            <div className="flex -space-x-3">
              {teachers.map((t) => (
                <img
                  key={t.name}
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full border-4 border-white object-cover shadow-card"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-sunny-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-semibold text-ink-600">
                Loved by 500+ families
              </p>
            </div>
          </div>
        </div>

        <div className="relative perspective">
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <div className="absolute -inset-4 animate-spin-slow rounded-[3rem] bg-gradient-to-tr from-brand-200 via-sunny-200 to-sky-200 opacity-60 blur-xl" />
            <div className="absolute -inset-2 animate-morph rounded-[3rem] bg-gradient-to-tr from-brand-300/40 via-sunny-300/40 to-sky-300/40 blur-md" />
            <TiltCard
              maxTilt={10}
              scale={1.02}
              className="relative rounded-[2.5rem]">
              <img
                src="https://images.pexels.com/photos/8363576/pexels-photo-8363576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Children learning"
                className="rounded-[2.5rem] object-cover shadow-3d"
              />
            </TiltCard>
            <div
              className="absolute -left-6 top-1/4 z-10 animate-float rounded-2xl bg-white p-4 shadow-3d"
              style={{ transform: "translateZ(40px)" }}>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-grass-100 text-grass-600 shadow-inner-3d">
                  <Heart className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-2xl font-bold text-ink-900">
                    15+
                  </p>
                  <p className="text-xs font-semibold text-ink-500">
                    Years of Care
                  </p>
                </div>
              </div>
            </div>
            <div
              className="absolute -right-4 bottom-1/4 z-10 animate-float-slow rounded-2xl bg-white p-4 shadow-3d"
              style={{ transform: "translateZ(30px)" }}>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-sky-100 text-sky-600 shadow-inner-3d">
                  <Sparkles className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-2xl font-bold text-ink-900">
                    25+
                  </p>
                  <p className="text-xs font-semibold text-ink-500">
                    Fun Classes
                  </p>
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce-soft rounded-full bg-brand-500 px-5 py-2.5 font-display font-bold text-white shadow-glow-brand"
              style={{ transform: "translateZ(50px)" }}>
              Enroll Now!
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          className="w-full"
          preserveAspectRatio="none">
          <path d="M0,40 C320,80 720,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

/* ---------- Hero (Home 2) — centered with video ---------- */
export function Hero2() {
  return (
    <section className="relative overflow-hidden bg-ink-900 pt-16 pb-32">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8422135/pexels-photo-8422135.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/80 to-ink-900" />
      </div>
      <FloatingShapes variant="dark" />

      <div className="container-x relative text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-brand-300 ring-1 ring-white/20 animate-fade-in">
          <Sparkles className="h-4 w-4" /> Admissions Open 2025–2026
        </span>
        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl text-shadow-lg">
          A Loving Start to a <span className="shimmer-text">Lifelong</span>{" "}
          Love of Learning
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
          Nurturing every child's unique spark through play-based learning,
          creative arts and caring teachers.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-primary group">
            Book a Tour{" "}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <button className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 font-display font-semibold text-white ring-1 ring-white/30 backdrop-blur transition-all hover:bg-white/20 hover:-translate-y-0.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 shadow-glow-brand transition-transform group-hover:scale-110">
              <Play className="h-4 w-4 fill-current" />
            </span>
            Watch Video
          </button>
        </div>
        {/* Floating 3D orbs */}
        <div
          className="pointer-events-none absolute left-10 top-1/4 hidden h-16 w-16 animate-float rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-glow-brand lg:block"
          style={{ transform: "translateZ(20px) rotate(15deg)" }}
        />
        <div className="pointer-events-none absolute right-10 top-1/3 hidden h-12 w-12 animate-float-slow rounded-full bg-gradient-to-br from-sunny-300 to-sunny-500 shadow-3d lg:block" />
        <div className="pointer-events-none absolute bottom-20 left-1/4 hidden h-8 w-8 animate-bounce-soft rounded-full bg-sky-400 shadow-glow-sky lg:block" />
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          className="w-full"
          preserveAspectRatio="none">
          <path d="M0,40 C320,80 720,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

/* ---------- Hero (Home 3) — split with pattern ---------- */
export function Hero3() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-16">
      <FloatingShapes variant="green" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <span className="eyebrow">
            <Sparkles className="h-4 w-4" /> Play • Learn • Grow
          </span>
          <h1 className="mt-5 text-5xl font-bold leading-[1.1] text-ink-900 sm:text-6xl">
            Growing <span className="text-grass-500">Happy</span>, Healthy
            Hearts
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ink-600">
            Our nature-inspired curriculum blends outdoor exploration, creative
            arts and gentle academics for the whole child.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary group">
              Enroll Now{" "}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="group cursor-default">
                <p
                  className="font-display text-3xl font-bold text-brand-500 transition-transform duration-300 group-hover:scale-110"
                  style={{ transform: "translateZ(10px)" }}>
                  {s.value}
                </p>
                <p className="text-sm font-semibold text-ink-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 lg:order-2 perspective">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 animate-morph bg-gradient-to-br from-grass-200 to-sunny-200 opacity-50 blur-lg" />
            <TiltCard maxTilt={14} scale={1.04} className="relative">
              <div className="clip-blob overflow-hidden bg-grass-100 shadow-3d">
                <img
                  src="https://images.pexels.com/photos/8535198/pexels-photo-8535198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Art class"
                  className="h-[480px] w-full object-cover"
                />
              </div>
            </TiltCard>
            <div
              className="absolute -right-4 -top-4 z-10 animate-float rounded-3xl bg-sunny-400 p-6 text-center shadow-3d"
              style={{ transform: "translateZ(50px)" }}>
              <p className="font-display text-4xl font-bold text-white">A+</p>
              <p className="text-xs font-bold uppercase text-white/80">
                Top Rated
              </p>
            </div>
            <div
              className="absolute -left-6 bottom-8 z-10 animate-float-slow rounded-3xl bg-white p-5 shadow-3d"
              style={{ transform: "translateZ(40px)" }}>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-grass-500 text-white shadow-inner-3d">
                  <Heart className="h-5 w-5 fill-current" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-ink-900">
                    Caring
                  </p>
                  <p className="text-xs text-ink-500">Teachers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Hero (Home 4) — full image with card ---------- */
export function Hero4() {
  return (
    <section className="relative overflow-hidden bg-sky-50">
      <FloatingShapes variant="cool" />
      <div className="container-x relative grid items-stretch gap-0 lg:grid-cols-12">
        <div className="flex items-center py-16 lg:col-span-5 lg:py-24">
          <div className="animate-fade-up">
            <span className="eyebrow">
              <Sparkles className="h-4 w-4" /> School
            </span>
            <h1 className="mt-5 text-5xl font-bold leading-[1.1] text-ink-900 sm:text-6xl">
              Every Child Is a <span className="shimmer-text">Star</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink-600">
              We celebrate each child's unique gifts in a warm, safe and
              inspiring environment built for wonder.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary group">
                Enroll Now{" "}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/gallery" className="btn-secondary">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-7 perspective">
          <div className="relative h-80 overflow-hidden lg:h-full">
            <img
              src="https://images.pexels.com/photos/8613146/pexels-photo-8613146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Kids playing"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-50/50 to-transparent lg:from-sky-50/80" />
          </div>
          <div
            className="absolute bottom-8 left-8 z-10 animate-float rounded-2xl bg-white/95 p-5 shadow-3d backdrop-blur"
            style={{ transform: "translateZ(30px)" }}>
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-500 text-white shadow-glow-sky">
                <Play className="h-6 w-6 fill-current" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-ink-900">
                  Virtual Tour
                </p>
                <p className="text-sm text-ink-500">Explore our campus</p>
              </div>
            </div>
          </div>
          {/* Floating decorative orbs */}
          <div
            className="pointer-events-none absolute right-8 top-8 h-16 w-16 animate-float rounded-full bg-gradient-to-br from-sunny-300 to-brand-400 opacity-80 shadow-3d"
            style={{ transform: "translateZ(20px)" }}
          />
          <div
            className="pointer-events-none absolute right-1/3 top-1/2 h-10 w-10 animate-bounce-soft rounded-2xl bg-gradient-to-br from-berry-300 to-berry-500 opacity-70 shadow-3d"
            style={{ transform: "translateZ(15px) rotate(20deg)" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- About / Welcome ---------- */
export function AboutSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div
          className={`relative perspective ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="grid grid-cols-2 gap-4">
            <TiltCard maxTilt={8} className="rounded-3xl">
              <img
                src="https://images.pexels.com/photos/8422141/pexels-photo-8422141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt=""
                className="rounded-3xl object-cover shadow-3d"
              />
            </TiltCard>
            <TiltCard maxTilt={8} className="mt-8 rounded-3xl">
              <img
                src="https://images.pexels.com/photos/8535198/pexels-photo-8535198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt=""
                className="rounded-3xl object-cover shadow-3d"
              />
            </TiltCard>
          </div>
          <div
            className="absolute -bottom-6 -right-2 z-10 rounded-3xl bg-brand-500 px-8 py-6 text-white shadow-glow-brand animate-pulse-3d sm:right-8"
            style={{ transform: "translateZ(40px)" }}>
            <p className="font-display text-4xl font-bold">15+</p>
            <p className="text-sm font-semibold text-white/80">
              Years of Excellence
            </p>
          </div>
        </div>

        <div
          className={inView ? "animate-fade-up" : "opacity-0"}
          style={{ animationDelay: "0.15s" }}>
          <span className="eyebrow">About Us</span>
          <h2 className="mt-5 section-title">
            A Nurturing Home for Curious Minds
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">
            At A School, we believe every child deserves a joyful start. For
            over 15 years, our caring teachers and play-based approach have
            helped children grow into confident, creative and kind learners.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Low teacher-to-child ratios for personal attention",
              "Play-based, research-backed curriculum",
              "Bright, safe and inspiring learning spaces",
              "Daily outdoor play and creative arts",
            ].map((item, i) => (
              <div
                key={item}
                className="group flex items-center gap-3 transition-transform duration-300 hover:translate-x-2"
                style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-grass-100 text-grass-600 shadow-inner-3d">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <span className="font-semibold text-ink-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/about" className="btn-primary group">
              Discover More{" "}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats bar ---------- */
export function StatsBar() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-500 py-14">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-sunny-300/30 blur-3xl animate-float" />
      <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-berry-400/30 blur-3xl animate-float-slow" />
      <div className="container-x relative grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`group ${inView ? "animate-pop-in" : "opacity-0"}`}
            style={{
              animationDelay: `${i * 0.1}s`,
              transform: "translateZ(10px)",
            }}>
            <p className="font-display text-5xl font-bold text-white transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
              {s.value}
            </p>
            <p className="mt-1 font-semibold uppercase tracking-wider text-white/80">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Features / Why Choose Us ---------- */
export function FeaturesSection() {
  const { ref, inView } = useInView();
  const colorMap: Record<string, string> = {
    brand: "bg-brand-100 text-brand-600",
    berry: "bg-berry-100 text-berry-600",
    sky: "bg-sky-100 text-sky-600",
    grass: "bg-grass-100 text-grass-600",
  };
  return (
    <section ref={ref} className="bg-ink-50 py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="mt-5 section-title">
            Learning Designed for Little Explorers
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Everything we do is built around how young children learn best —
            through play, wonder and warm relationships.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <TiltCard
              key={f.title}
              maxTilt={10}
              className={`rounded-3xl bg-white p-8 shadow-3d ${inView ? "animate-fade-up" : "opacity-0"}`}>
              <div style={{ animationDelay: `${i * 0.1}s` }}>
                <span
                  className={`grid h-16 w-16 place-items-center rounded-2xl ${colorMap[f.color]} shadow-inner-3d transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  <f.icon className="h-8 w-8" />
                </span>
                <h3
                  className="mt-6 font-display text-xl font-bold text-ink-900"
                  style={{ transform: "translateZ(20px)" }}>
                  {f.title}
                </h3>
                <p
                  className="mt-3 text-ink-600"
                  style={{ transform: "translateZ(10px)" }}>
                  {f.desc}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Classes ---------- */
export function ClassesSection({ limit }: { limit?: number }) {
  const { ref, inView } = useInView();
  const items = limit ? classes.slice(0, limit) : classes;
  const colorMap: Record<string, { bg: string; text: string; chip: string }> = {
    brand: {
      bg: "bg-brand-50",
      text: "text-brand-600",
      chip: "bg-brand-100 text-brand-700",
    },
    sunny: {
      bg: "bg-sunny-50",
      text: "text-sunny-600",
      chip: "bg-sunny-100 text-sunny-700",
    },
    sky: {
      bg: "bg-sky-50",
      text: "text-sky-600",
      chip: "bg-sky-100 text-sky-700",
    },
    grass: {
      bg: "bg-grass-50",
      text: "text-grass-600",
      chip: "bg-grass-100 text-grass-700",
    },
    berry: {
      bg: "bg-berry-50",
      text: "text-berry-600",
      chip: "bg-berry-100 text-berry-700",
    },
  };
  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div>
            <span className="eyebrow">Our Classes</span>
            <h2 className="mt-5 section-title">Adventures for Every Age</h2>
          </div>
          <Link to="/classes" className="btn-ghost group">
            View All Classes{" "}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => {
            const col = colorMap[c.color];
            return (
              <TiltCard
                key={c.title}
                maxTilt={8}
                className={`group overflow-hidden rounded-3xl bg-white shadow-3d ${inView ? "animate-fade-up" : "opacity-0"}`}>
                <div style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow-card ${col.chip}`}
                      style={{ transform: "translateZ(30px)" }}>
                      {c.age}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-2xl ${col.bg} ${col.text} shadow-inner-3d`}>
                        <c.icon className="h-6 w-6" />
                      </span>
                      <h3
                        className="font-display text-xl font-bold text-ink-900"
                        style={{ transform: "translateZ(15px)" }}>
                        {c.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-ink-600">{c.desc}</p>
                    <Link
                      to="/classes"
                      className={`mt-4 inline-flex items-center gap-1 font-display font-semibold ${col.text} transition-all hover:gap-2`}>
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Teachers ---------- */
export function TeachersSection({ limit }: { limit?: number }) {
  const { ref, inView } = useInView();
  const items = limit ? teachers.slice(0, limit) : teachers;
  return (
    <section ref={ref} className="bg-ink-50 py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Team</span>
          <h2 className="mt-5 section-title">Meet Our Caring Teachers</h2>
          <p className="mt-4 text-lg text-ink-600">
            Warm, qualified and passionate educators who make every child feel
            seen, safe and celebrated.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t, i) => (
            <TiltCard
              key={t.name}
              maxTilt={10}
              className={`group overflow-hidden rounded-3xl bg-white shadow-3d ${inView ? "animate-fade-up" : "opacity-0"}`}>
              <div style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 flex items-end justify-center gap-3 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ transform: "translateZ(20px)" }}>
                    {["F", "I", "L"].map((s, j) => (
                      <a
                        key={s}
                        href="#"
                        className="grid h-10 w-10 place-items-center rounded-full bg-white/90 font-bold text-brand-600 transition-all hover:bg-brand-500 hover:text-white hover:-translate-y-1"
                        style={{ transitionDelay: `${j * 50}ms` }}>
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3
                    className="font-display text-lg font-bold text-ink-900"
                    style={{ transform: "translateZ(15px)" }}>
                    {t.name}
                  </h3>
                  <p className="text-sm font-semibold text-brand-500">
                    {t.role}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Events ---------- */
export function EventsSection({ limit }: { limit?: number }) {
  const { ref, inView } = useInView();
  const items = limit ? events.slice(0, limit) : events;
  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div>
            <span className="eyebrow">Upcoming Events</span>
            <h2 className="mt-5 section-title">Join the Fun</h2>
          </div>
          <Link to="/events" className="btn-ghost group">
            All Events{" "}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((e, i) => (
            <TiltCard
              key={e.title}
              maxTilt={8}
              className={`group overflow-hidden rounded-3xl bg-white shadow-3d ${inView ? "animate-fade-up" : "opacity-0"}`}>
              <div style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute left-4 top-4 rounded-2xl bg-white px-4 py-2 text-center shadow-3d"
                    style={{ transform: "translateZ(30px)" }}>
                    <p className="font-display text-2xl font-bold text-brand-600">
                      {e.day}
                    </p>
                    <p className="text-xs font-bold uppercase text-ink-500">
                      {e.month}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="font-display text-xl font-bold text-ink-900"
                    style={{ transform: "translateZ(15px)" }}>
                    {e.title}
                  </h3>
                  <p className="mt-3 text-ink-600">{e.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-ink-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-brand-500" /> {e.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-brand-500" /> {e.venue}
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
export function TestimonialsSection() {
  const { ref, inView } = useInView();
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-berry-50 via-brand-50 to-sunny-50 py-20 lg:py-28">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <FloatingShapes variant="warm" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-5 section-title">What Parents Say</h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TiltCard
              key={t.name}
              maxTilt={8}
              className={`rounded-3xl bg-white p-8 shadow-3d ${inView ? "animate-fade-up" : "opacity-0"}`}>
              <div style={{ animationDelay: `${i * 0.1}s` }}>
                <Quote
                  className="h-10 w-10 text-brand-200"
                  style={{ transform: "translateZ(20px)" }}
                />
                <p className="mt-4 text-lg leading-relaxed text-ink-700">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-14 w-14 rounded-full object-cover shadow-card"
                  />
                  <div>
                    <p className="font-display font-bold text-ink-900">
                      {t.name}
                    </p>
                    <p className="text-sm text-ink-500">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-1 text-sunny-400">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
export function GallerySection({ limit }: { limit?: number }) {
  const { ref, inView } = useInView();
  const items = limit ? galleryImages.slice(0, limit) : galleryImages;
  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Gallery</span>
          <h2 className="mt-5 section-title">Moments of Joy & Learning</h2>
          <p className="mt-4 text-lg text-ink-600">
            A peek into the everyday magic at A.
          </p>
        </div>
        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((g, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-3d transition-all duration-500 hover:shadow-3d-hover ${g.span} ${inView ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.05}s` }}>
              <img
                src={g.src}
                alt={g.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand-900/0 opacity-0 transition-all duration-300 group-hover:bg-brand-900/40 group-hover:opacity-100">
                <span className="rounded-full bg-white px-4 py-2 font-display font-semibold text-brand-600 shadow-pop transition-transform duration-300 group-hover:scale-110">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
export function PricingSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="bg-ink-50 py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Pricing Plans</span>
          <h2 className="mt-5 section-title">Simple, Flexible Plans</h2>
          <p className="mt-4 text-lg text-ink-600">
            Choose the plan that fits your family. No hidden fees, ever.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((p, i) => (
            <TiltCard
              key={p.name}
              maxTilt={p.highlight ? 6 : 8}
              className={`relative rounded-3xl p-8 shadow-3d ${p.highlight ? "bg-ink-900 text-white" : "bg-white"} ${inView ? "animate-fade-up" : "opacity-0"}`}>
              <div style={{ animationDelay: `${i * 0.1}s` }}>
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-glow-brand">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`font-display text-2xl font-bold ${p.highlight ? "text-white" : "text-ink-900"}`}
                  style={{ transform: "translateZ(20px)" }}>
                  {p.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${p.highlight ? "text-ink-300" : "text-ink-500"}`}>
                  {p.desc}
                </p>
                <div
                  className="mt-6 flex items-end gap-1"
                  style={{ transform: "translateZ(30px)" }}>
                  <span
                    className={`font-display text-5xl font-bold ${p.highlight ? "text-brand-400" : "text-brand-500"}`}>
                    ${p.price}
                  </span>
                  <span
                    className={`mb-1.5 text-sm ${p.highlight ? "text-ink-400" : "text-ink-500"}`}>
                    {p.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle2
                        className={`h-5 w-5 ${p.highlight ? "text-brand-400" : "text-grass-500"}`}
                      />
                      <span
                        className={
                          p.highlight ? "text-ink-200" : "text-ink-700"
                        }>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 w-full justify-center ${p.highlight ? "btn-primary" : "btn-secondary"}`}>
                  Choose Plan
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function FaqSection() {
  const { ref, inView } = useInView();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div className={inView ? "animate-fade-up" : "opacity-0"}>
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 section-title">Questions? We've Got Answers</h2>
          <p className="mt-4 text-lg text-ink-600">
            Everything you need to know about enrolment, daily life and our
            approach. Can't find what you're looking for? We're happy to help.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary group">
              Contact Us{" "}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div
          className={inView ? "animate-fade-up" : "opacity-0"}
          style={{ animationDelay: "0.1s" }}>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl shadow-card transition-all duration-300 ${open === i ? "bg-white shadow-3d" : "bg-ink-50"}`}>
                <button
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}>
                  <span className="font-display text-lg font-bold text-ink-900">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600 shadow-inner-3d transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>
                    <span className="text-xl leading-none">+</span>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-ink-600">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA banner ---------- */
export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-500 py-20">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-sunny-300/40 blur-3xl animate-float" />
      <div className="absolute -left-10 -bottom-10 h-60 w-60 rounded-full bg-berry-400/30 blur-3xl animate-float-slow" />
      <div className="container-x relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
        <div style={{ transform: "translateZ(20px)" }}>
          <h2 className="max-w-2xl text-4xl font-bold text-white sm:text-5xl text-shadow-sm">
            Ready to Give Your Child a Joyful Start?
          </h2>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Book a personal tour of our campus and meet the team. We can't wait
            to welcome your family.
          </p>
        </div>
        <div
          className="flex shrink-0 gap-4"
          style={{ transform: "translateZ(40px)" }}>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-display font-semibold text-brand-600 shadow-3d transition-all hover:-translate-y-1 hover:shadow-3d-hover">
            Book a Tour{" "}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Blog ---------- */
export function BlogSection({ limit }: { limit?: number }) {
  const { ref, inView } = useInView();
  const items = limit ? blogPosts.slice(0, limit) : blogPosts;
  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div>
            <span className="eyebrow">Our Blog</span>
            <h2 className="mt-5 section-title">Tips, Stories & News</h2>
          </div>
          <Link to="/" className="btn-ghost group">
            All Articles{" "}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((b, i) => (
            <TiltCard
              key={b.title}
              maxTilt={8}
              className={`group overflow-hidden rounded-3xl bg-white shadow-3d ${inView ? "animate-fade-up" : "opacity-0"}`}>
              <article style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span
                    className="absolute left-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase text-white shadow-pop"
                    style={{ transform: "translateZ(30px)" }}>
                    {b.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="flex items-center gap-2 text-sm font-semibold text-ink-400">
                    <Calendar className="h-4 w-4" /> {b.date}
                  </p>
                  <h3
                    className="mt-3 font-display text-xl font-bold text-ink-900 transition-colors group-hover:text-brand-600"
                    style={{ transform: "translateZ(15px)" }}>
                    {b.title}
                  </h3>
                  <p className="mt-3 text-ink-600">{b.excerpt}</p>
                  <Link
                    to="/"
                    className="mt-4 inline-flex items-center gap-1 font-display font-semibold text-brand-600 transition-all hover:gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
export function ContactSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Get in Touch</span>
          <h2 className="mt-5 section-title">We'd Love to Hear From You</h2>
          <p className="mt-4 text-lg text-ink-600">
            Have a question or want to schedule a visit? Send us a message and
            we'll get back to you within one business day.
          </p>
          <div className="mt-8 space-y-5">
            {[
              { icon: MapPin, label: "Visit Us", value: "Patna, Bihar, 94086" },
              { icon: Phone, label: "Call Us", value: "+91 1234567890" },
              { icon: Mail, label: "Email Us", value: "hello@a.school" },
              {
                icon: Clock,
                label: "Open Hours",
                value: "Mon – Fri: 7:30 AM – 6:00 PM",
              },
            ].map((c, i) => (
              <div
                key={c.label}
                className="group flex items-start gap-4 transition-transform duration-300 hover:translate-x-2"
                style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 shadow-inner-3d transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <c.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display font-bold text-ink-900">
                    {c.label}
                  </p>
                  <p className="text-ink-600">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form
          className="rounded-3xl bg-ink-50 p-8 shadow-3d"
          onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your Name" placeholder="Jane Doe" />
            <Field
              label="Your Email"
              placeholder="jane@example.com"
              type="email"
            />
            <Field label="Phone" placeholder="+1 (555) 000-0000" />
            <Field label="Subject" placeholder="Enrolment enquiry" />
          </div>
          <div className="mt-5">
            <label className="mb-1.5 block font-display font-semibold text-ink-700">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell us about your child..."
              className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-800 placeholder-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
          </div>
          <button
            type="submit"
            className="btn-primary mt-5 w-full justify-center group">
            Send Message{" "}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block font-display font-semibold text-ink-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-800 placeholder-ink-400 transition-all focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
