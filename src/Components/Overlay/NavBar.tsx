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
       <nav className="w-full grid grid-cols-3 items-center border border-transparent bg-[#dda520]/70 py-4 px-8 relative transition-colors duration-500 ease-in-out">
              
              {/* LEFT COLUMN: Explicit Flex row layout for text items */}
              <div className="flex gap-6 items-center justify-start ">
                     <a href="#" className="font-custom text-2xl font-extrabold tracking-wide rounded-lg border border-amber-200 transition-colors hover:opacity-80 whitespace-nowrap shadow:lg text-white bg-amber-700/40">
                            Profile
                     </a>
                     <a href="#" className="font-custom text-2xl font-extrabold tracking-wide rounded-lg border border-amber-200 hover:opacity-80 transition-colors whitespace-nowrap shadow:lg text-white bg-amber-700/40">
                            Projects i created
                     </a>
              </div>

              {/* CENTER COLUMN: Perfectly centered container with fixed image tracking bounds */}
              <div className="flex justify-center items-center">
                     <a href="#" className="block transform hover:scale-105 transition-transform shrink-0">
                            <img
                                   src={MyLogo}
                                   alt="Logo"
                                   className="w-12 h-auto object-contain block" 
                            />
                     </a>
              </div>

              {/* RIGHT COLUMN: Keeps everything grouped cleanly together on the right */}
              <div className="flex gap-6 items-center justify-end  ">
                     <a href="#" className="font-custom text-2xl font-extrabold tracking-wide rounded-lg border border-amber-200 hover:opacity-80 transition-colours whitespace-nowrap shadow:lg text-white bg-amber-700/40">
                            Prompts
                     </a>
              
                     <div ref={dropdownRef} className="relative inline-block text-left">
                            <button 
                                   className="flex items-center gap-1 border border-amber-200 rounded-lg font-custom text-2xl font-extrabold tracking-wide transition-all cursor-pointer hover:opacity-80 whitespace-nowrap shadow:lg text-white bg-amber-700/40"
                                   tabIndex={0}
                                   onClick={toggleDropdown}
                            >
                                   contact info
                                   {showDropdown ? (
                                          <ChevronUp size={16} />
                                   ) : (
                                          <ChevronDown size={16} />
                                   )}      
                            </button>

                            {showDropdown && (
                                   <div className="absolute right-0 mt-3 w-44 bg-[#dda520]  rounded-xl shadow-lg border border-bg-white overflow-hidden z-50 py-1">
                                          <div className="flex flex-col">
                                                 <NavLink 
                                                        to="/profile" 
                                                        className="px-4 py-2 text-xl  hover:bg-amber-300/50  transition-colors font-custom font-bold"
                                                 >
                                                 Goals
                                                 </NavLink>
                                                 <NavLink 
                                                        to="/account" 
                                                        className="px-4 py-2 text-xl hover:bg-amber-300/50 transition-colors font-custom font-bold"
                                                 >
                                                        Experience
                                                 </NavLink> 
                                          </div>
                                   </div>
                            )}
                     </div>

              </div>
                                   
       </nav>       
    )
}
  