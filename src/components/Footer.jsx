import React from 'react';
import { Globe, Link, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const logoPath = "/HM Logo 1.png";

  const exploreLinks = [
    { text: "Electric Vehicles", href: "#" },
    { text: "Classic Reimagined", href: "#" },
    { text: "Upcoming Models", href: "#" },
    { text: "Book a Test Drive", href: "#" },
    { text: "Find a Showroom", href: "#" }
  ];

  const supportLinks = [
    { text: "Service & Maintenance", href: "#" },
    { text: "Warranty", href: "#" },
    { text: "FAQs", href: "#" },
    { text: "Customer Care", href: "#" }
  ];

  return (
    <footer className="bg-[#121212] font-['IBM_Plex_Sans'] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        
        {/* PANEL 1: Top Header Navbar */}
        <div className="border border-white/10 rounded-2xl p-6 bg-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <img 
              src={logoPath} 
              alt="Hindustan Motors Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => { e.target.style.display = 'none'; }} // Graceful fallback if path isn't parsed correctly locally
            />
            <span className="sr-only">Hindustan Motors</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 lg:gap-10 text-gray-300 font-medium text-sm md:text-base">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#models" className="hover:text-white transition-colors">Models</a>
            <a href="#story" className="hover:text-white transition-colors">Story</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact US</a>
          </nav>
        </div>

        {/* PANEL 2: Main Context Informational Links Grid */}
        <div className="border border-white/10 rounded-2xl p-8 md:p-12 bg-[#1a1a1a] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Brand Vision Pitch Column */}
          <div className="md:col-span-5 lg:col-span-6 flex flex-col gap-4">
            <img 
              src={logoPath} 
              alt="Hindustan Motors Logo" 
              className="h-12 w-auto object-contain self-start"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <h3 className="text-2xl font-bold tracking-tight mt-2 max-w-sm">
              Driving India's legacy into an electric future.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Hindustan Motors blends iconic design with modern electric technology to deliver sustainable, reliable, and future-ready mobility for India.
            </p>
          </div>

          {/* Explore Links Menu Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white tracking-wide">Explore</h4>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm md:text-base">
              {exploreLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links Menu Column */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white tracking-wide">Support</h4>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm md:text-base">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* PANEL 3: Bottom Copyright & Social Networks Row */}
        <div className="border border-white/10 rounded-2xl p-6 bg-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo Container - Visible on all screens */}
          <div className="flex items-center justify-start">
            <img 
              src={logoPath} 
              alt="Hindustan Motors Logo" 
              className="h-10 w-auto object-contain" 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Copyright Subtext */}
          <div className="text-gray-400 text-sm md:text-base tracking-wide text-center md:-ml-12">
            &copy; 2026 Hindustan Motors. All rights reserved.
          </div>

          {/* Social Platforms Link Connectors */}
          <div className="flex items-center gap-5 text-gray-300">
            <a href="#website" aria-label="Website" className="hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#link" aria-label="External Link" className="hover:text-white transition-colors">
              <Link className="w-5 h-5" />
            </a>
            <a href="#contact" aria-label="Email Contact" className="hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#location" aria-label="Showroom Location" className="hover:text-white transition-colors">
              <MapPin className="w-5 h-5" />
            </a>
          </div>

        </div>
       

      </div>
    </footer>
  );
};

export default Footer;