const steps = [
  {
    num: '01',
    title: 'Discover',
    body: 'We learn your goals, audience, and what success looks like for your business.',
  },
  {
    num: '02',
    title: 'Design',
    body: 'Visual direction, messaging, and structure come together into a clear plan.',
  },
  {
    num: '03',
    title: 'Build',
    body: 'Websites, campaigns, and content are crafted to perform — not just look pretty.',
  },
  {
    num: '04',
    title: 'Grow',
    body: 'We measure, refine, and keep improving so your marketing compounds over time.',
  },
]

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="scroll-mt-24 border-t border-dh-line bg-dh-cream-deep/70 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dh-blue">
          Process
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-dh-navy sm:text-4xl">
          A clear path from idea to impact.
        </h2>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.num} className="border-t-2 border-dh-navy pt-5">
              <span className="font-display text-sm font-bold text-dh-blue">{step.num}</span>
              <h3 className="mt-2 font-display text-xl font-semibold text-dh-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dh-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProcessSection
