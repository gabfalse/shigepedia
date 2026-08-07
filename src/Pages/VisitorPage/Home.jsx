import Background from "../../Components/HomeComponents/Background";
import HeroSlider from "../../Components/HomeComponents/HeroSlider";
import PortalSection from "../../Components/HomeComponents/PortalSection";
import RecruitmentCard from "../../Components/HomeComponents/RecruitmentCard";

import { homeSlides } from "../../Data/HomeSlides";
import { portals } from "../../Data/Portals";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-base">
      <Background />

      <div className="container relative z-10">
        <section className="section">
          <HeroSlider slides={homeSlides} />
        </section>

        <section className="section">
          <PortalSection portals={portals} />
        </section>

        <section className="section">
          <RecruitmentCard />
        </section>
      </div>
    </main>
  );
}