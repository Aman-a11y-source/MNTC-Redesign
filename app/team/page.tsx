"use client";

import React, { useState, useMemo } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { teamData } from "./teamData";

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

  return (
    <div className="min-h-screen bg-[#08070d] text-white pb-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED] rounded-full mix-blend-screen filter blur-[130px] opacity-15 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00FFDF] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>

      {/* Header */}
      <div className="text-center mb-16 pt-12 relative z-10">
        <ScrollReveal baseOpacity={0.05} baseRotation={2} blurStrength={6} textClassName="text-5xl md:text-7xl font-black tracking-tight font-space-grotesk text-white uppercase">
          Meet The Family
        </ScrollReveal>
        <div className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#00FFDF] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Primary tabs */}
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

      {/* Alumni subtabs */}
      {activeTab === "alumni" && (
        <div className="max-w-5xl mx-auto px-6 mb-16 flex flex-wrap justify-center gap-2 relative z-10 animate-fadeIn">
          {alumniTabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveAlumniTab(tab.value)}
              className={`px-4 py-2 rounded-full text-[11px] md:text-xs font-bold tracking-wider uppercase transition-all duration-300 border cursor-target ${
                activeAlumniTab === tab.value
                  ? "bg-[#00FFDF]/10 border-[#00FFDF] text-[#00FFDF] shadow-[0_0_10px_rgba(0,255,223,0.2)]"
                  : "bg-[#0e0d19]/50 border-white/5 text-gray-500 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Team Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12 relative z-10 min-h-[500px]">
        {selectedCategory && selectedCategory.members.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {selectedCategory.members.map((m, idx) => (
              <div
                key={m.id + "-" + idx}
                className="group relative bg-[#0e0d19]/50 border border-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-[#00FFDF]/20 hover:shadow-[0_10px_30px_rgba(0,255,223,0.04)] hover:-translate-y-1"
              >
                {/* Large circular avatar wrapper */}
                <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden mb-5 border-2 border-white/10 group-hover:border-[#00FFDF]/30 transition-all duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      m.avatar.startsWith("http")
                        ? m.avatar
                        : m.avatar.startsWith("/images/member images")
                        ? `https://mntcnitdgp.co.in${m.avatar}`
                        : m.avatar
                    }
                    alt={m.name}
                    className="w-full h-full object-cover transition-all duration-500 md:group-hover:scale-105 md:group-hover:blur-[6px]"
                  />
                  {/* Socials overlay - desktop only (hover & reveal) */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-3">
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0077b5] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_0_10px_rgba(0,119,181,0.5)]"
                        title="LinkedIn"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {m.instagram && (
                      <a
                        href={m.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#e1306c] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_0_10px_rgba(225,48,108,0.5)]"
                        title="Instagram"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    )}
                    {m.facebook && (
                      <a
                        href={m.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877f2] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_0_10px_rgba(24,119,242,0.5)]"
                        title="Facebook"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                    )}
                    {m.github && (
                      <a
                        href={m.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#333] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_0_10px_rgba(51,51,51,0.5)]"
                        title="GitHub"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Text details */}
                <h3 className="text-lg md:text-xl font-bold font-space-grotesk tracking-tight text-white mb-1 group-hover:text-[#00FFDF] transition-colors duration-300">
                  {m.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 font-sans tracking-wide">
                  {m.position}
                </p>

                {/* Social links - mobile only (always visible) */}
                <div className="flex md:hidden mt-4 items-center justify-center gap-3">
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#0077b5] transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {m.instagram && (
                    <a
                      href={m.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#e1306c] transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  )}
                  {m.facebook && (
                    <a
                      href={m.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#1877f2] transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  )}
                  {m.github && (
                    <a
                      href={m.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#333] transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 font-medium">No members found in this group.</p>
          </div>
        )}
      </div>
    </div>
  );
}
