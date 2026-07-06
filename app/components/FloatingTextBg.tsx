"use client";

import React from "react";

/**
 * FloatingTextBg (Hero Horizontal & Margins Vertical Columns)
 *
 * Horizontal scrolling background:
 *  - exactly 3 rows in the Hero Section.
 *  - progressively more muted downwards (top: 9% opacity, middle: 5% opacity, bottom: 2% opacity).
 * Vertical side columns (Left Cyan scrolling UP, Right Purple scrolling DOWN):
 *  - 90-degree rotated style framing the margins.
 *  - Spans the full height of the landing page.
 */

const PHRASES = [
  "MATRIX • DARWINIA • KRYPTIC • IDEATHON 2.0 • CAMPUS SUDOKU • MERGERS & ACQUISITIONS • ",
  "MATHS N TECH CLUB • NITDGP • CODE • DESIGN • LOGIC • ALGORITHMS • DATA STRUCTURES • ",
  "CRYPTOGRAPHY • STATISTICS • PROBABILITY • QUANTITATIVE ANALYSIS • LINEAR ALGEBRA • ",
];

const LEFT_WORDS = [
  "MATRIX", "DARWINIA", "KRYPTIC", "IDEATHON", "AAROHAN", "CAMPUS SUDOKU",
  "MATHS", "CODE", "DESIGN", "LOGIC", "ALGORITHMS", "THEORY", "NITDGP",
  "MERGERS", "FINANCE", "PORTFOLIO", "GD WORKSHOP", "STOCK MARKET", "IDEATION"
];

const RIGHT_WORDS = [
  "MATHS", "CODE", "DESIGN", "LOGIC", "ALGORITHMS", "THEORY", "NITDGP",
  "MERGERS", "FINANCE", "PORTFOLIO", "GD WORKSHOP", "STOCK MARKET", "IDEATION",
  "MATRIX", "DARWINIA", "KRYPTIC", "IDEATHON", "AAROHAN", "CAMPUS SUDOKU"
];

export default function FloatingTextBg() {
  const repeatedLeft = [...LEFT_WORDS, ...LEFT_WORDS, ...LEFT_WORDS];
  const repeatedRight = [...RIGHT_WORDS, ...RIGHT_WORDS, ...RIGHT_WORDS];

  // Exactly 3 horizontal rows for the Hero section, progressively fading downwards
  const hRows = [
    { top: "15%", dir: 1,  phrase: PHRASES[0], dur: 45, size: "4.5rem", opacity: 0.08 },
    { top: "45%", dir: -1, phrase: PHRASES[1], dur: 38, size: "3.6rem", opacity: 0.045 },
    { top: "72%", dir: 1,  phrase: PHRASES[2], dur: 52, size: "3rem",   opacity: 0.02 },
  ];

  return (
    <>
      <style>{`
        /* Horizontal scrolling animations */
        @keyframes h-scroll-l { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes h-scroll-r { from { transform: translateX(-50%); } to { transform: translateX(0); } }

        .h-track {
          display: flex;
          white-space: nowrap;
          will-change: transform;
        }
        .h-track.go-l { animation: h-scroll-l linear infinite; }
        .h-track.go-r { animation: h-scroll-r linear infinite; }

        /* Vertical scrolling animations */
        @keyframes v-scroll-u { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @keyframes v-scroll-d { from { transform: translateY(-50%); } to { transform: translateY(0); } }

        .v-track {
          display: flex;
          flex-direction: column;
          will-change: transform;
        }
        .v-track.go-u { animation: v-scroll-u 55s linear infinite; }
        .v-track.go-d { animation: v-scroll-d 48s linear infinite; }

        .v-word {
          display: block;
          white-space: nowrap;
          line-height: 1.3;
          padding: 0.4em 0;
          font-weight: 900;
          font-family: 'Space Grotesk', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .h-track, .v-track { animation: none !important; }
        }

        /* Hide vertical margin text on smaller tablets/mobile screens */
        @media (max-width: 1100px) {
          .v-col-left, .v-col-right { display: none; }
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
          userSelect: "none",
        }}
      >
        {/* ── Layer 1: Exactly 3 Horizontal rows for the Hero, fading downwards ── */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100vh", overflow: "hidden" }}>
          {hRows.map((row, i) => (
            <div
              key={`h${i}`}
              style={{
                position: "absolute",
                top: row.top,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
            >
              <div
                className={`h-track ${row.dir === 1 ? "go-l" : "go-r"}`}
                style={{
                  animationDuration: `${row.dur}s`,
                  fontSize: row.size,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 900,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  opacity: row.opacity,
                  lineHeight: 1,
                }}
              >
                <span>{row.phrase.repeat(6)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Layer 2: Vertical Left Column (Cyan, scrolls UP) ── */}
        <div
          className="v-col-left"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "1.5%",
            width: "60px",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            className="v-track go-u"
            style={{
              color: "#00FFDF",
              opacity: 0.16,
              fontSize: "2.4rem",
            }}
          >
            {repeatedLeft.map((word, idx) => (
              <span key={idx} className="v-word">{word}</span>
            ))}
          </div>
        </div>

        {/* ── Layer 3: Vertical Right Column (Purple, scrolls DOWN) ── */}
        <div
          className="v-col-right"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: "1.5%",
            width: "60px",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            className="v-track go-d"
            style={{
              color: "#7C3AED",
              opacity: 0.20,
              fontSize: "2.4rem",
            }}
          >
            {repeatedRight.map((word, idx) => (
              <span key={idx} className="v-word">{word}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
