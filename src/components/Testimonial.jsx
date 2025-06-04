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
      
      <div className="relative w-full max-w-4xl aspect-[2/1] mx-auto z-10">
        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%">
            {/* Vertical lines */}
            <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#fff" strokeOpacity="0.25" strokeWidth="1.9"/>
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#fff" strokeOpacity="0.25" strokeWidth="1.9"/>
            {/* Horizontal lines */}
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#fff" strokeOpacity="0.20" strokeWidth="1.5"/>
            <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#fff" strokeOpacity="0.20" strokeWidth="1.5"/>
          </svg>
        </div>
        
          <div className="  flex  items-center justify-center">
            <img
              src={talia}
              alt="Talia Taylor"
              className="w-48 h-45 md:w-56 md:h-56 object-cover rounded-3xl mt-[5.51rem] mr-[14rem] "
              style={{
                filter: "grayscale(0.2) sepia(0.2) hue-rotate(-30deg) saturate(2) brightness(0.9)",
                background: "linear-gradient(135deg, #a259ff55 0%, #6f42c1aa 100%)",
                mixBlendMode: "screen"
              }}
            />
          </div>
         
            <div className="text-white text-2xl md:text-3xl font-medium leading-snug  ml-[30rem] mt-[-13rem] mb-5 ">
              ”This product has completely<br />
              transformed how I manage my<br />
              projects and deadlines”
            </div>
            <div className="text-white font-semibold ml-[30rem]">Talia Taylor</div>
            <div className="text-gray-400 text-sm ml-[30rem]">Digital Marketing Director @ Quantum</div>
       
      </div>
    </section>
  );
}
