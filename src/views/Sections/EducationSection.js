import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import ulLogo from "../../assets/UL_logo.svg";

function PortfolioSection() {
  const { t } = useTranslation();

  return (
    <section
      id="education"
      className="relative bg-black text-white py-20 md:ps-12 lg:ps-20 px-6 md:px-20 z-0 w-full overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[60%] h-[100%] bg-coral/70 filter blur-3xl -translate-x-1/3 z-2 animate-pulse-reverse [animation-delay:0.3s]"></div>
      <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-orangeRed/50 filter blur-3xl translate-x-1/3 z-1 animate-pulse-reverse"></div>
      <div className="absolute top-0 left-1/2 w-[55%] h-[100%] bg-purple-500/40 filter blur-3xl -translate-x-1/2 z-1 rounded-full rotate-[6deg]"></div>
      <div className="absolute top-1/2 left-0 w-[20%] h-[120%] bg-black filter blur-3xl -translate-x-1/2 -translate-y-1/2  z-1 rounded-full"></div>
      <div className="absolute top-1/2 right-0 w-[20%] h-[120%] bg-black filter blur-3xl translate-x-1/2 -translate-y-1/2  z-1 rounded-full"></div>

      <div className="w-full flex flex-col mx-0 md:mx-auto items-center mb-10">
        <h2 className="text-4xl font-bold z-10 animate-slide-in mb-10">
          {t("homepage.education.title")}
        </h2>

        <div
          onClick={() =>
            window.open(
              "https://pronet-kr.si/",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="relative flex-1 min-w-[100px] md:max-w-[600px] bg-white/10 hover:bg-white/20 p-6 rounded-3xl border border-white/20 backdrop-blur-[100px] backdrop-blur-md rounded-2xl p-6 text-left flex-1 cursor-pointer transition"
        >
          <div className="absolute top-[20px] right-[20px]">
            <FiExternalLink />
          </div>
          <div>
            <img
              src={ulLogo}
              alt="Univerza v Ljubljani logo"
              className="h-[65px] -ml-[20px]"
            ></img>
          </div>
          <h2 className="text-xl mb-2 font-bold">
            {t("homepage.education.degree")}
          </h2>
          <p className="text-i font-bold">{t("homepage.education.note")}</p>
          <p className="text-i">{t("homepage.education.relevantCourses")}</p>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
