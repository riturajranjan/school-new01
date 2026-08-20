import { PageBanner } from '@/components/PageBanner';
import { PricingSection, FaqSection, CtaBanner } from '@/components/sections';

export function PricingPage() {
  return (
    <>
      <PageBanner title="Pricing Plans" crumb="Pricing" />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
