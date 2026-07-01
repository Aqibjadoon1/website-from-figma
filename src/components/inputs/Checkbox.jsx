export default function Checkbox({ label, name, checked, onChange, disabled = false, className = '' }) {
  return (
    <label className={`flex items-center gap-3 cursor-pointer ${disabled ? 'opacity-50' : ''} ${className}`}>
      <input type="checkbox" name={name} checked={checked} onChange={onChange} disabled={disabled} className="w-5 h-5 rounded border-dark/20 text-green accent-green focus:ring-green" />
      <span className="text-sm text-dark">{label}</span>
    </label>
  )
}
