import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";

function PortfolioSection() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Hospital Intranet",
      description: t("homepage.portfolio.intranet.desc"),
      short_description: t("homepage.portfolio.intranet.short_desc"),
      github: "https://github.com/majdev25/transFile",
      tags: ["Vue", "Node.js", "PostgreSQL", "SCSS"],
    },
    {
      title: "Space Service Hub",
      description: t("homepage.portfolio.spaceHubDesc"),
      github: "https://github.com/majdev25/space-service-hub",
      demo: "",
      tags: ["Unreal Engine 5", "C++", "Blueprints"],
    },
    {
      title: "Portfolio Website",
      description: t("homepage.portfolio.portfolioDesc"),
      github: "https://github.com/majdev25/portfolio",
      demo: "",
      tags: ["React", "Tailwind CSS", "i18next"],
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative bg-black text-white pb-20 md:ps-12 lg:ps-20 px-6 md:px-0 z-0 w-full"
    >
      <div className="w-full flex flex-col -mt-32 mx-0 md:mx-auto">
        <h2 className="text-4xl font-bold z-10 animate-slide-in">
          {t("homepage.portfolio.title")}
        </h2>
        <h2 className="mb-10 z-10 text-coral">
          {t("homepage.portfolio.featured")}
        </h2>

        <div className="flex flex-col gap-8 z-10 lg:flex-row overflow-x-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-1 min-w-[100px] md:min-w-[600px] bg-neutral-900/60 p-6 rounded-3xl bg-neutral-900/60 backdrop-blur-md rounded-2xl p-6 text-left shadow-lg  transition-all hover:-translate-y-2 animate-slide-in opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-coral">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">
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
