import logoSrc from '../../assets/logo positivius.png'

export default function Logo({ variant = 'dark', className = '' }) {
  const filter = variant === 'dark' ? '' : 'brightness(0) invert(1)'
  return (
    <a href="/" className={`inline-block ${className}`}>
      <img src={logoSrc} alt="Positivus" className="h-8 md:h-10 w-auto" style={{ filter }} />
    </a>
  )
}
