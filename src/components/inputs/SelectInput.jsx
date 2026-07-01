export default function SelectInput({ label, name, value, onChange, options = [], placeholder, error, required = false, disabled = false, className = '' }) {
  const border = error ? 'border-red-500' : 'border-dark/20 focus:border-green'
  const selectClasses = `w-full px-5 py-3 rounded-[14px] border text-dark bg-white outline-none transition-all duration-200 appearance-none cursor-pointer ${border} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-dark">
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select id={name} name={name} value={value} onChange={onChange} required={required} disabled={disabled} className={selectClasses}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
