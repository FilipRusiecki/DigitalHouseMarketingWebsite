import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Listen',
    body: 'We learn what you offer, who you serve, and how the site should feel.',
  },
  {
    num: '02',
    title: 'Shape',
    body: 'Visual direction, structure, and copy come together into a clear composition.',
  },
  {
    num: '03',
    title: 'Build',
    body: 'We implement in a modern stack — polished on every screen size.',
  },
  {
    num: '04',
    title: 'Launch',
    body: 'Ship to production, connect your domain, and keep iterating as you grow.',
  },
]

const ProcessSection = () => {
  return (
    <section id="process" className="relative border-y border-dh-mist/10 bg-dh-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-dh-accent">
            Process
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-dh-warm sm:text-4xl">
            From idea to live site.
          </h2>
          <p className="mt-4 text-dh-muted sm:text-lg">
            A simple path — no noise, no endless decks. Just clear steps toward a site
            you are proud to share.
          </p>
        </motion.div>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <span className="font-display text-sm font-bold text-dh-accent">
                {step.num}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-dh-warm">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dh-muted sm:text-base">
                {step.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProcessSection
