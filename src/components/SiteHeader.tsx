import { useEffect, useState } from "react";
import { PiList, PiX } from "react-icons/pi";
import type { PortfolioContent } from "../content/types";

interface SiteHeaderProps {
  content: PortfolioContent;
}

export function SiteHeader({ content }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const languageHref = content.locale === "en" ? "../es/index.html" : "../en/index.html";

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header" data-reveal="down">
      <a className="brand" href="#top" aria-label="Luismel De León Eryartir">
        <span className="brand__mark" aria-hidden="true">
          LD
        </span>
        <span className="brand__copy">
          <strong>Luismel De León Eryartir</strong>
          <small>Senior Data Engineer</small>
        </span>
      </a>

      <button
        className={`menu-toggle ${menuOpen ? "menu-toggle--open" : ""}`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <PiX aria-hidden="true" /> : <PiList aria-hidden="true" />}
      </button>

      <nav
        id="primary-navigation"
        className={`primary-nav ${menuOpen ? "primary-nav--open" : ""}`}
        aria-label="Primary navigation"
      >
        {content.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="language-link" href={languageHref} lang={content.locale === "en" ? "es" : "en"}>
          {content.alternateLanguageLabel}
        </a>
      </nav>
    </header>
  );
}
