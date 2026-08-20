import { PageBanner } from '@/components/PageBanner';
import { ClassesSection, CtaBanner } from '@/components/sections';

export function ClassesPage() {
  return (
    <>
      <PageBanner title="Our Classes" crumb="Classes" />
      <ClassesSection />
      <CtaBanner />
    </>
  );
}
