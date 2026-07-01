import { useState } from 'react'
import Container from '../../../components/globals/Container'
import SectionHeading from '../../../components/globals/SectionHeading'
import AnimatedSection from '../../../components/globals/AnimatedSection'

const steps = [
  { num: '01', title: 'Consultation', description: 'During the initial consultation we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to tailor our services to best fit your needs.' },
  { num: '02', title: 'Research and Strategy Development', description: 'We conduct thorough research on your industry, competitors, and target audience to develop a comprehensive digital marketing strategy.' },
  { num: '03', title: 'Implementation', description: 'We execute the strategy across all relevant channels, ensuring seamless integration and maximum impact.' },
  { num: '04', title: 'Monitoring and Optimization', description: 'We continuously monitor campaign performance and optimize based on data-driven insights.' },
  { num: '05', title: 'Reporting and Communication', description: 'Regular detailed reports keep you informed of progress, results, and next steps.' },
  { num: '06', title: 'Continual Improvement', description: 'We refine and improve our approach based on results, ensuring long-term success and growth.' },
]

function ProcessStep({ step, isOpen, onToggle, index }) {
  return (
    <AnimatedSection delay={index * 100}>
        <div className={`rounded-[45px] border-2 border-dark p-6 md:p-8 mb-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${isOpen ? 'bg-green shadow-[0_6px_0_0_#191A23]' : 'bg-gray'}`}>
        <button onClick={onToggle} className="w-full flex items-center justify-between text-left" aria-expanded={isOpen}>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="text-3xl md:text-5xl font-bold text-dark">{step.num}</span>
            <h3 className="text-xl md:text-2xl font-bold text-dark">{step.title}</h3>
          </div>
          <div className={`w-10 h-10 rounded-full border-2 border-dark flex items-center justify-center text-xl font-bold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
            {isOpen ? '−' : '+'}
          </div>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'mt-6 pt-6 border-t border-dark/20 max-h-96' : 'max-h-0'}`}>
          <p className="text-dark/80">{step.description}</p>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function ProcessSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="process" className="py-16 md:py-24">
      <Container>
        <SectionHeading title="Our Working Process" subtitle={<>Step-by-Step Guide to Achieving<br />Your Business Goals</>} />
        {steps.map((step, i) => (
          <ProcessStep key={i} step={step} index={i} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
        ))}
      </Container>
    </section>
  )
}
