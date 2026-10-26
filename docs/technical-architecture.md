# Technical Architecture: `CV-WEB`

## 1. Tech Stack
- **Markup:** HTML5 (Semantic elements: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Styling:** CSS3 with Modern Features:
  - CSS Custom Properties (Design Tokens for colors, typography, spacing).
  - CSS Grid & Flexbox for robust layouts.
  - Fluid typography using `clamp()`.
  - Scoped modular styles or single clean stylesheet (`style.css`).
- **Interactivity:** Vanilla JavaScript (ES6+):
  - Smooth scrolling.
  - Mobile menu toggle.
  - Project filtering (optional).
  - Intersection Observer for scroll animations (subtle & purposeful).
- **Assets:**
  - PDF CV stored in `assets/cv.pdf`.
  - Optimized SVGs for icons.

## 2. Folder Structure
```text
CV-WEB/
├── docs/
│   ├── project-overview.md
│   ├── features.md
│   └── technical-architecture.md
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── cv.pdf
```
