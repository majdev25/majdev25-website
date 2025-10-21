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
            degree:
              "Bachelor of Computer and Information Science (University Programme)",
            relevantCourses:
              " Relevant Courses: Web Programming, Database Systems, Computer Networks, Software Engineering, Artificial Intelligence, Machine Learning",
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
            degree:
              "Licenciatura en Ciencias de la Computación e Informática (Programa Universitario)",
            relevantCourses:
              "Cursos Relevantes: Programación Web, Sistemas de Bases de Datos, Redes de Computadoras, Ingeniería de Software, Inteligencia Artificial, Aprendizaje Automático",
          },
          aboutMe: {
            title: "Sobre mí",
            text: "Soy de Eslovenia y completé la Escuela Secundaria General con Enfoque Académico, donde cultivé una pasión duradera por las matemáticas. También asistí a la escuela de música, dominando el violín y el piano, posteriormente componiendo y produciendo mi propio musical, y eventualmente experimentando con la música electrónica por diversión creativa. Más allá de mis actividades artísticas, dedico tiempo al culturismo en el gimnasio, una disciplina que me ha inculcado resiliencia y perseverancia — virtudes que aplico tanto en mis proyectos creativos como en el desarrollo de software.",
            photoText: "Equipo del musical. (2019)",
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
