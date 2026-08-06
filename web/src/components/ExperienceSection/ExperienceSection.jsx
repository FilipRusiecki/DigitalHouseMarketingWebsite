import FadeIn from 'src/components/FadeIn/FadeIn'

const roles = [
  {
    period: '2024 – Present',
    title: 'Digital Marketer',
    place: 'Digital House Marketing · Wexford Town',
  },
  {
    period: '2021 – 2023',
    title: 'Marketing Manager',
    place: 'Amplify Startups · Dublin',
  },
  {
    period: '2020 – 2021',
    title: 'Social Media Manager',
    place: 'New Reality Marketing Agency · Dublin',
  },
  {
    period: '2018 – 2020',
    title: 'Field Sales Manager',
    place: 'Phone Watch · Nationwide',
  },
]

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-dh-line bg-dh-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dh-blue">
            Experience
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-dh-navy sm:text-4xl">
            Led by Mirela Rusiecka
          </h2>
          <p className="mt-4 max-w-2xl text-dh-muted sm:text-lg">
            A strategic, results-driven digital marketer with agency, startup, and sales
            leadership experience — bringing creative campaigns and commercial focus to
            Digital House Marketing.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 flex flex-wrap gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-dh-navy">5+ years</p>
            <p className="text-sm text-dh-muted">digital marketing</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-dh-navy">Wexford</p>
            <p className="text-sm text-dh-muted">based studio</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-dh-navy">EN / PL</p>
            <p className="text-sm text-dh-muted">bilingual</p>
          </div>
        </FadeIn>

        <ol className="mt-12 space-y-6 border-l border-dh-navy/20 pl-6">
          {roles.map((role, index) => (
            <FadeIn key={role.period + role.title} delay={Math.min(index * 0.06, 0.2)} y={12}>
              <li>
                <p className="text-sm font-semibold text-dh-blue">{role.period}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-dh-navy">
                  {role.title}
                </h3>
                <p className="mt-1 text-sm text-dh-muted">{role.place}</p>
              </li>
            </FadeIn>
          ))}
        </ol>

        <FadeIn delay={0.15} className="mt-10">
          <p className="text-sm text-dh-muted">
            Education: Bachelor in Business & Digital Marketing (SETU Carlow) · Start Your
            Own Business (Local Enterprise Centre, Wexford).
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

export default ExperienceSection
