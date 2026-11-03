import { Container, ArrowUpRight } from "./ui.jsx";
import Reveal from "./Reveal.jsx";

const stack = ["React", "TypeScript", "Next.js", "Vue.js", "Nest.js"];

export default function Hero() {
  return (
    <section id="top" className="pt-14 md:pt-24">
      <Container>
        <Reveal stagger className="reveal-hero">
          <div className="flex items-center gap-2.5">
            <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
            <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
              CREATIVE DEVELOPER · BANDUNG, ID
            </span>
          </div>

          <h1 className="no-stagger stagger-lines mt-10 font-display text-[52px] font-normal leading-[1.02] tracking-[-0.01em] sm:text-[72px] lg:text-[98px]">
            <span className="block">
              Building <span className="text-accent">quiet,</span>
            </span>
            <span className="block">considered interfaces</span>
            <span className="block">for the modern web.</span>
          </h1>

          <div className="mt-14 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[560px] text-[18px] leading-[1.6] text-ink-muted">
              I&apos;m Vikri — a creative developer and frontend lead with 4+
              years building secure, scalable products with React, TypeScript
              and Next.js.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-on-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-lg hover:shadow-accent/25 active:translate-y-0"
              >
                View selected work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:vikripermana91@gmail.com"
                className="rounded-full border border-ink-faint px-6 py-3.5 text-[14px] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-muted"
              >
                vikripermana91@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-ink-faint pt-6 md:flex-row md:items-center md:gap-12">
            <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
              CORE STACK
            </span>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
