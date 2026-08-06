import FadeIn from 'src/components/FadeIn/FadeIn'

const pillars = [
  {
    title: 'Creative & strategic',
    body: 'Marketing that looks sharp and thinks clearly — driven by results, not vanity metrics.',
  },
  {
    title: 'Tailored, never generic',
    body: 'Every business is different. We build strategies around your goals, audience, and vision.',
  },
  {
    title: 'Tech with purpose',
    body: 'Modern tools, AI-powered workflows, and data-driven decisions that keep you ahead.',
  },
]

const WhyUsSection = () => {
  return (
    <section id="why-us" className="scroll-mt-24 bg-dh-navy py-20 text-dh-cream sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dh-blue">
            Why us
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-dh-cream sm:text-4xl">
            A modern studio for ambitious businesses.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-dh-cream/70 sm:text-lg">
            Marketing should be creative, strategic, and driven by results. We combine
            design craft, technology, and clear strategy so you can stand out, attract
            more customers, and build a powerful online presence.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={0.08 + index * 0.08} y={14}>
              <div>
                <div className="mb-4 h-1 w-10 bg-dh-blue" aria-hidden="true" />
                <h3 className="font-display text-xl font-semibold text-dh-cream">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-dh-cream/65">{pillar.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
