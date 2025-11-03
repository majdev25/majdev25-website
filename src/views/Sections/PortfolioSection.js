import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";

function PortfolioSection() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("homepage.portfolio.intranet.title"),
      description: t("homepage.portfolio.intranet.desc"),
      short_description: t("homepage.portfolio.intranet.short_desc"),
      github: null,
      tags: ["Vue", "Node.js", "PostgreSQL", "SCSS"],
    },
    {
      title: t("homepage.portfolio.orfa.title"),
      short_description: t("homepage.portfolio.orfa.short_desc"),
      github: null,
      tags: ["Vue", "Node.js", "ORACLE DB", "Docker"],
    },
    {
      title: t("homepage.portfolio.homeflix.title"),
      short_description: t("homepage.portfolio.homeflix.short_desc"),
      github: "https://github.com/majdev25/Homeflix",
      tags: ["React", "Tailwind", "Node.js", "TypeScript"],
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative bg-black text-white pb-20 md:ps-12 lg:ps-20 px-6 md:px-20 z-0 w-full"
    >
      {/* Coral blob */}
      <div className="absolute top-1/2 left-1/2 w-[80rem] h-[30rem] bg-coral/40 rounded-full blur-[120px] -translate-x-[50%] -translate-y-[30%] animate-pulse-slo z-0" />

      {/* Orange-red blob */}
      <div className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] bg-orangeRed/30 rounded-full blur-[130px] -translate-x-[50%] -translate-y-[50%] animate-pulse-reverse z-0" />

      {/* Soft purple glow for contrast */}
      <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-purple-500/20 rounded-full blur-[150px] -translate-x-[50%] -translate-y-[70%] animate-pulse-slow [animation-delay:1s] z-0" />

      <div className="w-full flex flex-col -mt-32 mx-0 md:mx-auto">
        <h2 className="text-4xl font-bold z-10 animate-slide-in">
          {t("homepage.portfolio.title")}
        </h2>
        <h2 className="mb-10 z-10 text-coral">
          {t("homepage.portfolio.featured")}
        </h2>

        <div className="flex flex-col gap-8 z-10 lg:flex-row overflow-x-scroll overflow-show scrollbar-thin scrollbar-thumb-gray-500 white-scrollbar pb-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[100px] md:min-w-[600px] bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-[100px] backdrop-blur-md rounded-2xl p-6 text-left flex-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-white mb-4">
                <Trans i18nKey={project.short_description}></Trans>
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-coral/20 text-coral px-2 py-1 rounded-md text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-coral hover:text-orangeRed text-xl transition"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-coral hover:text-orangeRed text-xl transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
