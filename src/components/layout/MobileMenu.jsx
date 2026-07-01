import Navbar from '../navigation/Navbar'

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/80 z-40 md:hidden" onClick={onClose} />}
      <div className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transform transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <button onClick={onClose} className="absolute top-6 right-6 text-dark text-3xl z-10" aria-label="Close menu">&times;</button>
        <div>
          <Navbar onLinkClick={onClose} className="flex-col items-center gap-8 text-xl text-center" />
        </div>
      </div>
    </>
  )
}
