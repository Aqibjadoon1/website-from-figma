const variants = {
  primary: 'bg-green text-dark border-green hover:bg-green/80',
  secondary: 'bg-dark text-white border-dark hover:bg-dark/80',
  outline: 'bg-transparent text-dark border-dark hover:bg-gray',
  ghost: 'bg-transparent text-dark border-transparent hover:text-green',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({ children, variant = 'primary', size = 'md', className = '', disabled = false, onClick, type = 'button', ...props }) {
  const base = 'font-medium rounded-[14px] border transition-all duration-200 cursor-pointer inline-flex items-center justify-center'
  const state = disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-95 hover:scale-[1.02]'
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${state} ${className}`

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
