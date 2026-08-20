import { Hero4, AboutSection, StatsBar, ClassesSection, TeachersSection, EventsSection, GallerySection, TestimonialsSection, PricingSection, CtaBanner, BlogSection } from '@/components/sections';

export function Home4Page() {
  return (
    <>
      <Hero4 />
      <AboutSection />
      <ClassesSection limit={4} />
      <StatsBar />
      <TeachersSection />
      <EventsSection />
      <GallerySection limit={6} />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <CtaBanner />
    </>
  );
}
