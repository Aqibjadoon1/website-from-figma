import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo positivius.png'

function StarIcon({ className }) {
  return (
    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" className={className}>
      <path d="M15 0L18.5 10.5L29 10.5L20.5 17L23.5 28L15 21.5L6.5 28L9.5 17L1 10.5L11.5 10.5L15 0Z" fill="#B9FF66" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
      <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.12H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.12H5.5V18.5H8.27Z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
      <path d="M24 12.0733C24 5.40541 18.6274 0 12 0C5.37258 0 0 5.40541 0 12.0733C0 18.0995 4.38823 23.0943 10.125 24V15.5633H7.07813V12.0733H10.125V9.41343C10.125 6.38755 11.9165 4.71615 14.6576 4.71615C15.9705 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.3399 7.92313 13.875 8.85379 13.875 9.80857V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6118 23.0943 24 18.0995 24 12.0733Z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
      <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    alert(`Subscribed with ${email}!`)
    setEmail('')
  }

  return (
    <footer className="relative">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="bg-[#191A23] rounded-t-[45px] px-8 md:px-16 pt-12 md:pt-16 pb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0 mb-12">
            <div className="flex items-center gap-2">
              <StarIcon className="w-8 h-8" />
              <span className="text-white text-2xl font-bold">Positivus</span>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-white/80 text-base" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <Link to="/#about" className="hover:text-green transition-colors underline underline-offset-4">About us</Link>
              <Link to="/#services" className="hover:text-green transition-colors underline underline-offset-4">Services</Link>
              <Link to="/#cases" className="hover:text-green transition-colors underline underline-offset-4">Use Cases</Link>
              <Link to="/privacy" className="hover:text-green transition-colors underline underline-offset-4">Privacy Policy</Link>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 mb-12">
            <div className="flex flex-col gap-3">
              <span className="text-green bg-green/20 rounded-lg px-3 py-1 text-sm font-semibold inline-block w-fit">Contact us:</span>
              <a href="mailto:info@positivus.com" className="text-white/80 hover:text-green transition-colors text-base">info@positivus.com</a>
              <a href="tel:555-567-8901" className="text-white/80 hover:text-green transition-colors text-base">555-567-8901</a>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-[#292A32] rounded-[14px] p-6 w-full md:w-auto md:min-w-[500px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="flex-1 h-32 px-8 rounded-2xl border-2 border-white bg-transparent text-white placeholder:text-gray-400 text-lg outline-none focus:border-green transition-colors"
              />
              <button
                type="submit"
                className="h-16 px-8 rounded-2xl bg-green text-dark font-semibold text-base whitespace-nowrap hover:bg-lime-300 transition-colors cursor-pointer"
              >
                Subscribe to News
              </button>
            </form>
          </div>

          <div className="w-full h-px bg-white/20 mb-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm order-3 md:order-1">© 2025 Positivus. All Rights Reserved.</p>
            <Link to="/privacy" className="text-white/60 hover:text-green transition-colors text-sm underline order-2">Privacy Policy</Link>
            <div className="flex items-center gap-3 order-1 md:order-3">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter"><TwitterIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
