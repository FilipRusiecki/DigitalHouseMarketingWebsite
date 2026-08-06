import { motion } from 'framer-motion'

const points = [
  {
    title: 'Designed to convert',
    body: 'Layouts that guide visitors toward booking, buying, or getting in touch — not just browsing.',
  },
  {
    title: 'Fast & findable',
    body: 'Performance and SEO built in from day one, so your site works hard on Google and on every device.',
  },
  {
    title: 'Yours alone',
    body: 'No template farms. We shape a digital presence that actually feels like your brand.',
  },
]

const WebsiteSpotlight = () => {
  return (
    <section className="relative overflow-hidden bg-dh-cream py-24 sm:py-28">
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-dh-navy/10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dh-blue">
            Website craft
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-dh-navy sm:text-4xl md:text-5xl">
            Your website should feel like a flagship, not an afterthought.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-dh-muted sm:text-lg">
            We design and develop modern, responsive sites with strong visuals, clean
            structure, and the details that turn visitors into customers — business sites,
            portfolios, booking systems, and eCommerce.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center rounded-md bg-dh-navy px-6 py-3 text-sm font-semibold text-dh-cream transition-colors hover:bg-dh-navy-soft"
          >
            Talk about a new site
          </a>
        </motion.div>

        <div className="space-y-8">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex gap-5"
            >
              <span className="font-display text-sm font-bold text-dh-blue">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-dh-navy">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dh-muted sm:text-base">
                  {point.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WebsiteSpotlight
