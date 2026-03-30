import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  const isActiveLink = (to: string) => {
    if (to === '/') return pathname === '/'
    return pathname === to || pathname.startsWith(`${to}/`)
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/what-we-do', label: 'What We Do' },
    { to: '/vision', label: 'Our Vision' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#F3F4F6] bg-[rgba(255,255,255,0.95)] shadow-sm">
      <div className="flex justify-between items-center w-full h-[76px] px-4 sm:px-6 lg:px-[52px]">
        {/* Logo */}
        <Link to="/">
          <img
            src="/Logo.svg"
            className="w-[120px] sm:w-[140px] lg:w-[154px] h-auto"
            alt="Venaxa Gold"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`whitespace-nowrap font-manrope text-[15px] leading-[22.8px] transition-colors hover:text-[#D19C2A] ${
                isActiveLink(link.to)
                  ? 'text-[#2D2D42] font-semibold' 
                  : 'text-[rgba(45,45,66,0.70)] font-medium'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#8B0304] text-white font-manrope text-sm font-semibold hover:bg-[#6d0205] transition-colors"
          >
            <span>Connect With Us</span>
            <div className="flex justify-center items-center rounded-full bg-[rgba(255,255,255,0.15)] w-6 h-6">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-2.5 h-2.5"
              >
                <path
                  d="M0.999146 4.99572H8.9923M8.9923 4.99572L5.49529 1.49871M8.9923 4.99572L5.49529 8.49272"
                  stroke="white"
                  strokeWidth="1.79846"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[#2D2D42] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#2D2D42] transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#2D2D42] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col px-4 py-6 bg-white border-t border-[#F3F4F6] gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`py-2 font-manrope text-[15px] transition-colors hover:text-[#D19C2A] ${
                isActiveLink(link.to)
                  ? 'text-[#2D2D42] font-semibold' 
                  : 'text-[rgba(45,45,66,0.70)] font-medium'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex justify-center items-center gap-3 mt-4 px-5 py-3 rounded-full bg-[#8B0304] text-white font-manrope text-sm font-semibold hover:bg-[#6d0205] transition-colors"
          >
            <span>Connect With Us</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-2.5 h-2.5"
            >
              <path
                d="M0.999146 4.99572H8.9923M8.9923 4.99572L5.49529 1.49871M8.9923 4.99572L5.49529 8.49272"
                stroke="white"
                strokeWidth="1.79846"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  )
}
