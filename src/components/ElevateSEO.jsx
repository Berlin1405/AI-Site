import React from "react";
import { 
  MdDashboard, MdAssessment, MdAutoGraph, MdNotifications, MdContentPaste, 
  MdFlag, MdLink, MdFlashOn, MdGroups 
} from "react-icons/md";

const features = [
  {
    icon: <MdDashboard className="text-2xl text-white" />,
    title: "User-friendly dashboard",
    desc: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    icon: <MdAssessment className="text-2xl text-white" />,
    title: "Visual reports",
    desc: "Visual insights into your site's performance."
  },
  {
    icon: <MdAutoGraph className="text-2xl text-white" />,
    title: "Smart Keyword Generator",
    desc: "Automatic suggestions and the best keywords to target."
  },
  {
    icon: <MdContentPaste className="text-2xl text-white" />,
    title: "Content evaluation",
    desc: "Simple corrections for immediate improvements."
  },
  {
    icon: <MdFlag className="text-2xl text-white" />,
    title: "SEO goal setting",
    desc: "Helps you set and achieve SEO goals with guided assistance."
  },
  {
    icon: <MdFlashOn className="text-2xl text-white" />,
    title: "One-click optimization",
    desc: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    icon: <MdLink className="text-2xl text-white" />,
    title: "Link Optimization Wizard",
    desc: "Guides you through the process of creating and managing links."
  },
  {
    icon: <MdNotifications className="text-2xl text-white" />,
    title: "Automated alerts",
    desc: "Automatic notifications about your SEO health, including quick fixes."
  },
  {
    icon: <MdGroups className="text-2xl text-white" />,
    title: "Competitor reports",
    desc: "Provides insights into competitors' keyword strategies and ranking."
  }
];

export default function ElevateSEO() {
  return (
    <section className="w-full bg-gradient-to-br from-[#18122B] to-[#231942] py-20 px-4 flex justify-center">
      <div className="max-w-7xl w-full">
        {/* Heading at the top left */}
        <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-12 text-left tracking-[0.09em]">
          Elevate your<br />SEO efforts.
        </h2>
        {/* Features Grid below heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="mb-2">{f.icon}</div>
              <div className="text-white font-semibold mb-1">{f.title}</div>
              <div className="text-gray-400">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
