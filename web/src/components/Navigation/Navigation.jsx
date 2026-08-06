import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'

import { scrollToId } from 'src/lib/navigation'

const navLinks = [
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'why-us', label: 'Why us' },
  { id: 'experience', label: 'Experience' },
]

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const go = (id) => {
    setIsMenuOpen(false)
    scrollToId(id)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-dh-line bg-dh-cream">
      <nav
        className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
        aria-label="Main"
      >
        <Link
          to={routes.home()}
          className="shrink-0 font-display text-base font-bold tracking-tight text-dh-navy transition-opacity hover:opacity-70 sm:text-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Digital House
          <span className="ml-1.5 font-medium text-dh-blue">Marketing</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className="rounded-md px-3 py-2 text-sm font-medium text-dh-muted transition-colors hover:bg-dh-cream-deep hover:text-dh-navy"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go('contact')}
            className="ml-2 rounded-md bg-dh-navy px-4 py-2 text-sm font-semibold text-dh-cream transition-colors hover:bg-dh-navy-soft"
          >
            Contact
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-dh-navy hover:bg-dh-cream-deep lg:hidden"
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
      </nav>

      {isMenuOpen && (
        <div className="border-t border-dh-line bg-dh-cream px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                className="rounded-md px-3 py-3 text-left font-medium text-dh-navy hover:bg-dh-cream-deep"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => go('contact')}
              className="mt-2 rounded-md bg-dh-navy px-4 py-3 text-center text-sm font-semibold text-dh-cream"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navigation
