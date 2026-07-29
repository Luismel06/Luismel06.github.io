import { PiArrowRight, PiLinkedinLogo, PiMapPin } from "react-icons/pi";
import systemsIllustration from "../../imagenes/portfolio/systems-illustration.jpg";
import type { PortfolioContent } from "../content/types";

interface HeroProps {
  content: PortfolioContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="eyebrow" data-reveal="up">
            {content.hero.eyebrow}
          </p>
          <h1 id="hero-title" className="reveal-delay-1" data-reveal="up">
            {content.hero.name}
          </h1>
          <p className="hero__role reveal-delay-2" data-reveal="up">
            {content.hero.role}
          </p>
          <p className="hero__statement reveal-delay-3" data-reveal="up">
            {content.hero.statement}
          </p>
          <p className="hero__introduction reveal-delay-4" data-reveal="up">
            {content.hero.introduction}
          </p>
          <p className="hero__stack reveal-delay-4" data-reveal="up">
            {content.hero.stack}
          </p>
          <div className="hero__actions reveal-delay-5" data-reveal="up">
            <a className="button button--primary" href="#experience">
              {content.hero.primaryAction}
              <PiArrowRight aria-hidden="true" />
            </a>
            <a
              className="button button--secondary"
              href="https://www.linkedin.com/in/luismeldeleon/"
              target="_blank"
              rel="noreferrer"
            >
              <PiLinkedinLogo aria-hidden="true" />
              {content.hero.secondaryAction}
            </a>
          </div>
          <p className="hero__availability reveal-delay-5" data-reveal="up">
            <PiMapPin aria-hidden="true" />
            {content.hero.availability}
          </p>
        </div>

        <div className="hero__visual reveal-delay-2" data-reveal="scale" aria-hidden="true">
          <img
            src={systemsIllustration}
            alt=""
            width="900"
            height="900"
            fetchPriority="high"
          />
        </div>
      </section>
    </>
  );
}
