"use client";

import { motion, MotionValue, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [
  "/images/memories/memory1.jpeg",
  "/images/memories/memory2.jpeg",
  "/images/memories/memory3.jpeg",
  "/images/memories/memory4.jpeg",
  "/images/memories/memory5.jpeg",
  "/images/memories/memory6.jpeg",
];

export default function OliverParallax() {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  
  // Dynamic offset and scroll calculations using height from resize listener
  // Odd columns scroll UPWARD (startOffset - travel), Even columns scroll DOWNWARD (startOffset + travel)
  const yTransform1 = useTransform(scrollYProgress, (progress) => {
    const startOffset = height * 0.1;
    const travel = progress * height * 0.9;
    return startOffset - travel;
  });

  const yTransform2 = useTransform(scrollYProgress, (progress) => {
    const startOffset = -height * 0.85;
    const travel = progress * height * 1.2;
    return startOffset + travel;
  });

  const yTransform3 = useTransform(scrollYProgress, (progress) => {
    const startOffset = height * 0.15;
    const travel = progress * height * 0.8;
    return startOffset - travel;
  });

  const yTransform4 = useTransform(scrollYProgress, (progress) => {
    const startOffset = -height * 0.75;
    const travel = progress * height * 1.0;
    return startOffset + travel;
  });

  // Spring configuration for buttery smooth scroll animations on desktop
  const springConfig = { stiffness: 50, damping: 22, mass: 0.5 };
  const y = useSpring(yTransform1, springConfig);
  const y2 = useSpring(yTransform2, springConfig);
  const y3 = useSpring(yTransform3, springConfig);
  const y4 = useSpring(yTransform4, springConfig);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full bg-[#08070d] py-12 md:py-20 select-none overflow-hidden">
      {/* Decorative side lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00FFDF] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#7C3AED] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />

      {/* Gallery Title Block */}
      <div className="text-center mb-12 relative z-10 px-6">
        <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
          MEMORIES
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-space-grotesk text-white mt-4 uppercase">
          Club Gallery
        </h2>
        <p className="text-gray-400 mt-4 text-base max-w-xl mx-auto font-sans">
          Real moments, real people.
        </p>
      </div>

      {/* Parallax scroll container */}
      <div
        ref={gallery}
        className="relative box-border flex h-[90vh] sm:h-[140vh] md:h-[160vh] gap-[3vw] sm:gap-[2vw] overflow-hidden bg-[#0c0b11] border-y border-white/5 p-[3vw] sm:p-[2vw] z-10 rounded-2xl max-w-7xl mx-auto"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[0], images[2], images[4]]} y={y3} className="hidden sm:flex" />
        <Column images={[images[1], images[3], images[5]]} y={y4} className="hidden sm:flex" />
      </div>

      {/* Subtext info */}
      <div className="text-center mt-10 relative z-10 select-none">
        <span className="text-[10px] tracking-[0.25em] font-mono text-gray-500 uppercase">
          ✦ Scroll down to see perspective motion ✦
        </span>
      </div>
    </div>
  );
}

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
  className?: string;
};

const Column = ({ images, y, className = "" }: ColumnProps) => {
  return (
    <motion.div
      className={`relative flex h-full w-[48%] sm:w-1/4 flex-col gap-[3vw] sm:gap-[2vw] ${className}`}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div 
          key={i} 
          className="relative w-full overflow-hidden rounded-lg sm:rounded-xl border border-white/10 bg-[#0e0d15] p-1 aspect-[3/4] sm:aspect-[4/3] md:aspect-[3/4] shadow-lg shadow-black/40 group transition-colors duration-500 hover:border-[#00FFDF]/30"
        >
          <img
            src={src}
            alt="MNTC Memory"
            className="w-full h-full object-cover rounded-md sm:rounded-lg pointer-events-none transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-105"
          />
        </div>
      ))}
    </motion.div>
  );
};
