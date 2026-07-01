import Container from '../../../components/globals/Container'
import SectionHeading from '../../../components/globals/SectionHeading'
import AnimatedSection from '../../../components/globals/AnimatedSection'

const studies = [
  { description: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.', result: '50% increase in traffic' },
  { description: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.', result: '200% increase in traffic' },
  { description: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.', result: '25% more followers' },
]

export default function CaseStudiesSection() {
  return (
    <section id="cases" className="py-16 md:py-24">
      <Container>
        <SectionHeading title="Case Studies" subtitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" />
        <AnimatedSection className="bg-dark rounded-[45px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {studies.map((s, i) => (
              <div key={i} className="p-8 md:p-10 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <p className="text-white/80 text-sm leading-relaxed mb-5">{s.description}</p>
                <p className="text-green font-medium mb-4">{s.result}</p>
                <a href="#" className="inline-flex items-center gap-2 text-green font-medium hover:underline">Learn more <span>&rarr;</span></a>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
