import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { DataSystems } from "./components/DataSystems";
import { DevelopmentWork } from "./components/DevelopmentWork";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { ProofStrip } from "./components/ProofStrip";
import { SiteHeader } from "./components/SiteHeader";
import { contentByLocale, getLocale } from "./content";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  const content = contentByLocale[getLocale()];
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.skipLink}
      </a>
      <div className="page-shell">
        <SiteHeader content={content} />
        <main id="main-content">
          <Hero content={content} />
          <ProofStrip points={content.proof} />
          <Experience content={content.experience} />
          <DataSystems content={content.systems} />
          <DevelopmentWork content={content.development} />
          <About content={content.about} />
          <Contact content={content.contact} />
        </main>
        <footer className="site-footer" data-reveal="up">
          <p>{content.footer}</p>
          <p>© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
}

export default App;
