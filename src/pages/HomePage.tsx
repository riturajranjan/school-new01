import {
  Hero1,
  AboutSection,
  StatsBar,
  FeaturesSection,
  ClassesSection,
  TeachersSection,
  EventsSection,
  TestimonialsSection,
  GallerySection,
  PricingSection,
  FaqSection,
  CtaBanner,
  BlogSection,
} from '@/components/sections';

export function HomePage() {
  return (
    <>
      <Hero1 />
      <AboutSection />
      <StatsBar />
      <FeaturesSection />
      <ClassesSection limit={6} />
      <TeachersSection />
      <EventsSection />
      <TestimonialsSection />
      <GallerySection limit={7} />
      <PricingSection />
      <FaqSection />
      <BlogSection />
      <CtaBanner />
    </>
  );
}
