import { useTranslation } from "react-i18next";

import musical from "../../assets/musical.png";

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
        <img src={musical} alt="Musical"></img>
        <p className="text-xs mt-2">{t("homepage.aboutMe.photoText")}</p>
      </div>
    </section>
  );
}

export default StackSection;
