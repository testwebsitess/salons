/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Scissors, Sparkles, Palette, Flower, Clock, Search, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { SERVICE_CATEGORIES } from "../data";

interface ServicesViewProps {
  setView: (view: string) => void;
  setSelectedService?: (serviceName: string) => void;
}

export default function ServicesView({ setView, setSelectedService }: ServicesViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({});

  // Toggle individual service explanation accordion
  const toggleExpand = (serviceId: string) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  // Quick book handler
  const handleQuickBook = (serviceName: string) => {
    if (setSelectedService) {
      setSelectedService(serviceName);
    }
    setView("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter categories and search terms
  const filteredCategories = SERVICE_CATEGORIES.map(category => {
    const matchingServices = category.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...category,
      services: matchingServices
    };
  }).filter(category => 
    (activeCategory === "all" || category.id === activeCategory) &&
    category.services.length > 0
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Scissors": return <Scissors className="w-5 h-5 text-amber-800" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-amber-800" />;
      case "Palette": return <Palette className="w-5 h-5 text-amber-800" />;
      case "Flower": return <Flower className="w-5 h-5 text-amber-800" />;
      default: return <Sparkles className="w-5 h-5 text-amber-800" />;
    }
  };

  return (
    <div className="space-y-12 pb-16" id="services-view">
      
      {/* 1. HEADER HERO */}
      <section className="bg-rose-50/30 border-b border-rose-100 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-800">Our Services</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            The Zari Treatment Menu
          </h1>
          <div className="h-1 w-20 bg-rose-200 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            All beauty treatments are executed in strict, sanitised, private suites by experienced stylists. Tap any service to read about its details, duration, and customized options.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 2. SEARCH & NAVIGATION FILTER */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-stone-200 pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium tracking-wide transition-all focus:outline-none ${
                activeCategory === "all"
                  ? "bg-amber-800 text-stone-50 shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              All Treatments
            </button>
            {SERVICE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium tracking-wide transition-all focus:outline-none ${
                  activeCategory === cat.id
                    ? "bg-amber-800 text-stone-50 shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-stone-400" />
            <input
              type="text"
              placeholder="Search treatment (e.g. cut, facial)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-full pl-10 pr-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700"
            />
          </div>
        </div>

        {/* 3. SERVICE CATEGORY GRIDS & ACCORDIONS */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <div key={category.id} className="space-y-6" id={`category-block-${category.id}`}>
                
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-rose-100 pb-3">
                  <div className="p-2 bg-rose-100 rounded-lg">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                      {category.title}
                    </h2>
                    <p className="text-xs text-stone-500">{category.description}</p>
                  </div>
                </div>

                {/* Services List inside Category */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {category.services.map((service) => {
                    const isExpanded = !!expandedServices[service.id];
                    return (
                      <div
                        key={service.id}
                        className={`border rounded-xl p-5 transition-all duration-300 bg-white ${
                          isExpanded 
                            ? "border-amber-700/40 shadow-md ring-1 ring-amber-700/10" 
                            : "border-stone-200 hover:border-stone-300 hover:shadow-sm"
                        }`}
                        id={`service-item-${service.id}`}
                      >
                        
                        {/* Main Info Row */}
                        <div 
                          className="flex justify-between items-start cursor-pointer select-none gap-4"
                          onClick={() => toggleExpand(service.id)}
                        >
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 hover:text-amber-800 transition-colors">
                                {service.name}
                              </h3>
                              {service.popular && (
                                <span className="text-[9px] uppercase tracking-wider font-semibold bg-rose-100 text-amber-900 px-1.5 py-0.5 rounded">
                                  Sister's Choice
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5 text-stone-400 text-xs">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{service.duration}</span>
                            </div>
                          </div>

                          <div className="text-right flex flex-col items-end flex-shrink-0">
                            <span className="font-serif text-base sm:text-lg font-bold text-stone-900">
                              PKR {service.price.toLocaleString()}
                            </span>
                            <span className="text-[10px] text-amber-800 font-medium flex items-center gap-0.5 pt-1">
                              {isExpanded ? "Hide Details" : "View Details"}
                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </span>
                          </div>
                        </div>

                        {/* Accordion Content (Smooth Reveal) */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-stone-100 space-y-4 animate-fadeIn">
                            <p className="text-xs text-stone-600 leading-relaxed">
                              {service.description}
                            </p>
                            
                            {/* Perks of choosing Zari for this service */}
                            <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 space-y-1.5 text-[11px] text-stone-500">
                              <div className="flex items-center gap-1.5 font-medium text-stone-700">
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Includes:</span>
                              </div>
                              <ul className="list-disc list-inside space-y-0.5 pl-1">
                                <li>Premium authentic brands only</li>
                                <li>Strictly sterile environment &amp; fresh tools</li>
                                <li>Consultation with highly qualified aesthetician</li>
                              </ul>
                            </div>

                            <div className="flex justify-end pt-1">
                              <button
                                onClick={() => handleQuickBook(service.name)}
                                className="rounded-full bg-stone-900 hover:bg-amber-800 text-white px-5 py-2 text-xs font-semibold tracking-wide transition-all shadow-sm focus:outline-none"
                              >
                                Select &amp; Book
                              </button>
                            </div>
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-stone-50 rounded-2xl border border-stone-200">
            <p className="text-sm text-stone-500 font-medium">No treatments found matching your query.</p>
            <button
              onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
              className="mt-3 text-xs text-amber-800 underline font-semibold"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        )}

      </section>

    </div>
  );
}
