import MarqueeSection from "@/components/Marquee";
import AwesomeIdeaSection from "@/layouts/AwesomeIdeaSection";
import HireSection from "@/layouts/HireSection";
import KnowledgeSection from "@/layouts/KnowledgeSection";
import MainSection from "@/layouts/MainSection";
import PortfolioSection from "@/layouts/PortfolioSection";
import SectionIntro from "@/layouts/SectionIntro";
import WorkExperienceSection from "@/layouts/WorkExperienceSection";

function App() {
  const widthDevice = window.innerWidth;
  const isDesktop = widthDevice > 1280;
  return (
    <div className="bg-orange-white w-screen h-screen">
      {isDesktop && <SectionIntro />}
      <MainSection />
      <KnowledgeSection />
      <WorkExperienceSection />
      <HireSection />
      <MarqueeSection />
      <div className="p-10">
        <PortfolioSection />
      </div>
      <AwesomeIdeaSection />
      {/* <TestScaleSection /> */}
    </div>
  );
}

export default App;
