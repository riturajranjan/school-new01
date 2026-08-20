import { PageBanner } from '@/components/PageBanner';
import { FaqSection, CtaBanner } from '@/components/sections';

export function FaqPage() {
  return (
    <>
      <PageBanner title="Frequently Asked Questions" crumb="FAQ" />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
