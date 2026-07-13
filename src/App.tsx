/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import PackagesView from "./components/PackagesView";
import GalleryView from "./components/GalleryView";
import TeamView from "./components/TeamView";
import BookingView from "./components/BookingView";
import ContactView from "./components/ContactView";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [currentView, setView] = useState<string>("home");
  const [selectedService, setSelectedService] = useState<string>("");

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <HomeView setView={setView} />;
      case "about":
        return <AboutView setView={setView} />;
      case "services":
        return <ServicesView setView={setView} setSelectedService={setSelectedService} />;
      case "packages":
        return <PackagesView setView={setView} setSelectedService={setSelectedService} />;
      case "gallery":
        return <GalleryView />;
      case "team":
        return <TeamView />;
      case "booking":
        return (
          <BookingView
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        );
      case "contact":
        return <ContactView />;
      default:
        return <HomeView setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans selection:bg-rose-200 selection:text-stone-900 overflow-x-hidden" id="app-root">
      
      {/* 1. Header Navigation */}
      <Header currentView={currentView} setView={setView} />

      {/* 2. Main Content Area with elegant fade-in transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer Section */}
      <Footer setView={setView} />

      {/* 4. Persistent Floating Interactive Elements */}
      <WhatsAppButton />

    </div>
  );
}

