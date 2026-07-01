export default function RadioGroup({ name, value, onChange, options = [], className = '' }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {options.map(opt => (
        <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name={name} value={opt.value} checked={value === opt.value} onChange={onChange} className="w-5 h-5 accent-green" />
          <span className="text-sm text-dark">{opt.label}</span>
        </label>
      ))}
    </div>
  )
}
