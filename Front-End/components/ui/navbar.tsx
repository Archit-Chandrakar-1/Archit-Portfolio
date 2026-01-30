// "use client";

// import { useState, useEffect } from "react";
// import Link from 'next/link';
// import { Menu, X } from 'lucide-react'; // Ensure lucide-react is installed

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll effect for background transparency
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "About", href: "about" },
//     { name: "Expertise", href: "expertise" },
//     { name: "Portfolio", href: "portfolio" },
//     { name: "Certifications", href: "#certifications" },
//     { name: "Blog", href: "#blog" },
//   ];

//   return (
//     <nav 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-black/80 backdrop-blur-md border-b border-neutral-800 py-4" : "bg-transparent py-6"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex items-center justify-between">
          
//           {/* --- LEFT: Logo --- */}
//           <Link href="/" className="flex items-center gap-2 group">
//             <span className="text-2xl font-bold text-white tracking-tight group-hover:text-gray-300 transition-colors">
//               AC
//             </span>
//           </Link>

//           {/* --- CENTER: Desktop Navigation --- */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link 
//                 key={link.name}
//                 href={link.href} 
//                 className="text-neutral-400 hover:text-white text-sm font-medium transition-colors duration-200"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* --- RIGHT: CTA Button --- */}
//           <div className="hidden md:flex items-center">
//             <Link href="#contact">
//               <button className="px-6 py-2 rounded-full border border-red-500/50 text-red-500 font-medium text-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
//                 Let's Connect
//               </button>
//             </Link>
//           </div>

//           {/* --- MOBILE: Hamburger Menu --- */}
//           <div className="md:hidden">
//             <button 
//               onClick={() => setIsOpen(!isOpen)} 
//               className="text-white p-2"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* --- Mobile Menu Overlay --- */}
//       {isOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-neutral-800 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
//           {navLinks.map((link) => (
//             <Link 
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="text-neutral-400 hover:text-white text-lg font-medium py-2 border-b border-neutral-900"
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Link href="#contact" onClick={() => setIsOpen(false)}>
//             <button className="w-full mt-4 px-6 py-3 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors">
//               Let's Connect
//             </button>
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for background transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    // SCROLL LINKS (Target IDs on the landing page)
    { name: "About", href: "/#about" }, 
    { name: "Expertise", href: "/#expertise" },
    
    // PAGE LINKS (Open new pages)
    { name: "Portfolio", href: "/portfolio" },
    
    // SCROLL LINK
    { name: "Certifications", href: "/#certifications" },
    
    // PAGE LINK
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-neutral-800 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* --- LEFT: Logo --- */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-white tracking-tight group-hover:text-gray-300 transition-colors">
              AC
            </span>
          </Link>

          {/* --- CENTER: Desktop Navigation --- */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-neutral-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- RIGHT: CTA Button --- */}
          <div className="hidden md:flex items-center">
            {/* Points to the Contact section ID on the landing page */}
            <Link href="/#contact">
              <button className="px-6 py-2 rounded-full border border-red-500/50 text-red-500 font-medium text-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                Let's Connect
              </button>
            </Link>
          </div>

          {/* --- MOBILE: Hamburger Menu --- */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-neutral-800 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white text-lg font-medium py-2 border-b border-neutral-900"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setIsOpen(false)}>
            <button className="w-full mt-4 px-6 py-3 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors">
              Let's Connect
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}