import { Metadata } from '@redwoodjs/web'

import AmbientBackdrop from 'src/components/AmbientBackdrop/AmbientBackdrop'
import ContactCTA from 'src/components/ContactCTA/ContactCTA'
import ExperienceSection from 'src/components/ExperienceSection/ExperienceSection'
import Footer from 'src/components/Footer/Footer'
import Hero from 'src/components/Hero/Hero'
import Navigation from 'src/components/Navigation/Navigation'
import ProcessSection from 'src/components/ProcessSection/ProcessSection'
import ServicesSection from 'src/components/ServicesSection/ServicesSection'
import ToolsMarquee from 'src/components/ToolsMarquee/ToolsMarquee'
import WhyUsSection from 'src/components/WhyUsSection/WhyUsSection'

const HomePage = () => {
  return (
    <>
      <Metadata
        title="Home"
        description="Digital House Marketing — websites, SEO, Google & Meta ads, content, social media, email, and AI automation for ambitious businesses. Based in Wexford Town."
      />
      <div className="relative min-h-screen bg-dh-cream">
        <AmbientBackdrop />
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <ServicesSection />
          <ProcessSection />
          <WhyUsSection />
          <ExperienceSection />
          <ContactCTA />
          <ToolsMarquee />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default HomePage
