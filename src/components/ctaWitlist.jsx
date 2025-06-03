import React from "react";

export default function CtaWaitlist() {
  return (
    <section className="w-full flex justify-center items-center py-32 bg-black">
      <div className="relative w-full max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-b from-[#2a1046]/60 via-[#1e012d]/80 to-black/90 shadow-2xl overflow-hidden px-8 py-24 flex flex-col items-center">
        {/* Grid lines background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%">
            {/* Vertical lines */}
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#fff" strokeOpacity="0.07" strokeWidth="1"/>
            <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#fff" strokeOpacity="0.07" strokeWidth="1"/>
            <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#fff" strokeOpacity="0.07" strokeWidth="1"/>
            <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#fff" strokeOpacity="0.07" strokeWidth="1"/>
            {/* Horizontal lines */}
            <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#fff" strokeOpacity="0.07" strokeWidth="1"/>
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#fff" strokeOpacity="0.07" strokeWidth="1"/>
            <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#fff" strokeOpacity="0.07" strokeWidth="1"/>
          </svg>
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <h2 className="text-white text-5xl md:text-6xl font-bold text-center mb-12">
            AI-driven SEO<br />for everyone.
          </h2>
          <form className="flex flex-col md:flex-row items-center justify-center w-full max-w-2xl mb-8 gap-6">
            <input
              type="email"
              placeholder="Your email"
              className="w-full md:w-96 px-6 py-4 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 text-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 rounded-xl bg-white text-black font-semibold text-xl shadow-md border border-white/20 hover:bg-purple-600 hover:text-black hover:shadow-[0_0_16px_2px_#a259ff99] transition"
            >
              Join waitlist
            </button>
          </form>
          <div className="text-gray-400 text-lg text-center">
            No credit card required &middot; 7-days free trial
          </div>
        </div>
      </div>
    </section>
  );
}
