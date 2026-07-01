export default function TextInput({ label, name, type = 'text', value, onChange, error, placeholder, required = false, disabled = false, className = '' }) {
  const border = error ? 'border-red-500 focus:border-red-500' : 'border-dark/20 focus:border-green'
  const inputClasses = `w-full px-5 py-3 rounded-[14px] border text-dark bg-white outline-none transition-all duration-200 placeholder:text-dark/40 ${border} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-dark">
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} className={inputClasses} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} />
      {error && <p id={`${name}-error`} className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
