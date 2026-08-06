import { motion } from 'framer-motion'

const industries = [
  { name: 'Food & hospitality', note: 'Menus, bookings, local discovery' },
  { name: 'Fitness & wellness', note: 'Memberships, social, community' },
  { name: 'Health & beauty', note: 'Brand polish, bookings, ads' },
  { name: 'Services & trades', note: 'Leads, trust, Google presence' },
]

const IndustriesBand = () => {
  return (
    <section className="border-y border-dh-line bg-dh-cream-deep/70 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dh-blue">
              Who we help
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-dh-navy sm:text-3xl">
              Built for real local businesses — and brands ready to grow.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-dh-muted sm:text-right">
            From Wexford Town to wherever your customers are scrolling.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="border-t-2 border-dh-navy pt-5"
            >
              <h3 className="font-display text-lg font-semibold text-dh-navy">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-dh-muted">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesBand
