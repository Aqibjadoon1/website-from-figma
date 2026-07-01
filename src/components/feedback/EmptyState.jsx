export default function EmptyState({ icon, title, description, action, className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 text-center ${className}`}>
      {icon && <div className="mb-4 text-dark/40">{icon}</div>}
      <h3 className="text-xl font-medium text-dark mb-2">{title}</h3>
      {description && <p className="text-dark/60 max-w-md mb-6">{description}</p>}
      {action}
    </div>
  )
}
