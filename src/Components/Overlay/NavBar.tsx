import MyLogo from "../SVG/MyLogo.svg" 
import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react'

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // New States for tracking scroll direction
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const toggleMobileMenu = () => setIsMenuOpen((prev) => !prev);

  const handleScrollLinkClick = () => {
    setShowDropdown(false);
    setIsMenuOpen(false);
  };

  // Scroll detection logic
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the very top of the page
      if (currentScrollY < 50) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // If user clicks a mobile menu link, keep navbar visible while it transitions
      if (isMenuOpen || showDropdown) {
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) {
        // Scrolling DOWN -> Hide Navbar
        setIsVisible(false);
      } else {
        // Scrolling UP -> Show Navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, isMenuOpen, showDropdown]);

  // Close menus on click completely outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
      if (isMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav 
      ref={mobileMenuRef} 
      className={`w-full bg-[#dda520]/90 lg:bg-[#dda520]/70 py-4 px-4 sm:px-8 fixed left-0 border-b border-amber-600/20 z-50 backdrop-blur-md transition-all duration-300 ${
        isVisible ? "top-0" : "-top-24"
      }`}
    >
      {/* Navbar Content Layout Grid */}
      <div className="w-full grid grid-cols-3 items-center">
        
        {/* LEFT COLUMN: Desktop Links / Mobile Toggle */}
        <div className="flex items-center justify-start">
          <button 
            onClick={toggleMobileMenu} 
            className="lg:hidden p-2 text-white hover:bg-amber-700/40 rounded-lg border border-amber-200/50 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden lg:flex gap-6 items-center">
            <a href="#profile" className="font-custom text-2xl font-extrabold tracking-wide rounded-lg border border-amber-200 px-3 py-1 transition-colors hover:opacity-80 whitespace-nowrap shadow-lg text-white bg-amber-700/40">
              Profile
            </a>
            <a href="#projects" className="font-custom text-2xl font-extrabold tracking-wide rounded-lg border border-amber-200 px-3 py-1 hover:opacity-80 transition-colors whitespace-nowrap shadow-lg text-white bg-amber-700/40">
              Projects
            </a>
          </div>
        </div>

        {/* CENTER COLUMN: Logo */}
        <div className="flex justify-center items-center">
          <a href="#welcome" onClick={handleScrollLinkClick} className="block transform hover:scale-105 transition-transform shrink-0">
            <img 
            src={MyLogo} 
            alt="Logo" 
            className="w-12 h-auto object-contain block" 
            />
          </a>
        </div>

        {/* RIGHT COLUMN: Prompts & Dropdown */}
        <div className="flex gap-6 items-center justify-end">
          <div className="hidden lg:flex gap-6 items-center">
            <a href="#prompts" className="font-custom text-2xl font-extrabold tracking-wide rounded-lg border border-amber-200 px-3 py-1 hover:opacity-80 transition-colors whitespace-nowrap shadow-lg text-white bg-amber-700/40">
              Prompts
            </a>
          </div>
        
          <div ref={dropdownRef} className="relative inline-block text-left">
            <button 
              className="flex items-center gap-1 border border-amber-200 rounded-lg font-custom text-xl lg:text-2xl font-extrabold tracking-wide px-3 py-1 transition-all cursor-pointer hover:opacity-80 whitespace-nowrap shadow-lg text-white bg-amber-700/40"
              onClick={toggleDropdown}
            >
              <span className="hidden sm:inline">contact info</span>
              <span className="sm:hidden">Contact</span>
              {showDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}      
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-44 bg-[#dda520] rounded-xl shadow-xl border border-white/20 overflow-hidden z-50 py-1">
                <div className="flex flex-col">
                  <a href="#goals" className="px-4 py-2 text-xl hover:bg-amber-600/50 text-white transition-colors font-custom font-bold block" onClick={handleScrollLinkClick}>
                    Goals
                  </a>
                  <a href="#experience" className="px-4 py-2 text-xl hover:bg-amber-600/50 text-white transition-colors font-custom font-bold block" onClick={handleScrollLinkClick}>
                    Experience
                  </a> 
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* MOBILE DRAWER */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#dda520] border-t border-amber-600/30 shadow-2xl p-6 flex flex-col gap-4 z-40 transition-all duration-300">
          <a href="#profile" onClick={handleScrollLinkClick} className="font-custom text-xl font-extrabold tracking-wide rounded-lg border border-amber-200 p-3 text-center transition-colors text-white bg-amber-700/40">
            Profile
          </a>
          <a href="#projects" onClick={handleScrollLinkClick} className="font-custom text-xl font-extrabold tracking-wide rounded-lg border border-amber-200 p-3 text-center transition-colors text-white bg-amber-700/40">
            Projects i created
          </a>
          <a href="#prompts" onClick={handleScrollLinkClick} className="font-custom text-xl font-extrabold tracking-wide rounded-lg border border-amber-200 p-3 text-center transition-colors text-white bg-amber-700/40">
            Prompts
          </a>
        </div>
      )}
    </nav>       
  );
}