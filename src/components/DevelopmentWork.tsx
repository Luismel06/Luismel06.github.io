import { PiArrowUpRight } from "react-icons/pi";
import type { PortfolioContent } from "../content/types";
import { SectionHeading } from "./SectionHeading";

interface DevelopmentWorkProps {
  content: PortfolioContent["development"];
}

export function DevelopmentWork({ content }: DevelopmentWorkProps) {
  return (
    <section className="section" id="development">
      <SectionHeading
        index={content.index}
        eyebrow={content.eyebrow}
        title={content.title}
        introduction={content.introduction}
      />

      <div className="projects">
        {content.projects.map((project, index) => (
          <article
            className={`project reveal-delay-${index + 1}`}
            data-reveal="up"
            key={project.title}
          >
            <div className="project__copy">
              <p className="project__number">0{index + 1}</p>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.href} target="_blank" rel="noreferrer">
                {project.linkLabel}
                <PiArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <a
              className="project__image"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.linkLabel}: ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                width="1440"
                height="1200"
                loading="lazy"
                decoding="async"
              />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
