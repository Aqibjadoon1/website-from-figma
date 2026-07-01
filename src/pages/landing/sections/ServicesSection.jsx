import Container from '../../../components/globals/Container'
import SectionHeading from '../../../components/globals/SectionHeading'
import c1 from '../../../assets/c1.png'
import c2 from '../../../assets/c2.png'
import c3 from '../../../assets/c3.png'
import c4 from '../../../assets/c4.png'
import c5 from '../../../assets/c5.png'
import c6 from '../../../assets/c6.png'

const cards = [c1, c2, c3, c4, c5, c6]

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <Container>
        <SectionHeading title="Services" subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((src, i) => (
            <img key={i} src={src} alt={`Service ${i + 1}`} className="w-full h-auto hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer" />
          ))}
        </div>
      </Container>
    </section>
  )
}
