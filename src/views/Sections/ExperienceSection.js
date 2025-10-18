import { FiExternalLink } from "react-icons/fi";
import { useTranslation, Trans } from "react-i18next";

function PortfolioSection() {
  const { t } = useTranslation();

  return (
    <section
      id="portfolio"
      className="relative bg-black text-white py-20 px-6 md:px-20 z-0 w-full overflow-hidden"
    >
      <div className="absolute top-[50px] left-0 w-[50%] h-[100%] bg-coral/60 filter blur-3xl -translate-x-1/2 -translate-y-1/2 z-2 animate-pulse-reverse"></div>
      <div className="absolute top-[80px] left-0 w-[50%] h-[100%] bg-orangeRed/30 filter blur-3xl -translate-x-1/2 -translate-y-1/2 rotate-[10rad] z-1 animate-pulse-slow [animation-delay:0.3s]"></div>
      <div className="absolute top-[80px] left-0 w-[50%] h-[100%] bg-purple-500/20 filter blur-3xl -translate-x-1/2 -translate-y-1/2 rotate-[20rad] z-1 animate-pulse-slow"></div>

      <div className="w-full flex flex-col mx-0 md:mx-auto">
        <h2 className="text-4xl font-bold z-10 animate-slide-in">
          {t("homepage.experience.title")}
        </h2>
        <h2 className="mb-10 z-10 text-white">
          {t("homepage.portfolio.featured")}
        </h2>

        <div className="flex flex-col gap-8 z-10 lg:flex-row w-full">
          <div
            onClick={() =>
              window.open(
                "https://www.sb-ms.si/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="relative flex-1 min-w-[100px] md:min-w-[600px] bg-white/10 hover:bg-white/20 p-6 rounded-3xl border border-white/20 backdrop-blur-[100px] backdrop-blur-md rounded-2xl p-6 text-left flex-1 cursor-pointer transition"
          >
            <div className="absolute top-[20px] right-[20px]">
              <FiExternalLink />
            </div>
            <div className="text-sm">2019-2026</div>
            <div>
              <h2 className="text-2xl mb-2 font-bold">
                General Hospital Murska Sobota
              </h2>
            </div>
            <p>
              I solely developed and managed an internal web application
              (intranet) serving over 1000 users, enabling seamless
              collaboration, information sharing, and internal order management.
              Additionally, I created several smaller applications to support
              hospital workflows, including an ordering system and a COVID-19
              tracking app. I was also responsible for maintaining the server,
              performing backups, and managing the database.
            </p>
          </div>
          <div
            onClick={() =>
              window.open(
                "https://pronet-kr.si/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="relative flex-1 min-w-[100px] md:min-w-[600px] bg-white/10 hover:bg-white/20 p-6 rounded-3xl border border-white/20 backdrop-blur-[100px] backdrop-blur-md rounded-2xl p-6 text-left flex-1 cursor-pointer transition"
          >
            <div className="absolute top-[20px] right-[20px]">
              <FiExternalLink />
            </div>
            <div className="text-sm">2023-2026</div>
            <h2 className="text-2xl mb-2 font-bold">Pronet Kranj</h2>
            <p>
              Developed a modern web application that integrates with an older
              pharmacy management system to provide a better user interface for
              customers. Worked within a large team to ensure the system was
              completely reliable, as it was critical for maintaining accurate
              medication inventory for hospitals across Slovenia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
