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
    <footer className="w-full bg-[#0a090b] pt-16 pb-8 px-4 flex flex-col">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {/* Left: Logo and name */}
        <div className="flex flex-col gap-8 min-w-[200px]">
          <div className="flex items-center gap-3">
            <FooterLogo />
            <span className="text-white text-lg font-semibold">AI Startup Kit</span>
          </div>
        </div>
        {/* Center/Right: Columns */}
        <div className="flex flex-1 justify-between gap-8">
          {columns.map((col) => (
            <div key={col.heading} className="min-w-[120px]">
              <div className="text-white font-semibold mb-4">{col.heading}</div>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link} className="text-gray-400 hover:text-white transition cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom: Social icons */}
      <div className="max-w-7xl w-full mx-auto flex items-center gap-6 mt-16">
    
        <FaXTwitter className="w-7 h-7 text-gray-400 hover:text-white transition cursor-pointer" />
        <FaInstagram className="w-7 h-7 text-gray-400 hover:text-white transition cursor-pointer" />
        <FaYoutube className="w-7 h-7 text-gray-400 hover:text-white transition cursor-pointer" />
      </div>
    </footer>
  );
}