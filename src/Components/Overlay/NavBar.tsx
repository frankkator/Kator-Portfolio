import MyLogo from "../SVG/MyLogo.svg"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
       const [showDropdown, setShowDropdown] = useState(false);

       const dropdownRef = useRef<HTMLDivElement>(null);

       const toggleDropdown = () => {
              setShowDropdown((prev) => !prev);
       };
    
       useEffect(() => {
              const handleClickOutside = (event: MouseEvent) => {
                     if (
                            dropdownRef.current && 
                            !dropdownRef.current.contains(event.target as Node) 
                     ) {
                            setShowDropdown(false);
                     }
              };
       
              document.addEventListener("mousedown", handleClickOutside);
              return () => {
                     document.removeEventListener("mousedown", handleClickOutside);
              };
       }, []);

       return (
              <nav className="flex items-center justify-between border mt-6 border-transparent bg-[#dda520]/60 rounded-lg py-4 px-6 relative">
                     
                     <div className="flex gap-6 items-center">
                            <ul className="border border-transparent rounded-lg">
                                   <a href="#" className="font-custom font-semibold">
                                          Experience
                                   </a>
                            </ul>
                            <ul className="border border-transparent rounded-lg">
                                   <a href="#" className="font-custom font-semibold underline">
                                          Projects i created
                                   </a>
                            </ul>
                     </div>

                     <div className="flex justify-center">
                            <a href="#">
                                   <img
                                          src={MyLogo}
                                          alt="Logo"
                                          width={40}
                                          height={20}
                                   />
                            </a>
                     </div>

                     <div className="flex gap-6 items-center">
                            <ul className="border border-transparent rounded-lg">
                                   <a href="#" className="font-custom font-semibold">
                                          Prompts
                                   </a>
                            </ul>
                     
                            <div ref={dropdownRef} className="relative inline-block text-left">
                                   <button 
                                          className="flex items-center gap-1 border border-transparent rounded-lg font-custom font-semibold transition-all cursor-pointer"
                                          tabIndex={0}
                                          onClick={toggleDropdown}
                                   >
                                          Goals
                                          {showDropdown ? (
                                                 <ChevronUp size={18} />
                                          ) : (
                                                 <ChevronDown size={18} />
                                          )}      
                                   </button>

                                   {showDropdown && (
                                          <div className="absolute right-0 mt-2 w-44 bg-[#dda520] rounded-xl shadow-lg border border-zinc-100 overflow-hidden z-50 py-1">
                                                 <div className="flex flex-col">
                                                        <NavLink 
                                                               to="/profile" 
                                                               className="px-4 py-2 text-sm text-zinc-700 hover:bg-amber-300/50 transition-colors font-custom font-bold"
                                                        >
                                                               Profile
                                                        </NavLink>
                                                        <NavLink 
                                                               to="/account" 
                                                               className="px-4 py-2 text-sm text-zinc-700 hover:bg-amber-300/50 transition-colors font-custom font-bold"
                                                        >
                                                               Account Settings
                                                        </NavLink> 
                                                 </div>
                                          </div>
                                   )}
                            </div>
                     </div>
                                          
              </nav>       
       )
}
