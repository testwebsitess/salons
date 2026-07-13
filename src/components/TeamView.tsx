/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Heart, Award, CheckCircle } from "lucide-react";
import { TEAM_MEMBERS } from "../data";

export default function TeamView() {
  return (
    <div className="space-y-16 pb-16" id="team-view">
      
      {/* 1. SECTION HEADER */}
      <section className="bg-rose-50/30 border-b border-rose-100 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-800">Elite Artistry</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Meet Our Master Specialists
          </h1>
          <div className="h-1 w-20 bg-rose-200 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            Led by founder Zari Khan, our team consists of internationally trained therapists, creative colorists, and certified skincare aestheticians who understand South Asian hair and skin beauty perfectly.
          </p>
        </div>
      </section>

      {/* 2. TEAM PROFILE GRIDS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              id={`team-card-${member.id}`}
            >
              <div className="space-y-5">
                {/* Profile Image Frame */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-inner border border-stone-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-10 hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Small absolute role banner */}
                  <span className="absolute bottom-3 left-3 bg-stone-900/85 backdrop-blur-xs text-amber-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                    {member.role.split(" & ")[0]}
                  </span>
                </div>

                {/* Info Text */}
                <div className="space-y-2">
                  <div className="space-y-0.5">
                    <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-1.5">
                      {member.name}
                    </h3>
                    <p className="text-xs text-amber-800 font-semibold uppercase tracking-wide">
                      {member.specialty}
                    </p>
                  </div>
                  
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Verified Trust Badges */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-[10px] text-stone-400">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Certified professional expert</span>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 3. EXPERIENCE STATEMENT BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="team-perks">
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-rose-100 rounded-lg text-amber-800">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-stone-900 mb-1">Continual Training</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Our stylists undergo regular masterclasses with global educators from L'Oréal, Janssen, and Kryolan to bring cutting-edge bridal looks to Karachi.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 bg-rose-100 rounded-lg text-amber-800">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-stone-900 mb-1">Strict Hygiene Drills</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                The entire staff is drilled twice a week on sanitation control, surgical instrument pack rules, and absolute tidy cleanliness standards.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 bg-rose-100 rounded-lg text-amber-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-stone-900 mb-1">No Rush Guarantee</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                We never overbook slots. Each aesthetician takes full, dedicated time on your face or hair, ensuring a calming, personalized pampering process.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
