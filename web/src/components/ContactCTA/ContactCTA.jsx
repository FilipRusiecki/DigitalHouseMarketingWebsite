import FadeIn from 'src/components/FadeIn/FadeIn'

const details = [
  {
    label: 'Email',
    href: 'mailto:mirela.rusiecka@hotmail.com',
    value: 'mirela.rusiecka@hotmail.com',
  },
  {
    label: 'Phone',
    href: 'tel:+353872202720',
    value: '(+353) 87 220 2720',
  },
  {
    label: 'Location',
    value: 'Wexford Town',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mirelarusiecka',
    value: 'mirelarusiecka',
    external: true,
  },
]

const ContactCTA = () => {
  return (
    <section id="contact" className="relative scroll-mt-24 bg-dh-cream-deep py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <FadeIn className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dh-blue">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-dh-navy sm:text-4xl md:text-5xl">
              Let’s build something people notice.
            </h2>
            <p className="mt-5 text-dh-muted sm:text-lg">
              Tell us about your goals — websites, ads, content, or a full digital
              strategy. Based in Wexford Town, working with ambitious brands wherever
              you are.
            </p>
            <a
              href="mailto:mirela.rusiecka@hotmail.com"
              className="mt-10 inline-flex w-fit items-center rounded-md bg-dh-navy px-7 py-3.5 text-base font-semibold text-dh-cream transition-colors hover:bg-dh-navy-soft sm:text-lg"
            >
              Email Digital House Marketing
            </a>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col justify-center gap-8 bg-dh-navy px-8 py-10 sm:px-10 sm:py-12">
            {details.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold uppercase tracking-wider text-dh-blue">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="mt-2 inline-block break-all text-base text-dh-cream transition-opacity hover:opacity-80 sm:text-lg"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-base text-dh-cream sm:text-lg">{item.value}</p>
                )}
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
