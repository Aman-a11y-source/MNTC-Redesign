"use client";

import React, { useState, useMemo } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { teamData } from "./teamData";
import ChromaGrid, { ChromaItem } from "../components/ChromaGrid";

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<string>("fourthYear");
  const [activeAlumniTab, setActiveAlumniTab] = useState<string>("alumni_2021_25");

  const primaryTabs = [
    { label: "Faculty Advisors", value: "faculty" },
    { label: "Fourth Year", value: "fourthYear" },
    { label: "Third Year", value: "thirdYear" },
    { label: "Second Year", value: "secondYear" },
    { label: "Alumni", value: "alumni" }
  ];

  const alumniTabs = [
    { label: "Batch Of 2021-25", value: "alumni_2021_25" },
    { label: "Batch Of 2020-24", value: "alumni_2020_24" },
    { label: "Batch Of 2019-23", value: "alumni_2019_23" },
    { label: "Batch Of 2018-22", value: "alumni_2018_22" }
  ];

  const selectedCategoryKey = useMemo(() => {
    if (activeTab === "alumni") {
      return activeAlumniTab;
    }
    return activeTab;
  }, [activeTab, activeAlumniTab]);

  const selectedCategory = teamData[selectedCategoryKey];

  const gridItems = useMemo<ChromaItem[]>(() => {
    if (!selectedCategory) return [];
    

    const borderColors = ["#7C3AED", "#00FFDF", "#3B82F6", "#10B981", "#F59E0B", "#EF4444"];
    
    return selectedCategory.members.map((m, idx) => {
      const color = borderColors[idx % borderColors.length];
      return {
        image: m.avatar.startsWith("http") ? m.avatar : `https://mntcnitdgp.co.in${m.avatar}`,
        title: m.name,
        subtitle: m.position,
        borderColor: color,
        gradient: "linear-gradient(145deg, #120f25, #08070d)",
        facebook: m.facebook,
        instagram: m.instagram,
        linkedin: m.linkedin,
        github: m.github
      };
    });
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#08070d] text-white pb-24 relative overflow-hidden">

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED] rounded-full mix-blend-screen filter blur-[130px] opacity-15 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00FFDF] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>


      <div className="text-center mb-16 pt-12 relative z-10">
        <ScrollReveal baseOpacity={0.05} baseRotation={2} blurStrength={6} textClassName="text-5xl md:text-7xl font-black tracking-tight font-space-grotesk text-white">
          Meet The Family
        </ScrollReveal>
        <div className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#00FFDF] mx-auto mt-4 rounded-full"></div>
      </div>


      <div className="max-w-6xl mx-auto px-6 mb-8 flex flex-wrap justify-center gap-3 relative z-10">
        {primaryTabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tab.value)}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 border cursor-target ${
              activeTab === tab.value
                ? "bg-gradient-to-r from-[#7C3AED] to-[#5227FF] border-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)] scale-105"
                : "bg-[#0e0d19]/80 border-white/5 text-gray-400 hover:text-white hover:border-white/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>


      {activeTab === "alumni" && (
        <div className="max-w-5xl mx-auto px-6 mb-16 flex flex-wrap justify-center gap-2 relative z-10 animate-fadeIn">
          {alumniTabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveAlumniTab(tab.value)}
              className={`px-4 py-2 rounded-full text-[11px] md:text-xs font-bold tracking-wider uppercase transition-all duration-300 border cursor-target ${
                activeAlumniTab === tab.value
                  ? "bg-cyan-500/15 border-[#00FFDF] text-[#00FFDF] shadow-[0_0_10px_rgba(0,255,223,0.2)]"
                  : "bg-[#0e0d19]/50 border-white/5 text-gray-500 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}


      <div className="max-w-7xl mx-auto px-6 mt-12 relative z-10 min-h-[500px]">
        {gridItems.length > 0 ? (
          <ChromaGrid 
            items={gridItems}
            radius={250}
            damping={0.45}
            fadeOut={0.5}
          />
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 font-medium">No members found in this group.</p>
          </div>
        )}
      </div>



    </div>
  );
}
