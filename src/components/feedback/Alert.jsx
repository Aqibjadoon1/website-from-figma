const styles = {
  success: 'bg-green/20 text-dark border-green',
  error: 'bg-red-100 text-red-700 border-red-400',
  info: 'bg-blue-100 text-blue-700 border-blue-400',
  warning: 'bg-yellow-100 text-yellow-700 border-yellow-400',
}

export default function Alert({ type = 'info', message, onClose, className = '' }) {
  if (!message) return null
  return (
    <div className={`flex items-center justify-between px-5 py-3 rounded-[14px] border ${styles[type]} ${className}`}>
      <span className="text-sm">{message}</span>
      {onClose && <button onClick={onClose} className="ml-4 text-current opacity-60 hover:opacity-100">&times;</button>}
    </div>
  )
}
