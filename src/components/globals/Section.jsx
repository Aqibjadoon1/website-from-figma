export default function Section({ children, className = '', bgColor = 'transparent' }) {
  return <section className={`py-16 md:py-20 lg:py-24 ${className}`} style={{ backgroundColor: bgColor }}>{children}</section>
}
