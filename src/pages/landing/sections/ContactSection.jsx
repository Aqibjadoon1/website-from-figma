import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../../../components/globals/Container'
import SectionHeading from '../../../components/globals/SectionHeading'
import contactSvg from '../../../assets/Contact.svg'

export default function ContactSection() {
  const location = useLocation()
  const [form, setForm] = useState({ name: '', email: '', message: '', type: 'general' })

  useEffect(() => {
    if (location.state?.formType === 'support') {
      setForm(prev => ({ ...prev, type: 'support' }))
    }
  }, [location.state])
  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    window.alert('Message has been sent')
    setForm({ name: '', email: '', message: '', type: 'general' })
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <Container>
        <SectionHeading title="Contact Us" subtitle={<>Connect with Us: Let's Discuss<br />Your Digital Marketing Needs</>} />
        <div className="relative rounded-[45px] overflow-hidden" style={{ backgroundImage: `url(${contactSvg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className="w-full md:w-[55%] bg-[#F3F3F3] p-8 md:p-14">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex gap-4 mb-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="type" value="general" checked={form.type === 'general'} onChange={handleChange} className="accent-green w-5 h-5" />
                  <span className="text-dark text-base">Say Hi</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="type" value="support" checked={form.type === 'support'} onChange={handleChange} className="accent-green w-5 h-5" />
                  <span className="text-dark text-base">Get a Quote</span>
                </label>
              </div>
              <div>
                <label className="block text-dark text-sm font-medium mb-1">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required className="w-full bg-white border border-dark rounded-[14px] px-5 py-4 text-dark text-base outline-none focus:border-green transition-colors" />
              </div>
              <div>
                <label className="block text-dark text-sm font-medium mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required className="w-full bg-white border border-dark rounded-[14px] px-5 py-4 text-dark text-base outline-none focus:border-green transition-colors" />
              </div>
              <div>
                <label className="block text-dark text-sm font-medium mb-1">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message..." required rows={5} className="w-full bg-white border border-dark rounded-[14px] px-5 py-4 text-dark text-base outline-none focus:border-green transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-dark text-white text-base rounded-[14px] py-4 cursor-pointer hover:opacity-90 transition-opacity">Send Message</button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
