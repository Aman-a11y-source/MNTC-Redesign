"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import ScrollReveal from "./components/ScrollReveal";
import DotGrid from "./components/DotGrid";

const phrases = ["BEYOND INFINITY", "MATHS N TECH CLUB"];

export default function Home() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(80); // Speed up when deleting
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(150); // Speed when typing
      }, typingSpeed);
    }

    if (!isDeleting && text === currentPhrase) {
      // Pause when the full phrase is typed
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && text === "") {
      // Switch phrase when deleting is complete
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      setTypingSpeed(150);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  return (
    <div className="relative text-white min-h-screen w-full overflow-hidden bg-[#08070d] pb-20">
      

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#00FFDF] rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none"></div>

      <div className="relative w-full overflow-hidden bg-transparent">
        <DotGrid hoverColor="#00FFDF" hoverRadius={120} />
        <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] px-6 lg:px-12 py-8 max-w-7xl mx-auto z-10 select-none gap-10 lg:gap-16">
          
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left justify-center w-full z-10">
            <h1 className="font-space-grotesk tracking-tight leading-[0.95] font-black text-white text-5xl sm:text-6xl lg:text-8xl xl:text-9xl uppercase select-none">
              <div>Maths</div>
              <div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFDF] to-[#00aa9a] neon-glow-cyan">N</span>
                {' '}Tech
              </div>
              <div>Club</div>
            </h1>
            <div className="mt-4 font-mono tracking-widest text-[#00FFDF] uppercase flex items-center justify-center lg:justify-start gap-1 text-sm sm:text-base lg:text-lg xl:text-xl font-bold">
              <span>{text}</span>
              <span className="animate-blink font-light">|</span>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center w-full z-10">
            <div className="relative max-w-[260px] sm:max-w-[320px] lg:max-w-[460px] w-full flex justify-center transform hover:scale-[1.03] transition-transform duration-500 aspect-[721/751]">
              <Image 
                width={420} 
                height={440} 
                src="/images/maths.svg" 
                alt="Maths N Tech Club Illustration" 
                className="w-full h-auto object-contain" 
                priority
              />
            </div>
          </div>

        </section>
      </div>


      <section className="relative max-w-7xl mx-auto px-6 py-12 md:py-20 z-10">
        <div className="glass-panel p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          

          <div className="absolute -left-20 -bottom-20 w-80 h-80 opacity-20 pointer-events-none" style={{ animation: 'spin 20s linear infinite' }}>
            <Image 
              width={320} 
              height={320}
              src="/home/who are we shape.png"
              alt="Semi circular rings"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1 z-10">
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest text-[#00FFDF] uppercase bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">About The Club</span>
            </div>
            
            <ScrollReveal baseOpacity={0.05} baseRotation={2} blurStrength={6} textClassName="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight font-space-grotesk text-white">
              Who are We?
            </ScrollReveal>

            <ScrollReveal baseOpacity={0.1} baseRotation={0} blurStrength={4} textClassName="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              We are the official knowledge club of National Institute of Technology, Durgapur. Established in 2004, the aim of our club is to create a platform that encourages one to stimulate their love and passion for mathematics in this world of technology. It is our goal to fabricate the perfect balance of Maths and Technology by hosting various events, webinars and workshops that inspire one to explore new fields and innovations.
            </ScrollReveal>

            <a 
              href="/about" 
              className="hidden lg:inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 cursor-target neon-border-cyan bg-cyan-500/5 hover:bg-cyan-500/15"
            >
              Know More About Us
            </a>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center z-10 gap-8">
            <div className="relative w-full flex justify-center transform hover:scale-[1.03] transition-transform duration-500 max-w-[260px] sm:max-w-[320px] lg:max-w-[380px]">
              <Image 
                width={300} 
                height={300} 
                src="/home/question vector.png" 
                alt="Who are we illustration" 
                className="w-full h-auto object-contain" 
              />
            </div>
            
            <a 
              href="/about" 
              className="inline-flex lg:hidden items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 cursor-target neon-border-cyan bg-cyan-500/5 hover:bg-cyan-500/15"
            >
              Know More About Us
            </a>
          </div>

        </div>
      </section>


      <section className="relative max-w-7xl mx-auto px-6 py-12 md:py-20 z-10">
        <div className="glass-panel p-8 md:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          
          <div className="flex-1 flex flex-col items-center justify-center z-10 gap-8">
            <div className="relative w-full flex justify-center transform hover:scale-[1.03] transition-transform duration-500 max-w-[280px] sm:max-w-[340px] lg:max-w-[420px]">
              <Image 
                width={400} 
                height={300}
                src="/home/team.png"
                alt="People with graph illustration"
                className="w-full h-auto object-contain"
              />
            </div>

            <a 
              href="/team" 
              className="inline-flex lg:hidden items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 cursor-target neon-border-purple bg-purple-500/5 hover:bg-purple-500/15 text-center"
            >
              Meet the people making it happen
            </a>
          </div>

          <div className="flex-1 text-right z-10 flex flex-col items-end">
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">The Family</span>
            </div>

            <ScrollReveal baseOpacity={0.05} baseRotation={-2} blurStrength={6} textClassName="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight font-space-grotesk text-white">
              Meet the people making it happen
            </ScrollReveal>

            <ScrollReveal baseOpacity={0.1} baseRotation={0} blurStrength={4} textClassName="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl ml-auto text-right">
              Be it the smallest achievements or the largest accomplishments, it requires the support and dedication of every member of the team. All our endeavours are nothing but a display of the united attempts of our zestful squad. Meet the MNTC family, the dynamic gang behind it all.
            </ScrollReveal>

            <a 
              href="/team" 
              className="hidden lg:inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 cursor-target neon-border-purple bg-purple-500/5 hover:bg-purple-500/15"
            >
              Meet the people making it happen
            </a>
          </div>

        </div>
      </section>


      <div className="absolute bottom-0 right-0 w-80 md:w-[480px] opacity-10 pointer-events-none">
        <Image 
          width={480} 
          height={200} 
          src="/home/meet the people shape.png" 
          alt="Decorative bottom design" 
          className="w-full h-auto object-contain" 
        />
      </div>



    </div>
  );
}
