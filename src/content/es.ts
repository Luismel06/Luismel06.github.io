import { projectAssets } from "./assets";
import type { PortfolioContent } from "./types";

export const es: PortfolioContent = {
  locale: "es",
  languageLabel: "Español",
  alternateLanguageLabel: "EN",
  skipLink: "Ir al contenido principal",
  nav: [
    { label: "Experiencia", href: "#experience" },
    { label: "Sistemas de datos", href: "#systems" },
    { label: "Proyectos Dev", href: "#development" },
    { label: "Sobre mí", href: "#about" },
    { label: "Contacto", href: "#contact" }
  ],
  hero: {
    eyebrow: "Senior Data Engineer · Santo Domingo, RD",
    name: "Luismel De León Eryartir",
    role: "Senior Data Engineer",
    statement: "Diseñando sistemas de datos confiables para producción.",
    introduction:
      "Construyo y optimizo pipelines ETL/ELT a lo largo de todo el ciclo de datos: desde ingesta y transformación hasta calidad, despliegue y monitoreo.",
    stack: "Snowflake · dbt · Databricks · Python · SQL · Apache Spark",
    primaryAction: "Ver experiencia",
    secondaryAction: "Conectar en LinkedIn",
    availability: "Disponible para oportunidades en Data Engineering y colaboración técnica"
  },
  proof: [
    {
      value: "+3 años en producción",
      detail: "Construyendo y operando flujos de datos sobre plataformas cloud modernas."
    },
    {
      value: "Promovido en IQVIA",
      detail: "Reconocido por ownership, confiabilidad, automatización e impacto técnico."
    },
    {
      value: "Pipeline 25% más rápido",
      detail: "Mejora verificada en producción mediante optimización enfocada."
    }
  ],
  experience: {
    index: "01",
    eyebrow: "Experiencia",
    title: "Donde construyo y mejoro sistemas de datos.",
    introduction:
      "Responsabilidad end-to-end sobre ingesta, transformación, calidad, despliegue, monitoreo y soporte en producción.",
    items: [
      {
        company: "IQVIA",
        role: "Senior Data Engineer",
        period: "Marzo 2026 — Actualidad",
        location: "Remoto · República Dominicana",
        summary:
          "Desarrollo pipelines ELT escalables y capas de transformación confiables para productos de datos en producción.",
        highlights: [
          "Construyo y optimizo transformaciones en Snowflake y modelos dbt para flujos productivos.",
          "Implemento pruebas automatizadas, reconciliación, validaciones y controles de duplicados.",
          "Investigo fallos mediante análisis estructurado de causa raíz y apoyo despliegues con GitLab CI/CD."
        ]
      },
      {
        company: "IQVIA",
        role: "Data Engineer",
        period: "Abril 2025 — Marzo 2026",
        location: "Remoto · República Dominicana",
        summary:
          "Mejoré el rendimiento, mantenibilidad y calidad de flujos de datos críticos para el negocio.",
        highlights: [
          "Convertí lógica legacy de identificadores en un procedimiento mantenible dentro de Snowflake.",
          "Agregué detección de duplicados y controles de validación para fortalecer la consistencia.",
          "Reduje aproximadamente un 25% el tiempo de ejecución de un pipeline productivo."
        ]
      },
      {
        company: "Synergy Sports",
        role: "Data Engineer",
        period: "Abril 2023 — Marzo 2025",
        location: "Remoto",
        summary:
          "Construí flujos ETL/ELT y datasets analíticos sobre plataformas cloud y bases relacionales.",
        highlights: [
          "Integré APIs REST, JSON, XML, bases relacionales y fuentes externas.",
          "Desarrollé transformaciones en Snowflake, SQL Server, PostgreSQL y MySQL.",
          "Preparé datasets analíticos, reportes de KPIs y dashboards Power BI con DAX."
        ]
      }
    ]
  },
  systems: {
    index: "02",
    eyebrow: "Sistemas de datos",
    title: "Confiabilidad durante todo el ciclo de datos.",
    introduction:
      "Mi trabajo conecta requerimientos de negocio con sistemas mantenibles en producción, incorporando calidad y observabilidad en cada etapa.",
    capabilities: [
      {
        index: "A",
        title: "Ingestar e integrar",
        description:
          "Conecto fuentes estructuradas y semiestructuradas mediante APIs, archivos, warehouses y bases operacionales.",
        tools: ["APIs REST", "JSON", "XML", "SQL Server", "PostgreSQL", "MySQL"]
      },
      {
        index: "B",
        title: "Transformar y modelar",
        description:
          "Desarrollo lógica ELT escalable, modelos de warehouse, procedimientos y capas reutilizables.",
        tools: ["Snowflake", "dbt", "Databricks", "SQL", "PySpark"]
      },
      {
        index: "C",
        title: "Validar y reconciliar",
        description:
          "Creo pruebas y controles que detectan inconsistencias antes de llegar a consumidores downstream.",
        tools: ["Calidad de datos", "Reconciliación", "Duplicados", "Pruebas automatizadas"]
      },
      {
        index: "D",
        title: "Desplegar y operar",
        description:
          "Monitoreo procesos, investigo fallos, reviso cambios y automatizo entregas repetibles.",
        tools: ["GitLab CI/CD", "Git", "Monitoreo", "Análisis de causa raíz"]
      }
    ],
    stackTitle: "Stack técnico",
    stack: [
      { label: "Plataformas", items: ["Snowflake", "Databricks", "dbt", "Apache Spark"] },
      { label: "Lenguajes", items: ["SQL", "Python", "PySpark", "DAX"] },
      { label: "Bases de datos", items: ["SQL Server", "PostgreSQL", "MySQL"] },
      { label: "Entrega", items: ["GitLab", "CI/CD", "Git", "Jira", "Postman"] }
    ]
  },
  development: {
    index: "03",
    eyebrow: "Proyectos de desarrollo",
    title: "Pensamiento de producto más allá del pipeline.",
    introduction:
      "Mi background como desarrollador me ayuda a comprender los sistemas que producen y consumen datos. Estos proyectos desplegados muestran entrega de producto desde la interfaz hasta la operación.",
    projects: [
      {
        title: "VegaClean",
        category: "Plataforma de limpieza profesional",
        description:
          "Experiencia responsive de productos y servicios para empresas de hotelería y operaciones de alto tráfico, con catálogo, publicaciones y acceso para clientes.",
        image: projectAssets.vegaCleanHome,
        imageAlt: "Página principal de VegaClean para productos de limpieza profesional",
        href: "https://vega-clean.vercel.app/",
        linkLabel: "Visitar sitio"
      },
      {
        title: "ORIS79E Services",
        category: "Plataforma de servicios técnicos",
        description:
          "Presencia web para servicios de cámaras, cableado estructurado, mantenimiento y soporte operativo para hogares y empresas.",
        image: projectAssets.orisHome,
        imageAlt: "Página principal de ORIS79E para servicios técnicos",
        href: "https://oris-79-e-services.vercel.app/",
        linkLabel: "Visitar sitio"
      }
    ]
  },
  about: {
    index: "04",
    eyebrow: "Sobre mí",
    title: "Criterio de ingeniería basado en entrega real.",
    paragraphs: [
      "Trabajo en la intersección entre Data Engineering y desarrollo de software. Ese background me permite entender sistemas upstream, contratos de integración, procesos de despliegue y a las personas que dependen de datos confiables.",
      "Valoro la lógica clara, la automatización pragmática, la documentación útil y las soluciones que continúan siendo comprensibles después de llegar a producción."
    ],
    educationTitle: "Formación",
    education: "Ingeniería de Software · Universidad APEC",
    educationStatus: "En curso",
    certificationsTitle: "Certificaciones",
    certifications: [
      "Google Advanced Data Analytics Professional Certificate",
      "Google Data Analytics Professional Certificate"
    ],
    languagesTitle: "Idiomas",
    languages: "Español · Nativo  /  Inglés · Avanzado"
  },
  contact: {
    index: "05",
    eyebrow: "Contacto",
    title: "Construyamos sistemas de datos en los que se pueda confiar.",
    body:
      "Para oportunidades de Data Engineering, retos de datos en producción o colaboración técnica, puedes contactarme por correo o LinkedIn.",
    emailLabel: "Enviar un correo",
    socialLabel: "Perfiles profesionales"
  },
  footer: "Diseñado y desarrollado por Luismel De León Eryartir."
};
