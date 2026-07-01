export default function Skeleton({ width = '100%', height = '20px', className = '', rounded = true }) {
  return <div className={`bg-gray animate-pulse ${rounded ? 'rounded-[14px]' : ''} ${className}`} style={{ width, height }} />
}
