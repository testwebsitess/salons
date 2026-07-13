/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Calendar, Phone, Sparkles, MapPin, Scissors, ClipboardList, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { SALON_DETAILS, SERVICE_CATEGORIES } from "../data";
import { BookingFormInput } from "../types";

interface BookingViewProps {
  selectedService: string;
  setSelectedService: (serviceName: string) => void;
}

export default function BookingView({ selectedService, setSelectedService }: BookingViewProps) {
  const [formData, setFormData] = useState<BookingFormInput>({
    name: "",
    phone: "",
    service: selectedService || "",
    date: "",
    time: "",
    branch: "DHA Clifton Branch",
    notes: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormInput | null>(null);

  // Sync selected service if changed from external views
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  // Handle inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Basic validation
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    
    const phoneClean = formData.phone.trim();
    if (!phoneClean) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^((\+92)|(0092)|(0))?3[0-9]{9}$/.test(phoneClean.replace(/[-\s]/g, ""))) {
      newErrors.phone = "Please enter a valid Pakistani mobile number (e.g. 03211234567).";
    }

    if (!formData.service) newErrors.service = "Please select a beauty service.";
    if (!formData.date) newErrors.date = "Please choose a date.";
    if (!formData.time) newErrors.time = "Please choose a time slot.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
      setIsSuccess(true);
      // Clean selected service reference
      setSelectedService("");
    }
  };

  // Generate customized prefilled WhatsApp link with form data
  const generateWhatsAppUrl = (): string => {
    if (!submittedData) return "";
    const message = `Hello Zari Salon! I would like to request an appointment with the following details:
    
👑 *Client Name:* ${submittedData.name}
📞 *Mobile:* ${submittedData.phone}
💅 *Treatment:* ${submittedData.service}
📍 *Branch:* ${submittedData.branch}
📅 *Date:* ${submittedData.date}
⏰ *Preferred Time:* ${submittedData.time}
${submittedData.notes ? `✍️ *Extra Requests:* ${submittedData.notes}` : ""}

Please confirm my booking slot. Thank you!`;

    return `https://wa.me/${SALON_DETAILS.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  // Flattened services list for selection
  const flatServicesList = SERVICE_CATEGORIES.flatMap(category => 
    category.services.map(s => ({
      name: s.name,
      category: category.title
    }))
  );

  return (
    <div className="space-y-12 pb-16" id="booking-view">
      
      {/* 1. HEADER HERO */}
      <section className="bg-rose-50/30 border-b border-rose-100 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-800">Reservation</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Book Your Pamper Session
          </h1>
          <div className="h-1 w-20 bg-rose-200 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            Fill out our appointment request form below. Once complete, you can click to securely transmit it to us over WhatsApp for instant, personal confirmation.
          </p>
        </div>
      </section>

      {/* 2. FORM INTERFACE */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {!isSuccess ? (
          <div className="bg-white border border-stone-200 rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Block Sidebar info */}
            <div className="md:col-span-4 bg-stone-900 text-stone-200 p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-5 h-5 text-amber-300" /> Salon Hours
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  We are ready to pamper you on:
                </p>
                <div className="text-xs text-rose-300 font-semibold space-y-1">
                  <p>{SALON_DETAILS.openingHours.days}</p>
                  <p>{SALON_DETAILS.openingHours.time}</p>
                  <p className="text-stone-400 font-light italic">{SALON_DETAILS.openingHours.closed}</p>
                </div>
              </div>

              <div className="space-y-2 border-t border-stone-800 pt-5 text-xs text-stone-400 leading-relaxed">
                <p className="font-semibold text-stone-200 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-amber-400" /> Ladies-Only Space
                </p>
                <p>
                  To protect the comfort and modest privacy of all ladies and brides, we enforce a strict female-only attendance rule inside the salon.
                </p>
              </div>

              <div className="space-y-1 border-t border-stone-800 pt-5 text-xs text-stone-400">
                <p className="text-stone-300 font-medium">Need immediate assistance?</p>
                <a
                  href={`https://wa.me/${SALON_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-300 hover:text-white font-semibold pt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Chat via WhatsApp
                </a>
              </div>
            </div>

            {/* Right Block Actual Form */}
            <form onSubmit={handleSubmit} className="md:col-span-8 p-6 sm:p-8 space-y-5" id="booking-form">
              
              {/* Row 1: Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-800 uppercase tracking-wide block">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 font-serif text-sm">👑</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700"
                  />
                </div>
                {errors.name && <p className="text-[10px] text-rose-600 font-medium">{errors.name}</p>}
              </div>

              {/* Row 2: Phone */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-800 uppercase tracking-wide block">
                  Mobile Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-stone-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 03211234567"
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700"
                  />
                </div>
                {errors.phone && <p className="text-[10px] text-rose-600 font-medium">{errors.phone}</p>}
                <p className="text-[10px] text-stone-400">Standard Pakistani phone format preferred</p>
              </div>

              {/* Row 3: Select Service */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-800 uppercase tracking-wide block">
                  Select Beauty Service / Package <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Scissors className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-stone-400" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700 appearance-none"
                  >
                    <option value="">-- Choose a service --</option>
                    {SERVICE_CATEGORIES.map(category => (
                      <optgroup key={category.id} label={category.title}>
                        {category.services.map(service => (
                          <option key={service.id} value={service.name}>
                            {service.name} (PKR {service.price.toLocaleString()})
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <optgroup label="Bridal & Festive Packages">
                      <option value="Classic Bridal Elegance Package">Classic Bridal Elegance Package (PKR 55,000)</option>
                      <option value="Royal Majestic Bridal Duo-Day Package">Royal Majestic Bridal Duo-Day Package (PKR 85,000)</option>
                      <option value="Elegant Nikkah & Shendi Combo Package">Elegant Nikkah & Shendi Combo Package (PKR 38,000)</option>
                    </optgroup>
                  </select>
                </div>
                {errors.service && <p className="text-[10px] text-rose-600 font-medium">{errors.service}</p>}
              </div>

              {/* Row 4: Date, Time & Branch */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Date */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-800 uppercase tracking-wide block">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700"
                  />
                  {errors.date && <p className="text-[10px] text-rose-600 font-medium">{errors.date}</p>}
                </div>

                {/* Time */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-800 uppercase tracking-wide block">
                    Preferred Time Slot <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700"
                  >
                    <option value="">-- Choose time slot --</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:30 PM">01:30 PM</option>
                    <option value="2:30 PM">02:30 PM</option>
                    <option value="4:00 PM">04:00 PM</option>
                    <option value="5:30 PM">05:30 PM</option>
                    <option value="7:00 PM">07:00 PM</option>
                  </select>
                  {errors.time && <p className="text-[10px] text-rose-600 font-medium">{errors.time}</p>}
                </div>

              </div>

              {/* Branch Selection */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-800 uppercase tracking-wide block">
                  Select Branch Location
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {SALON_DETAILS.branches.map((branch, i) => (
                    <label
                      key={i}
                      className={`flex items-start gap-2.5 p-3 rounded-lg border cursor-pointer select-none transition-all ${
                        formData.branch === branch.name
                          ? "border-amber-700 bg-rose-50/40 ring-1 ring-amber-700/10"
                          : "border-stone-200 hover:bg-stone-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="branch"
                        value={branch.name}
                        checked={formData.branch === branch.name}
                        onChange={handleChange}
                        className="mt-0.5 text-amber-700 focus:ring-amber-700"
                      />
                      <div>
                        <p className="text-xs font-bold text-stone-900">{branch.name}</p>
                        <p className="text-[10px] text-stone-500 leading-normal">{branch.address.split(",")[0]}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Extra notes */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-800 uppercase tracking-wide block">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={2}
                  placeholder="e.g. skin allergies, request extensions, specific makeup styles"
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-700"
                />
              </div>

              {/* Submit btn */}
              <button
                type="submit"
                className="w-full rounded-full bg-stone-900 hover:bg-amber-800 text-white py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
                id="booking-submit-btn"
              >
                <ClipboardList className="w-4 h-4" />
                Submit Reservation Details
              </button>

            </form>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="bg-white border border-rose-100 rounded-2xl p-8 sm:p-12 shadow-2xl text-center space-y-6 max-w-2xl mx-auto animate-fadeIn">
            <div className="flex justify-center text-emerald-600">
              <CheckCircle2 className="w-16 h-16 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Reservation Ready to Send!
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-md mx-auto">
                Thank you, <strong>{submittedData?.name}</strong>. Your appointment request has been structured locally. 
              </p>
            </div>

            {/* Structured details display */}
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200/60 text-left space-y-2 text-xs text-stone-600 max-w-md mx-auto">
              <div className="flex justify-between border-b border-stone-200/40 pb-1.5 font-medium text-stone-900">
                <span>Treatment:</span>
                <span>{submittedData?.service}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200/40 pb-1.5">
                <span>Branch Location:</span>
                <span>{submittedData?.branch}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200/40 pb-1.5 font-mono">
                <span>Preferred Slot:</span>
                <span>{submittedData?.date} @ {submittedData?.time}</span>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <p className="text-xs text-amber-800 font-medium max-w-sm mx-auto">
                👉 Click the button below to send this structured request to Zari Salon on WhatsApp for instant booking confirmation.
              </p>

              {/* Big WhatsApp CTA */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm shadow-xl hover:shadow-emerald-600/10 transition-all duration-300 w-full sm:w-auto"
                id="success-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Book Instantly via WhatsApp
              </a>

              <div>
                <button
                  onClick={() => { setIsSuccess(false); setFormData({ name: "", phone: "", service: "", date: "", time: "", branch: "DHA Clifton Branch", notes: "" }); }}
                  className="text-stone-400 hover:text-stone-600 text-xs font-semibold underline mt-3 focus:outline-none"
                >
                  Fill another reservation form
                </button>
              </div>
            </div>

          </div>
        )}

      </section>

    </div>
  );
}
