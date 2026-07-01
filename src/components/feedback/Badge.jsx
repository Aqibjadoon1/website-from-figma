const variants = {
  default: 'bg-dark text-white',
  success: 'bg-green text-dark',
  warning: 'bg-yellow-400 text-dark',
  error: 'bg-red-500 text-white',
}

export default function Badge({ children, variant = 'default', className = '' }) {
  return <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>{children}</span>
}
