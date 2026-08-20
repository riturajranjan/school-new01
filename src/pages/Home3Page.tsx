import { Hero3, AboutSection, StatsBar, FeaturesSection, ClassesSection, EventsSection, TestimonialsSection, GallerySection, CtaBanner, BlogSection } from '@/components/sections';

export function Home3Page() {
  return (
    <>
      <Hero3 />
      <FeaturesSection />
      <ClassesSection limit={6} />
      <AboutSection />
      <StatsBar />
      <EventsSection />
      <GallerySection limit={6} />
      <TestimonialsSection />
      <BlogSection />
      <CtaBanner />
    </>
  );
}
