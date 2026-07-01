import { useState } from 'react'
import Container from '../globals/Container'
import Logo from './Logo'
import Navbar from '../navigation/Navbar'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray/50">
      <Container>
        <div className="flex items-center justify-between py-4 md:py-6">
          <Logo />
          <Navbar className="hidden md:flex" />
          <button className="md:hidden text-dark p-2" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </Container>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
