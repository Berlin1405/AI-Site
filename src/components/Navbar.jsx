import React, { useState } from "react";
import FeaturesDropdown from "./FeaturesDropdown";

// Simple CompanyDropdown component
function CompanyDropdown() {
  return (
    <div className="absolute left-0 mt-3 w-56 bg-black/90 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 z-50 p-2">
      <div className="flex flex-col gap-2">
        <a href="#about" className="px-4 py-3 rounded-xl hover:bg-white/10 transition text-white font-semibold text-base">About Us</a>
        <a href="#careers" className="px-4 py-3 rounded-xl hover:bg-white/10 transition text-white font-semibold text-base">Careers</a>
        <a href="#team" className="px-4 py-3 rounded-xl hover:bg-white/10 transition text-white font-semibold text-base">Team</a>
        <a href="#press" className="px-4 py-3 rounded-xl hover:bg-white/10 transition text-white font-semibold text-base">Press</a>
      </div>
    </div>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <nav className="navbar flex items-center px-4 md:px-8 py-4 min-h-[70px] sticky top-0 z-[1000] bg-[radial-gradient(ellipse_at_bottom,_#1b0032_0%,_#0a0014_100%)] border-b border-white/5 backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#12091a] shadow-[0_0_0_1.5px_rgba(163,103,255,0.12),0_4px_32px_0_rgba(163,103,255,0.10)] mr-8">
        <div
          className="w-8 h-8 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, #fff 0%, #a367ff 40%, #6933ff 100%)",
            boxShadow:
              "0 0 24px 8px #a367ff88, 0 0 8px 2px #fff8",
          }}
        />
      </div>
      {/* Center nav links - hidden on mobile */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-8 bg-[rgba(20,16,32,0.85)] rounded-xl px-9 py-2 shadow-[0_2px_16px_0_rgba(80,30,150,0.08)] border border-white/10">
          <li
            className="relative"
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
            onFocus={() => setFeaturesOpen(true)}
            onBlur={() => setFeaturesOpen(false)}
            tabIndex={0}
          >
            <span className="text-white font-medium text-base px-1 hover:text-[#c6b7ff] transition cursor-pointer">
              Features
            </span>
            {featuresOpen && <FeaturesDropdown />}
          </li>
          <li><a href="#pricing" className="text-white font-medium text-base px-1 hover:text-[#c6b7ff] transition">Developers</a></li>
          <li
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
            onFocus={() => setCompanyOpen(true)}
            onBlur={() => setCompanyOpen(false)}
            tabIndex={0}
          >
            <span className="text-white font-medium text-base px-1 hover:text-[#c6b7ff] transition cursor-pointer">
              Company
            </span>
            {companyOpen && <CompanyDropdown />}
          </li>
          <li><a href="#contact" className="text-white font-medium text-base px-1 hover:text-[#c6b7ff] transition">Blog</a></li>
          <li><a href="#changelog" className="text-white font-medium text-base px-1 hover:text-[#c6b7ff] transition">Changelog</a></li>
        </ul>
      </div>
      {/* Join waitlist button - hidden on mobile */}
      <button className="hidden md:block ml-8 bg-gradient-to-r from-[#a367ff] to-[#6933ff] text-white font-bold px-7 py-2.5 rounded-xl text-base shadow-[0_2px_24px_0_rgba(163,103,255,0.25)] border-none transition hover:from-[#caa8ff] hover:to-[#a367ff] hover:shadow-[0_4px_32px_0_rgba(163,103,255,0.35)]">Join waitlist</button>
      {/* Hamburger menu button - visible only on mobile */}
      <button
        className="md:hidden ml-auto text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile menu - shown when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 right-0 bg-[#1b0032] border-b border-white/5 p-4">
          <ul className="flex flex-col gap-4">
            <li
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
              onFocus={() => setFeaturesOpen(true)}
              onBlur={() => setFeaturesOpen(false)}
              tabIndex={0}
            >
              <span className="text-white font-medium text-base hover:text-[#c6b7ff] transition cursor-pointer">
                Features
              </span>
              {featuresOpen && <FeaturesDropdown />}
            </li>
            <li><a href="#pricing" className="text-white font-medium text-base hover:text-[#c6b7ff] transition">Developers</a></li>
            <li
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
              onFocus={() => setCompanyOpen(true)}
              onBlur={() => setCompanyOpen(false)}
              tabIndex={0}
            >
              <span className="text-white font-medium text-base hover:text-[#c6b7ff] transition cursor-pointer">
                Company
              </span>
              {companyOpen && <CompanyDropdown />}
            </li>
            <li><a href="#contact" className="text-white font-medium text-base hover:text-[#c6b7ff] transition">Blog</a></li>
            <li><a href="#changelog" className="text-white font-medium text-base hover:text-[#c6b7ff] transition">Changelog</a></li>
            <li>
              <button className="w-full bg-gradient-to-r from-[#a367ff] to-[#6933ff] text-white font-bold px-7 py-2.5 rounded-xl text-base shadow-[0_2px_24px_0_rgba(163,103,255,0.25)] border-none transition hover:from-[#caa8ff] hover:to-[#a367ff] hover:shadow-[0_4px_32px_0_rgba(163,103,255,0.35)]">Join waitlist</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;