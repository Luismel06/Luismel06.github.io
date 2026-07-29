# Design QA

## Evidence

- Source visual truth: `.tmp/design-references/selected-option-3.png`
- Implementation screenshot: `.tmp/qa/implementation-playwright-864.png`
- Full-view comparison: `.tmp/qa/comparison-pass2.png`
- Focused hero comparison: `.tmp/qa/comparison-hero-pass2.png`
- Responsive open-menu capture: `.tmp/qa/implementation-playwright-mobile-open.png`
- Interaction results: `.tmp/qa/interaction-results.json`
- Source dimensions: 864 × 1821 px
- Implementation dimensions: 864 × 1821 px
- CSS viewport: 864 × 1821 px
- Device scale factor: 1
- State: English route, default desktop state

## Findings

No actionable P0, P1, or P2 differences remain.

### Fonts and typography

- The implementation uses self-hosted Space Grotesk and IBM Plex Mono.
- Display weight, compact tracking, uppercase section titles, monospace metadata, and body hierarchy match the source direction.
- Text is intentionally larger and less compressed than the generated concept where needed for readable, verified professional content.

### Spacing and layout rhythm

- Header, asymmetric hero, proof strip, numbered sections, timeline, and thin divider system match the selected direction.
- The implemented hero is moderately taller than the concept because it includes a verified professional summary and availability line. This is an intentional content requirement, not uncontrolled drift.
- Desktop alignment and section rhythm remain consistent across the visible implementation.

### Colors and visual tokens

- Warm stone background, charcoal typography, deep teal, burnt orange, and restrained divider colors align with the source.
- Contrast remains clear across primary text, metadata, actions, and tinted sections.

### Image quality and asset fidelity

- The hero uses a dedicated generated raster illustration in the selected architectural style. No CSS or handcrafted SVG substitute is used.
- VegaClean and ORIS79E use current Edge captures from the live products.
- Production image weight was reduced while retaining sufficient sharpness for the intended display size.

### Copy and content

- Job titles, dates, promotion, technologies, and the 25% improvement come from `cv.txt`.
- The concept’s résumé button was replaced by LinkedIn because no public résumé PDF was supplied.
- The implementation adds the complete verified experience and bilingual content instead of repeating speculative copy from the generated visual.

## Interaction and responsive verification

Microsoft Edge was automated through Playwright at a device scale factor of 1.

- English route rendered successfully.
- Experience navigation updated the route hash.
- Language switching loaded the Spanish route and changed the document language to `es`.
- Mobile navigation opened, exposed the correct expanded state, and closed with Escape.
- No horizontal overflow was present at a 390 px viewport.
- No browser console or page errors were detected.

## Comparison history

### Pass 1

- **P1 — Hero illustration distorted vertically**
  - Evidence: `.tmp/qa/comparison-pass1.png`
  - Cause: explicit image dimensions were not being reset after responsive width calculation.
  - Fix: added responsive `height: auto`, then recaptured the same viewport.

- **P2 — Responsive content risk**
  - Evidence: initial narrow Edge CLI capture.
  - Fix: constrained responsive grid tracks, removed the decorative hero asset on small screens, strengthened the menu placement, and added overflow-safe text behavior.

### Pass 2

- Evidence: `.tmp/qa/comparison-pass2.png`
- The hero asset now preserves its aspect ratio.
- Information hierarchy, palette, typography, numbered-section system, and proof strip align with the source.
- Playwright confirmed valid reflow and interaction behavior at 390 px.
- No actionable P0, P1, or P2 findings remain.

## Focused follow-up: development project images

### Evidence

- Source visual truth: `.tmp/qa/development-desktop-before.png` and `.tmp/qa/development-mobile-before.png`
- Revised implementation: `.tmp/qa/development-desktop-after.png` and `.tmp/qa/development-mobile-after.png`
- Side-by-side comparisons: `.tmp/qa/development-desktop-comparison.png` and `.tmp/qa/development-mobile-comparison.png`
- Desktop CSS viewport: 1440 × 1000 px at device scale factor 1
- Mobile CSS viewport: 390 × 844 px at device scale factor 1
- Desktop source/implementation captures: 1440 × 3290 px / 1440 × 1790 px
- Mobile source/implementation captures: 390 × 3932 px / 390 × 2041 px
- State: English route, development section, default interaction state

### Comparison history — Pass 3

- **P1 — Project screenshots stretched to a fixed 1200 px height**
  - Evidence: the source captures show both project screenshots dominating the section vertically and obscuring the intended text/image balance.
  - Cause: responsive width was applied while the HTML image height remained fixed at 1200 px.
  - Fix: moved the aspect ratio to the image container, used a 16:10 desktop frame and a 4:3 mobile frame, and made each image fill that frame with `object-fit: cover` and a top-center focal point.
  - Post-fix evidence: project images render at 721 × 450 px on desktop and 340 × 255 px on mobile. The revised captures preserve the website previews, restore the editorial rhythm, and remove the excessive vertical length.

### Required fidelity surfaces

- **Fonts and typography:** unchanged; project hierarchy and metadata retain the selected Space Grotesk/IBM Plex Mono system.
- **Spacing and layout rhythm:** materially improved; each project now reads as a balanced text-and-image row on desktop and a compact stacked card on mobile.
- **Colors and visual tokens:** unchanged and consistent with the warm paper, teal, rust, and divider token system.
- **Image quality and asset fidelity:** the original VegaClean and ORIS79E captures remain in use, with controlled cropping rather than geometric distortion.
- **Copy and content:** unchanged in both languages.
- **Responsive and interaction checks:** both cards and their external links remain present in English and Spanish; no horizontal overflow or browser console errors were found at either tested viewport.

No actionable P0, P1, or P2 findings remain after the focused fix.

## Focused follow-up: motion system

### Evidence

- Source visual truth: `.tmp/qa/implementation-playwright-864.png` (settled pre-motion layout)
- Settled implementation: `.tmp/qa/motion-implementation-864.png`
- Same-viewport layout comparison: `.tmp/qa/motion-layout-comparison.png`
- Focused hover state: `.tmp/qa/motion-development-hover.png`
- Focused mobile navigation state: `.tmp/qa/motion-mobile-nav-open.png`
- Automated motion and accessibility results: `.tmp/qa/motion-results.json`
- Primary CSS viewport: 864 × 1821 px at device scale factor 1
- Additional interaction viewports: 1440 × 1000 px and 390 × 844 px at device scale factor 1
- States: settled desktop, project hover, mobile navigation open, full-page scroll, and reduced-motion Spanish route

### Comparison history — Pass 4

- **P1 — Animated hero layers rendered above the mobile navigation**
  - Evidence: the first mobile open-menu capture showed transformed hero text crossing the navigation surface.
  - Cause: animated elements created compositor layers while the header lacked an explicit stacking level.
  - Fix: established the site header as a positioned `z-index: 50` layer.
  - Post-fix evidence: `.tmp/qa/motion-mobile-nav-open.png` shows an opaque, correctly ordered menu with readable links and no hero overlap.

- **P2 — Footer could remain hidden at maximum scroll**
  - Evidence: the full-scroll test found one unrevealed target, identified as `.site-footer`.
  - Cause: a 10% negative bottom root margin prevented the short footer from reaching the observer threshold at the document boundary.
  - Fix: reduced the bottom root margin to 4%, then repeated the complete-page scroll test.
  - Post-fix evidence: `.tmp/qa/motion-results.json` reports zero hidden reveal targets after a complete scroll.

### Required fidelity surfaces

- **Fonts and typography:** the settled comparison preserves the original typefaces, weights, wrapping, and hierarchy.
- **Spacing and layout rhythm:** the same-viewport comparison shows no layout shift after animations settle.
- **Colors and visual tokens:** the motion layer introduces no new palette or surface treatment.
- **Image quality and asset fidelity:** existing raster assets remain unchanged; project hover uses a restrained 1.025 scale without distortion.
- **Copy and content:** unchanged in English and Spanish.
- **Interaction and accessibility:** hero entrance, scroll reveals, project hover, mobile navigation, complete-page reveal coverage, horizontal overflow, and reduced-motion behavior passed in Microsoft Edge with no console errors.

No additional animation package was added. The reusable IntersectionObserver hook progressively enhances the page, and users requesting reduced motion receive immediately visible content without transitions.

No actionable P0, P1, or P2 findings remain after the motion QA passes.

## Follow-up polish

- **P3:** Add a downloadable résumé action when a public PDF is available.
- **P3:** Add a production canonical URL and absolute Open Graph image after the final domain is known.

final result: passed
