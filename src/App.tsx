import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useRoute } from '@/lib/router';
import { HomePage } from '@/pages/HomePage';
import { Home2Page } from '@/pages/Home2Page';
import { Home3Page } from '@/pages/Home3Page';
import { Home4Page } from '@/pages/Home4Page';
import { AboutPage } from '@/pages/AboutPage';
import { ClassesPage } from '@/pages/ClassesPage';
import { TeachersPage } from '@/pages/TeachersPage';
import { EventsPage } from '@/pages/EventsPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { PricingPage } from '@/pages/PricingPage';
import { FaqPage } from '@/pages/FaqPage';
import { ContactPage } from '@/pages/ContactPage';
import { ArrowUp, Sparkles } from 'lucide-react';

const routes: Record<string, () => JSX.Element> = {
  '/': HomePage,
  '/home-2': Home2Page,
  '/home-3': Home3Page,
  '/home-4': Home4Page,
  '/about': AboutPage,
  '/classes': ClassesPage,
  '/teachers': TeachersPage,
  '/events': EventsPage,
  '/gallery': GalleryPage,
  '/pricing': PricingPage,
  '/faq': FaqPage,
  '/contact': ContactPage,
};

const marqueeItems = [
  'Play-Based Learning',
  'Creative Arts',
  'Music & Movement',
  'Outdoor Adventures',
  'Little Scientists',
  'Language & Stories',
  'Mini Sports',
  'World Explorers',
];

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(scrolled * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-brand-500 via-sunny-400 to-berry-500 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden bg-ink-900 py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-3 font-display text-lg font-semibold text-white">
            <Sparkles className="h-5 w-5 text-brand-400" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const path = useRoute();
  const [showTop, setShowTop] = useState(false);
  const Page = routes[path] ?? HomePage;

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Page />
      </main>
      <MarqueeStrip />
      <Footer />

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand-500 text-white shadow-glow-brand transition-all hover:bg-brand-600 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}
    </div>
  );
}

export default App;
