"use client";

/**
 * PageTransition — Cinematic Centered "I" Reveal (v8)
 *
 * Sequence:
 *  1. Left and right curtains slide IN (CLOSE_MS = 650ms).
 *  2. At 650ms, phase becomes "closed", logo is rendered and plays its 0.95s animation.
 *     - Bars meet, touch, split apart to outline the text.
 *     - "MNTC" is revealed in the center and held for readability (300ms static glow).
 *  3. At 1600ms (650ms + 950ms), route navigation triggers.
 *  4. Pathname changes, phase becomes "opening", curtains slide open (OPEN_MS = 650ms).
 */

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CLOSE_MS, HOLD_MS, OPEN_MS } from "./TransitionLink";

type Phase = "idle" | "closing" | "closed" | "opening";

const EASE = "cubic-bezier(0.76, 0, 0.24, 1)";
const BG   = "#08070d";

export default function PageTransition() {
  const pathname    = usePathname();
  const firstRender = useRef(true);
  const phaseRef    = useRef<Phase>("idle");
  const [phase, _setPhase] = useState<Phase>("idle");

  const setPhase = (p: Phase) => {
    phaseRef.current = p;
    _setPhase(p);
  };

  useEffect(() => {
    const onClose = () => {
      setPhase("closing");
      setTimeout(() => setPhase("closed"), CLOSE_MS);
    };
    window.addEventListener("pt:close", onClose);
    return () => window.removeEventListener("pt:close", onClose);
  }, []);

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }

    const raf = requestAnimationFrame(() => {
      setPhase("opening");
      setTimeout(() => setPhase("idle"), OPEN_MS);
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  const atCenter  = phase === "closing" || phase === "closed";
  const leftX     = atCenter ? "0%"    : "-101%";
  const rightX    = atCenter ? "0%"    :  "101%";

  const isMoving  = phase === "closing" || phase === "opening";
  const duration  = phase === "opening" ? `${OPEN_MS}ms` : `${CLOSE_MS}ms`;
  const trans     = isMoving ? `transform ${duration} ${EASE}` : "none";

  const isClosed  = phase === "closed";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: phase === "idle" ? "none" : "all",
        overflow: "hidden",
      }}
    >
      <style>{`
        .pt-logo-wrapper {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .pt-logo-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 260px;
          height: 80px;
        }

        .pt-bar {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 900;
          font-size: 3.2rem;
          color: #00FFDF;
          position: absolute;
          line-height: 1;
          will-change: transform;
        }

        .pt-bar-left {
          animation: bar-left-anim 0.95s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        .pt-bar-right {
          animation: bar-right-anim 0.95s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        .pt-text {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 900;
          font-size: 3rem;
          color: #ffffff;
          line-height: 1;
          letter-spacing: 0.05em;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          width: 0;
          opacity: 0;
          animation: text-reveal-anim 0.95s cubic-bezier(0.76, 0, 0.24, 1) forwards;
          text-shadow: 0 0 15px rgba(0, 255, 223, 0.35);
        }

        @keyframes bar-left-anim {
          0% { transform: translateX(-120px); opacity: 0; }
          20% { transform: translateX(0); opacity: 1; }
          30% { transform: translateX(0); }
          70%, 100% { transform: translateX(-95px); opacity: 1; }
        }

        @keyframes bar-right-anim {
          0% { transform: translateX(120px); opacity: 0; }
          20% { transform: translateX(0); opacity: 1; }
          30% { transform: translateX(0); }
          70%, 100% { transform: translateX(95px); opacity: 1; }
        }

        @keyframes text-reveal-anim {
          0%, 30% { width: 0; opacity: 0; }
          70%, 100% { width: 170px; opacity: 1; }
        }
      `}</style>

      {/* Left panel */}
      <div
        style={{
          position: "absolute",
          top: 0, bottom: 0, left: 0,
          width: "51%",
          background: BG,
          transform: `translateX(${leftX})`,
          transition: trans,
          boxShadow: "6px 0 32px 0 rgba(0,255,223,0.10)",
        }}
      />

      {/* Right panel */}
      <div
        style={{
          position: "absolute",
          top: 0, bottom: 0, right: 0,
          width: "51%",
          background: BG,
          transform: `translateX(${rightX})`,
          transition: trans,
          boxShadow: "-6px 0 32px 0 rgba(124,58,237,0.10)",
        }}
      />

      {/* Center Logo Shutter Animation */}
      <div
        className="pt-logo-wrapper"
        style={{
          opacity: isClosed ? 1 : 0,
          transition: `opacity 0.1s ease ${isClosed ? "0.05s" : "0s"}`,
        }}
      >
        {isClosed && (
          <div className="pt-logo-inner">
            <span className="pt-bar pt-bar-left">I</span>
            <span className="pt-text">MNTC</span>
            <span className="pt-bar pt-bar-right">I</span>
          </div>
        )}
      </div>
    </div>
  );
}
