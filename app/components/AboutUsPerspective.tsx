"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

export default function AboutUsPerspective() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate motion values based on scroll progress
  // Start from translateY(300px) and rotateX(30deg) for a legible, elegant 3D tilt scroll
  const yMotionValue = useTransform(scrollYProgress, [0, 1], [300, -250]);
  const opacityMotionValue = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const transform = useMotionTemplate`rotateX(30deg) translateY(${yMotionValue}px) translateZ(10px)`;

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Safe client-side check to prevent hydration mismatch
  if (mounted && isMobile) {
    return (
      <div className="relative z-10 w-full bg-[#08070d] text-[#f4f4f7] px-6 sm:px-8 py-20 flex flex-col items-center">
        {/* Animated Header */}
        <div className="text-center select-none mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-black font-space-grotesk tracking-tight text-white uppercase"
          >
            About Us
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="h-[3px] bg-gradient-to-r from-[#7C3AED] to-[#00FFDF] mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Scroll Reveal Text for Mobile (Legible, Flat, Scrolling Naturally) */}
        <div className="w-full max-w-2xl text-center text-base sm:text-lg font-bold font-space-grotesk tracking-tight leading-relaxed text-gray-300">
          <ScrollReveal baseOpacity={0.05} baseRotation={0} blurStrength={4}>
            <span>
              We, <span className="text-[#00FFDF] font-extrabold neon-glow-cyan">Maths N Tech Club</span> are the official knowledge club of{" "}
              <span className="text-white">National Institute of Technology, Durgapur</span>. Back in{" "}
              <span className="text-[#FF007A] font-extrabold">2004</span>, when the Regional Engineering College Durgapur got the status of an Institute of National Importance and was renamed as the National Institute of Technology Durgapur,{" "}
              <span className="text-[#00FFDF] font-extrabold">Maths N Tech Club</span> was formed.
            </span>
          </ScrollReveal>
          
          <div className="h-10" />

          <ScrollReveal baseOpacity={0.05} baseRotation={0} blurStrength={4}>
            <span>
              Our club was set up with the aim of creating a platform that helps in{" "}
              <span className="text-[#7C3AED] font-extrabold">stimulating passion for mathematics</span> and interest in the{" "}
              <span className="text-white">technology of today’s world</span>. At Maths N Tech Club, we understand the importance of{" "}
              <span className="text-[#FF007A] font-extrabold">analytical reasoning and rational thinking</span>. Hence, we organise a plethora of events throughout the year that aims at reinvigorating the seemingly dormant passion for mathematics and the thirst for knowledge about today’s technology.
            </span>
          </ScrollReveal>

          <div className="h-10" />

          <ScrollReveal baseOpacity={0.05} baseRotation={0} blurStrength={4}>
            <span>
              It is our continuous goal to try our best to deliver knowledge about recent technical enhancements through the various workshops that we conduct around the year. Our attempts also aim to kindle{" "}
              <span className="text-[#7C3AED] font-extrabold">analytical reasoning and logical aptitude</span> in the brain though various fun events and experiences.
            </span>
          </ScrollReveal>
        </div>
      </div>
    );
  }

  // Desktop view (Full 3D Cinematic Scroll)
  return (
    <ReactLenis root>
      <div
        ref={targetRef}
        className="relative z-10 h-[220vh] w-full bg-[#08070d] text-[#f4f4f7] overflow-hidden"
      >
        {/* Animated Header */}
        <div className="absolute left-1/2 top-[4%] -translate-x-1/2 text-center select-none z-20 pointer-events-none">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-black font-space-grotesk tracking-tight text-white uppercase"
          >
            About Us
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-[3px] bg-gradient-to-r from-[#7C3AED] to-[#00FFDF] mx-auto mt-4 rounded-full"
          />
        </div>

        {/* 3D Perspective Text Container */}
        <div
          className="sticky top-0 mx-auto flex h-screen items-center justify-center pt-20 bg-transparent px-4 sm:px-8 max-w-6xl"
          style={{
            transformStyle: "preserve-3d",
            perspective: "800px",
          }}
        >
          <motion.div
            style={{
              transformStyle: "preserve-3d",
              transform,
              opacity: opacityMotionValue,
            }}
            className="w-full text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold font-space-grotesk tracking-tight leading-relaxed text-gray-300 select-none"
          >
            We, <span className="text-[#00FFDF] font-extrabold neon-glow-cyan">Maths N Tech Club</span> are the official knowledge club of{" "}
            <span className="text-white">National Institute of Technology, Durgapur</span>. Back in{" "}
            <span className="text-[#FF007A] font-extrabold">2004</span>, when the Regional Engineering College Durgapur got the status of an Institute of National Importance and was renamed as the National Institute of Technology Durgapur,{" "}
            <span className="text-[#00FFDF] font-extrabold">Maths N Tech Club</span> was formed.
            <br />
            <br />
            Our club was set up with the aim of creating a platform that helps in{" "}
            <span className="text-[#7C3AED] font-extrabold">stimulating passion for mathematics</span> and interest in the{" "}
            <span className="text-white">technology of today’s world</span>. At Maths N Tech Club, we understand the importance of{" "}
            <span className="text-[#FF007A] font-extrabold">analytical reasoning and rational thinking</span>. Hence, we organise a plethora of events throughout the year that aims at reinvigorating the seemingly dormant passion for mathematics and the thirst for knowledge about today’s technology.
            <br />
            <br />
            It is our continuous goal to try our best to deliver knowledge about recent technical enhancements through the various workshops that we conduct around the year. Our attempts also aim to kindle{" "}
            <span className="text-[#7C3AED] font-extrabold">analytical reasoning and logical aptitude</span> in the brain though various fun events and experiences.
          </motion.div>
        </div>

        {/* Soft fade gradients for cinematic transition */}
        <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-[#08070d] to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-b from-transparent to-[#08070d] pointer-events-none z-20" />
      </div>
    </ReactLenis>
  );
}
