import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import ElevateSEO from "./components/ElevateSEO";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import CtaWaitlist from "./components/ctaWitlist";
import Footer from "./components/Footer";

function App(){
  return(
    <div className="">
      <Navbar/>
      <Hero/>
      <Dashboard/>
      <TrustedBy/>
      <Features/>
      <ElevateSEO/>
      <Testimonial/>
      <Pricing/>
      <CtaWaitlist/>
      <Footer/>
    </div>

  )
}

export default App;