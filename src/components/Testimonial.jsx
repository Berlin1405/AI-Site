import React from "react";
import talia from "../assets/talia.png"; // Use your actual image filename

export default function Testimonial() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-black to-[#1e012d] py-24 flex flex-col items-center relative overflow-hidden">
      {/* Heading */}
      <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-4 z-10">Our clients</h2>
      <p className="text-gray-300 text-lg text-center mb-16 z-10">
        Hear firsthand how our solutions have<br className="hidden md:block" />
        boosted online success for users like you.
      </p>
      {/* Tic-tac-toe grid */}
      <div className="relative w-full max-w-4xl aspect-[2/1] mx-auto z-10">
        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%">
            {/* Vertical lines */}
            <line x1="33.33%" y1="0" x2="33.33%" y2="100%" stroke="#fff" strokeOpacity="0.12" strokeWidth="1.5"/>
            <line x1="66.66%" y1="0" x2="66.66%" y2="100%" stroke="#fff" strokeOpacity="0.12" strokeWidth="1.5"/>
            {/* Horizontal lines */}
            <line x1="0" y1="33.33%" x2="100%" y2="33.33%" stroke="#fff" strokeOpacity="0.12" strokeWidth="1.5"/>
            <line x1="0" y1="66.66%" x2="100%" y2="66.66%" stroke="#fff" strokeOpacity="0.12" strokeWidth="1.5"/>
          </svg>
        </div>
        {/* 3x3 grid */}
        <div className="grid grid-cols-3 grid-rows-3 w-full h-full absolute inset-0 z-10">
          {/* Center-left cell: Image */}
          <div className="col-start-2 row-start-2  flex  items-center justify-center">
            <img
              src={talia}
              alt="Talia Taylor"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl"
              style={{
                filter: "grayscale(0.2) sepia(0.2) hue-rotate(-30deg) saturate(2) brightness(0.9)",
                background: "linear-gradient(135deg, #a259ff55 0%, #6f42c1aa 100%)",
                mixBlendMode: "screen"
              }}
            />
          </div>
          {/* Center-right cell: Quote */}
          <div className="col-start-3 col-span-3 row-start-2 flex flex-col justify-center pl-8">
            <div className="text-white text-2xl md:text-3xl font-medium leading-snug mb-6">
              ”This product has completely<br />
              transformed how I manage my<br />
              projects and deadlines”
            </div>
            <div className="text-white font-semibold">Talia Taylor</div>
            <div className="text-gray-400 text-sm">Digital Marketing Director @ Quantum</div>
          </div>
        </div>
      </div>
    </section>
  );
}
