/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Menu, X, Sparkles, PhoneCall } from "lucide-react";
import { SALON_DETAILS } from "../data";

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
}

export default function Header({ currentView, setView }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "packages", label: "Bridal & Packages" },
    { id: "gallery", label: "Gallery" },
    { id: "team", label: "Meet the Team" },
    { id: "booking", label: "Book Appointment" },
    { id: "contact", label: "Contact & Location" },
  ];

  const handleNavClick = (viewId: string) => {
    setView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header 
      className="sticky top-0 z-40 w-full border-b border-rose-100 bg-stone-50/90 backdrop-blur-md"
      id="main-header"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo and Name */}
        <div 
          className="flex cursor-pointer items-center gap-2 group" 
          onClick={() => handleNavClick("home")}
          id="brand-logo"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-amber-700 transition-transform group-hover:rotate-12 duration-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-serif text-xl font-semibold tracking-wider text-stone-900 sm:text-2xl">
              Zari <span className="text-amber-700 font-light">Salon</span>
            </h1>
            <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 -mt-1 hidden sm:block">
              Bridal &amp; Beauty Studio
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" id="desktop-nav">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-md focus:outline-none ${
                  isActive 
                    ? "text-amber-800 bg-rose-50" 
                    : "text-stone-600 hover:text-amber-800 hover:bg-stone-100/50"
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 bg-amber-700 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Quick CTA Book Now */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${SALON_DETAILS.mainPhone}`}
            className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-amber-800 font-medium transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="font-mono">{SALON_DETAILS.mainPhone}</span>
          </a>
          <button
            onClick={() => handleNavClick("booking")}
            className="rounded-full bg-amber-800 hover:bg-amber-900 active:scale-95 text-stone-50 px-5 py-2 text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200"
            id="header-book-btn"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => handleNavClick("booking")}
            className="rounded-full bg-amber-800 hover:bg-amber-900 text-stone-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all sm:hidden"
          >
            Book
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full p-2 text-stone-700 hover:bg-stone-100 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Smooth Dropdown) */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden border-t border-rose-100 bg-stone-50 px-4 py-4 shadow-inner space-y-1 divide-y divide-stone-100"
          id="mobile-drawer"
        >
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 text-base font-medium tracking-wide transition-colors ${
                  isActive 
                    ? "text-amber-800 bg-rose-50 font-semibold" 
                    : "text-stone-700 hover:text-amber-800 hover:bg-stone-100"
                }`}
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            );
          })}
          
          <div className="pt-4 px-4 flex flex-col gap-3">
            <div className="text-xs text-stone-500 font-medium">
              Ladies-Only Space &bull; DHA &amp; Gulshan Branches
            </div>
            <a
              href={`tel:${SALON_DETAILS.mainPhone}`}
              className="flex items-center gap-2 text-stone-800 hover:text-amber-800 font-semibold"
            >
              <PhoneCall className="w-4 h-4 text-amber-700" />
              <span className="font-mono">{SALON_DETAILS.mainPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
