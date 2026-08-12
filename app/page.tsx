import Header from "@/components/school/Header";
import Hero from "@/components/school/Hero";
import QuickAccess from "@/components/school/QuickAccess";
import GradeExplorer from "@/components/school/GradeExplorer";
import AboutSchool from "@/components/school/AboutSchool";
import Academics from "@/components/school/Academics";
import LearningApproach from "@/components/school/LearningApproach";
import Facilities from "@/components/school/Facilities";
import StudentLife from "@/components/school/StudentLife";
import SeniorSecondary from "@/components/school/SeniorSecondary";
import Achievements from "@/components/school/Achievements";
import Faculty from "@/components/school/Faculty";
import NewsEvents from "@/components/school/NewsEvents";
import Testimonials from "@/components/school/Testimonials";
import FAQ from "@/components/school/FAQ";
import AdmissionsCTA from "@/components/school/AdmissionsCTA";
import Footer from "@/components/school/Footer";
import Customizer from "@/components/school/Customizer";
import SectionMotion from "@/components/school/SectionMotion";
import EnquiryDialog from "@/components/school/enquiry/EnquiryDialog";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickAccess />
        <GradeExplorer />
        <AboutSchool />
        <Academics />
        <LearningApproach />
        <Facilities />
        <StudentLife />
        <SeniorSecondary />
        <Achievements />
        <Faculty />
        <NewsEvents />
        <Testimonials />
        <FAQ />
        <AdmissionsCTA />
      </main>
      <Footer />
      <Customizer />
      <SectionMotion />
      <EnquiryDialog />
    </>
  );
}
