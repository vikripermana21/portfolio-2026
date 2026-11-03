import { Container } from './ui.jsx'
import Reveal from './Reveal.jsx'

const services = [
  [
    '01',
    'Frontend Architecture',
    'Component libraries, state management and modular architecture with React, TypeScript and Next.js.',
  ],
  [
    '02',
    'Secure Integrations',
    'Enterprise Single Sign-On (OAuth/SAML), real-time validation and data-heavy reporting flows.',
  ],
  [
    '03',
    'Motion & WebGL',
    'Interactive interfaces, micro-interactions and GPU work with WebGL, GLSL and WebGPU.',
  ],
]

export default function Services() {
  return (
    <section id="services" className="border-t border-ink-faint py-24">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between border-b border-ink-faint pb-[26px]">
            <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
              EXPERTISE
            </span>
            <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
              WHAT I DO
            </span>
          </div>
        </Reveal>

        <Reveal
          stagger
          className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16"
        >
          {services.map(([n, title, desc]) => (
            <div
              key={n}
              className="group relative flex flex-col gap-4 border-t border-ink-faint pt-8"
            >
              <span className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="text-[13px] font-medium text-accent transition-transform duration-500 ease-out group-hover:translate-x-1">
                {n}
              </span>
              <h3 className="font-display text-[28px] leading-[1.15] transition-transform duration-500 ease-out group-hover:translate-x-1">
                {title}
              </h3>
              <p className="text-[15px] leading-[1.65] text-ink-muted transition-transform duration-500 ease-out group-hover:translate-x-1">
                {desc}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
