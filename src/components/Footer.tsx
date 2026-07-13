/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Phone, MapPin, Clock, ShieldCheck, Mail } from "lucide-react";
import { SALON_DETAILS } from "../data";

interface FooterProps {
  setView: (view: string) => void;
}

export default function Footer({ setView }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (viewId: string) => {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800" id="main-footer">
      
      {/* Highlighted Ladies-Only Comfort banner */}
      <div className="bg-rose-950/40 border-b border-rose-900/40 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5 text-rose-300">
            <ShieldCheck className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium tracking-wide">
              Strictly Ladies-Only &amp; Private Environment
            </p>
          </div>
          <p className="text-xs text-stone-400 max-w-2xl">
            {SALON_DETAILS.ladiesOnlyMessage}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Logo & Philosophy Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick("home")}>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-950 text-rose-200">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <h2 className="font-serif text-lg font-bold tracking-wider text-white">
                Zari <span className="text-rose-300 font-light">Salon</span>
              </h2>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Elevating women's natural beauty in Karachi since 2014. We craft memories, timeless bridal looks, and luxurious pampering experiences in absolute comfort and privacy.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={SALON_DETAILS.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-stone-800 hover:bg-rose-950 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a 
                href={SALON_DETAILS.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-stone-800 hover:bg-rose-950 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Opening Hours Column */}
          <div className="space-y-4">
            <h3 className="text-stone-100 font-medium tracking-wide text-sm flex items-center gap-1.5 font-serif border-b border-stone-800 pb-2">
              <Clock className="w-4 h-4 text-rose-300" /> Opening Hours
            </h3>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="flex justify-between">
                <span>{SALON_DETAILS.openingHours.days}:</span>
                <span className="text-stone-300 font-medium">{SALON_DETAILS.openingHours.time}</span>
              </li>
              <li className="flex justify-between text-rose-300 font-medium">
                <span>{SALON_DETAILS.openingHours.closed}</span>
              </li>
              <li className="pt-2 text-stone-500 border-t border-stone-800/40">
                Please book bridal consultations at least 1-2 weeks in advance to secure senior team slots.
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-stone-100 font-medium tracking-wide text-sm font-serif border-b border-stone-800 pb-2">
              Explore Menu
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLinkClick("about")} className="text-stone-400 hover:text-rose-300 transition-colors">
                  Our Story &amp; Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("services")} className="text-stone-400 hover:text-rose-300 transition-colors">
                  Beauty &amp; Aesthetic Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("packages")} className="text-stone-400 hover:text-rose-300 transition-colors">
                  Bridal &amp; Party Packages
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("gallery")} className="text-stone-400 hover:text-rose-300 transition-colors">
                  Salon Work Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("booking")} className="text-stone-400 hover:text-rose-300 transition-colors">
                  Book an Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Karachi Branches Column */}
          <div className="space-y-4">
            <h3 className="text-stone-100 font-medium tracking-wide text-sm flex items-center gap-1.5 font-serif border-b border-stone-800 pb-2">
              <MapPin className="w-4 h-4 text-rose-300" /> Karachi Branches
            </h3>
            <div className="space-y-3.5 text-xs">
              {SALON_DETAILS.branches.map((branch, i) => (
                <div key={i} className="space-y-1">
                  <p className="font-semibold text-stone-200">{branch.name}</p>
                  <p className="text-stone-400 leading-normal">{branch.address}</p>
                  <p className="text-rose-300 font-mono text-[11px] flex items-center gap-1">
                    <Phone className="w-3 h-3" /> {branch.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright and email */}
        <div className="mt-12 pt-8 border-t border-stone-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>&copy; {currentYear} {SALON_DETAILS.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-stone-500" />
            <a href="mailto:info@zaribeautysalon_demo.pk" className="hover:text-stone-300 transition-colors">
              info@zaribeautysalon_demo.pk
            </a>
          </div>
          <p className="text-[10px] text-stone-600">
            Lovingly designed for the women of Karachi, Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
}
