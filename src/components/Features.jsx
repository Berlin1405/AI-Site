import React from "react";
import seoImg from "../assets/seo.png";
import cone from "../assets/cone-removebg-preview.png";
import ring from "../assets/ring.png";
import visual from "../assets/visual.png";


export default function Features() {
  return (
    <section className="w-full bg-[#111014] py-16 flex flex-col items-center">
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-12 max-w-2xl leading-snug">
        Harness the power of AI, making<br />search engine optimization intuitive<br />and effective for all skill levels.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
        {/* SEO Goal Setting */}
        <div className="rounded-xl border border-[#333] bg-[#18181c] p-6 md:p-8 flex flex-col items-start min-h-[260px] md:min-h-[320px]">
          <img src={ring} alt="SEO Goal" className="w-full max-h-40 md:max-h-56 mb-8 object-contain mx-auto" />
          <div className="text-white text-lg font-semibold mb-2">SEO goal setting</div>
          <div className="text-gray-400">Helps you set and achieve SEO goals with guided assistance.</div>
        </div>
        {/* User-friendly dashboard */}
        <div className="rounded-xl border border-[#6f42c1]/30 shadow-[0_0_20px_#6f42c1] bg-gradient-to-br from-[#18122B] to-[#6f42c1]/30 p-6 md:p-8 flex flex-col items-start min-h-[260px] md:min-h-[320px] w-full transition-transform transition-shadow duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_#6f42c1]">
          <img src={seoImg} alt="Dashboard Preview" className="w-full max-h-40 md:max-h-56 rounded-lg mb-8 opacity-90 object-contain" />
          <div className="text-white text-lg font-semibold mb-2">User-friendly dashboard</div>
          <div className="text-gray-400">Perform complex SEO audits and optimizations with a single click.</div>
        </div>
        {/* Visual reports */}
        <div className="rounded-xl border border-[#6f42c1]/30 shadow-[0_0_20px_#6f42c1] bg-gradient-to-br from-[#18122B] to-[#6f42c1]/30 p-6 md:p-8 flex flex-col items-start min-h-[260px] md:min-h-[320px] w-full transition-transform transition-shadow duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_#6f42c1]">
          <img src={visual} alt="Visual Reports" className="w-full max-h-40 md:max-h-56 rounded-lg mb-8 opacity-90 object-contain" />
          <div className="text-white text-lg font-semibold mb-2">Visual reports</div>
          <div className="text-gray-400">Visual insights into your site's performance.</div>
        </div>
        {/* Smart Keyword Generator */}
        <div className="rounded-xl border border-[#333] bg-[#18181c] p-6 md:p-8 flex flex-col items-start min-h-[260px] md:min-h-[320px] w-full">
          <img src={cone} alt="Smart Keyword Generator" className="w-full max-h-40 md:max-h-56 mb-8 object-contain mx-auto" />
          <div className="text-white text-lg font-semibold mb-2">Smart Keyword Generator</div>
          <div className="text-gray-400">Automatic suggestions and the best keywords to target.</div>
        </div>
      </div>
    </section>
  );
} 
