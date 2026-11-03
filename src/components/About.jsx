import Reveal from './Reveal.jsx'

const meta = [
  ['BASED IN', 'Bandung, Indonesia'],
  ['WORKING', 'Remote · Worldwide'],
  ['EXPERIENCE', '4+ years'],
]

const stats = [
  ['04+', 'Years experience'],
  ['04', 'Flagship platforms'],
  ['20+', 'Technologies in stack'],
]

export default function About() {
  return (
    <section id="about" className="border-t border-ink-faint py-24">
      <Reveal
        stagger
        className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 px-6 md:px-16 lg:grid-cols-[300px_1fr] lg:gap-20"
      >
        <div className="flex flex-col gap-8">
          <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
            ABOUT
          </span>
          {meta.map(([k, v]) => (
            <div
              key={k}
              className="group flex flex-col gap-1.5 transition-transform duration-500 ease-out hover:-translate-y-0.5"
            >
              <span className="text-[11px] font-semibold tracking-[1.4px] text-ink-soft transition-colors duration-300 group-hover:text-accent">
                {k}
              </span>
              <span className="text-[14px]">{v}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-12">
          <p className="max-w-[932px] font-display text-[28px] leading-[1.3] sm:text-[36px]">
            I build interfaces that feel inevitable — simple on the surface,
            deeply considered underneath.
          </p>
          <p className="max-w-[640px] text-[16px] leading-[1.7] text-ink-muted">
            Frontend lead with 4+ years engineering secure, scalable web apps
            across banking, government and SaaS. I work mostly in React,
            TypeScript and Next.js — from design systems and multi-step flows to
            SSO and data-heavy dashboards.
          </p>
          <Reveal
            stagger
            className="grid grid-cols-1 gap-8 border-t border-ink-faint pt-10 sm:grid-cols-3"
          >
            {stats.map(([v, l]) => (
              <div
                key={l}
                className="group flex flex-col gap-3 transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <span className="font-display text-[52px] leading-none transition-colors duration-300 group-hover:text-accent">
                  {v}
                </span>
                <span className="text-[13px] text-ink-muted">{l}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </Reveal>
    </section>
  )
}
