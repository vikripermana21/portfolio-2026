import { Container } from './ui.jsx'
import Reveal from './Reveal.jsx'

const experience = [
  {
    role: 'Frontend Developer',
    period: 'Aug 2022 — Present',
    company: 'PT Snooets Teknologi Outsourcing',
    desc: 'Leading frontend architecture, core component libraries and code standards while mentoring engineers across React and Next.js.',
  },
  {
    role: 'Fullstack Developer',
    period: 'May 2021 — Nov 2021',
    company: 'Freelance',
    desc: 'Built financial monitoring and budget evaluation applications for public institutions, focused on auditability and data precision.',
  },
]

const education = [
  {
    degree: 'B.Sc. Data Science',
    school: 'Universitas Terbuka',
    period: 'Ongoing',
  },
  {
    degree: 'Diploma in Computer Science',
    school: 'SMKN 11 Bandung',
    period: '2018 — 2021',
  },
]

const languages = [
  ['English', 'Full Professional Proficiency'],
  ['Indonesian', 'Native'],
]

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-faint py-24">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between border-b border-ink-faint pb-[26px]">
            <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
              EXPERIENCE &amp; EDUCATION
            </span>
            <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
              2021 — PRESENT
            </span>
          </div>
        </Reveal>

        <Reveal
          stagger
          className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_440px] lg:gap-24"
        >
          <div>
            <span className="text-[11px] font-semibold tracking-[1.4px] text-ink-soft">
              EXPERIENCE
            </span>
            <div className="mt-6">
              {experience.map((e) => (
                <div
                  key={e.role}
                  className="group -mx-4 border-b border-ink-faint px-4 py-7 transition-colors duration-300 first:pt-0 hover:bg-ink-ghost"
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="font-display text-[28px] leading-tight transition-transform duration-500 ease-out group-hover:translate-x-1">
                      {e.role}
                    </h3>
                    <span className="shrink-0 text-[13px] text-ink-muted">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-3 text-[15px] font-medium transition-transform duration-500 ease-out group-hover:translate-x-1">
                    {e.company}
                  </p>
                  <p className="mt-3 max-w-[720px] text-[14px] leading-[1.6] text-ink-muted">
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[11px] font-semibold tracking-[1.4px] text-ink-soft">
              EDUCATION
            </span>
            <div className="mt-6">
              {education.map((e) => (
                <div
                  key={e.degree}
                  className="group -mx-4 border-b border-ink-faint px-4 py-6 transition-colors duration-300 first:pt-0 hover:bg-ink-ghost"
                >
                  <h3 className="font-display text-[22px] leading-tight transition-transform duration-500 ease-out group-hover:translate-x-1">
                    {e.degree}
                  </h3>
                  <p className="mt-2.5 text-[14px]">{e.school}</p>
                  <p className="mt-1 text-[12px] text-ink-soft">{e.period}</p>
                </div>
              ))}
            </div>

            <span className="mt-8 block text-[11px] font-semibold tracking-[1.4px] text-ink-soft">
              LANGUAGES
            </span>
            <div className="mt-6">
              {languages.map(([lang, level]) => (
                <div
                  key={lang}
                  className="group -mx-4 flex items-center justify-between border-b border-ink-faint px-4 py-4 transition-colors duration-300 hover:bg-ink-ghost"
                >
                  <span className="text-[14px] transition-transform duration-500 ease-out group-hover:translate-x-1">
                    {lang}
                  </span>
                  <span className="text-[13px] text-ink-muted">{level}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
