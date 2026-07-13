/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  name: string;
  price: number; // in PKR
  duration: string; // e.g., "30 mins", "1 hour"
  description: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  services: ServiceItem[];
}

export interface BridalPackage {
  id: string;
  name: string;
  price: number; // in PKR
  tagline: string;
  servicesIncluded: string[];
  description: string;
  bestValue?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  serviceReceived: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "hair" | "bridal" | "makeup" | "nails" | "salon" | "skin";
  imageUrl: string;
  alt: string;
}

export interface BookingFormInput {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  branch: string;
  notes?: string;
}
