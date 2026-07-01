export default function Textarea({ label, name, value, onChange, placeholder, error, required = false, disabled = false, rows = 4, className = '' }) {
  const border = error ? 'border-red-500' : 'border-dark/20 focus:border-green'
  const classes = `w-full px-5 py-3 rounded-[14px] border text-dark bg-white outline-none transition-all duration-200 resize-none ${border} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  return (
    <div className={`mb-4 ${className}`}>
      {label && <label htmlFor={name} className="block mb-2 text-sm font-medium text-dark">{label}{required && <span className="text-red-500 ml-1">*</span>}</label>}
      <textarea id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} rows={rows} className={classes} />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
