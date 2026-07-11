import AboutHero from "../../Components/AboutSections/AboutHero";
import AboutShigeCrew from "../../Components/AboutSections/AboutShigeCrew";
import VisionSection from "../../Components/AboutSections/VisionSection";
import MissionSection from "../../Components/AboutSections/MissionSection";
import WhyJoinSection from "../../Components/AboutSections/WhyJoinSection";
import TermsSection from "../../Components/AboutSections/TermsSection";
import CoreValuesSection from "../../Components/AboutSections/CoreValuesSection";
import ScheduleSection from "../../Components/AboutSections/ScheduleSection";
import JoinFlowSection from "../../Components/AboutSections/JoinFlowSection"
import GrowthSection from "../../Components/AboutSections/GrowthSection";
import TransparencySection from "../../Components/AboutSections/TransparencySection";
import FAQSection from "../../Components/AboutSections/FAQSection";
import RulesSection from "../../Components/AboutSections/RulesSection";


const sections = [
  AboutShigeCrew,
  VisionSection,
  MissionSection,
  WhyJoinSection,
  TermsSection,
  CoreValuesSection,
  RulesSection,
  ScheduleSection,
  JoinFlowSection,
  GrowthSection,
  TransparencySection,
  FAQSection,
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
        

      {/* Hero */}
      <AboutHero />

      {/* Content */}
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}

    </main>
     
  );
 
}