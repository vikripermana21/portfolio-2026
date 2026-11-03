import { useCallback, useEffect, useRef, useState } from 'react'
import Preloader from './components/Preloader.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Showcase from './components/Showcase.jsx'
import Work from './components/Work.jsx'
import GraphicsLab from './components/GraphicsLab.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import CaseStudy from './components/CaseStudy.jsx'

function isExternal(href) {
  return (
    !href ||
    href.startsWith('http') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#')
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [revealed, setRevealed] = useState(false)
  const [route, setRoute] = useState(() => window.location.pathname)
  const [transitionId, setTransitionId] = useState(0)
  const routeTimer = useRef(0)

  const handleReveal = useCallback(() => setRevealed(true), [])
  const handleDone = useCallback(() => setLoading(false), [])

  // client-side navigation with a curtain slide transition between pages
  const go = useCallback((href) => {
    const [rawPath, rawHash] = href.split('#')
    const path = rawPath || window.location.pathname
    const hash = rawHash ? `#${rawHash}` : ''

    if (path === window.location.pathname) {
      const next = path + hash
      if (next !== window.location.pathname + window.location.hash) {
        window.history.pushState({}, '', next)
      }
      if (hash) {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    setTransitionId((n) => n + 1)
    clearTimeout(routeTimer.current)
    routeTimer.current = window.setTimeout(() => {
      window.history.pushState({}, '', path + hash)
      setRoute(path)
      window.scrollTo(0, 0)
      if (hash) {
        window.setTimeout(() => {
          const el = document.querySelector(hash)
          if (el) el.scrollIntoView()
        }, 0)
      }
    }, 500)
  }, [])

  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return
      const anchor = e.target.closest && e.target.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (isExternal(href) || anchor.target === '_blank') return
      e.preventDefault()
      go(href)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [go])

  useEffect(() => {
    const onPop = () => {
      setRoute(window.location.pathname)
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const match = route.match(/^\/work\/([\w-]+)/)

  return (
    <>
      {loading && <Preloader onReveal={handleReveal} onDone={handleDone} />}

      <div className={revealed ? 'is-revealed' : undefined}>
        {match ? (
          <CaseStudy slug={match[1]} />
        ) : (
          <>
            <Nav />
            <main>
              <Hero />
              <Showcase />
              <Work />
              <GraphicsLab />
              <About />
              <Services />
              <Experience />
              <Contact />
            </main>
          </>
        )}
      </div>

      {transitionId > 0 && (
        <div
          key={transitionId}
          className="curtain pointer-events-none fixed inset-0 z-[45] flex items-center justify-center bg-ink"
        >
          <div className="flex items-center gap-2.5 text-on-dark">
            <span className="text-[15px] font-semibold tracking-[0.3px]">
              Vikri Permana
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
        </div>
      )}
    </>
  )
}
