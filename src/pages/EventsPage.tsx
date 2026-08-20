import { PageBanner } from '@/components/PageBanner';
import { EventsSection, CtaBanner } from '@/components/sections';

export function EventsPage() {
  return (
    <>
      <PageBanner title="School Events" crumb="Events" />
      <EventsSection />
      <CtaBanner />
    </>
  );
}
