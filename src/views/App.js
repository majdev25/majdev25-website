import "./style.css";
import Navigator from "./Navigator.js";
import HeroSection from "./Sections/HeroSection.js";
import PortfolioSection from "./Sections/PortfolioSection.js";
import StackSection from "./Sections/StackSection.js";
import ExperienceSection from "./Sections/ExperienceSection.js";

function App() {
  return (
    <div className="">
      <Navigator></Navigator>

      {/* Page Sections */}
      <main className="">
        <HeroSection></HeroSection>
        <PortfolioSection></PortfolioSection>
        <StackSection></StackSection>
        <ExperienceSection></ExperienceSection>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-white"
        ></section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-gray-100"
        ></section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-white"
        ></section>
      </main>

      {/* Footer */}
    </div>
  );
}

export default App;
