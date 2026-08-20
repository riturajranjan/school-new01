import { PageBanner } from '@/components/PageBanner';
import { TeachersSection, TestimonialsSection, CtaBanner } from '@/components/sections';

export function TeachersPage() {
  return (
    <>
      <PageBanner title="Our Teachers" crumb="Teachers" />
      <TeachersSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
