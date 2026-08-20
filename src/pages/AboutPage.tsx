import { PageBanner } from '@/components/PageBanner';
import { AboutSection, StatsBar, FeaturesSection, TeachersSection, TestimonialsSection, CtaBanner } from '@/components/sections';

export function AboutPage() {
  return (
    <>
      <PageBanner title="About Our School" crumb="About" />
      <AboutSection />
      <StatsBar />
      <FeaturesSection />
      <TeachersSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
