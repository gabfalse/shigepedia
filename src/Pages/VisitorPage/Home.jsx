import Background from "../../Components/HomeComponents/Background";
import HeroSlider from "../../Components/HomeComponents/HeroSlider";
import PortalSection from "../../Components/HomeComponents/PortalSection";

import RecruitmentCard from "../../Components/HomeComponents/RecruitmentCard";


import { homeSlides } from "../../Components/Data/HomeSlides";
import { portals } from "../../Components/Data/Portals";

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />

      <div className="container-page">
        <HeroSlider slides={homeSlides} />

        <PortalSection portals={portals} />


        <RecruitmentCard />

      
      </div>
    </main>
  );
}

export default Home;