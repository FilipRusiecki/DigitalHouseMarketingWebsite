import { motion } from 'framer-motion'

const ContactCTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-dh-ink py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-hero-glow opacity-60"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl font-bold text-dh-warm sm:text-4xl md:text-5xl">
            Ready to build yours?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-dh-muted sm:text-lg">
            Tell us about your project. We will help shape a homepage — and a full site —
            that feels like home for your brand online.
          </p>
          <a
            href="mailto:hello@digitalhouse.studio"
            className="mt-10 inline-flex items-center rounded-md bg-dh-accent px-8 py-3.5 text-base font-semibold text-dh-ink transition-all duration-300 hover:bg-dh-accent/90 hover:shadow-[0_0_32px_rgba(94,234,212,0.3)] sm:text-lg"
          >
            hello@digitalhouse.studio
          </a>
          <p className="mt-4 text-sm text-dh-muted/70">
            Placeholder email — swap this when you are ready.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA
