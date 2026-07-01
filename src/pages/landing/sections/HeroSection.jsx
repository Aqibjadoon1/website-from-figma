import Container from '../../../components/globals/Container'
import Button from '../../../components/buttons/Button'
import AnimatedSection from '../../../components/globals/AnimatedSection'
import heroIllustration from '../../../assets/Illustration.png'

export default function HeroSection() {
  return (
    <Container className="py-12 md:py-20">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
        <AnimatedSection className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] mb-6">
            Navigating the<br />digital landscape<br />for success
          </h1>
          <p className="text-dark/70 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <Button variant="secondary" size="lg">Book a Consultation</Button>
        </AnimatedSection>
        <AnimatedSection delay={200} className="flex-1 flex justify-end items-center">
          <img src={heroIllustration} alt="Digital marketing illustration" className="w-full max-w-xl object-contain" />
        </AnimatedSection>
      </div>
    </Container>
  )
}
