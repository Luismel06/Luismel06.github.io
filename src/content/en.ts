import { projectAssets } from "./assets";
import type { PortfolioContent } from "./types";

export const en: PortfolioContent = {
  locale: "en",
  languageLabel: "English",
  alternateLanguageLabel: "ES",
  skipLink: "Skip to main content",
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Data systems", href: "#systems" },
    { label: "Dev work", href: "#development" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    eyebrow: "Senior Data Engineer · Santo Domingo, DR",
    name: "Luismel De León Eryartir",
    role: "Senior Data Engineer",
    statement: "Designing reliable data systems for production.",
    introduction:
      "I build and optimize ETL/ELT pipelines across the full data lifecycle—from ingestion and transformation to quality, deployment, and monitoring.",
    stack: "Snowflake · dbt · Databricks · Python · SQL · Apache Spark",
    primaryAction: "View experience",
    secondaryAction: "Connect on LinkedIn",
    availability: "Open to data engineering opportunities and technical collaboration"
  },
  proof: [
    {
      value: "3+ years in production",
      detail: "Building and operating data workflows across modern cloud platforms."
    },
    {
      value: "Promoted at IQVIA",
      detail: "Recognized for ownership, reliability, automation, and technical impact."
    },
    {
      value: "25% faster pipeline",
      detail: "A verified production improvement delivered through focused optimization."
    }
  ],
  experience: {
    index: "01",
    eyebrow: "Experience",
    title: "Where I build and improve data systems.",
    introduction:
      "End-to-end ownership across ingestion, transformation, quality, deployment, monitoring, and production support.",
    items: [
      {
        company: "IQVIA",
        role: "Senior Data Engineer",
        period: "March 2026 — Present",
        location: "Remote · Dominican Republic",
        summary:
          "Developing scalable ELT pipelines and reliable transformation layers for production data products.",
        highlights: [
          "Build and optimize Snowflake transformations and dbt models across production workflows.",
          "Implement automated tests, reconciliation, validation, and duplicate-detection controls.",
          "Investigate failures through structured root-cause analysis and support GitLab CI/CD releases."
        ]
      },
      {
        company: "IQVIA",
        role: "Data Engineer",
        period: "April 2025 — March 2026",
        location: "Remote · Dominican Republic",
        summary:
          "Improved the performance, maintainability, and data quality of business-critical workflows.",
        highlights: [
          "Reverse-engineered legacy identifier logic into a maintainable Snowflake stored procedure.",
          "Added duplicate detection and validation controls to strengthen data consistency.",
          "Reduced a production pipeline’s execution time by approximately 25%."
        ]
      },
      {
        company: "Synergy Sports",
        role: "Data Engineer",
        period: "April 2023 — March 2025",
        location: "Remote",
        summary:
          "Built ETL/ELT workflows and analytical datasets across cloud and relational data platforms.",
        highlights: [
          "Integrated REST APIs, JSON, XML, relational databases, and external data sources.",
          "Developed transformations across Snowflake, SQL Server, PostgreSQL, and MySQL.",
          "Prepared analytical datasets, KPI reporting, and Power BI dashboards with DAX."
        ]
      }
    ]
  },
  systems: {
    index: "02",
    eyebrow: "Data systems",
    title: "Reliability across the full data lifecycle.",
    introduction:
      "My work connects business requirements to maintainable production systems, with quality and observability built into every stage.",
    capabilities: [
      {
        index: "A",
        title: "Ingest & integrate",
        description:
          "Connect structured and semi-structured sources across APIs, files, warehouses, and operational databases.",
        tools: ["REST APIs", "JSON", "XML", "SQL Server", "PostgreSQL", "MySQL"]
      },
      {
        index: "B",
        title: "Transform & model",
        description:
          "Develop scalable ELT logic, warehouse models, stored procedures, and reusable transformation layers.",
        tools: ["Snowflake", "dbt", "Databricks", "SQL", "PySpark"]
      },
      {
        index: "C",
        title: "Validate & reconcile",
        description:
          "Create tests and controls that catch inconsistencies before they reach downstream consumers.",
        tools: ["Data quality", "Reconciliation", "Duplicate detection", "Automated tests"]
      },
      {
        index: "D",
        title: "Deploy & operate",
        description:
          "Monitor workflows, troubleshoot failures, review changes, and automate repeatable delivery.",
        tools: ["GitLab CI/CD", "Git", "Monitoring", "Root-cause analysis"]
      }
    ],
    stackTitle: "Technical stack",
    stack: [
      { label: "Platforms", items: ["Snowflake", "Databricks", "dbt", "Apache Spark"] },
      { label: "Languages", items: ["SQL", "Python", "PySpark", "DAX"] },
      { label: "Databases", items: ["SQL Server", "PostgreSQL", "MySQL"] },
      { label: "Delivery", items: ["GitLab", "CI/CD", "Git", "Jira", "Postman"] }
    ]
  },
  development: {
    index: "03",
    eyebrow: "Selected development work",
    title: "Product thinking beyond the pipeline.",
    introduction:
      "My software background helps me understand the systems that produce and consume data. These deployed projects demonstrate product delivery from interface to operation.",
    projects: [
      {
        title: "VegaClean",
        category: "Professional cleaning platform",
        description:
          "A responsive product and services experience for businesses in hospitality and high-traffic operations, including catalog discovery, publications, and client access.",
        image: projectAssets.vegaCleanHome,
        imageAlt: "VegaClean professional cleaning products website homepage",
        href: "https://vega-clean.vercel.app/",
        linkLabel: "Visit live site"
      },
      {
        title: "ORIS79E Services",
        category: "Technical services platform",
        description:
          "A web presence for technical services covering cameras, structured cabling, maintenance, and operational support for homes and businesses.",
        image: projectAssets.orisHome,
        imageAlt: "ORIS79E technical services website homepage",
        href: "https://oris-79-e-services.vercel.app/",
        linkLabel: "Visit live site"
      }
    ]
  },
  about: {
    index: "04",
    eyebrow: "About",
    title: "Engineering judgment, grounded in delivery.",
    paragraphs: [
      "I work at the intersection of data engineering and software delivery. That background helps me reason about upstream systems, integration contracts, deployment workflows, and the people who depend on trusted data.",
      "I value clear logic, pragmatic automation, useful documentation, and solutions that remain understandable after they reach production."
    ],
    educationTitle: "Education",
    education: "Bachelor’s Degree in Software Engineering · Universidad APEC",
    educationStatus: "In progress",
    certificationsTitle: "Certifications",
    certifications: [
      "Google Advanced Data Analytics Professional Certificate",
      "Google Data Analytics Professional Certificate"
    ],
    languagesTitle: "Languages",
    languages: "Spanish · Native  /  English · Advanced"
  },
  contact: {
    index: "05",
    eyebrow: "Contact",
    title: "Let’s build data systems people can trust.",
    body:
      "For data engineering opportunities, production data challenges, or technical collaboration, the best way to reach me is by email or LinkedIn.",
    emailLabel: "Send an email",
    socialLabel: "Professional profiles"
  },
  footer: "Designed and built by Luismel De León Eryartir."
};
