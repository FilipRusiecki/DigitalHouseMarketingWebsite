import { motion } from 'framer-motion'

const items = [
  {
    title: 'Brand-led design',
    body: 'Layouts that put your name and story first — not a template of competing widgets.',
  },
  {
    title: 'Modern frontend',
    body: 'Fast, responsive React sites with thoughtful motion and clean structure.',
  },
  {
    title: 'Ready to launch',
    body: 'From concept to Vercel deployment — hosted, polished, and ready for visitors.',
  },
]

const CraftSection = () => {
  return (
    <section id="craft" className="relative bg-dh-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-dh-accent">
            Craft
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold text-dh-warm sm:text-4xl">
            Sites that feel built on purpose.
          </h2>
          <p className="mt-4 max-w-2xl text-dh-muted sm:text-lg">
            Digital House focuses on one job: creating websites that look sharp, load
            quickly, and represent your work with confidence.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-10">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-4 h-px w-12 bg-dh-accent/60" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold text-dh-warm">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dh-muted sm:text-base">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CraftSection
