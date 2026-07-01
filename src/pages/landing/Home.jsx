import HeroSection from './sections/HeroSection'
import PartnerLogos from './sections/PartnerLogos'
import ServicesSection from './sections/ServicesSection'
import CTABanner from './sections/CTABanner'
import CaseStudiesSection from './sections/CaseStudiesSection'
import ProcessSection from './sections/ProcessSection'
import TeamSection from './sections/TeamSection'
import TestimonialsSection from './sections/TestimonialsSection'
import ContactSection from './sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerLogos />
      <ServicesSection />
      <CTABanner />
      <CaseStudiesSection />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
