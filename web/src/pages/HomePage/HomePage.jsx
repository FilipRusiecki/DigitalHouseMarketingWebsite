import { Metadata } from '@redwoodjs/web'

import ContactCTA from 'src/components/ContactCTA/ContactCTA'
import CraftSection from 'src/components/CraftSection/CraftSection'
import Footer from 'src/components/Footer/Footer'
import Hero from 'src/components/Hero/Hero'
import Navigation from 'src/components/Navigation/Navigation'
import ProcessSection from 'src/components/ProcessSection/ProcessSection'

const HomePage = () => {
  return (
    <>
      <Metadata
        title="Digital House"
        description="Digital House designs and builds websites with clarity, craft, and presence."
      />
      <div className="dark min-h-screen bg-dh-ink">
        <Navigation />
        <Hero />
        <CraftSection />
        <ProcessSection />
        <ContactCTA />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
