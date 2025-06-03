import { FaRegObjectGroup, FaUsers, FaUpload, FaChartBar, FaMagic } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const features = [
  {
    icon: <FaRegObjectGroup className="w-6 h-6" />,
    title: "Design",
    desc: "Create with ease",
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: "Collaborate",
    desc: "Build together",
  },
  {
    icon: <FaUpload className="w-6 h-6" />,
    title: "Publish",
    desc: "Launch instantly",
  },
  {
    icon: <FaChartBar className="w-6 h-6" />,
    title: "Scale",
    desc: "Grow your reach",
  },
  {
    icon: <BsStars className="w-6 h-6" />,
    title: "AI",
    desc: "Set your ideas free",
    highlight: true,
  },
];

export default function FeaturesDropdown() {
  return (
    <div className="absolute left-0 mt-3 w-64 bg-black/90 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 z-50 p-2">
      {features.map((f, i) => (
        <div
          key={f.title}
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition group relative"
        >
          <span className="text-white">{f.icon}</span>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-base">{f.title}</span>
            <span className="text-gray-400 text-sm">{f.desc}</span>
          </div>
          {f.highlight && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full" />
          )}
        </div>
      ))}
    </div>
  );
}
