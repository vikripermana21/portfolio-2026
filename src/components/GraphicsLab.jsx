import { Container, ArrowUpRight } from './ui.jsx'
import Reveal from './Reveal.jsx'

const projects = [
  {
    i: '01',
    name: 'Raging Sea Shading',
    tag: 'WebGL · GLSL',
    url: 'https://raging-sea-shading-shaders.vercel.app',
    img: '/thumbnails/C7rqG.png',
  },
  {
    i: '02',
    name: 'Geometries',
    tag: 'Three.js · Instancing',
    url: 'https://position-examples.vercel.app',
    img: '/thumbnails/zYFvr.png',
  },
  {
    i: '03',
    name: 'Halftone Shading',
    tag: 'GLSL · Post FX',
    url: 'https://halftone-shading-shaders.vercel.app',
    img: '/thumbnails/m7X0Z.png',
  },
  {
    i: '04',
    name: 'Crossy Road Clone',
    tag: 'Three.js · Vite',
    url: 'https://crossy-road-clone-gamma.vercel.app',
    img: '/thumbnails/kH8ig.png',
  },
  {
    i: '05',
    name: 'Minecraft Scene',
    tag: 'Three.js · Voxel',
    url: 'https://minecraft-bake-method.vercel.app',
    img: '/thumbnails/uxIh8.png',
  },
  {
    i: '06',
    name: 'Clair Obscur: Expedition 33',
    tag: 'GLSL · Raymarch',
    url: 'https://expedition-33-main-menu.vercel.app',
    img: '/thumbnails/nqXBF.png',
  },
]

export default function GraphicsLab() {
  return (
    <section id="graphics" className="py-24">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between border-b border-ink-faint pb-[26px]">
            <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
              GRAPHICS &amp; WEBGL
            </span>
            <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
              06 EXPERIMENTS · SHADERS
            </span>
          </div>
        </Reveal>

        <Reveal
          stagger
          className="mt-14 grid grid-cols-1 gap-x-14 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <article
              key={p.i}
              className="group flex flex-col gap-[18px] transition-transform duration-500 ease-out hover:-translate-y-1.5"
            >
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="relative flex h-[260px] flex-col justify-between overflow-hidden p-5"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:brightness-110"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/25" />

                <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-white/95 text-ink opacity-0 shadow-xl transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </span>

                <span className="relative w-fit rounded-full bg-[#0A0A0A59] px-2.5 py-1.5 text-[12px] font-semibold tracking-[1.2px] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  {p.i}
                </span>
                <span className="relative w-fit rounded-full bg-[#0A0A0A59] px-3 py-1.5 text-[11px] font-medium tracking-[0.8px] text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                  {p.tag}
                </span>
              </a>

              <h3 className="font-display text-[30px] leading-[1.05] transition-colors duration-300 group-hover:text-accent">
                {p.name}
              </h3>

              <div className="flex items-center justify-between gap-4">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="truncate text-[13px] text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  {p.url.replace('https://', '')}
                </a>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group/live flex shrink-0 items-center gap-1.5 text-[11px] font-semibold tracking-[1.2px] text-ink-muted transition-colors hover:text-ink"
                >
                  VIEW LIVE
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
