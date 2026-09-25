import JsonLd, { breadcrumbSchema } from "./JsonLd";

// Shared shell for the privacy and terms pages: a basalt title band (so the
// transparent header has a dark surface to sit on, like every other page),
// then the text on stone for comfortable reading.
export default function LegalPage({ title, path, updated, intro, children }) {
  return (
    <article className="legal">
      <JsonLd data={breadcrumbSchema([{ name: title, path }])} />
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow--light">Alloy Homes LLC</p>
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__meta">Last updated {updated}</p>
        </div>
      </div>
      <div className="section legal__section">
        <div className="container">
          <div className="legal__body">
            <p className="legal__intro">{intro}</p>
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
