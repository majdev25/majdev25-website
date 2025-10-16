import "./style.css";
import HeroSection from "./HeroSection.js";

function App() {
  return (
    <div className="">
      {/* Navigation bar fixed at the top */}

      {/* Page Sections */}
      <main className="">
        <HeroSection></HeroSection>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        ></section>

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
