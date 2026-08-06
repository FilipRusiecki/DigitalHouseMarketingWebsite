import { motion, useReducedMotion } from 'framer-motion'

const SitePreview = () => (
  <div className="relative mx-auto w-full max-w-md lg:max-w-none">
    <div className="overflow-hidden rounded-lg border border-dh-navy/15 bg-dh-cream">
      <div className="flex items-center gap-2 border-b border-dh-navy/10 bg-dh-cream-deep px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-dh-navy/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-dh-navy/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-dh-navy/25" />
        <span className="ml-3 flex-1 rounded-sm bg-dh-cream px-3 py-1 text-[10px] text-dh-muted">
          digitalhousemarketing.ie
        </span>
      </div>
      <div className="space-y-4 bg-dh-cream-deep/40 p-5 sm:p-6">
        <div className="h-3 w-24 rounded-sm bg-dh-blue/40" />
        <div className="h-8 w-4/5 rounded-sm bg-dh-navy/80" />
        <div className="h-2.5 w-full rounded-sm bg-dh-navy/15" />
        <div className="h-2.5 w-5/6 rounded-sm bg-dh-navy/15" />
        <div className="mt-2 grid grid-cols-3 gap-3">
          <div className="aspect-[4/3] rounded-sm bg-dh-navy/10" />
          <div className="aspect-[4/3] rounded-sm bg-dh-blue/20" />
          <div className="aspect-[4/3] rounded-sm bg-dh-navy/15" />
        </div>
        <div className="flex gap-2 pt-2">
          <div className="h-8 w-28 rounded-sm bg-dh-navy" />
          <div className="h-8 w-20 rounded-sm border border-dh-navy/20" />
        </div>
      </div>
    </div>
    <div
      className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-lg border border-dh-blue/20"
      aria-hidden="true"
    />
  </div>
)

const Hero = () => {
  const reduceMotion = useReducedMotion()
  const enter = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-hero-cream">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          {...enter}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-dh-blue">
            Wexford · Digital studio
          </p>

          <p className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-dh-navy sm:text-6xl md:text-7xl">
            Digital
            <br />
            House
            <span className="mt-2 block text-dh-blue">Marketing</span>
          </p>

          <h1 className="mt-8 max-w-xl text-balance text-lg font-medium leading-relaxed text-dh-navy/80 sm:text-xl md:text-2xl">
            Modern websites and digital marketing — designed to look sharp and work
            harder for your business.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-dh-muted sm:text-lg">
            Strategy, design, ads, content, and automation — crafted with care for
            ambitious brands.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-dh-navy px-7 py-3.5 text-base font-semibold text-dh-cream transition-colors hover:bg-dh-navy-soft sm:text-lg"
            >
              Start a project
            </a>
            <a
              href="#services"
              className="inline-flex items-center border-b border-dh-navy/40 pb-0.5 text-base font-semibold text-dh-navy transition-colors hover:border-dh-navy hover:text-dh-blue"
            >
              See services
            </a>
          </div>
        </motion.div>

        <motion.div
          className="lg:pt-8"
          {...enter}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <SitePreview />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
