// src/components/Navigator.js
import { useTranslation } from "react-i18next";

export default function Navigator() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black/70 backdrop-blur-md px-6 py-4 flex justify-between items-center text-white">
      {/* Logo / Name */}
      <div className="text-xl font-bold tracking-wide">Majdev25</div>

      {/* Navigation links */}
      <ul className="hidden md:flex gap-8">
        <li>
          <a href="#home" className="hover:text-coral transition">
            {t("navigator.home")}
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-coral transition">
            {t("navigator.about")}
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-coral transition">
            {t("navigator.projects")}
          </a>
        </li>
      </ul>

      {/* Language selector */}
      <div className="flex gap-2">
        <button
          onClick={() => changeLanguage("en")}
          className={`px-2 py-1 rounded transition ${
            i18n.language === "en"
              ? "bg-white/30 font-semibold"
              : "hover:bg-white/20"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage("es")}
          className={`px-2 py-1 rounded transition ${
            i18n.language === "es"
              ? "bg-white/30 font-semibold"
              : "hover:bg-white/20"
          }`}
        >
          ES
        </button>
      </div>
    </nav>
  );
}
