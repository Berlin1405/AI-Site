import React, { useState } from "react";

const plans = [
  {
    name: "Pricing",
    price: "$29/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports"
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: "$79/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization"
    ],
    highlight: true
  },
  {
    name: "Business",
    price: "$149/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
      "Multi-user access",
      "API integration"
    ],
    highlight: false
  }
];

export default function Pricing() {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-black via-black to-[#1e012d] py-24 flex flex-col items-center">
      <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-4">Pricing</h2>
      <p className="text-gray-300 text-lg text-center mb-8">
        Choose the right plan to meet your SEO<br className="hidden md:block" />
        needs and start optimizing today.
      </p>
      {/* Toggle Switch */}
      <div className="flex items-center justify-center mb-12">
        <button
          className={`relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none ${
            toggle ? "bg-gradient-to-r from-purple-500 to-purple-700" : "bg-gray-700"
          }`}
          onClick={() => setToggle(!toggle)}
        >
          <span
            className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
              toggle ? "translate-x-6" : ""
            }`}
          />
        </button>
        <span className="ml-3 text-gray-400">{toggle ? "Yearly" : "Monthly"}</span>
      </div>
      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`
              flex flex-col justify-between
              rounded-2xl border border-white/10
              bg-white/10 backdrop-blur-md
              p-8 min-w-[280px] flex-1
              ${plan.highlight ? "shadow-[0_0_40px_10px_#a259ff55] border-purple-500" : "shadow-lg"}
              transition-all duration-300
              relative
            `}
            style={plan.highlight ? { zIndex: 10 } : {}}
          >
            <div>
              <div className="text-white text-2xl font-semibold mb-2">{plan.name}</div>
              <div className="text-gray-300 text-lg mb-6">{plan.price}</div>
              <hr className="border-white/10 mb-6" />
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-white">
                    <span className="mr-2 text-purple-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`
                w-full py-3 rounded-xl font-semibold text-lg mt-auto
                transition-all duration-200
                ${toggle
                  ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-[0_0_16px_2px_#a259ff99] border-0"
                  : "bg-black/60 text-white border border-white/20 shadow-[0_0_8px_0px_#fff2]"
                }
                hover:scale-[1.03]
              `}
            >
              Join waitlist
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
