import { useNavigate } from 'react-router-dom'
import NavLink from './NavLink'
import Button from '../buttons/Button'

const links = [
  { to: '/', label: 'About us' },
  { to: '/#services', label: 'Services' },
  { to: '/#cases', label: 'Use Cases' },
  { to: '/#team', label: 'Team' },
]

export default function Navbar({ className = '', onLinkClick }) {
  const navigate = useNavigate()
  const isMobile = className.includes('flex-col')

  return (
    <nav className={`flex items-center gap-8 ${className}`} aria-label="Main navigation">
      {links.map(link => <NavLink key={link.to} to={link.to} onClick={onLinkClick}>{link.label}</NavLink>)}
      <Button variant="outline" size={isMobile ? 'lg' : 'sm'} onClick={() => navigate('/#contact', { state: { formType: 'support' } })}>Request a quote</Button>
    </nav>
  )
}
