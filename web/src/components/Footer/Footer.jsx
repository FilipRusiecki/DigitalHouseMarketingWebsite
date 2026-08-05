import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  return (
    <footer className="border-t border-dh-mist/10 bg-dh-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <Link
          to={routes.home()}
          className="font-display text-base font-bold text-dh-warm transition-colors hover:text-dh-accent"
        >
          Digital House
        </Link>
        <p className="text-sm text-dh-muted">
          © {new Date().getFullYear()} Digital House. Websites, thoughtfully made.
        </p>
      </div>
    </footer>
  )
}

export default Footer
