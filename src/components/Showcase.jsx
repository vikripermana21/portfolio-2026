import ShaderCanvas from './ShaderCanvas.jsx'
import Reveal from './Reveal.jsx'

export default function Showcase() {
  return (
    <section
      id="playground"
      className="group relative mt-16 h-[440px] overflow-hidden md:mt-24 md:h-[560px]"
    >
      <ShaderCanvas className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/50 transition-opacity duration-500 group-hover:opacity-80" />

      <Reveal
        stagger
        className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col justify-between px-6 py-12 text-on-dark md:px-16 md:py-16"
      >
        <div className="flex items-center gap-2.5">
          <span className="pulse-dot h-[7px] w-[7px] rounded-full bg-accent" />
          <span className="text-[12px] font-semibold tracking-[1.6px] transition-all duration-500 group-hover:tracking-[2.4px]">
            PLAYGROUND — WEBGL / GLSL
          </span>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[40px] leading-[1.04] sm:text-[52px] lg:text-[66px]">
            <span className="block">Interfaces should</span>
            <span className="block">
              feel{' '}
              <span className="inline-block text-accent transition-transform duration-500 ease-out group-hover:-translate-y-1">
                alive.
              </span>
            </span>
          </h2>
          <div className="max-w-[323px] text-[13px] leading-[1.5] transition-transform duration-500 ease-out group-hover:-translate-y-1">
            <p>Real-time fragment shader — domain-warped noise.</p>
            <p className="mt-1.5 text-[12px] text-on-dark-muted">
              Rendered on the GPU, animated at 60fps.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
