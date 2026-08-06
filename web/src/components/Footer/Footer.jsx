import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  return (
    <footer className="border-t border-dh-line bg-dh-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <Link
          to={routes.home()}
          className="font-display text-base font-bold text-dh-navy transition-opacity hover:opacity-70"
        >
          Digital House <span className="font-medium text-dh-blue">Marketing</span>
        </Link>
        <p className="text-center text-sm text-dh-muted sm:text-right">
          © {new Date().getFullYear()} Digital House Marketing · Wexford Town
        </p>
      </div>
    </footer>
  )
}

export default Footer
