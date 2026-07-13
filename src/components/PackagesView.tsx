/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Calendar, Check, Gift, Heart, ShieldAlert } from "lucide-react";
import { BRIDAL_PACKAGES } from "../data";

interface PackagesViewProps {
  setView: (view: string) => void;
  setSelectedService?: (serviceName: string) => void;
}

export default function PackagesView({ setView, setSelectedService }: PackagesViewProps) {
  const handleBookPackage = (packageName: string) => {
    if (setSelectedService) {
      setSelectedService(packageName);
    }
    setView("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-16 pb-16" id="packages-view">
      
      {/* 1. SECTION HEADER */}
      <section className="bg-rose-50/30 border-b border-rose-100 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-800">
            Exclusive Luxury
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Bridal &amp; Festive Celebration Packages
          </h1>
          <div className="h-1 w-20 bg-rose-200 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            In Karachi, your wedding days represent a majestic lifetime milestone. At Zari Salon, we provide VIP private bridal rooms, high-definition makeup, and customizable styling so that your beauty glows effortlessly on your big day.
          </p>
        </div>
      </section>

      {/* 2. BRIDAL GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {BRIDAL_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                pkg.bestValue
                  ? "bg-stone-900 text-stone-100 shadow-2xl ring-2 ring-amber-700/60 scale-102 lg:-translate-y-2 border border-amber-800/40"
                  : "bg-white text-stone-800 border border-stone-200 shadow-sm hover:shadow-md"
              }`}
              id={`package-${pkg.id}`}
            >
              {/* Highlight Tag */}
              {pkg.bestValue && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-700 to-amber-800 text-stone-50 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 animate-pulse" /> Most Preferred Package
                </span>
              )}

              {/* Package Header */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className={`font-serif text-xl sm:text-2xl font-bold ${pkg.bestValue ? "text-white" : "text-stone-900"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs ${pkg.bestValue ? "text-rose-200" : "text-amber-800"} font-medium`}>
                    {pkg.tagline}
                  </p>
                </div>

                <p className={`text-xs leading-relaxed ${pkg.bestValue ? "text-stone-300" : "text-stone-500"}`}>
                  {pkg.description}
                </p>

                {/* Price Display */}
                <div className="py-4 border-y border-stone-200/20">
                  <p className={`text-[10px] uppercase tracking-widest ${pkg.bestValue ? "text-stone-400" : "text-stone-400"}`}>
                    Package Rate
                  </p>
                  <p className={`font-serif text-2xl sm:text-3xl font-black ${pkg.bestValue ? "text-amber-400" : "text-stone-900"}`}>
                    PKR {pkg.price.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-stone-400 mt-0.5">*No hidden taxes</p>
                </div>

                {/* Inclusions list */}
                <div className="space-y-3 pt-2">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${pkg.bestValue ? "text-stone-200" : "text-stone-800"}`}>
                    Inclusions:
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.servicesIncluded.map((service, index) => (
                      <li key={index} className="flex gap-2 items-start text-xs">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.bestValue ? "text-amber-400" : "text-emerald-600"}`} />
                        <span className={pkg.bestValue ? "text-stone-300" : "text-stone-600"}>
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-8 pt-6 border-t border-stone-200/10">
                <button
                  onClick={() => handleBookPackage(pkg.name)}
                  className={`w-full rounded-full py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none ${
                    pkg.bestValue
                      ? "bg-amber-700 hover:bg-amber-800 text-stone-50 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                      : "bg-stone-900 hover:bg-stone-800 text-stone-100 shadow-sm"
                  }`}
                >
                  Book Package Slot
                </button>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 3. BRIDAL ADVISORY SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="bridal-advisory">
        <div className="bg-rose-50/40 rounded-2xl border border-rose-100/60 p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Gift className="w-6 h-6 text-amber-700" /> Pre-Bridal Skin Care Guidelines
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We highly recommend booking your wedding makeup at least <strong>3 to 4 weeks</strong> in advance. This gives our master aestheticians ample time to analyze your skin barrier and perform nourishing Hydrafacials or brightening therapies. Avoid any chemical peels or threading within 48 hours of your makeup application to prevent redness or base sliding.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-800 font-semibold">
              <span>Need custom variations? We can customize inclusions.</span>
            </div>
          </div>

          <div className="md:col-span-4 bg-white p-5 rounded-xl border border-rose-100 shadow-inner space-y-3">
            <p className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1">
              <Calendar className="w-4 h-4 text-amber-700" /> Complimentary Perks:
            </p>
            <ul className="space-y-1.5 text-xs text-stone-500">
              <li className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" /> Complimentary tea/coffee
              </li>
              <li className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" /> Free dupatta draping trials
              </li>
              <li className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" /> Detailed jewelry consultation
              </li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}
