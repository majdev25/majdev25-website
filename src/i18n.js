// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navigator: {
          home: "Home",
          portfolio: "Portfolio",
          stack: "Stack",
          experience: "Experience",
          education: "Education",
          aboutMe: "About me",
        },
        homepage: {
          hero: {
            greeting: "Hi, I'm Maj Andrejč.",
            title: "Software Engineer",
            subtitle:
              "I design and build complex systems that feel effortless for users.",
            viewWork: "View My Work",
          },
          portfolio: {
            title: "Portfolio",
            featured: "FEATURED",
            intranet: {
              title: "Hospital Intranet",
              short_desc:
                "I developed an internal web app for over <strong>1,000 users</strong>, streamlining collaboration, information sharing, and internal ordering. It includes department-specific modules and an ISO-compliant document management system with detailed access controls for data security.",
              desc: "I solely developed and managed a comprehensive internal web application serving over <strong>1,000 users</strong>, making collaboration, information sharing, and internal ordering intuitive and easy for everyone. The system is complex, comprising multiple modules tailored to the workflows of each hospital department. These modules include a <strong>document management system</strong> aligned with ISO quality standards, with detailed access controls implemented to ensure data security and compliance.",
            },
            orfa: {
              title: "Pharmacy Web App",
              short_desc:
                "I developed and managed a web application for pharmacies across Slovenia, enabling the release of drug orders within and outside hospital pharmacies. The app streamlines medication logistics, ensures logical drug storage, and optimizes overall pharmaceutical workflow.",
            },
            homeflix: {
              title: "Homeflix",
              short_desc:
                "A personal project where I built a movie streaming web application HomeFlix is a modern, self-hosted streaming service. With no database setup required, AI-generated posters, and a sleek, modern interface.",
            },
          },
          stack: {
            title: "Stack",
            par1: "Technologies and tools I've used throughout my career and studies.",
            note: "Note: I haven't listed every programming language I know, as my computer science education allows me to quickly understand and adapt to new languages and technologies.",
            subtitle1: "Frontend",
            subtitle2: "Backend",
            subtitle3: "Tools & Others",
          },
          experience: {
            title: "Experience",
            sbms: {
              year: "2019-2026",
              title: "General Hospital Murska Sobota",
              text: "I solely developed and managed an internal web application (intranet) serving over 1000 users, enabling seamless collaboration, information sharing, and internal order management. Additionally, I created several smaller applications to support hospital workflows, including an ordering system and a COVID-19 tracking app. I was also responsible for maintaining the server, performing backups, and managing the database.",
            },
            pronet: {
              year: "2023-2026",
              title: "Pronet",
              text: "Developed a modern web application that integrates with an older pharmacy management system to provide a better user interface for customers. Worked within a large team to ensure the system was completely reliable, as it was critical for maintaining accurate medication inventory for hospitals across Slovenia.",
            },
          },
          education: {
            title: "Education",
            faculty: "Faculty of Computer and Information Science",
            degree:
              "Bachelor of Computer and Information Science (University Programme)",
            relevantCourses:
              " Relevant Courses: Web Programming, Database Systems, Computer Networks, Software Engineering, Artificial Intelligence, Machine Learning",
            note: "Expected to complete my degree in February 2026.",
            languages: "Languages",
          },
          aboutMe: {
            title: "About me",
            text: "I'm from Slovenia and completed General Secondary School with Academic Focus, where I cultivated a lifelong passion for mathematics. I also attended music school, mastering the violin and piano, later composing and producing my own musical, and eventually dabbling in electronic music for experimental fun. Beyond my artistic pursuits, I devote time to bodybuilding in the gym, a discipline that has instilled resilience and perseverance — virtues I channel into both my creative endeavors and software development projects.",
            photoText: "Team from the musical. (2019)",
          },
        },
      },
    },
    es: {
      translation: {
        navigator: {
          home: "Inicio",
          portfolio: "Portafolio",
          stack: "Stack",
          experience: "Experiencia",
          education: "Educación",
          aboutMe: "Sobre mí",
        },
        homepage: {
          hero: {
            greeting: "Hola, soy Maj Andrejč.",
            title: "Ingeniero de Software",
            subtitle:
              "Creo y desarrollo sistemas complejos que funcionan de manera sencilla para el usuario.",
            viewWork: "Ver mi trabajo",
          },
          portfolio: {
            title: "Portafolio",
            featured: "DESTACADO",
            intranet: {
              title: "Sistema de intranet del hospita",
              short_desc:
                "Desarrollé una aplicación web interna para más de <strong>1,000 usuarios</strong>, optimizando la colaboración, el intercambio de información y los pedidos internos. Incluye módulos específicos para cada departamento y un sistema de gestión documental conforme a las normas ISO, con controles de acceso detallados para garantizar la seguridad de los datos.",
              desc: "Desarrollé y gestioné de forma independiente una completa aplicación web interna que da servicio a más de <strong>1,000 usuarios</strong>, haciendo que la colaboración, el intercambio de información y los pedidos internos sean intuitivos y eficientes. El sistema es complejo y está compuesto por múltiples módulos adaptados a los flujos de trabajo de cada departamento hospitalario. Estos módulos incluyen un <strong>sistema de gestión documental</strong> alineado con los estándares de calidad ISO, con controles de acceso detallados para garantizar la seguridad y el cumplimiento de los datos.",
            },
            orfa: {
              title: "Aplicación Web para Farmacias",
              short_desc:
                "Desarrollé y gestioné una aplicación web para farmacias en toda Eslovenia, que permite la emisión de pedidos de medicamentos dentro y fuera de las farmacias hospitalarias. La aplicación optimiza la logística de medicamentos, asegura un almacenamiento lógico y mejora el flujo de trabajo farmacéutico en general.",
            },
            homeflix: {
              title: "HomeFlix",
              short_desc:
                "Un proyecto personal en el que creé la aplicación web de streaming de películas HomeFlix, un servicio moderno y autoalojado. No requiere configuración de base de datos, incluye carteles generados por IA y una interfaz moderna y elegante.",
            },
          },
          stack: {
            title: "Stack Tecnológico",
            par1: "Tecnologías y herramientas que he utilizado a lo largo de mi carrera y estudios.",
            note: "Nota: No he listado todos los lenguajes de programación que conozco, ya que mi formación en informática me permite comprender y adaptarme rápidamente a nuevos lenguajes y tecnologías.",
            subtitle1: "Frontend",
            subtitle2: "Backend",
            subtitle3: "Herramientas y Otros",
          },
          experience: {
            title: "Experiencia",
            sbms: {
              year: "2019-2026",
              title: "Hospital General Murska Sobota",
              text: "Desarrollé y gestioné de manera independiente una aplicación web interna (intranet) que atendía a más de 1000 usuarios, permitiendo una colaboración fluida, el intercambio de información y la gestión interna de pedidos. Además, creé varias aplicaciones más pequeñas para apoyar los flujos de trabajo del hospital, incluyendo un sistema de pedidos y una aplicación de seguimiento del COVID-19. También fui responsable del mantenimiento del servidor, la realización de copias de seguridad y la gestión de la base de datos.",
            },
            pronet: {
              year: "2023-2026",
              title: "Pronet",
              text: "Desarrollé una aplicación web moderna que se integra con un sistema de gestión de farmacias más antiguo para ofrecer una mejor interfaz de usuario a los clientes. Trabajé dentro de un equipo grande para garantizar que el sistema fuera completamente fiable, ya que era crucial para mantener un inventario preciso de medicamentos en los hospitales de toda Eslovenia.",
            },
          },
          education: {
            title: "Educación",
            faculty: "Facultad de Ciencias de la Computación e Información",
            degree:
              "Licenciatura en Ciencias de la Computación e Informática (Programa Universitario)",
            relevantCourses:
              "Cursos Relevantes: Programación Web, Sistemas de Bases de Datos, Redes de Computadoras, Ingeniería de Software, Inteligencia Artificial, Aprendizaje Automático",
            note: "Se espera que complete mi título en febrero de 2026.",
            languages: "Idiomas",
          },
          aboutMe: {
            title: "Sobre mí",
            text: "Soy de Eslovenia y completé la Escuela Secundaria General con Enfoque Académico, donde cultivé una pasión duradera por las matemáticas. También asistí a la escuela de música, dominando el violín y el piano, posteriormente componiendo y produciendo mi propio musical, y eventualmente experimentando con la música electrónica por diversión creativa. Más allá de mis actividades artísticas, dedico tiempo al culturismo en el gimnasio, una disciplina que me ha inculcado resiliencia y perseverancia — virtudes que aplico tanto en mis proyectos creativos como en el desarrollo de software.",
            photoText: "Equipo del musical. (2019)",
          },
        },
      },
    },
    de: {
      translation: {
        navigator: {
          home: "Startseite",
          portfolio: "Portfolio",
          stack: "Tech-Stack",
          experience: "Erfahrung",
          education: "Ausbildung",
          aboutMe: "Über mich",
        },
        homepage: {
          hero: {
            greeting: "Hi, ich bin Maj Andrejč.",
            title: "Softwareentwickler",
            subtitle:
              "Ich entwerfe und entwickle komplexe Systeme, die sich für Nutzer mühelos anfühlen.",
            viewWork: "Meine Arbeiten ansehen",
          },
          portfolio: {
            title: "Portfolio",
            featured: "HERVORGEHOBEN",
            intranet: {
              title: "Krankenhaus-Intranet",
              short_desc:
                "Ich entwickelte eine interne Webanwendung für über <strong>1.000 Nutzer</strong>, die Zusammenarbeit, Informationsaustausch und interne Bestellungen optimiert. Sie umfasst abteilungsspezifische Module sowie ein ISO-konformes Dokumentenmanagementsystem mit detaillierten Zugriffskontrollen zur Datensicherheit.",
              desc: "Ich habe eine umfassende interne Webanwendung vollständig eigenständig entwickelt und betreut, die von über <strong>1.000 Nutzern</strong> verwendet wird. Sie ermöglicht eine intuitive Zusammenarbeit, einen einfachen Informationsaustausch sowie ein effizientes internes Bestellwesen. Das System ist komplex aufgebaut und besteht aus mehreren Modulen, die an die Arbeitsabläufe der einzelnen Krankenhausabteilungen angepasst sind. Dazu gehört ein <strong>Dokumentenmanagementsystem</strong> gemäß ISO-Qualitätsstandards mit detaillierten Zugriffskontrollen zur Gewährleistung von Datensicherheit und Compliance.",
            },
            orfa: {
              title: "Webanwendung für Apotheken",
              short_desc:
                "Ich entwickelte und betreute eine Webanwendung für Apotheken in ganz Slowenien, die die Freigabe von Medikamentenbestellungen innerhalb und außerhalb von Krankenhausapotheken ermöglicht. Die Anwendung optimiert die Medikamentenlogistik, sorgt für eine logische Lagerung und verbessert den gesamten pharmazeutischen Workflow.",
            },
            homeflix: {
              title: "Homeflix",
              short_desc:
                "Ein persönliches Projekt, bei dem ich eine Streaming-Webanwendung entwickelt habe. HomeFlix ist ein moderner, selbstgehosteter Streaming-Dienst ohne erforderliche Datenbankkonfiguration, mit KI-generierten Postern und einer schlanken, modernen Benutzeroberfläche.",
            },
          },
          stack: {
            title: "Tech-Stack",
            par1: "Technologien und Tools, die ich im Laufe meiner Karriere und meines Studiums verwendet habe.",
            note: "Hinweis: Ich habe nicht jede Programmiersprache aufgelistet, die ich beherrsche, da mir meine informatische Ausbildung ermöglicht, neue Sprachen und Technologien schnell zu verstehen und mich anzupassen.",
            subtitle1: "Frontend",
            subtitle2: "Backend",
            subtitle3: "Tools & Sonstiges",
          },
          experience: {
            title: "Berufserfahrung",
            sbms: {
              year: "2019–2026",
              title: "Allgemeines Krankenhaus Murska Sobota",
              text: "Ich habe eigenständig eine interne Webanwendung (Intranet) für über 1.000 Nutzer entwickelt und betreut, die eine nahtlose Zusammenarbeit, den Informationsaustausch und die Verwaltung interner Bestellungen ermöglicht. Zusätzlich entwickelte ich mehrere kleinere Anwendungen zur Unterstützung von Krankenhausprozessen, darunter ein Bestellsystem und eine COVID-19-Tracking-App. Außerdem war ich für die Serverwartung, Backups und die Datenbankverwaltung verantwortlich.",
            },
            pronet: {
              year: "2023–2026",
              title: "Pronet",
              text: "Entwicklung einer modernen Webanwendung, die in ein älteres Apothekenverwaltungssystem integriert ist, um eine bessere Benutzeroberfläche für Anwender bereitzustellen. Zusammenarbeit in einem großen Team, wobei höchste Zuverlässigkeit erforderlich war, da das System für die korrekte Medikamentenverwaltung in Krankenhäusern in ganz Slowenien entscheidend ist.",
            },
          },
          education: {
            title: "Ausbildung",
            faculty: "Fakultät für Computer- und Informationswissenschaften",
            degree:
              "Bachelor of Computer and Information Science (Universitätsstudium)",
            relevantCourses:
              " Relevante Kurse: Webprogrammierung, Datenbanksysteme, Rechnernetze, Software Engineering, Künstliche Intelligenz, Maschinelles Lernen",
            note: "Voraussichtlicher Studienabschluss im Februar 2026.",
            languages: "Sprachen",
          },
          aboutMe: {
            title: "Über mich",
            text: "Ich komme aus Slowenien und habe ein allgemeinbildendes Gymnasium mit akademischem Schwerpunkt abgeschlossen, wo ich eine lebenslange Leidenschaft für Mathematik entwickelte. Zusätzlich besuchte ich eine Musikschule, in der ich Violine und Klavier erlernte, später mein eigenes Musical komponierte und produzierte und mich schließlich aus experimenteller Neugier mit elektronischer Musik beschäftigte. Neben meinen künstlerischen Interessen widme ich mich intensiv dem Bodybuilding im Fitnessstudio – eine Disziplin, die mir Resilienz und Durchhaltevermögen vermittelt hat, Eigenschaften, die ich sowohl in kreative Projekte als auch in die Softwareentwicklung einbringe.",
            photoText: "Team des Musicals. (2019)",
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
