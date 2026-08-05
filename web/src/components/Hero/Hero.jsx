import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-dh-ink text-dh-mist">
      <div
        className="pointer-events-none absolute inset-0 bg-hero-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-fade bg-grid opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-dh-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-5xl font-extrabold tracking-tight text-dh-warm sm:text-6xl md:text-7xl lg:text-8xl">
            Digital House
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-balance font-display text-2xl font-semibold leading-snug text-dh-mist sm:text-3xl md:text-4xl"
          >
            Websites built with clarity, craft, and presence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base leading-relaxed text-dh-muted sm:text-lg"
          >
            We design and develop sites that feel intentional — from first impression
            to every interaction that follows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-dh-accent px-6 py-3 text-base font-semibold text-dh-ink transition-all duration-300 hover:bg-dh-accent/90 hover:shadow-[0_0_32px_rgba(94,234,212,0.3)] sm:px-8 sm:py-3.5 sm:text-lg"
            >
              Start a project
            </a>
            <a
              href="#craft"
              className="inline-flex items-center text-base font-medium text-dh-mist/80 transition-colors hover:text-dh-accent"
            >
              See what we make
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
