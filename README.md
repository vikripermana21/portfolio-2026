# Vikri Permana — Portfolio

Personal portfolio built with **Vite + React + Tailwind CSS v4**, generated from the
`portfolio.pen` design.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

```bash
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages…).

## Features

- **Animated preloader** — WebGL fragment shader background with a live 0–100% counter
  and progress bar, then a fade into the site.
- **WebGL showcase** — the `flow` shader rendered live on the GPU at 60fps.
- **Graphics & WebGL lab** — six shader/Three.js experiments, each linked to its live
  deployment and showing a real thumbnail.

## Structure

```
src/
  App.jsx                 # page composition + preloader state
  index.css               # Tailwind v4 import + design tokens (@theme)
  shaders/flow.js         # GLSL ES 100 vertex + fragment source + uniforms
  components/
    ShaderCanvas.jsx      # WebGL renderer (compiles + animates the shader)
    Preloader.jsx         # animated loading overlay
    Nav.jsx Hero.jsx Showcase.jsx
    Work.jsx GraphicsLab.jsx About.jsx
    Services.jsx Experience.jsx Contact.jsx
    ui.jsx
public/
  thumbnails/*.png        # project thumbnails (exported from the .pen design)
```
