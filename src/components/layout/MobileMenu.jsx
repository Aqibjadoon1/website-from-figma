import Navbar from '../navigation/Navbar'

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onClose} />}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6">
          <button onClick={onClose} className="text-dark text-2xl" aria-label="Close menu">&times;</button>
        </div>
        <div className="px-6">
          <Navbar onLinkClick={onClose} className="flex-col items-start gap-6 text-lg" />
        </div>
      </div>
    </>
  )
}
