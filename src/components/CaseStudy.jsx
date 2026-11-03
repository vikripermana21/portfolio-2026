import ShaderCanvas from "./ShaderCanvas.jsx";
import Reveal from "./Reveal.jsx";
import { Container, ArrowUpRight } from "./ui.jsx";
import { caseStudies, getNext, getStudy } from "../caseStudies.js";

const navLinks = [
  ["Work", "/#work"],
  ["About", "/#about"],
  ["Expertise", "/#services"],
  ["Contact", "/#contact"],
];

export default function CaseStudy({ slug }) {
  const study = getStudy(slug) || caseStudies[0];
  const next = getNext(study.slug);
  const meta = [
    ["ROLE", study.role],
    ["YEAR", study.year],
    ["DOMAIN", study.domain],
    ["STATUS", study.status],
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-on-dark">
        <ShaderCanvas className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-[#0A0A0AA6]" />

        <div className="relative flex min-h-[560px] flex-col">
          <Container className="flex items-center justify-between py-[26px]">
            <a href="/" className="group flex items-center gap-2.5">
              <span className="text-[15px] font-semibold tracking-[0.3px]">
                Vikri Permana
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
            </a>
            <nav className="hidden items-center gap-9 md:flex">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="link-underline text-[14px] text-on-dark-muted transition-colors hover:text-on-dark"
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="/#contact"
              className="group flex items-center gap-2 rounded-full bg-on-dark px-5 py-2.5 text-[13px] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-on-dark"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Container>

          <Container className="flex flex-1 flex-col justify-between py-12">
            <a
              href="/"
              className="link-underline w-fit text-[13px] text-on-dark-muted transition-colors hover:text-on-dark"
            >
              ← All work
            </a>

            <Reveal stagger className="reveal-hero mt-16">
              <span className="text-[12px] font-semibold tracking-[1.6px] text-on-dark-muted">
                {study.label}
              </span>
              <h1 className="mt-6 max-w-[900px] font-display text-[48px] leading-[1.02] sm:text-[64px] lg:text-[88px]">
                {study.title}
              </h1>
              <p className="mt-6 max-w-[660px] text-[19px] leading-[1.5] text-on-dark-muted">
                {study.summary}
              </p>
            </Reveal>
          </Container>
        </div>
      </section>

      {/* Meta */}
      <section className="border-b border-ink-faint py-14">
        <Reveal
          stagger
          className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-8 px-6 md:px-16 lg:grid-cols-4"
        >
          {meta.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold tracking-[1.4px] text-ink-soft">
                {k}
              </span>
              <span className="text-[15px]">{v}</span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Overview */}
      <section className="py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr] lg:gap-20">
          <Reveal>
            <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
              OVERVIEW
            </span>
          </Reveal>
          <Reveal stagger className="flex flex-col gap-10">
            <p className="max-w-[932px] font-display text-[28px] leading-[1.3] sm:text-[36px]">
              {study.lead}
            </p>
            <p className="max-w-[760px] text-[16px] leading-[1.7] text-ink-muted">
              {study.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Contributions */}
      <section className="border-t border-ink-faint py-24">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between border-b border-ink-faint pb-[26px]">
              <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
                WHAT I DID
              </span>
              <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
                {String(study.contributions.length).padStart(2, "0")} ITEMS
              </span>
            </div>
          </Reveal>

          <Reveal
            stagger
            className="mt-14 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2"
          >
            {study.contributions.map(([title, desc], i) => (
              <div key={title} className="flex gap-6">
                <span className="text-[13px] font-medium text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-[24px] leading-tight">
                    {title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-ink-muted">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Stack */}
      <section className="border-t border-ink-faint py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr] lg:gap-20">
          <Reveal>
            <span className="text-[12px] font-semibold tracking-[1.6px] text-ink-muted">
              STACK &amp; TOOLS
            </span>
          </Reveal>
          <Reveal stagger className="flex flex-wrap gap-3">
            {study.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-ink-faint px-5 py-2.5 text-[14px] transition-colors hover:border-ink-muted"
              >
                {s}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Next project + footer */}
      <section className="bg-ink py-24 text-on-dark">
        <Reveal stagger className="mx-auto w-full max-w-[1440px] px-6 md:px-16">
          <a
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-8"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-semibold tracking-[1.6px] text-on-dark-muted">
                NEXT PROJECT
              </span>
              <span className="font-display text-[40px] leading-[1.05] transition-colors duration-300 group-hover:text-accent sm:text-[56px] lg:text-[72px]">
                {next.title}
              </span>
            </div>
            <ArrowUpRight className="h-9 w-9 shrink-0 text-on-dark transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>

          <footer className="mt-20 flex flex-col gap-6 border-t border-on-dark-faint pt-8 md:flex-row md:items-center md:justify-between">
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
            </div>
            <a
              href="#"
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
    </>
  );
}
