interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  introduction?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  introduction
}: SectionHeadingProps) {
  return (
    <header className="section-heading" data-reveal="up">
      <span className="section-index" aria-hidden="true">
        {index}
      </span>
      <div className="section-heading__content">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {introduction ? <p className="section-intro">{introduction}</p> : null}
      </div>
    </header>
  );
}
