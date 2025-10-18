// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navigator: {
          home: "Home",
          about: "About",
          projects: "Projects",
        },
        homepage: {
          hero: {
            greeting: "Hi, I'm Maj Andrejč.",
            title: "Full Stack Developer",
            subtitle:
              "I design and build complex systems that feel effortless for users.",
            viewWork: "View My Work",
          },
          portfolio: {
            title: "Portfolio",
            featured: "FEATURED",
            intranet: {
              short_desc:
                "I developed an internal web app for over <strong>1,000 users</strong>, streamlining collaboration, information sharing, and internal ordering. It includes department-specific modules and an ISO-compliant document management system with detailed access controls for data security.",
              desc: "I solely developed and managed a comprehensive internal web application serving over <strong>1,000 users</strong>, making collaboration, information sharing, and internal ordering intuitive and easy for everyone. The system is complex, comprising multiple modules tailored to the workflows of each hospital department. These modules include a <strong>document management system</strong> aligned with ISO quality standards, with detailed access controls implemented to ensure data security and compliance.",
            },
          },
          stack: {
            title: "Stack",
            par1: "Technologies and tools I've used throughout my career and studies.",
            subtitle1: "Frontend",
            subtitle2: "Backend",
            subtitle3: "Tools & Others",
          },
        },
      },
    },
    es: {
      translation: {
        navigator: {
          home: "Inicio",
          about: "Acerca de",
          projects: "Proyectos",
        },
        homepage: {
          hero: {
            greeting: "Hola, soy Maj Andrejč.",
            title: "Desarrollador Full Stack",
            subtitle:
              "Creo y desarrollo sistemas complejos que funcionan de manera sencilla para el usuario.",
            viewWork: "Ver mi trabajo",
          },
          portfolio: {
            title: "Portafolio",
            featured: "DESTACADO",
            intranet: {
              short_desc:
                "Desarrollé una aplicación web interna para más de <strong>1,000 usuarios</strong>, optimizando la colaboración, el intercambio de información y los pedidos internos. Incluye módulos específicos para cada departamento y un sistema de gestión documental conforme a las normas ISO, con controles de acceso detallados para garantizar la seguridad de los datos.",
              desc: "Desarrollé y gestioné de forma independiente una completa aplicación web interna que da servicio a más de <strong>1,000 usuarios</strong>, haciendo que la colaboración, el intercambio de información y los pedidos internos sean intuitivos y eficientes. El sistema es complejo y está compuesto por múltiples módulos adaptados a los flujos de trabajo de cada departamento hospitalario. Estos módulos incluyen un <strong>sistema de gestión documental</strong> alineado con los estándares de calidad ISO, con controles de acceso detallados para garantizar la seguridad y el cumplimiento de los datos.",
            },
          },
          stack: {
            title: "Stack Tecnológico",
            par1: "Tecnologías y herramientas que he utilizado a lo largo de mi carrera y estudios.",
            subtitle1: "Frontend",
            subtitle2: "Backend",
            subtitle3: "Herramientas y Otros",
          },
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
