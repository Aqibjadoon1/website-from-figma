import Container from '../../../components/globals/Container'
import Button from '../../../components/buttons/Button'
import AnimatedSection from '../../../components/globals/AnimatedSection'
import img1 from '../../../assets/1.png'

export default function CTABanner() {
  return (
    <Container className="py-12">
      <AnimatedSection className="bg-gray rounded-[45px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Let's make things happen</h2>
          <p className="text-dark/70 mb-6">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
          <Button variant="secondary" size="lg" onClick={() => window.alert('you are not our vip')}>Get your free proposal</Button>
        </div>
        <div className="hidden md:block flex items-end justify-end">
          <img src={img1} alt="Illustration" className="h-full w-auto object-contain" />
        </div>
      </AnimatedSection>
    </Container>
  )
}
