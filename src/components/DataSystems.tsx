import type { PortfolioContent } from "../content/types";
import { SectionHeading } from "./SectionHeading";

interface DataSystemsProps {
  content: PortfolioContent["systems"];
}

export function DataSystems({ content }: DataSystemsProps) {
  return (
    <section className="section section--tinted" id="systems">
      <SectionHeading
        index={content.index}
        eyebrow={content.eyebrow}
        title={content.title}
        introduction={content.introduction}
      />

      <div className="capabilities">
        {content.capabilities.map((capability, index) => (
          <article
            className={`capability reveal-delay-${(index % 2) + 1}`}
            data-reveal="up"
            key={capability.index}
          >
            <span className="capability__index">{capability.index}</span>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <ul aria-label={`${capability.title} tools`}>
              {capability.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="stack" data-reveal="up">
        <h3>{content.stackTitle}</h3>
        <div className="stack__grid">
          {content.stack.map((group, index) => (
            <div
              className={`stack-group reveal-delay-${index + 1}`}
              data-reveal="up"
              key={group.label}
            >
              <h4>{group.label}</h4>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
