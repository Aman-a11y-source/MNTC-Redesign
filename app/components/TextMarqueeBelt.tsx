"use client";

import React from "react";

/**
 * TextMarqueeBelt
 * Single-line horizontal marquee divider belt.
 * Placed in-between page sections as visual transition elements.
 */

interface Props {
  phrase?: string;
  dur?: number;
  dir?: 1 | -1;
  color?: string;
  opacity?: number;
  size?: string;
}

const DEFAULT_PHRASE = "MATHS N TECH CLUB • INTEGRATE THE FUTURE • INNOVATION • BEYOND INFINITY • LOGIC • CODE • RESEARCH • DESIGN • FINANCE • ";

export default function TextMarqueeBelt({
  phrase = DEFAULT_PHRASE,
  dur = 32,
  dir = 1,
  color = "#ffffff",
  opacity = 0.045,
  size = "1.8rem"
}: Props) {
  return (
    <>
      <style>{`
        @keyframes belt-l { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes belt-r { from { transform: translateX(-50%); } to { transform: translateX(0); } }

        .belt-track {
          display: flex;
          white-space: nowrap;
          will-change: transform;
        }
        .belt-track.go-l { animation: belt-l linear infinite; }
        .belt-track.go-r { animation: belt-r linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .belt-track { animation: none !important; }
        }
      `}</style>

      <div
        className="w-full relative overflow-hidden py-3 my-6 border-t border-b border-white/[0.03] bg-[#0c0b15]/40 select-none pointer-events-none"
        aria-hidden="true"
      >
        <div
          className={`belt-track ${dir === 1 ? "go-l" : "go-r"}`}
          style={{
            animationDuration: `${dur}s`,
            fontSize: size,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: color,
            opacity: opacity,
            lineHeight: 1,
          }}
        >
          <span>{phrase.repeat(8)}</span>
        </div>
      </div>
    </>
  );
}
