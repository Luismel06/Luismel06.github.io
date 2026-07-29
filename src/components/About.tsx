import { PiCertificate, PiGraduationCap, PiTranslate } from "react-icons/pi";
import type { PortfolioContent } from "../content/types";
import { SectionHeading } from "./SectionHeading";

interface AboutProps {
  content: PortfolioContent["about"];
}

export function About({ content }: AboutProps) {
  return (
    <section className="section section--tinted" id="about">
      <SectionHeading index={content.index} eyebrow={content.eyebrow} title={content.title} />

      <div className="about-grid">
        <div className="about-copy" data-reveal="left">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="credentials">
          <article data-reveal="up">
            <PiGraduationCap aria-hidden="true" />
            <div>
              <h3>{content.educationTitle}</h3>
              <p>{content.education}</p>
              <small>{content.educationStatus}</small>
            </div>
          </article>
          <article className="reveal-delay-1" data-reveal="up">
            <PiCertificate aria-hidden="true" />
            <div>
              <h3>{content.certificationsTitle}</h3>
              <ul>
                {content.certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="reveal-delay-2" data-reveal="up">
            <PiTranslate aria-hidden="true" />
            <div>
              <h3>{content.languagesTitle}</h3>
              <p>{content.languages}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
