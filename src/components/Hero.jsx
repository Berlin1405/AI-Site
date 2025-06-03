import React from "react";

function Hero() {
  return (
    <section className="relative min-h-screen flex justify-center items-center overflow-hidden bg-gradient-to-b from-[#1b0032] to-[#0a0014]">
      {/* Gradient blobs */}
      <div className="absolute w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(163,103,255,0.35),transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[120px] z-0" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(105,51,255,0.25),transparent_70%)] top-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2 blur-[120px] z-0" />
      <div className="relative z-10 px-4 py-10 max-w-2xl w-full text-center">
        <div className="inline-block bg-[#120221] text-[#9855ff] rounded-full px-5 py-2 text-xs mb-5 uppercase tracking-wide font-light cursor-pointer">
          <span className="inline-flex px-2 py-1 rounded-full bg-[#9855ff] text-[#0C0017] mr-2 font-bold">New</span>
          Latest integration just arrived
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#d2b8ff] to-[#caa8ff] bg-clip-text text-transparent tracking-wide leading-tight font-sans" style={{fontFamily: 'Antonio, sans-serif'}}>Boost your<br />rankings with AI.</h1>
        <p className="text-lg md:text-xl text-[#cfcbe4] mb-8 leading-relaxed tracking-wide font-light" style={{fontFamily: 'Roboto, sans-serif'}}>Elevate your site's visibility effortlessly with AI, where<br />smart technology meets user-friendly SEO tools.</p>
        <button className="mt-4 bg-white text-black font-bold px-8 py-3 rounded-xl text-lg transition hover:bg-[#e2e2e2]">Start for free</button>
      </div>
    </section>
  );
}

export default Hero;