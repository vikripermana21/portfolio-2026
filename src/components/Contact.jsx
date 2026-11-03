import { ArrowUpRight } from './ui.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact" className="group bg-ink py-24 text-on-dark">
      <Reveal
        stagger
        className="mx-auto w-full max-w-[1440px] px-6 md:px-16"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
            <span className="text-[12px] font-semibold tracking-[1.6px] text-on-dark-muted">
              OPEN TO OPPORTUNITIES — 2025
            </span>
          </div>
          <span className="text-[12px] font-semibold tracking-[1.6px] text-on-dark-muted">
            BANDUNG, ID · REMOTE
          </span>
        </div>

        <h2 className="mt-16 font-display text-[48px] leading-[1.05] sm:text-[64px] lg:text-[78px]">
          <span className="block">Have a project in mind?</span>
          <span className="block">Let&apos;s make it</span>
          <span className="block">
            <span className="inline-block text-accent transition-transform duration-500 ease-out group-hover:-translate-y-1">
              considered.
            </span>
          </span>
        </h2>

        <div className="mt-14 flex flex-wrap items-center gap-8">
          <a
            href="mailto:vikripermana91@gmail.com"
            className="group/cta flex items-center gap-2 rounded-full bg-on-dark px-7 py-4 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-on-dark hover:shadow-xl hover:shadow-accent/30 active:translate-y-0"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
          </a>
          <a
            href="mailto:vikripermana91@gmail.com"
            className="link-underline font-display text-[24px] transition-colors duration-300 hover:text-accent sm:text-[30px]"
          >
            vikripermana91@gmail.com
          </a>
        </div>

        <footer className="mt-24 flex flex-col gap-6 border-t border-on-dark-faint pt-8 md:flex-row md:items-center md:justify-between">
          <span className="text-[13px] text-on-dark-muted">
            © 2025 Vikri Permana. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-on-dark-muted">
            <span>Bandung, ID</span>
            <a
              href="mailto:vikripermana91@gmail.com"
              className="link-underline transition-colors hover:text-on-dark"
            >
              vikripermana91@gmail.com
            </a>
            <a
              href="tel:+6281563936568"
              className="link-underline transition-colors hover:text-on-dark"
            >
              +62 815 6393 6568
            </a>
          </div>
          <a
            href="#top"
            className="group/top inline-flex items-center gap-1 text-[13px] text-on-dark-muted transition-colors hover:text-on-dark"
          >
            Back to top
            <span className="inline-block transition-transform duration-300 group-hover/top:-translate-y-0.5">
              ↑
            </span>
          </a>
        </footer>
      </Reveal>
    </section>
  )
}
