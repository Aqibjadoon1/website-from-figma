export default function SearchInput({ value, onChange, placeholder = 'Search...', className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="w-full pl-12 pr-5 py-3 rounded-[14px] border border-dark/20 bg-white outline-none focus:border-green transition-all duration-200" />
    </div>
  )
}
