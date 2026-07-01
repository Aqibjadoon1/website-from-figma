import { Link, useLocation } from 'react-router-dom'

export default function NavLink({ to, children, className = '', onClick }) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to} onClick={onClick}
      className={`text-dark hover:text-green transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-green after:transition-all after:duration-200 ${isActive ? 'after:w-full text-green' : 'after:w-0 hover:after:w-full'} ${className}`}
    >
      {children}
    </Link>
  )
}
