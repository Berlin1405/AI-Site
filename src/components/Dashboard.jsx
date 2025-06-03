import React, { useState } from "react";
import { List, ListItem, ListItemText, ListItemIcon, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FlagIcon from "@mui/icons-material/Flag";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LinkIcon from "@mui/icons-material/Link";
import TuneIcon from "@mui/icons-material/Tune";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sidebarItems = [
  { text: "Site Overview", icon: <DashboardIcon /> },
  { text: "Analytics", icon: <BarChartIcon /> },
  { text: "Smart Keyword Generator", icon: <AutoAwesomeIcon /> },
  { text: "Goals", icon: <FlagIcon /> },
  { text: "Content Evaluation", icon: <AssessmentIcon /> },
  { text: "Backlink Audit", icon: <LinkIcon /> },
  { text: "Link Optimization Wizard", icon: <TuneIcon /> },
];

const data = [
  { name: "Jun 14", visibility: 8.2 },
  { name: "Jun 15", visibility: 9.0 },
  { name: "Jun 16", visibility: 8.7 },
  { name: "Jun 17", visibility: 9.2 },
  { name: "Jun 18", visibility: 9.8 },
  { name: "Jun 19", visibility: 10.1 },
  { name: "Jun 20", visibility: 10.15 },
];

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <section className="min-h-screen bg-[#111014] flex items-center justify-center py-12">
      <div className="
        w-full max-w-6xl
        bg-[#1a1a2e]/90
        rounded-3xl
        border border-[#6f42c1]/40
        shadow-[0_0_32px_#6f42c1]
        p-0
        transition-transform transition-shadow duration-300
        hover:scale-[1.01] hover:shadow-[0_0_48px_#6f42c1]
        flex flex-col md:flex-row gap-8 items-stretch
        min-h-[80vh]
      ">
        {/* Sidebar - hidden on mobile */}
        <aside className="hidden md:flex w-72 bg-[#1a1536] border-r border-white/5 flex-col py-10 px-6 h-full">
          <div className="flex-1">
            <List>
              {sidebarItems.map((item, index) => (
                <ListItem
                  button
                  key={item.text}
                  selected={index === 0}
                  className={`rounded-lg mb-2 transition-colors !text-white ${
                    index === 0
                      ? "bg-[#2d2350] !text-white"
                      : "hover:bg-white hover:!text-black"
                  }`}
                >
                  <ListItemIcon className={`min-w-[36px] ${index === 0 ? "!text-[#8f5aff]" : "!text-white group-hover:!text-black"}`}>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      style: {
                        fontWeight: 500,
                        fontSize: "1.05rem",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 text-white h-full">
          {/* Top Bar */}
          <div className="flex items-center bg-[#231942] rounded-xl px-4 md:px-6 py-3 mb-6 shadow-lg">
            <div className="flex flex-col flex-grow">
              <span className="text-lg font-semibold text-white">Site Overview</span>
              <span className="text-xs text-gray-400">www.website.com</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <SearchIcon fontSize="small" />
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-[#2d2350] text-white rounded-lg pl-9 pr-3 py-2 w-32 md:w-48 focus:outline-none focus:ring-2 focus:ring-[#8f5aff] placeholder-gray-400"
                />
              </div>
              <IconButton className="text-gray-400 hover:text-[#8f5aff]">
                <SettingsIcon />
              </IconButton>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Visibility Card */}
            <div className="bg-[#1a1a2e] rounded-2xl border border-[#6f42c1]/30 shadow-[0_0_20px_#6f42c1] p-6 transition-transform transition-shadow duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_#6f42c1]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#c6b7ff] font-semibold text-lg">Visibility</span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#8f5aff]"></span>
                  Jun 24 → Today
                </span>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold text-white">10.15%</span>
                <span className="text-green-400 text-lg font-semibold">+5.6%</span>
              </div>
              <div className="h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" stroke="#aaa" tick={{ fill: '#a3a3c2', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis stroke="#aaa" tick={{ fill: '#a3a3c2', fontSize: 12 }} axisLine={false} tickLine={false} width={30} />
                    <Tooltip
                      contentStyle={{ background: '#231942', border: 'none', borderRadius: 12, color: '#fff' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Line type="monotone" dataKey="visibility" stroke="#8f5aff" strokeWidth={3} dot={{ r: 4, fill: '#8f5aff' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Organic Keywords Card */}
            <div className="bg-[#1a1a2e] rounded-2xl border border-[#6f42c1]/30 shadow-[0_0_20px_#6f42c1] p-6 transition-transform transition-shadow duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_#6f42c1]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#c6b7ff] font-semibold text-lg">Organic Keywords</span>
                <span className="text-xs text-red-400">-2.5%</span>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold text-white">35.6K</span>
              </div>
              <div>
                <span className="text-sm text-gray-400 font-semibold">Top Keywords</span>
                <ul className="mt-2 space-y-1 text-[#e0d7ff] text-base list-disc list-inside">
                  <li>online payment processing</li>
                  <li>secure transactions</li>
                  <li>online transaction platform</li>
                  <li>online shopping payments</li>
                  <li>e-commerce payment gateway</li>
                  <li>B2B payment processing</li>
                  <li>safe online payments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Traffic & Growth Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Traffic Card */}
            <div className="bg-[#1a1a2e] rounded-2xl border border-[#6f42c1]/30 shadow-[0_0_20px_#6f42c1] p-6 transition-transform transition-shadow duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_#6f42c1]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#c6b7ff] font-semibold text-lg">Traffic</span>
                <span className="text-green-400 text-xs">+10.7%</span>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold text-white">59.8K</span>
              </div>
            </div>
            {/* Growth Card */}
            <div className="bg-[#1a1a2e] rounded-2xl border border-[#6f42c1]/30 shadow-[0_0_20px_#6f42c1] p-6 transition-transform transition-shadow duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_#6f42c1]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#c6b7ff] font-semibold text-lg">Growth</span>
                <span className="text-red-400 text-xs">-2.5%</span>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold text-white">10.15%</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}