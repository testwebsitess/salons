/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Shield, Heart, HeartHandshake, Smile, Check } from "lucide-react";
import { SALON_DETAILS } from "../data";

interface AboutViewProps {
  setView: (view: string) => void;
}

export default function AboutView({ setView }: AboutViewProps) {
  const safetyStandards = [
    "100% disposable sheets, facial sponges, and waxing spatulas used for every single sister.",
    "Autoclave-sterilized metal tools (scissors, pushers, tweezers) unpacked in front of you.",
    "Rica Liposoluble wax exclusively used to eliminate burning risks common with local hot sugar waxes.",
    "Strictly female-only team and client restriction to ensure you can take off your hijab or dupatta in absolute ease.",
    "Continuous premium brand authentication checking — absolutely zero low-grade Chinese mock-up products in our rooms."
  ];

  return (
    <div className="space-y-16 pb-16" id="about-view">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-rose-50/40 py-12 lg:py-20 border-b border-rose-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-800">
            Our Legacy
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Crafting Grace, Confidence, &amp; Sanctuary Since 2014
          </h1>
          <div className="h-1 w-20 bg-rose-200 mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Zari Salon &amp; Bridal Studio was founded with a singular purpose: to offer Karachi's modern women a high-end luxury pampering space that respects local cultural comfort and strict privacy needs.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & PHILOSOPHY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="story-block">
        
        {/* Left Column Text */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            The Zari Journey
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Zari Khan, a London-certified aesthetician and makeup artist, moved back to her hometown of Karachi in 2013. While looking for a beauty spot, she noticed that most local beauty spaces were either overcrowded, lacked hygiene standards, or did not offer a relaxed, truly private, ladies-only layout.
          </p>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            In 2014, she launched the first Zari Beauty Salon. It wasn’t just about haircuts and eyeliner — it was about designing an elite escape. A space where you are pampered like royalty, where the tea is always fresh, the hygiene is immaculate, and your modesty and privacy are protected at all costs.
          </p>
          
          {/* Core Values Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-2.5">
              <div className="h-7 w-7 rounded-full bg-rose-100 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-stone-900">Genuine Warmth</h4>
                <p className="text-[11px] text-stone-500">No cold snobbish salon attitude. We treat every client like family.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2.5">
              <div className="h-7 w-7 rounded-full bg-rose-100 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-stone-900">Absolute Integrity</h4>
                <p className="text-[11px] text-stone-500">We explain exact product usage and pricing before starting.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfea4a3a9?auto=format&fit=crop&q=80&w=600"
              alt="Inside Zari Beauty Salon Space"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating year tag */}
          <div className="absolute -top-4 -left-4 bg-amber-800 text-stone-50 p-4 rounded-lg shadow-xl">
            <p className="font-serif text-2xl font-bold tracking-tight">10+</p>
            <p className="text-[9px] uppercase tracking-wider font-light">Years of Grace</p>
          </div>
        </div>

      </section>

      {/* 3. LADIES-ONLY SECURITY & HYGIENE STANDARD */}
      <section className="bg-stone-900 text-stone-100 py-12 lg:py-16" id="hygiene-standards">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-950/80 border border-rose-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-300">
              <Shield className="w-4 h-4 text-rose-400" />
              Our Uncompromised Promise
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              A Sanitized Sanctuary For Your Complete Comfort
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              We know that entering a beauty salon requires deep trust. Our branches operate with strict surgical-grade cleaning and zero tolerance for low-quality recycled equipment. Feel absolutely safe whether you are booking a simple eyebrow trim, full body waxing, or a premium bridal makeover.
            </p>
            <button
              onClick={() => setView("booking")}
              className="rounded-full bg-amber-800 hover:bg-amber-900 text-stone-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Book Secure Treatment
            </button>
          </div>

          <div className="bg-stone-850 p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4">
            <h3 className="font-serif text-lg font-bold text-rose-300">What Makes Our Hygiene Standard Different</h3>
            <ul className="space-y-3">
              {safetyStandards.map((std, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-xs text-stone-300 leading-relaxed">
                  <Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>{std}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 4. MISSION & PHILOSOPHY BANNER */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-6" id="philosophy-quote">
        <div className="flex justify-center text-amber-700">
          <HeartHandshake className="w-10 h-10" />
        </div>
        <p className="font-serif text-lg sm:text-xl text-stone-800 leading-relaxed italic max-w-3xl mx-auto">
          "Beauty is not about altering who you are, but reflecting your timeless charm with pride, dewy skin, and hair full of life. We are honored to hold this sanctuary for you."
        </p>
        <div>
          <p className="font-serif text-base font-bold text-stone-900">Zari Khan</p>
          <p className="text-xs text-stone-400">Founder &amp; Chief Creative Artist</p>
        </div>
      </section>

    </div>
  );
}
