const tools = [
  'Meta Ads',
  'Google Ads',
  'Google Analytics',
  'Search Console',
  'WordPress',
  'Shopify',
  'Figma',
  'Canva',
  'Mailchimp',
  'Hootsuite',
  'Zapier',
  'Stripe',
  'ChatGPT',
  'Gemini',
  'Notion',
  'Adobe Creative Cloud',
]

const ToolsMarquee = () => {
  const row = [...tools, ...tools]

  return (
    <section className="overflow-hidden border-y border-dh-line bg-dh-navy py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-dh-blue">
        The tools we work with
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-dh-navy to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-dh-navy to-transparent sm:w-24" />
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform">
          {row.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="font-display text-lg font-semibold text-dh-cream/85 sm:text-xl"
            >
              {tool}
              <span className="ml-10 text-dh-blue" aria-hidden="true">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsMarquee
