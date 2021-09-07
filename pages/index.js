import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import SectionProjects from "../components/SectionProjects";
import SectionSkills from "../components/SectionSkills";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SectionSkills />
      <SectionProjects />
    </>
  )
}
