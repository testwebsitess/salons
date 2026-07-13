/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from "react";
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react";
import { GALLERY_ITEMS } from "../data";

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items
  const filteredItems = GALLERY_ITEMS.filter(item =>
    activeCategory === "all" || item.category === activeCategory
  );

  const openLightbox = (id: string) => {
    const idx = GALLERY_ITEMS.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "bridal", label: "Bridal Makeup" },
    { id: "hair", label: "Hair & Styling" },
    { id: "skin", label: "Skin & Facials" },
    { id: "nails", label: "Luxury Nails" },
    { id: "salon", label: "Salon Interior" },
  ];

  return (
    <div className="space-y-12 pb-16" id="gallery-view">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-rose-50/30 border-b border-rose-100 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-800">Visual Journey</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Our Portfolio &amp; Salon Work
          </h1>
          <div className="h-1 w-20 bg-rose-200 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            Witness the transformations of real Karachi brides, dewy facials, and gorgeous creative balayage styles. Click on any picture to expand it into fullscreen view.
          </p>
        </div>
      </section>

      {/* 2. GALLERY INTERFACE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-stone-200 pb-6 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium tracking-wide transition-all focus:outline-none ${
                activeCategory === cat.id
                  ? "bg-amber-800 text-stone-50 shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-stone-100 border border-stone-200 shadow-sm aspect-square"
              id={`gallery-item-${item.id}`}
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Elegant Hover Overlay */}
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-1">
                  <div className="text-amber-300 flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">Expand</span>
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-stone-300 uppercase tracking-widest">
                    {item.category}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 3. LIGHTBOX INTERACTIVE MODAL */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950/95 backdrop-blur-md px-4 py-8 select-none"
          onClick={closeLightbox}
          id="gallery-lightbox"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls & Image Frame */}
          <div className="relative flex items-center justify-center w-full max-w-5xl h-4/5">
            {/* Prev Trigger */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:-left-16 p-3 rounded-full bg-stone-900/80 text-stone-300 hover:bg-stone-850 hover:text-white transition-all focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Expanded Image */}
            <div 
              className="max-w-full max-h-full rounded-lg overflow-hidden border border-stone-800 bg-black flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_ITEMS[lightboxIndex].imageUrl}
                alt={GALLERY_ITEMS[lightboxIndex].alt}
                className="max-w-full max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Next Trigger */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:-right-16 p-3 rounded-full bg-stone-900/80 text-stone-300 hover:bg-stone-850 hover:text-white transition-all focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Description Block at bottom */}
          <div 
            className="text-center space-y-1.5 max-w-xl px-4 mt-6"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-amber-950/40 border border-amber-900/40 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" /> {GALLERY_ITEMS[lightboxIndex].category}
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug">
              {GALLERY_ITEMS[lightboxIndex].title}
            </h3>
            <p className="text-xs text-stone-400">
              Image {lightboxIndex + 1} of {GALLERY_ITEMS.length} &bull; Real Portfolio Work
            </p>
          </div>

        </div>
      )}

    </div>
  );
}
