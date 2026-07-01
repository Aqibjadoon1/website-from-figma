import Navbar from '../navigation/Navbar'

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <button onClick={onClose} className="absolute top-6 right-6 text-dark text-3xl" aria-label="Close menu">&times;</button>
      <div>
        <Navbar onLinkClick={onClose} className="flex-col items-center gap-8 text-xl text-center" />
      </div>
    </div>
  )
}
