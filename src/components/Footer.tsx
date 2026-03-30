import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="flex pt-12 sm:pt-16 px-4 sm:px-6 lg:px-[52px] pb-0 flex-col items-start gap-10 sm:gap-16 bg-[#1C1C1C] w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 w-full">
        {/* Brand Column */}
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <img
            src="/Logored.svg"
            className="w-[140px] sm:w-[168px] h-auto"
            alt="Venaxa Gold"
          />
          <p className="text-[rgba(255,255,255,0.50)] font-manrope text-sm leading-[23px] max-w-[295px]">
            Crafting timeless gold jewellery since 1987. Each piece tells
            a story of heritage, artistry, and luxury.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="flex justify-center items-center rounded-full border border-[rgba(209,156,42,0.20)] w-9 h-9 hover:border-[#D19C2A] hover:bg-[rgba(209,156,42,0.05)] transition-all">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                <rect x="1" y="1" width="14" height="14" rx="3" stroke="#D19C2A" strokeOpacity="0.6" strokeWidth="1.2"/>
                <circle cx="8" cy="8" r="3.5" stroke="#D19C2A" strokeOpacity="0.6" strokeWidth="1.2"/>
                <circle cx="12.5" cy="3.5" r="0.5" fill="#D19C2A" fillOpacity="0.6"/>
              </svg>
            </a>
            <a href="#" className="flex justify-center items-center rounded-full border border-[rgba(209,156,42,0.20)] w-9 h-9 hover:border-[#D19C2A] hover:bg-[rgba(209,156,42,0.05)] transition-all">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                <path d="M12 1.33H10C9.11 1.33 8.26 1.68 7.64 2.31C7.01 2.93 6.66 3.78 6.66 4.66V6.66H4.66V9.33H6.66V14.66H9.33V9.33H11.33L12 6.66H9.33V4.66C9.33 4.49 9.4 4.32 9.52 4.19C9.65 4.07 9.82 4 10 4H12V1.33Z" stroke="#D19C2A" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="flex justify-center items-center rounded-full border border-[rgba(209,156,42,0.20)] w-9 h-9 hover:border-[#D19C2A] hover:bg-[rgba(209,156,42,0.05)] transition-all">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                <path d="M14.66 2.66C14.66 2.66 14.19 4.06 13.33 4.93C14.39 11.59 7.06 16.46 1.33 12.66C2.8 12.73 4.26 12.26 5.33 11.33C2 10.33 0.33 6.4 2 3.33C3.46 5.06 5.73 6.06 8 6C7.4 3.2 10.66 1.6 12.66 3.46C13.39 3.46 14.66 2.66 14.66 2.66Z" stroke="#D19C2A" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <p className="text-[#D19C2A] font-manrope text-xs font-bold tracking-[0.2em] uppercase">
            Quick Links
          </p>
          <div className="flex flex-col items-start gap-3">
            <Link to="/" className="text-[rgba(255,255,255,0.50)] font-manrope text-sm hover:text-[#D19C2A] transition-colors">Home</Link>
            <Link to="/about" className="text-[rgba(255,255,255,0.50)] font-manrope text-sm hover:text-[#D19C2A] transition-colors">About Us</Link>
            <Link to="/what-we-do" className="text-[rgba(255,255,255,0.50)] font-manrope text-sm hover:text-[#D19C2A] transition-colors">What We Do</Link>
            <Link to="/our-vision" className="text-[rgba(255,255,255,0.50)] font-manrope text-sm hover:text-[#D19C2A] transition-colors">Our Vision</Link>
            <Link to="/team" className="text-[rgba(255,255,255,0.50)] font-manrope text-sm hover:text-[#D19C2A] transition-colors">Team</Link>
            <Link to="/contact" className="text-[rgba(255,255,255,0.50)] font-manrope text-sm hover:text-[#D19C2A] transition-colors">Contact</Link>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <p className="text-[#D19C2A] font-manrope text-xs font-bold tracking-[0.2em] uppercase">
            Our Services
          </p>
          <div className="flex flex-col items-start gap-3">
            <p className="text-[rgba(255,255,255,0.50)] font-manrope text-sm">Custom Design</p>
            <p className="text-[rgba(255,255,255,0.50)] font-manrope text-sm">Bespoke Jewellery</p>
            <p className="text-[rgba(255,255,255,0.50)] font-manrope text-sm">Restoration</p>
            <p className="text-[rgba(255,255,255,0.50)] font-manrope text-sm">Consultation</p>
            <p className="text-[rgba(255,255,255,0.50)] font-manrope text-sm">Gold Investment</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <p className="text-[#D19C2A] font-manrope text-xs font-bold tracking-[0.2em] uppercase">
            Contact Us
          </p>
          <div className="flex flex-col items-start gap-3">
            <p className="text-[rgba(255,255,255,0.50)] font-manrope text-sm">T C NO.9/1472, Temple Road</p>
            <p className="text-[rgba(255,255,255,0.50)] font-manrope text-sm">Sasthamangalam, Thiruvananthapuram</p>
            <p className="text-[rgba(255,255,255,0.50)] font-manrope text-sm">Kerala - 695010</p>
            <a href="tel:+919876543210" className="text-[rgba(209,156,42,0.70)] font-manrope text-sm hover:text-[#D19C2A] transition-colors">+91 98765 43210</a>
            <a href="mailto:hello@venaxagold.com" className="text-[rgba(209,156,42,0.70)] font-manrope text-sm hover:text-[#D19C2A] transition-colors">hello@venaxagold.com</a>
          </div>
        </div>
      </div>

      <div className="flex py-5 sm:py-6 flex-col items-center border-t border-[rgba(255,255,255,0.10)] w-full">
        <p className="text-[rgba(255,255,255,0.30)] font-manrope text-xs text-center tracking-[0.1em]">
          © 2026 Venaxa Gold. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
