const services = [
  {
    title: 'Website Design & Development',
    short: 'Modern, fast sites built to convert — business, booking, or eCommerce.',
  },
  {
    title: 'Google Ads Management',
    short: 'Reach people actively searching — setup, optimisation, and clear ROI.',
  },
  {
    title: 'Meta Ads (Facebook & Instagram)',
    short: 'High-converting social ads for awareness, leads, and sales.',
  },
  {
    title: 'Social Media Management',
    short: 'Consistent content and growth across Instagram, Facebook, LinkedIn & TikTok.',
  },
  {
    title: 'Content Strategy',
    short: 'A clear plan so every post and campaign supports your goals.',
  },
  {
    title: 'Content Creation',
    short: 'Photos, Reels, graphics, and copy that capture attention.',
  },
  {
    title: 'Email Marketing',
    short: 'Newsletters and automations that build trust and repeat business.',
  },
  {
    title: 'AI Automation & Business Tools',
    short: 'Smarter workflows with AI — save time and nurture leads.',
  },
  {
    title: 'Search Engine Optimisation (SEO)',
    short: 'Get found on Google with technical, content, and local SEO.',
  },
  {
    title: 'Digital Marketing Strategy',
    short: 'One roadmap tying website, ads, content, and social together.',
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-24 border-t border-dh-line bg-dh-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dh-blue">
          Services
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-dh-navy sm:text-4xl">
          What we can do for your business.
        </h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="border border-dh-navy/10 bg-dh-cream-deep/50 p-5 sm:p-6"
            >
              <span className="font-display text-xs font-bold text-dh-blue">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-dh-navy">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dh-muted">{service.short}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ServicesSection
