import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaVuejs,
  FaJsSquare,
  FaJava,
  FaLinux,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiSass,
  SiExpress,
  SiPostgresql,
  SiGo,
  SiMongodb,
  SiGithub,
  SiNpm,
  SiOracle,
  SiElectron,
  SiD3Dotjs,
  SiUnrealengine,
  SiUnity,
  SiBlender,
  SiSwagger,
  SiDigitalocean,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

import musical from "../../assets/musical.png";

const frontend = [
  { name: "Vue.js", icon: <FaVuejs /> },
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Boostrap", icon: <FaBootstrap /> },
  { name: "Sass/scss", icon: <SiSass /> },
  { name: "D3", icon: <SiD3Dotjs /> },
];

const backend = [
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Go", icon: <SiGo /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "OracleDB", icon: <SiOracle /> },
];

const other = [
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "NPM", icon: <SiNpm /> },
  { name: "Swagger", icon: <SiSwagger /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Electron", icon: <SiElectron /> },
  { name: "Unreal Engine", icon: <SiUnrealengine /> },
  { name: "Unity", icon: <SiUnity /> },
  { name: "Blender", icon: <SiBlender /> },
  { name: "Digital Ocean", icon: <SiDigitalocean /> },
  { name: "VyOS", icon: null },
];

function StackSection() {
  const { t } = useTranslation();
  return (
    <section
      id="aboutMe"
      className="relative bg-black text-white py-20 px-6 md:px-20 flex gap-20 justify-center items-center flex-col lg:flex-row"
    >
      <div className="flex gap-10 flex-1 justify-center flex-col xl:flex-row">
        <div className="min-w-[200px]">
          <h2 className="text-4xl font-bold z-10 animate-slide-in text-left xl:text-right">
            {t("homepage.aboutMe.title")}
          </h2>
        </div>
        <div className="">{t("homepage.aboutMe.text")}</div>
      </div>
      <div className="flex-1">
        <img src={musical}></img>
        <p className="text-xs mt-2">{t("homepage.aboutMe.photoText")}</p>
      </div>
    </section>
  );
}

export default StackSection;
