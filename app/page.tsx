import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Academics } from "@/components/sections/academics";
import { SmartLearning } from "@/components/sections/smart-learning";
import { Facilities } from "@/components/sections/facilities";
import { Admissions } from "@/components/sections/admissions";
import { Achievements } from "@/components/sections/achievements";
import { StudentLife } from "@/components/sections/student-life";
import { Faculty } from "@/components/sections/faculty";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Academics />
        <SmartLearning />
        <Facilities />
        <Admissions />
        <Achievements />
        <StudentLife />
        <Faculty />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
