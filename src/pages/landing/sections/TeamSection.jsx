import Container from '../../../components/globals/Container'
import SectionHeading from '../../../components/globals/SectionHeading'
import Button from '../../../components/buttons/Button'
import s1 from '../../../assets/s1.png'
import s2 from '../../../assets/s2.png'
import s3 from '../../../assets/s3.png'
import s4 from '../../../assets/s4.png'
import s5 from '../../../assets/s5.png'
import s6 from '../../../assets/s6.png'

const cards = [s1, s2, s3, s4, s5, s6]

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24">
      <Container>
        <SectionHeading title="Team" subtitle="Meet the skilled and experienced team behind our successful digital marketing strategies" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cards.map((src, i) => (
            <img key={i} src={src} alt={`Team member ${i + 1}`} className="w-full h-auto hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer" />
          ))}
        </div>
        <div className="flex justify-end">
          <Button variant="secondary" size="lg">See all team</Button>
        </div>
      </Container>
    </section>
  )
}
