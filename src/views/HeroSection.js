import "./style.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaCodeBranch,
} from "react-icons/fa";
import profileImg from "../assets/profile-small.png";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 text-center overflow-x-hidden"
    >
      <div className="absolute top-0 left-1/2 w-[50rem] h-[50rem] bg-coral/50 rounded-full filter blur-3xl -translate-x-[30%] -translate-y-1/2 z-0 animate-pulse-slow [animation-delay:0.3s]"></div>
      <div className="absolute top-0 left-1/2 w-[50rem] h-[50rem] bg-orangeRed/40 rounded-full filter blur-3xl -translate-x-[70%] -translate-y-1/2 z-0 animate-pulse-reverse"></div>
      <div className="w-40 h-40 mb-6 z-10">
        <img
          src={profileImg}
          alt="Maj"
          className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg shadow-[0_0_30px_coral]"
        />
      </div>

      <h1 className="text-sm font-regular mb-4 z-10">Hi, I'm Maj.</h1>
      <h1 className="relative inline-block">
        <div className="absolute -top-10 -left-[15%] transform -rotate-12">
          <FaCode className="text-coral text-6xl opacity-0 drop-shadow-[0_0_15px_coral] animate-slide-in [animation-delay:0.8s] hidden sm:block" />
        </div>
        <div className="absolute -top-10 -right-[15%] transform rotate-12">
          <FaCodeBranch className="text-orangeRed text-6xl opacity-0 drop-shadow-[0_0_15px_orangeRed] animate-slide-in [animation-delay:1s] hidden sm:block" />
        </div>
        <div className="text-5xl md:text-6xl font-bold mb-4 z-10 animate-slide-in">
          Full stack developer
        </div>
      </h1>
      <p className="text-lg md:text-2xl mb-6 max-w-xl z-10 animate-slide-in opacity-0 [animation-delay:0.1s]">
        Building the web of tomorrow—one modern solution at a time.
      </p>
      <div className="flex gap-4 mt-6 animate-slide-in opacity-0 [animation-delay:0.5s]">
        <a href="https://github.com/majdev25" target="_blank" rel="noreferrer">
          <FaGithub className="text-coral hover:text-orangeRed text-2xl transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/maj-andrej%C4%8D-5326992a4/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-coral hover:text-orangeRed text-2xl transition" />
        </a>
        <a href="mailto:you@example.com">
          <FaEnvelope className="text-coral hover:text-orangeRed text-2xl transition" />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
