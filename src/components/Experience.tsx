import { PiCheck } from "react-icons/pi";
import type { PortfolioContent } from "../content/types";
import { SectionHeading } from "./SectionHeading";

interface ExperienceProps {
  content: PortfolioContent["experience"];
}

export function Experience({ content }: ExperienceProps) {
  return (
    <section className="section" id="experience">
      <SectionHeading
        index={content.index}
        eyebrow={content.eyebrow}
        title={content.title}
        introduction={content.introduction}
      />

      <div className="timeline">
        {content.items.map((item, index) => (
          <article
            className={`timeline-item reveal-delay-${Math.min(index + 1, 3)}`}
            data-reveal="left"
            key={`${item.company}-${item.role}`}
          >
            <div className="timeline-item__meta">
              <p className="timeline-item__period">{item.period}</p>
              <h3>{item.company}</h3>
              <p className="timeline-item__role">{item.role}</p>
              <p className="timeline-item__location">{item.location}</p>
            </div>
            <div className="timeline-item__body">
              <p className="timeline-item__summary">{item.summary}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>
                    <PiCheck aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
