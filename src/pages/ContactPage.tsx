import { PageBanner } from '@/components/PageBanner';
import { ContactSection } from '@/components/sections';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" crumb="Contact" />
      <ContactSection />
      <section className="pb-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.05%2C37.35%2C-121.98%2C37.40&layer=mapnik"
              className="h-[400px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
