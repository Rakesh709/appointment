import React, { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNav = () => setIsOpen(!isOpen);
  const openBooking = () => {
    // later you can hook this to a modal or booking page
    alert("Booking form/modal opens here!");
  };

  return (
    
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4" >
      <div className="glass-effect  border border-[#3C467B] rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo + Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <span className="text-[#135D66] font-bold text-lg">
              Megharshitha Physiotherapy
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-[#135D66] transition-colors text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#135D66] transition-colors text-sm font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-[#135D66]  transition-colors text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-[#135D66] transition-colors text-sm font-medium"
            >
              Reviews
            </a>
            <button
              onClick={openBooking}
              className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-white" onClick={toggleMobileNav}>
            {isOpen ? (
              <X className="w-6 h-6" strokeWidth={2} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mt-2 glass-effect border border-white/20 rounded-2xl p-4 shadow-2xl md:hidden">
          <div className="space-y-3">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="block text-[#135D66] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block text-[#135D66]  transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block text-[#135D66]  transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="block text-[#135D66]  transition-colors"
            >
              Reviews
            </a>
            <button
              onClick={() => {
                openBooking();
                setIsOpen(false);
              }}
              className="w-full bg-white text-purple-600 py-2 rounded-full font-semibold"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
    
  );
}
