export default function SectionHeading({ title, subtitle, className = '' }) {
  return (
    <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 ${className}`}>
      <h2 className="inline-block bg-green text-dark text-3xl md:text-4xl font-bold px-2 py-1 rounded-[7px]">{title}</h2>
      {subtitle && <p className="text-dark/70 text-lg max-w-xl">{subtitle}</p>}
    </div>
  )
}
