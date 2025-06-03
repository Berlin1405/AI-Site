import React from "react";

const companies = [
  { name: "Acme Corp", icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><polygon points="2,16 12,6 12,12 30,12 30,20 12,20 12,26" fill="white"/></svg>
  ) },
  { name: "Echo Valley", icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="8" fill="white"/><circle cx="8" cy="8" r="4" fill="white"/><circle cx="24" cy="8" r="4" fill="white"/></svg>
  ) },
  { name: "Quantum", icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="6" fill="white"/><circle cx="8" cy="16" r="2" fill="white"/><circle cx="24" cy="16" r="2" fill="white"/><circle cx="16" cy="8" r="2" fill="white"/><circle cx="16" cy="24" r="2" fill="white"/></svg>
  ) },
  { name: "PULSE", icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="14" width="24" height="4" fill="white"/><rect x="14" y="8" width="4" height="16" fill="white"/></svg>
  ) },
  { name: "Outside", icon: null },
  { name: "APEX", icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="8" fill="white"/><rect x="12" y="12" width="8" height="8" fill="#1a1a2e"/></svg>
  ) },
  { name: "Celestial", icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><polygon points="16,4 18,14 28,16 18,18 16,28 14,18 4,16 14,14" fill="white"/></svg>
  ) },
  { name: "2TWICE", icon: null },
];

export default function TrustedBy() {
  return (
    <div className="w-full bg-[#111014] py-12 flex flex-col items-center ">
      <div className="text-gray-300 text-center mb-8 text-base">Trusted by the world's most innovative teams</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl px-4">
        {companies.map((company, idx) => (
          <div
            key={company.name}
            className="flex items-center justify-center gap-3 bg-transparent border border-[#333] rounded-xl py-6 px-4 min-h-[80px] min-w-[160px] text-white text-xl font-semibold"
          >
            {company.icon}
            <span className={
              company.name === "Outside" || company.name === "APEX" ? "font-extrabold text-2xl" :
              company.name === "PULSE" ? "font-black tracking-widest text-2xl" :
              company.name === "2TWICE" ? "font-mono tracking-widest text-2xl" :
              ""
            }>
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 