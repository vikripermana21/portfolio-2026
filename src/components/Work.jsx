import { Container, ArrowUpRight } from './ui.jsx'
import Reveal from './Reveal.jsx'

const projects = [
  {
    i: '01',
    slug: 'school-management-system',
    name: 'School Management System',
    cat: 'EdTech · Platform',
    tech: 'React · Next.js',
  },
  {
    i: '02',
    slug: 'environmental-system',
    name: 'Environmental System',
    cat: 'Sustainability · Data',
    tech: 'Vue.js',
  },
  {
    i: '03',
    slug: 'e-commerce-platform',
    name: 'E-Commerce Platform',
    cat: 'Commerce · SaaS',
    tech: 'Next.js · Nest.js',
  },
  {
    i: '04',
    slug: 'internal-bank-system',
    name: 'Internal Bank System',
    cat: 'Banking · Enterprise',
    tech: 'Angular',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between border-b border-ink-faint pb-[26px]">
            <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
              SELECTED WORK
            </span>
            <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
              04 PROJECTS · 2021—2025
            </span>
          </div>
        </Reveal>

        <Reveal as="ul" stagger>
          {projects.map((p) => (
            <li key={p.i} className="border-b border-ink-faint">
              <a
                href={`/work/${p.slug}`}
                className="group relative -mx-4 flex items-center justify-between px-4 py-[30px] transition-colors duration-300 hover:bg-ink-ghost"
              >
                <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <div className="flex items-center gap-5 sm:gap-[34px]">
                  <span className="text-[13px] font-medium text-accent transition-transform duration-500 ease-out group-hover:scale-110">
                    {p.i}
                  </span>
                  <span className="font-display text-[30px] leading-none transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-[44px]">
                    {p.name}
                  </span>
                </div>

                <div className="hidden items-center gap-10 md:flex">
                  <span className="w-[260px] text-[14px] text-ink-muted">
                    {p.cat}
                  </span>
                  <span className="w-[220px] text-[14px] text-ink-soft">
                    {p.tech}
                  </span>
                  <ArrowUpRight className="h-[22px] w-[22px] text-ink transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                </div>
              </a>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
