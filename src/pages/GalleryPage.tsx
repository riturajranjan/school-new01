import { PageBanner } from '@/components/PageBanner';
import { GallerySection, CtaBanner } from '@/components/sections';

export function GalleryPage() {
  return (
    <>
      <PageBanner title="Our Gallery" crumb="Gallery" />
      <GallerySection />
      <CtaBanner />
    </>
  );
}
