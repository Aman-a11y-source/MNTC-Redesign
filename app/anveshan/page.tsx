"use client";

import Image from "next/image";
import React from "react";
import ScrollReveal from "../components/ScrollReveal";

export default function AnveshanPage() {
  return (
    <main className="min-h-screen bg-[#08070d] relative overflow-hidden pb-24 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7C3AED] rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#00FFDF] rounded-full mix-blend-screen filter blur-[140px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start relative">
          
          {/* Left Column: Pinned Sticky Magazine Cover */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-[18vh] flex justify-center lg:justify-start">
            <div className="relative group perspective-container">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00FFDF] to-[#7C3AED] rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
              
              <div className="relative bg-[#0e0d19] border border-white/10 rounded-2xl p-4 transition-all duration-700 ease-out transform-3d hover-reset shadow-2xl">
                <Image 
                  width={600} 
                  height={800}
                  src="/anveshan/Group 1.png"  
                  alt="Anveshan Magazine Cover"
                  className="w-[280px] sm:w-[380px] lg:w-[420px] h-auto object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column: Scrollable text blocks */}
          <div className="w-full lg:w-[55%] flex flex-col gap-24 lg:gap-36 pt-10 pb-20">
            
            {/* Section 1: Intro Title */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-h-[40vh] justify-center">
              <div className="mb-4">
                <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase bg-[#7C3AED]/10 px-3 py-1.5 rounded-full border border-[#7C3AED]/20">
                  Official Release
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white mb-6 font-space-grotesk uppercase">
                Anve<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#a78bfa] neon-glow-purple">shan</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider font-space-grotesk text-[#00FFDF] uppercase neon-glow-cyan">
                The Official Tech Magazine of MNTC, NIT Durgapur
              </h2>
            </div>

            {/* Section 2: Scrollytext 1 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-h-[45vh] justify-center">
              <ScrollReveal baseOpacity={0.05} baseRotation={2} blurStrength={6} textClassName="text-3xl md:text-4xl font-extrabold font-space-grotesk text-white mb-6 uppercase tracking-tight">
                A Reprieve from the Monotonous
              </ScrollReveal>
              <ScrollReveal baseOpacity={0.1} baseRotation={0} blurStrength={4} textClassName="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl md:max-w-2xl font-sans">
                We are stoked to present to you the newest edition of Anveshan - the official tech magazine of Maths N Tech Club, NIT Durgapur. Feeling tired of assignments and regular 9-6 classes?
              </ScrollReveal>
            </div>

            {/* Section 3: Scrollytext 2 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-h-[45vh] justify-center">
              <ScrollReveal baseOpacity={0.05} baseRotation={-2} blurStrength={6} textClassName="text-3xl md:text-4xl font-extrabold font-space-grotesk text-white mb-6 uppercase tracking-tight">
                Fusing Maths & Technology
              </ScrollReveal>
              <ScrollReveal baseOpacity={0.1} baseRotation={0} blurStrength={4} textClassName="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl md:max-w-2xl font-sans">
                Replete with technical articles that are sure to blow up your mind, innovations of your contemporaries that would make you feel proud, and puzzles that would require your analytical skills at their peak to solve them, Anveshan is definitely the ideal magazine to provide a reprieve to you.
              </ScrollReveal>
            </div>

            {/* Section 4: Download Section */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-h-[50vh] justify-center">
              <ScrollReveal baseOpacity={0.05} baseRotation={1} blurStrength={6} textClassName="text-3xl md:text-4xl font-extrabold font-space-grotesk text-white mb-6 uppercase tracking-tight">
                Get Your Copy Now
              </ScrollReveal>
              <ScrollReveal baseOpacity={0.1} baseRotation={0} blurStrength={4} textClassName="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl md:max-w-2xl mb-10 font-sans">
                Dive deep into coding patterns, mathematical concepts, visual designs, and alumni stories. Click below to start downloading Anveshan Vol. 8 immediately.
              </ScrollReveal>
              
              <a
                href="/anveshan/Anveshan_2025.pdf"   
                download="Anveshan_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full text-white text-base md:text-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-target neon-border-cyan bg-cyan-500/5 hover:bg-[#00FFDF] hover:text-[#08070d] hover:shadow-[0_0_30px_rgba(0,255,223,0.4)]"
              >
                Download it now!
              </a>
            </div>

          </div>

        </div>
      </div>

      <style jsx global>{`
        .perspective-container {
          perspective: 1200px;
        }
        .transform-3d {
          transform: rotateY(-18deg) rotateX(10deg) rotateZ(-3deg);
          transform-style: preserve-3d;
        }
        .hover-reset:hover {
          transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 255, 223, 0.25);
        }
      `}</style>
    </main>
  );
}
