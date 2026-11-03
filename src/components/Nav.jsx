import { Container, ArrowUpRight } from './ui.jsx'

const links = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Expertise', '#services'],
  ['Contact', '#contact'],
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-faint bg-bg/80 backdrop-blur-md">
      <Container className="flex items-center justify-between py-[26px]">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="text-[15px] font-semibold tracking-[0.3px]">
            Vikri Permana
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="link-underline text-[14px] text-ink-muted transition-colors duration-300 hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-on-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-lg hover:shadow-accent/25 active:translate-y-0"
        >
          Let&apos;s talk
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Container>
    </header>
  )
}
