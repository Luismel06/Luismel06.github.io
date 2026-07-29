# Luismel De León Eryartir — Portfolio

[Español](README.es.md)

A bilingual portfolio focused on my work as a Senior Data Engineer, with selected software development projects that demonstrate product thinking and end-to-end delivery.

## Positioning

The portfolio presents three verified pillars from my professional background:

- 3+ years building and operating production data workflows.
- Promotion to Senior Data Engineer at IQVIA.
- An approximately 25% execution-time improvement in a production pipeline.

The software development section supports the main Data Engineering narrative through two deployed products: VegaClean and ORIS79E Services.

## Architecture

```text
.
├── en/                         # English document and metadata
├── es/                         # Spanish document and metadata
├── src/
│   ├── components/             # Layout and portfolio sections
│   ├── content/                # Typed bilingual content
│   ├── hooks/                  # Shared interaction and reveal behavior
│   ├── styles/                 # Design tokens and responsive system
│   ├── App.tsx
│   └── main.tsx
├── imagenes/                   # Local, production-bundled assets
├── scripts/                    # Build packaging
├── tests/                      # Hosting smoke tests
├── worker/                     # Static-site fallback worker
└── vite.config.ts              # Multi-page Vite build
```

The English and Spanish routes are separate HTML entries. Shared facts, components, and assets remain reusable, while localized copy lives in typed content modules.

## Stack

- React 19
- TypeScript
- Vite
- Space Grotesk and IBM Plex Mono, self-hosted through Fontsource
- React Icons using the Phosphor icon family

## Local development

```bash
npm install
npm run dev
```

The default entry redirects to `/en/` or `/es/` based on the browser language. You can also open either route directly.

## Quality checks

```bash
npm run typecheck
npm run build
npm run test:sites
```

The implementation includes semantic sections, keyboard-visible focus, a skip link, responsive navigation, an IntersectionObserver-based motion system, reduced-motion support, optimized image loading, localized metadata, and real language URLs.

## Updating content

- English copy: `src/content/en.ts`
- Spanish copy: `src/content/es.ts`
- Shared types: `src/content/types.ts`
- Project imagery: `imagenes/`

Keep dates, metrics, job titles, and technical claims aligned with verified professional experience.

## Deployment

`npm run build` generates the static client in `dist/client` and prepares the optional worker bundle in `dist/server`.

## Author

**Luismel De León Eryartir**
Senior Data Engineer · Santo Domingo, Dominican Republic

- [LinkedIn](https://www.linkedin.com/in/luismeldeleon/)
- [GitHub](https://github.com/Luismel06)
