"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "./components/ScrollReveal";
import ChromaGrid from "./components/ChromaGrid";
import FloatingTextBg from "./components/FloatingTextBg";
import TextMarqueeBelt from "./components/TextMarqueeBelt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const phrases = ["BEYOND INFINITY", "MATHS N TECH CLUB"];

export default function Home() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(80);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && text === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      setTypingSpeed(150);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  useEffect(() => {
    // 1. Entrance animations for Section 2 (Who are We?)
    const sec2Ctx = gsap.context(() => {
      gsap.fromTo(".sec2-text",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sec2-container",
            start: "top bottom-=15%",
            toggleActions: "play none none reverse"
          }
        }
      );
      gsap.fromTo(".sec2-image",
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sec2-container",
            start: "top bottom-=15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // 2. Entrance animations for Section 3 (Meet the Team)
    const sec3Ctx = gsap.context(() => {
      gsap.fromTo(".sec3-text",
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sec3-container",
            start: "top bottom-=15%",
            toggleActions: "play none none reverse"
          }
        }
      );
      gsap.fromTo(".sec3-image",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sec3-container",
            start: "top bottom-=15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // 3. Horizontal Scroll for Domains
    const track = trackRef.current;
    const pin = pinRef.current;
    let horizontalScroll: gsap.core.Tween | null = null;

    if (track && pin) {
      horizontalScroll = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
        }
      });
    }

    // 4. Parallax scroll triggers for Alternating Major Events
    const eventsCtx = gsap.context(() => {
      const rows = gsap.utils.toArray(".event-row");
      rows.forEach((row: any) => {
        const img = row.querySelector(".event-img-wrap");
        const txt = row.querySelector(".event-txt-wrap");
        
        gsap.fromTo(img,
          { x: row.classList.contains("flex-row-reverse") ? 50 : -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top bottom-=10%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(txt,
          { x: row.classList.contains("flex-row-reverse") ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top bottom-=10%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    return () => {
      sec2Ctx.revert();
      sec3Ctx.revert();
      eventsCtx.revert();
      if (horizontalScroll) {
        horizontalScroll.scrollTrigger?.kill();
        horizontalScroll.kill();
      }
    };
  }, []);

  return (
    <div className="relative text-white min-h-screen w-full overflow-hidden bg-[#08070d] pb-24">
      <FloatingTextBg />
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#00FFDF] rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none"></div>

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-transparent" style={{ minHeight: 'calc(100vh - 80px)' }}>
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

      <TextMarqueeBelt dir={1} dur={36} color="#00FFDF" opacity={0.06} />

      {/* Section 2: Who are We? */}
      <section className="relative max-w-7xl mx-auto px-6 py-12 md:py-20 z-10 sec2-container">
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

          <div className="flex-1 z-10 sec2-text">
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

          <div className="flex-1 flex flex-col items-center justify-center z-10 gap-8 sec2-image">
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

      <TextMarqueeBelt dir={-1} dur={42} color="#7C3AED" opacity={0.06} />

      {/* Section 3: Meet the Team */}
      <section className="relative max-w-7xl mx-auto px-6 py-12 md:py-20 z-10 sec3-container">
        <div className="glass-panel p-8 md:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          
          <div className="flex-1 flex flex-col items-center justify-center z-10 gap-8 sec3-image">
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

          <div className="flex-1 text-right z-10 flex flex-col items-end sec3-text">
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

      <TextMarqueeBelt dir={1} dur={30} color="#00FFDF" opacity={0.06} />

      {/* Section 4: Horizontal Scroll Domains Showcase */}
      <div ref={pinRef} className="relative w-full overflow-hidden bg-[#07060b] border-y border-white/5">
        <div ref={trackRef} className="flex flex-row flex-nowrap h-screen items-center" style={{ width: "300vw" }}>
          
          {/* Pillar 1 */}
          <div className="w-screen h-full flex flex-col justify-center items-center px-8 md:px-24 text-center lg:text-left lg:flex-row gap-12 select-none relative bg-[#07060b]">
            <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-center items-center overflow-hidden">
              <span className="text-[40vw] font-bold text-[#00FFDF] select-none">π</span>
            </div>
            <div className="flex-1 flex flex-col justify-center z-10 max-w-xl">
              <span className="text-sm font-bold tracking-widest text-[#00FFDF] uppercase mb-4">PILLAR 01</span>
              <h2 className="text-4xl md:text-6xl font-black font-space-grotesk text-white mb-6 uppercase">Mathematics & logic</h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                At our core, we explore the deep beauty of mathematics. From statistical modeling and game theory to complex quantitative ciphers and logical analysis, we cultivate the skills required to unlock numerical secrets.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center z-10 max-w-md">
              <div className="text-9xl font-black font-space-grotesk text-cyan-500/25 tracking-tighter select-none">MATHS</div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="w-screen h-full flex flex-col justify-center items-center px-8 md:px-24 text-center lg:text-left lg:flex-row gap-12 select-none relative bg-[#09080e]">
            <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-center items-center overflow-hidden">
              <span className="text-[30vw] font-mono text-[#7C3AED] select-none">&lt;/&gt;</span>
            </div>
            <div className="flex-1 flex flex-col justify-center z-10 max-w-xl">
              <span className="text-sm font-bold tracking-widest text-[#7C3AED] uppercase mb-4">PILLAR 02</span>
              <h2 className="text-4xl md:text-6xl font-black font-space-grotesk text-white mb-6 uppercase">Technology & Code</h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                We design and build modern software architectures. Through clean development practices, web structures, quantitative toolchains, and algorithmic challenges, we turn ideas into live products.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center z-10 max-w-md">
              <div className="text-9xl font-black font-space-grotesk text-purple-500/25 tracking-tighter select-none">CODE</div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="w-screen h-full flex flex-col justify-center items-center px-8 md:px-24 text-center lg:text-left lg:flex-row gap-12 select-none relative bg-[#07060b]">
            <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-center items-center overflow-hidden">
              <span className="text-[35vw] font-bold text-[#FF007A] select-none">🎨</span>
            </div>
            <div className="flex-1 flex flex-col justify-center z-10 max-w-xl">
              <span className="text-sm font-bold tracking-widest text-[#FF007A] uppercase mb-4">PILLAR 03</span>
              <h2 className="text-4xl md:text-6xl font-black font-space-grotesk text-white mb-6 uppercase">Design & Media</h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                Creativity powers our execution. We design premium branding guidelines, visual layouts, websites, and user interfaces that tell compelling interactive stories and engage our audience.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center z-10 max-w-md">
              <div className="text-9xl font-black font-space-grotesk text-pink-500/25 tracking-tighter select-none">DESIGN</div>
            </div>
          </div>

        </div>
      </div>

      <TextMarqueeBelt dir={-1} dur={38} color="#7C3AED" opacity={0.06} />

      {/* Section 5: Zigzag Major Events Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 md:py-28 z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs font-bold tracking-widest text-[#00FFDF] uppercase bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">OUR FLAGSHIPS</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-space-grotesk text-white mt-4 uppercase">Major Events</h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-36">
          
          {/* Event 1: GD */}
          <div className="event-row flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 flex justify-center items-center w-full event-img-wrap">
              <div className="relative group max-w-[400px] w-full transform hover:scale-[1.03] transition-transform duration-500 select-none">
                <Image 
                  width={400} 
                  height={300} 
                  src="/events/GD-WORKSHOP.png" 
                  alt="GD Workshop Event Poster" 
                  className="w-full h-auto object-contain rounded-2xl shadow-xl shadow-cyan-500/5 border border-white/5" 
                />
              </div>
            </div>
            <div className="flex-1 z-10 event-txt-wrap">
              <span className="text-xs font-bold tracking-widest text-[#00FFDF] uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">Workshop</span>
              <h3 className="text-3xl md:text-4xl font-extrabold font-space-grotesk text-white mt-4 mb-6 uppercase">GD Workshop</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
               Ever been fascinated by website designs or by the incredible posters Marvel and Netflix keep churning out? Design rules the world. You don't need to learn drawing and sketching in order to create extraordinary designs in today's world. We, at Maths N Tech Club, as always, are back with our very own Graphics Design Workshop to save you all the effort. On completion of the workshop, you will be well acquainted with the basics and practical implementation of the ideas of graphic design.
              </p>
              <a 
                href="/events" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 cursor-target neon-border-cyan bg-cyan-500/5 hover:bg-cyan-500/15"
              >
                Explore Details
              </a>
            </div>
          </div>

          {/* Event 2: COS */}
          <div className="event-row flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="flex-1 flex justify-center items-center w-full event-img-wrap">
              <div className="relative group max-w-[400px] w-full transform hover:scale-[1.03] transition-transform duration-500 select-none">
                <Image 
                  width={400} 
                  height={300} 
                  src="/events/COS.png" 
                  alt="COS Event Poster" 
                  className="w-full h-auto object-contain rounded-2xl shadow-xl shadow-purple-500/5 border border-white/5" 
                />
              </div>
            </div>
            <div className="flex-1 z-10 event-txt-wrap lg:text-right">
              <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">Aarohan event</span>
              <h3 className="text-3xl md:text-4xl font-extrabold font-space-grotesk text-white mt-4 mb-6 uppercase">Call Out Sherlock</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                Will you be excited to hear that we are back again with an enthralling opportunity to unleash the hidden detective inside of you? Well, this Aarohan we have arranged for a wholesome breath-taking experience where you can employ your investigating skills gathered by binge-watching Sherlock and other detective series. It’s time to prepare yourself and nourish the mystery solver in you. All you need is to reveal the identity of the culprit convincingly after examining the given clues and evidence. CALL OUT SHERLOCK brings forth the amazing opportunity to probe the mystery case and deduce the solution to the puzzle from a logical interpretation of the clues. Amazing prizes await you!
              </p>
              <a 
                href="/events" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 cursor-target neon-border-purple bg-purple-500/5 hover:bg-purple-500/15"
              >
                Explore Details
              </a>
            </div>
          </div>

          {/* Event 3: TT */}
          <div className="event-row flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 flex justify-center items-center w-full event-img-wrap">
              <div className="relative group max-w-[400px] w-full transform hover:scale-[1.03] transition-transform duration-500 select-none">
                <Image 
                  width={400} 
                  height={300} 
                  src="/events/TT.png" 
                  alt="TT Event Poster" 
                  className="w-full h-auto object-contain rounded-2xl shadow-xl shadow-cyan-500/5 border border-white/5" 
                />
              </div>
            </div>
            <div className="flex-1 z-10 event-txt-wrap">
              <span className="text-xs font-bold tracking-widest text-[#00FFDF] uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">Aarohan Event</span>
              <h3 className="text-3xl md:text-4xl font-extrabold font-space-grotesk text-white mt-4 mb-6 uppercase">Terrorist Takedown</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
               Bored of the same old monotonous tasks and a keen desire to go out, reach into the unknown and find that treasure, but terrified of this virus? We feel you Master Snow. The Night’s Watch is definitely not where you belong. This Aarohan, Team Aavishkar presents before you the annual edition of the prolific treasure hunt, TERRORIST TAKEDOWN! Never let your guard down as you reach out to the east of Essos and to the west of Westeros to find the answers to the mysteries. But always keep in mind, one wrong step and you might as well fall into the Dragon's breath! So what are you waiting for? Bring out the gothic fanatic inside you as you unravel all these mysteries!
              </p>
              <a 
                href="/events" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 cursor-target neon-border-cyan bg-cyan-500/5 hover:bg-cyan-500/15"
              >
                Explore Details
              </a>
            </div>
          </div>

          {/* Event 4: Stock market workshop */}
          <div className="event-row flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="flex-1 flex justify-center items-center w-full event-img-wrap">
              <div className="relative group max-w-[400px] w-full transform hover:scale-[1.03] transition-transform duration-500 select-none">
                <Image 
                  width={400} 
                  height={300} 
                  src="/events/STOCK MARKET.png" 
                  alt="Stock Market Workshop Poster" 
                  className="w-full h-auto object-contain rounded-2xl shadow-xl shadow-purple-500/5 border border-white/5" 
                />
              </div>
            </div>
            <div className="flex-1 z-10 event-txt-wrap lg:text-right">
              <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">Workshop</span>
              <h3 className="text-3xl md:text-4xl font-extrabold font-space-grotesk text-white mt-4 mb-6 uppercase">Stock Market Workshop</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
               Do you ever imagine yourself as a star investor ruling the markets of the Stock Exchange and reaping sumptuous? Isn’t it worth it to take a chance to be the one, to be the billionaires? Learning to live on less than you have, so you can have money back and money to invest. Let's master this trick to prevent us fall short of a few thousands to keep our month from cruising. Thus, Maths N Tech Club (MNTC) brings forth the Stock Market Workshop keeping in mind its high scale utility amongst the youngster. Gear up to nourish the preliminary roots of your investment journey and discover the basics of Stock Market and Trading. The workshop will walk you through the new learning vertical making the Stock Market concepts seem easy.  
              </p>
              <a 
                href="/events" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 cursor-target neon-border-purple bg-purple-500/5 hover:bg-purple-500/15"
              >
                Explore Details
              </a>
            </div>
          </div>

        </div>
      </section>

      <TextMarqueeBelt dir={1} dur={34} color="#00FFDF" opacity={0.06} />

      {/* Section 6: Club Gallery — ChromaGrid Memories */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">MEMORIES</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-space-grotesk text-white mt-4 uppercase">Club Gallery</h2>
          <p className="text-gray-400 mt-4 text-base max-w-xl mx-auto">
            Real moments, real people — hover to bring memories to life.
          </p>
        </div>

        {/*
          ╔══════════════════════════════════════════════════════════════╗
          ║  📸  TO UPDATE GALLERY PHOTOS:                              ║
          ║  Drop your JPG/PNG files into:                              ║
          ║    public/images/memories/                                  ║
          ║  File names:  memory1.jpg → memory6.jpg                    ║
          ║  Recommended size:  800×600px or larger, 4:3 ratio         ║
          ╚══════════════════════════════════════════════════════════════╝
        */}

        {/* ChromaGrid: desktop shows grayscale-to-colour hover, mobile is plain colour grid */}
        <div style={{ height: 'auto', minHeight: '640px', position: 'relative' }}>
          <ChromaGrid
            radius={320}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            items={[
              {
                image: '/images/memories/memory1.jpg',
                title: 'Seniors Farewell',
                subtitle: 'Class of 2024',
                handle: '@mntcnitdgp',
                borderColor: '#00FFDF',
                gradient: 'linear-gradient(145deg, #00FFDF22, #08070d)',
              },
              {
                image: '/images/memories/memory2.jpg',
                title: 'Freshers Orientation',
                subtitle: 'Welcome Batch 2027',
                handle: '@mntcnitdgp',
                borderColor: '#7C3AED',
                gradient: 'linear-gradient(210deg, #7C3AED22, #08070d)',
              },
              {
                image: '/images/memories/memory3.jpg',
                title: 'Aarohan Fest',
                subtitle: 'Organizing Committee',
                handle: '@mntcnitdgp',
                borderColor: '#F59E0B',
                gradient: 'linear-gradient(165deg, #F59E0B22, #08070d)',
              },
              {
                image: '/images/memories/memory4.jpg',
                title: 'Core Team Meet',
                subtitle: 'Session Planning',
                handle: '@mntcnitdgp',
                borderColor: '#8B5CF6',
                gradient: 'linear-gradient(225deg, #8B5CF622, #08070d)',
              },
              {
                image: '/images/memories/memory5.jpg',
                title: 'Alumni Gathering',
                subtitle: 'Networking Meet',
                handle: '@mntcnitdgp',
                borderColor: '#06B6D4',
                gradient: 'linear-gradient(135deg, #06B6D422, #08070d)',
              },
            ]}
          />
        </div>
      </section>

      {/* Decorative Bottom Design */}
      <div className="relative w-full h-40 opacity-10 pointer-events-none mt-12 flex justify-end">
        <Image 
          width={480} 
          height={200} 
          src="/home/meet the people shape.png" 
          alt="Decorative bottom design" 
          className="h-full w-auto object-contain" 
        />
      </div>

    </div>
  );
}
