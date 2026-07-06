"use client";

import Image from "next/image";
import React from "react";
import ScrollReveal from "../components/ScrollReveal";

export default function AnveshanPage() {
  return (
    <main className="min-h-screen bg-[#08070d] relative overflow-hidden pb-24">

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7C3AED] rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#00FFDF] rounded-full mix-blend-screen filter blur-[140px] opacity-10 pointer-events-none"></div>

      <section className="w-full min-h-[90vh] flex items-center justify-center px-6 md:px-12 lg:px-16 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl items-center">
          

          <div className="flex justify-center lg:justify-start">
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


          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-4">
              <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase bg-[#7C3AED]/10 px-3 py-1.5 rounded-full border border-[#7C3AED]/20">Official Release</span>
            </div>


            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white mb-4 font-space-grotesk uppercase">
              Anve<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#a78bfa] neon-glow-purple">shan</span>
            </h1>
            

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider font-space-grotesk mb-8 text-[#00FFDF] uppercase neon-glow-cyan">
              The Official Tech Magazine of MNTC, NIT Durgapur
            </h2>


            <ScrollReveal baseOpacity={0.1} baseRotation={0} blurStrength={4} textClassName="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl md:max-w-2xl mb-10">
              We are stoked to present to you the newest edition of Anveshan - the official tech magazine of Maths N Tech Club, NIT Durgapur. Feeling tired of assignments and regular 9-6 classes? Replete with technical articles that are sure to blow up your mind, innovations of your contemporaries that would make you feel proud, and puzzles that would require your analytical skills at their peak to solve them, Anveshan is definitely the ideal magazine to provide a reprieve to you from your monotonous.
            </ScrollReveal>


            <a
              href="/anveshan/Anveshan_2025.pdf"   
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full text-white text-base md:text-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-target neon-border-cyan bg-cyan-500/5 hover:bg-[#00FFDF] hover:text-[#08070d] hover:shadow-[0_0_30px_rgba(0,255,223,0.4)]"
            >
              Download it now!
            </a>

          </div>
        </div>
      </section>



    </main>
  );
}
