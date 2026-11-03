import { useEffect, useRef, useState } from 'react'
import ShaderCanvas from './ShaderCanvas.jsx'

export default function Preloader({ onReveal, onDone }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  // Keep the latest callbacks in refs so the counting effect never re-runs
  // (a re-run would restart the percentage from 0 during the slide-up).
  const onRevealRef = useRef(onReveal)
  const onDoneRef = useRef(onDone)
  onRevealRef.current = onReveal
  onDoneRef.current = onDone

  useEffect(() => {
    let raf = 0
    let t1 = 0
    let t2 = 0

    const start = performance.now()
    const duration = 2200

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(Math.round(eased * 100))

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        t1 = window.setTimeout(() => {
          setLeaving(true)
          onRevealRef.current?.()
          t2 = window.setTimeout(() => onDoneRef.current?.(), 950)
        }, 260)
      }
    }

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        leaving ? '-translate-y-full rounded-b-[2rem]' : 'translate-y-0'
      }`}
      aria-hidden={leaving}
    >
      <ShaderCanvas className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[#0A0A0AA6]" />

      <div className="relative flex h-full w-full flex-col justify-between p-6 text-on-dark md:p-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-[15px] font-semibold tracking-[0.3px]">
              Vikri Permana
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
          <span className="text-[12px] font-semibold tracking-[1.6px] text-on-dark-muted">
            INTRO
          </span>
        </div>

        <div className="flex flex-col items-center gap-6">
          <span className="text-[12px] font-semibold tracking-[2.4px] text-on-dark-muted">
            LOADING EXPERIENCE
          </span>
          <span className="font-display text-[108px] leading-none md:text-[180px]">
            {progress}%
          </span>
          <div className="h-0.5 w-[240px] overflow-hidden rounded-full bg-on-dark-faint md:w-[360px]">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-[12px] text-on-dark-muted">
          <span className="font-medium tracking-[1.2px]">PORTFOLIO — 2025</span>
          <span className="font-semibold tracking-[1.6px]">PLEASE WAIT</span>
        </div>
      </div>
    </div>
  )
}
