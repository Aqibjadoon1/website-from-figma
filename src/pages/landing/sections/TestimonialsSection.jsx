import { useState, useCallback } from 'react'
import Container from '../../../components/globals/Container'
import SectionHeading from '../../../components/globals/SectionHeading'
import bubbleImg from '../../../assets/Bubble.png'

const testimonials = [
  { quote: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads. Their team is professional, responsive, and truly cares about our success.', author: 'John Smith', role: 'Marketing Director, GreenTech' },
  { quote: 'The SEO strategy developed by Positivus transformed our online presence. We went from page 5 to page 1 for our key keywords in just 3 months.', author: 'Sarah Johnson', role: 'CEO, BrightPath Solutions' },
  { quote: 'Their PPC campaigns delivered an exceptional ROI. Our cost per lead decreased by 40% while conversion rates doubled.', author: 'Michael Chen', role: 'E-commerce Manager, ShopDirect' },
  { quote: 'Positivus helped us build a cohesive social media presence from scratch. Our follower growth and engagement metrics exceeded all targets.', author: 'Emily Rodriguez', role: 'Brand Manager, StyleHouse' },
]

function Star4({ filled }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill={filled ? '#B9FF66' : 'white'} opacity={filled ? 1 : 0.3} style={{ transform: 'rotate(25deg)' }}>
      <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
    </svg>
  )
}

function ArrowLeft() {
  return (
    <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
      <path d="M16 7L9 12L16 17M9 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
      <path d="M12 7L19 12L12 17M6 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading title="Testimonials" subtitle="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" />
        <div className="bg-dark rounded-[45px] px-6 md:px-16 py-12 md:py-16">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-full flex flex-col items-center px-4 md:px-12">
                  <div className="w-full mb-8 p-8 md:p-14" style={{ backgroundImage: `url(${bubbleImg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  </div>
                  <div className="text-center">
                    <p className="text-green text-lg md:text-xl font-bold">{t.author}</p>
                    <p className="text-white/60 text-sm md:text-base">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 md:gap-10 mt-10">
            <button onClick={prev} className="hover:opacity-100 transition-opacity" aria-label="Previous">
              <ArrowLeft />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to testimonial ${i + 1}`}>
                  <Star4 filled={i === current} />
                </button>
              ))}
            </div>
            <button onClick={next} className="hover:opacity-100 transition-opacity" aria-label="Next">
              <ArrowRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
