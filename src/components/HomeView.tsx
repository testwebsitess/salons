/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SALON_DETAILS, TESTIMONIALS, SERVICE_CATEGORIES } from "../data";

interface HomeViewProps {
  setView: (view: string) => void;
}

export default function HomeView({ setView }: HomeViewProps) {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Auto-slide reviews every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Extract a few popular items to highlight on Home page
  const popularServices = SERVICE_CATEGORIES.flatMap(cat => 
    cat.services.filter(s => s.popular).map(s => ({ ...s, categoryTitle: cat.title }))
  ).slice(0, 3);

  return (
    <div className="space-y-16 pb-16" id="home-view">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-stone-100 overflow-hidden" id="hero-section">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-8 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 self-center lg:self-start rounded-full bg-rose-100/70 border border-rose-200 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-amber-900 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
              <span>Karachi's Premier Ladies-Only Salon</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1]">
              Reveal Your <span className="text-amber-800 italic font-light block sm:inline">Inner Grace</span> &amp; Luxury
            </h1>
            
            <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Step into a secure, elegant haven designed exclusively for ladies in Karachi. Zari Salon blends premium international artistry with Pakistani warmth to design spectacular wedding transformations and absolute pampering sessions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setView("booking")}
                className="w-full sm:w-auto rounded-full bg-amber-800 hover:bg-amber-900 active:scale-98 text-stone-50 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider shadow-lg hover:shadow-amber-900/20 transition-all duration-200 flex items-center justify-center gap-2"
                id="hero-book-btn"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href={`https://wa.me/${SALON_DETAILS.whatsappNumber}?text=${encodeURIComponent("Hello! I would like to book a salon service. Please guide me with availability.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-stone-50 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                id="hero-whatsapp-btn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>
            </div>

            {/* Branch Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2 pt-4 border-t border-stone-200 text-xs text-stone-500 font-medium">
              <span>📍 DHA Phase 6</span>
              <span>📍 Gulshan Block 13</span>
              <span className="text-amber-800">💅 Ladies Only</span>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative flex justify-center items-center">
            {/* Soft background shape */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-rose-200 to-amber-100 opacity-30 blur-xl"></div>
            
            <div className="relative w-full max-w-lg aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-50 transform hover:scale-[1.01] transition-transform duration-300">
              <img
                src="/src/assets/images/salon_hero_banner_1783922144043.jpg"
                alt="Zari Beauty Salon Interior Karachi"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Bottom floating tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-stone-900/80 backdrop-blur-sm p-3.5 rounded-lg border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-rose-200 uppercase tracking-wider">Our Main Studio</p>
                  <p className="text-[11px] text-stone-300 font-light">Bukhari Commercial, DHA Phase 6, Karachi</p>
                </div>
                <div className="text-xs bg-amber-800 text-stone-50 px-2.5 py-1 rounded font-medium">
                  Ladies Only
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CORE PHILOSOPHY / TRUST FACTORS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="philosophy-highlights">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Why Karachi Women Trust Zari Salon
          </h2>
          <div className="h-1 w-20 bg-rose-200 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-stone-500">
            Every detail of our space is crafted with your security, comfort, and ultimate pampering in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-stone-50 hover:bg-rose-50/40 p-8 rounded-xl border border-stone-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center text-amber-800 mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">Absolute Ladies-Only Privacy</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We operate strictly behind closed, private doors. Female-only staff, separate VIP spaces, and comfortable changing quarters guarantee 100% security for modesty and relaxation.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-stone-50 hover:bg-rose-50/40 p-8 rounded-xl border border-stone-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center text-amber-800 mb-5">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">Premium Global Standards</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We exclusively use premium certified brands (Oles, Janssen, L'Oréal, OPI, Rica Wax) suited for South Asian skin and hair, especially combating Karachi's coastal humidity.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-stone-50 hover:bg-rose-50/40 p-8 rounded-xl border border-stone-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center text-amber-800 mb-5">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">Artistry &amp; Innovation</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Led by Master Artist Zari Khan, our experienced technicians undergo regular international training to offer the latest in balayage, hydrafacials, and flawless airbrush cosmetics.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DUAL BANNER: PRE-BRIDAL SPLIT */}
      <section className="bg-stone-900 text-stone-100 py-12 lg:py-16" id="specialty-split">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-2 border-stone-800">
              <img
                src="/src/assets/images/karachi_bridal_makeup_1783922158981.jpg"
                alt="Stunning Pakistani Bride Makeup by Zari Salon"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-rose-950 border border-rose-900/60 p-4 rounded-lg hidden sm:block">
              <p className="font-serif text-lg font-bold text-rose-200">98%</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">Happy Brides</p>
            </div>
          </div>
          
          {/* Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-rose-300 text-xs uppercase tracking-[0.25em] font-semibold flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-current" /> Bridal Excellence
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Create Your Forever Wedding Memories With Us
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Bridal makeup is a sacred art in Karachi. We understand that your wedding look represents a lifetime of dreams. Our specialized suites provide full privacy, dewy skin preps, and tailored styling to matches your heavy traditional jewelry and customized bridal dupatta draping beautifully.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setView("packages")}
                className="rounded-full bg-amber-800 hover:bg-amber-900 text-stone-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Explore Bridal Packages
              </button>
              <button
                onClick={() => setView("gallery")}
                className="rounded-full border border-stone-700 hover:border-stone-500 hover:bg-stone-800 text-stone-300 px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                View Bridal Gallery
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CURATED TOP SERVICES MENUS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="featured-services">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Our Signature Favorites
          </h2>
          <div className="h-1 w-20 bg-rose-200 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-stone-500">
            A quick peek at the highly requested hair, skin, and makeup services chosen by our Karachi clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {popularServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-semibold text-amber-800 bg-rose-50 px-2 py-0.5 rounded uppercase tracking-wider">
                    {service.categoryTitle}
                  </span>
                  <span className="text-xs font-mono text-stone-400">{service.duration}</span>
                </div>
                
                <h3 className="font-serif text-lg font-bold text-stone-900 hover:text-amber-800 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest">Pricing</p>
                  <p className="font-serif text-lg font-bold text-stone-900">
                    PKR {service.price.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => setView("services")}
                  className="text-xs text-amber-800 font-semibold hover:text-amber-950 flex items-center gap-1 transition-all group"
                >
                  View Details
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setView("services")}
            className="rounded-full bg-stone-900 hover:bg-stone-800 text-stone-100 px-8 py-3 text-xs font-semibold uppercase tracking-wider transition-all"
          >
            See Full Treatment Menu
          </button>
        </div>
      </section>

      {/* 5. INTERACTIVE TESTIMONIAL CAROUSEL */}
      <section className="bg-rose-50/60 py-12 lg:py-16" id="client-reviews">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-amber-800">
              Heartfelt Words
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              Reviews From Zari Sisters
            </h2>
            <div className="h-0.5 w-12 bg-rose-200 mx-auto rounded-full"></div>
          </div>

          {/* Interactive Testimonial Box */}
          <div className="bg-white border border-rose-100/60 shadow-xl rounded-2xl p-6 sm:p-10 relative overflow-hidden">
            {/* Quote watermark */}
            <div className="absolute top-4 left-6 text-stone-100 text-8xl font-serif pointer-events-none select-none">
              “
            </div>

            <div className="relative space-y-6">
              {/* Stars */}
              <div className="flex justify-center sm:justify-start gap-1">
                {Array.from({ length: TESTIMONIALS[activeReviewIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif text-base sm:text-lg text-stone-800 leading-relaxed text-center sm:text-left italic">
                "{TESTIMONIALS[activeReviewIndex].review}"
              </p>

              {/* User Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-stone-100 pt-4 gap-3 text-center sm:text-left">
                <div>
                  <h4 className="font-serif text-base font-bold text-stone-900">
                    {TESTIMONIALS[activeReviewIndex].name}
                  </h4>
                  <p className="text-xs text-stone-400">
                    {TESTIMONIALS[activeReviewIndex].location}
                  </p>
                </div>
                
                <div className="inline-flex self-center sm:self-start rounded-full bg-rose-50 px-3 py-1 text-[11px] font-medium text-amber-800">
                  Treatment: {TESTIMONIALS[activeReviewIndex].serviceReceived}
                </div>
              </div>
            </div>

            {/* Carousel navigation controls */}
            <div className="flex items-center justify-center gap-4 mt-8 pt-4 border-t border-stone-50">
              <button
                onClick={prevReview}
                className="p-2 rounded-full border border-stone-200 bg-white hover:bg-stone-50 hover:text-amber-800 shadow-sm transition-all focus:outline-none"
                aria-label="Previous Testimonial"
                id="testimonial-prev-btn"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              {/* Page Dots */}
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReviewIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeReviewIndex === idx ? "w-6 bg-amber-800" : "w-2 bg-stone-300 hover:bg-stone-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="p-2 rounded-full border border-stone-200 bg-white hover:bg-stone-50 hover:text-amber-800 shadow-sm transition-all focus:outline-none"
                aria-label="Next Testimonial"
                id="testimonial-next-btn"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION APPOINTMENT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="home-booking-cta">
        <div className="bg-gradient-to-tr from-stone-900 via-stone-800 to-amber-950 text-stone-100 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle gold circles overlay */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 h-64 w-64 rounded-full bg-amber-800/10 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 h-64 w-64 rounded-full bg-rose-900/10 blur-3xl pointer-events-none"></div>

          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Ready for a Glamorous Transformation?
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-lg mx-auto">
              Whether you are preparing for your dream Nikkah look, require quick hair highlights, or need a relaxing Hydrafacial after a busy week, we are here to pamper you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setView("booking")}
                className="w-full sm:w-auto rounded-full bg-rose-200 hover:bg-rose-300 active:scale-98 text-stone-900 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider shadow-md transition-all duration-200"
              >
                Secure Your Slot Now
              </button>
              <a
                href={`https://wa.me/${SALON_DETAILS.whatsappNumber}?text=${encodeURIComponent("Hello! I want to book a bridal/makeup consultation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-full border border-stone-600 hover:border-stone-400 hover:bg-stone-800 text-stone-100 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
              >
                Consult on WhatsApp
              </a>
            </div>
            <p className="text-[11px] text-stone-400">
              *Hassle-free cancelations. Zero advance fees for general salon bookings.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
