import "./style.css";
import Navigator from "./Navigator.js";
import HeroSection from "./Sections/HeroSection.js";
import PortfolioSection from "./Sections/PortfolioSection.js";
import StackSection from "./Sections/StackSection.js";
import ExperienceSection from "./Sections/ExperienceSection.js";
import EducationSection from "./Sections/EducationSection.js";
import AboutMeSection from "./Sections/AboutMeSection.js";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navigator></Navigator>

      {/* Page Sections */}
      <main className="">
        <HeroSection></HeroSection>
        <PortfolioSection></PortfolioSection>
        <StackSection></StackSection>
        <ExperienceSection></ExperienceSection>
        <EducationSection></EducationSection>
        <AboutMeSection></AboutMeSection>
      </main>

      {/* Footer */}
    </div>
  );
}

export default App;
