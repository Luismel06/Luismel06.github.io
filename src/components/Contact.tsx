import { PiArrowUpRight, PiEnvelopeSimple, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import type { PortfolioContent } from "../content/types";
import { SectionHeading } from "./SectionHeading";

interface ContactProps {
  content: PortfolioContent["contact"];
}

export function Contact({ content }: ContactProps) {
  return (
    <section className="section contact" id="contact">
      <SectionHeading index={content.index} eyebrow={content.eyebrow} title={content.title} />
      <div className="contact__content">
        <p data-reveal="left">{content.body}</p>
        <a
          className="contact__email reveal-delay-1"
          data-reveal="right"
          href="mailto:luismel809524@gmail.com"
        >
          <PiEnvelopeSimple aria-hidden="true" />
          <span>{content.emailLabel}</span>
          <strong>luismel809524@gmail.com</strong>
          <PiArrowUpRight aria-hidden="true" />
        </a>
        <div
          className="social-links reveal-delay-2"
          data-reveal="up"
          aria-label={content.socialLabel}
        >
          <a href="https://www.linkedin.com/in/luismeldeleon/" target="_blank" rel="noreferrer">
            <PiLinkedinLogo aria-hidden="true" />
            LinkedIn
          </a>
          <a href="https://github.com/Luismel06" target="_blank" rel="noreferrer">
            <PiGithubLogo aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
