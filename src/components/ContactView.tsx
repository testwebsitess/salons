/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { MapPin, Phone, Clock, MessageSquare, Mail, Sparkles, Send, CheckCircle2 } from "lucide-react";
import { SALON_DETAILS } from "../data";

export default function ContactView() {
  const [activeBranchIdx, setActiveBranchIdx] = useState(0);
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", msg: "" });

  const activeBranch = SALON_DETAILS.branches[activeBranchIdx];

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.msg) {
      setMessageSubmitted(true);
    }
  };

  return (
    <div className="space-y-16 pb-16" id="contact-view">
      
      {/* 1. HEADER HERO */}
      <section className="bg-rose-50/30 border-b border-rose-100 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-800">Visit Us</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Contact &amp; Branch Locations
          </h1>
          <div className="h-1 w-20 bg-rose-200 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            Choose your preferred Karachi branch from the tabs below to view detailed directions, localized phone numbers, and interactive Google maps.
          </p>
        </div>
      </section>

      {/* 2. TABBED LOCATION MAPS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8" id="location-maps">
        
        {/* Left Side: Detail column */}
        <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900">Choose Branch</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              We operate two fully equipped, private ladies-only studios in Karachi. Select a branch below to focus the map and address:
            </p>

            {/* Selector Tabs */}
            <div className="space-y-3 pt-2">
              {SALON_DETAILS.branches.map((branch, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveBranchIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 focus:outline-none ${
                    activeBranchIdx === idx
                      ? "border-amber-700 bg-rose-50/30 ring-1 ring-amber-700/10"
                      : "border-stone-200 hover:bg-stone-50"
                  }`}
                >
                  <div className={`p-2 rounded-lg mt-0.5 ${activeBranchIdx === idx ? "bg-amber-800 text-stone-50" : "bg-stone-100 text-stone-500"}`}>
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">{branch.name}</h4>
                    <p className="text-[10px] text-stone-400 mt-0.5 leading-normal">{branch.address.split(",").slice(0, 2).join(",")}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Contact Box */}
          <div className="bg-stone-900 text-stone-300 p-5 rounded-xl border border-stone-800 space-y-3.5 mt-4">
            <h4 className="font-serif text-sm font-bold text-rose-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-rose-400" /> Direct Hotlines
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex justify-between">
                <span className="text-stone-400">Main Office:</span>
                <span className="text-white font-mono font-medium">{SALON_DETAILS.mainPhone}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-stone-400">{activeBranch.name.split(" ")[0]} Desk:</span>
                <span className="text-rose-200 font-mono font-medium">{activeBranch.phone}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Interactive Maps panel */}
        <div className="lg:col-span-8 bg-white border border-stone-200 rounded-2xl p-4 sm:p-5 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-stone-100 pb-3 gap-2">
            <div>
              <h3 className="font-serif text-base font-bold text-stone-900">{activeBranch.name} Map</h3>
              <p className="text-xs text-stone-500">{activeBranch.address}</p>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(activeBranch.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-800 hover:text-amber-950 font-semibold underline self-start sm:self-auto"
            >
              Get Directions
            </a>
          </div>

          {/* Embedded Map Frame */}
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shadow-inner">
            <iframe
              src={activeBranch.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer"
              title={`${activeBranch.name} Location Map`}
            />
          </div>
        </div>

      </section>

      {/* 3. SOCIALS & INQUIRY FORM */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12" id="contact-sub">
        
        {/* Left column: Direct Social platforms info */}
        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold text-stone-900">Connect With Our Studio</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            We are active on Instagram and Facebook! We post daily clips of real customer styling work, color highlights, and upcoming wedding trends. Feel free to slide into our DMs or check updates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Instagram Link */}
            <a
              href={SALON_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-rose-100 bg-rose-50/10 hover:bg-rose-50/40 hover:border-amber-800/20 transition-all flex items-center gap-4 group"
            >
              <span className="p-2.5 rounded-lg bg-rose-100 text-amber-800 group-hover:scale-105 transition-transform font-serif font-bold text-lg">IG</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900">@zaribeautysalon</h4>
                <p className="text-[10px] text-stone-400">Follow for makeup reels</p>
              </div>
            </a>

            {/* Facebook Link */}
            <a
              href={SALON_DETAILS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-rose-100 bg-rose-50/10 hover:bg-rose-50/40 hover:border-amber-800/20 transition-all flex items-center gap-4 group"
            >
              <span className="p-2.5 rounded-lg bg-rose-100 text-amber-800 group-hover:scale-105 transition-transform font-serif font-bold text-lg">FB</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900">Zari Salon Pakistan</h4>
                <p className="text-[10px] text-stone-400">Join our local community</p>
              </div>
            </a>

          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-xs text-stone-500 leading-relaxed flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-stone-800">Support Desk Hours</p>
              <p>Our phone support and social networks are monitored from <strong>Tuesday to Sunday (11:00 AM – 8:00 PM)</strong>. If you leave a query on Monday, we will respond first thing Tuesday morning.</p>
            </div>
          </div>
        </div>

        {/* Right column: General Inquiry Form */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-md">
          {!messageSubmitted ? (
            <form onSubmit={handleInquirySubmit} className="space-y-4" id="contact-inquiry-form">
              <h3 className="font-serif text-lg font-bold text-stone-900">Send Direct Message</h3>
              <p className="text-xs text-stone-500 leading-normal pb-1">
                Have general questions about hair treatments, skin protocols, or bridal reservations? Drop us a line:
              </p>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-700 uppercase tracking-wide">Full Name</label>
                <input
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter name"
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-700"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-700 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter email address"
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-700"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-700 uppercase tracking-wide">Your Message</label>
                <textarea
                  required
                  value={contactForm.msg}
                  onChange={(e) => setContactForm(prev => ({ ...prev, msg: e.target.value }))}
                  rows={3}
                  placeholder="Tell us what you want to ask..."
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-700"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-stone-900 hover:bg-amber-800 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" /> Send Message
              </button>

            </form>
          ) : (
            <div className="text-center py-10 space-y-4 animate-fadeIn">
              <div className="flex justify-center text-emerald-600">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900">Message Sent Successfully!</h4>
              <p className="text-xs text-stone-500 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong>{contactForm.name}</strong>. Our branch managers will review your message and reach out to you via <strong>{contactForm.email}</strong> shortly.
              </p>
              <button
                onClick={() => { setMessageSubmitted(false); setContactForm({ name: "", email: "", msg: "" }); }}
                className="text-xs text-amber-800 underline font-semibold mt-2 focus:outline-none"
              >
                Send another message
              </button>
            </div>
          )}
        </div>

      </section>

    </div>
  );
}
