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
      id="stack"
      className="relative bg-black text-white py-20 px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold z-10 animate-slide-in">
        {t("homepage.stack.title")}
      </h2>
      <p className="mb-10 text-lg">{t("homepage.stack.par1")}</p>
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex-1">
          <h3 className="text-3xl mb-4">{t("homepage.stack.subtitle1")}</h3>
          <div className="flex flex-wrap gap-2 mb-4 flex-wrap">
            {frontend.map((tech, index) => (
              <span
                key={index}
                className="bg-coral/20 text-coral px-4 py-2 rounded-md text-sm text-xl flex items-center gap-1"
              >
                {tech.icon}
                {tech.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl mb-4">{t("homepage.stack.subtitle2")}</h3>
          <div className="flex flex-wrap gap-2 mb-4 flex-wrap">
            {backend.map((tech, index) => (
              <span
                key={index}
                className="bg-coral/20 text-coral px-4 py-2 rounded-md text-sm text-xl flex items-center gap-1"
              >
                {tech.icon}
                {tech.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl mb-4">{t("homepage.stack.subtitle3")}</h3>
          <div className="flex flex-wrap gap-2 mb-4 flex-wrap">
            {other.map((tech, index) => (
              <span
                key={index}
                className="bg-coral/20 text-coral px-4 py-2 rounded-md text-sm text-xl flex items-center gap-1"
              >
                {tech.icon}
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackSection;
