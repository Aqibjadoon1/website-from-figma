import { useState } from 'react'

export default function PasswordInput({ label, name, value, onChange, error, placeholder, required = false, disabled = false, className = '' }) {
  const [visible, setVisible] = useState(false)
  const border = error ? 'border-red-500' : 'border-dark/20 focus:border-green'
  const inputClasses = `w-full px-5 py-3 rounded-[14px] border text-dark bg-white outline-none transition-all duration-200 ${border} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  return (
    <div className={`mb-4 ${className}`}>
      {label && <label htmlFor={name} className="block mb-2 text-sm font-medium text-dark">{label}{required && <span className="text-red-500 ml-1">*</span>}</label>}
      <div className="relative">
        <input id={name} name={name} type={visible ? 'text' : 'password'} value={value} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} className={inputClasses} />
        <button type="button" onClick={() => setVisible(v => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-dark/40 hover:text-dark text-sm">{visible ? 'Hide' : 'Show'}</button>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
