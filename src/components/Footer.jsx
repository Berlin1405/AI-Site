import React from "react";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import FooterLogo from "./FooterLogo";

const columns = [
  {
    heading: "Product",
    links: ["Features", "Integration", "Updates", "FAQ", "Pricing"]
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Manifesto", "Press", "Contract"]
  },
  {
    heading: "Resources",
    links: ["Examples", "Community", "Guides", "Docs", "Press"]
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "Security"]
  }
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a090b] pt-16 pb-8 px-4 flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {/* Left Section: Logo, Name, and Social Icons */}
        <div className="flex flex-col items-center md:items-start gap-8">
          <div className="flex items-center gap-3">
            <FooterLogo />
            <span className="text-white text-lg font-semibold">AI Startup Kit</span>
          </div>
          {/* Social icons - grouped with logo on desktop, separated on mobile */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <FaXTwitter className="w-7 h-7 text-gray-400 hover:text-white transition cursor-pointer" />
            <FaInstagram className="w-7 h-7 text-gray-400 hover:text-white transition cursor-pointer" />
            <FaYoutube className="w-7 h-7 text-gray-400 hover:text-white transition cursor-pointer" />
          </div>
        </div>

        {/* Right Section: Columns */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-8 md:flex md:flex-row flex-1 justify-between md:gap-12 mt-8 md:mt-0">
          {columns.map((col) => (
            <div key={col.heading} className="min-w-[120px] w-full sm:w-auto">
              <div className="text-white font-semibold mb-4 text-left">{col.heading}</div>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link} className="text-gray-400 hover:text-white transition cursor-pointer text-left">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}