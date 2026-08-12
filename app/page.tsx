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
      </main>
    </>
  );
}
