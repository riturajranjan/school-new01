import { Hero2, AboutSection, StatsBar, FeaturesSection, ClassesSection, TeachersSection, TestimonialsSection, PricingSection, FaqSection, CtaBanner } from '@/components/sections';

export function Home2Page() {
  return (
    <>
      <Hero2 />
      <FeaturesSection />
      <AboutSection />
      <ClassesSection limit={3} />
      <StatsBar />
      <TeachersSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
