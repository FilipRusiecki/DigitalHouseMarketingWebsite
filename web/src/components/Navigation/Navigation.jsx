import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollTo = (id) => {
    setIsMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-dh-mist/10 bg-dh-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to={routes.home()}
          className="font-display text-lg font-bold tracking-tight text-dh-warm transition-colors hover:text-dh-accent sm:text-xl"
        >
          Digital House
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <button
            type="button"
            onClick={() => scrollTo('craft')}
            className="text-sm font-medium text-dh-mist/80 transition-colors hover:text-dh-accent"
          >
            Craft
          </button>
          <button
            type="button"
            onClick={() => scrollTo('process')}
            className="text-sm font-medium text-dh-mist/80 transition-colors hover:text-dh-accent"
          >
            Process
          </button>
          <a
            href="#contact"
            className="rounded-md bg-dh-accent px-4 py-2 text-sm font-semibold text-dh-ink transition-all duration-300 hover:bg-dh-accent/90 hover:shadow-[0_0_24px_rgba(94,234,212,0.25)]"
          >
            Start a project
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-dh-mist transition-colors hover:text-dh-accent md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-dh-mist/10 bg-dh-ink px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => scrollTo('craft')}
              className="text-left text-dh-mist/90 transition-colors hover:text-dh-accent"
            >
              Craft
            </button>
            <button
              type="button"
              onClick={() => scrollTo('process')}
              className="text-left text-dh-mist/90 transition-colors hover:text-dh-accent"
            >
              Process
            </button>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-block rounded-md bg-dh-accent px-4 py-2 text-center text-sm font-semibold text-dh-ink"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
