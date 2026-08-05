import { Link, routes } from '@redwoodjs/router'

const NotFoundPage = () => (
  <main className="flex min-h-screen items-center justify-center bg-dh-ink px-4">
    <div className="max-w-md text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-dh-accent">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-dh-warm">
        Page not found
      </h1>
      <p className="mt-3 text-dh-muted">
        That page does not exist — head back to Digital House.
      </p>
      <Link
        to={routes.home()}
        className="mt-8 inline-flex rounded-md bg-dh-accent px-5 py-2.5 text-sm font-semibold text-dh-ink transition-colors hover:bg-dh-accent/90"
      >
        Back home
      </Link>
    </div>
  </main>
)

export default NotFoundPage
