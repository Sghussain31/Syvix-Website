"use client";
/* eslint-disable @next/next/no-img-element */

import { useApp } from "@/context/AppContext";
import { NAV_WINDOWS } from "@/lib/types";
import type { WindowView } from "@/lib/types";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { activeWindow, setActiveWindow, openContactModal } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (view: WindowView) => {
    setActiveWindow(view);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-150 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-slate-100 bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Clickable Logo Text without 'LLP' */}
        <button
          type="button"
          onClick={() => navigate("home")}
          className="group flex items-center gap-3 text-left animate-fade-in"
        >
          <img
            src="/syvix-logo.png"
            alt="SYVIX Logo"
            className="h-16 w-auto object-contain transition-transform duration-150 group-hover:scale-[1.02]"
          />
          <span className="hidden font-display text-sm font-bold tracking-wider text-slate-900 sm:block lg:text-base uppercase">
            SYVIX AI SOLUTIONS
          </span>
          <span className="font-display text-sm font-bold text-slate-900 sm:hidden uppercase">
            SYVIX
          </span>
        </button>

        {/* Center Links (highlight smoothly to Electric Blue on hover) */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV_WINDOWS.map((link) => (
            <li key={link.view}>
              <button
                type="button"
                onClick={() => navigate(link.view)}
                className={`text-xs font-bold tracking-wide transition-colors duration-150 uppercase ${
                  activeWindow === link.view
                     ? "text-[#0066FF]"
                     : "text-slate-600 hover:text-[#0066FF]"
                 }`}
               >
                 {link.label}
               </button>
             </li>
           ))}
         </ul>
 
         {/* Right Button (sleek Purple-bordered button) */}
         <div className="flex items-center gap-3">
           <button
             type="button"
             onClick={openContactModal}
             className="inline-flex items-center justify-center rounded-lg border border-[#7C3AED]/60 bg-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 transition-all duration-150 hover:bg-[#7C3AED]/5 hover:border-[#7C3AED] hover:shadow-[0_4px_12px_rgba(124,58,237,0.1)] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] active:scale-[0.98]"
           >
             Contact Us
           </button>
           <button
             type="button"
             aria-label="Toggle menu"
             className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 md:hidden"
             onClick={() => setMobileOpen(!mobileOpen)}
           >
             <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               {mobileOpen ? (
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M6 18L18 6M6 6l12 12"
                 />
               ) : (
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M4 6h16M4 12h16M4 18h16"
                 />
               )}
             </svg>
           </button>
         </div>
       </nav>
 
       {mobileOpen && (
         <div className="border-t border-slate-200 bg-white/95 px-4 py-4 md:hidden backdrop-blur-md">
           <ul className="flex flex-col gap-1">
             {NAV_WINDOWS.map((link) => (
               <li key={link.view}>
                 <button
                   type="button"
                   onClick={() => navigate(link.view)}
                   className={`block w-full rounded-lg px-3 py-2 text-left text-xs font-bold tracking-wide uppercase transition-all duration-150 ${
                     activeWindow === link.view
                       ? "bg-[#0066FF]/10 text-[#0066FF]"
                       : "text-slate-600 hover:bg-slate-50 hover:text-[#0066FF]"
                   }`}
                 >
                   {link.label}
                 </button>
               </li>
             ))}
           </ul>
         </div>
       )}
     </header>
   );
 }
