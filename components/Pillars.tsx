"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const PILLARS = [
  {
    number: "01",
    word: "Fast",
    claim: "Days, not months.",
    body: "Your creative is live in days — not trapped in a production queue for weeks. We configure team, tools, and workflows for your brand out of the box. No migration. No change management. One platform, ready on day one.",
  },
  {
    number: "02",
    word: "Scalable",
    claim: "One idea becomes hundreds.",
    body: "AI-powered workflows turn a single brief into assets across every channel, format, and audience segment. Ads, video, social, e-commerce — produced in days. Your team focuses on creative direction. We handle the rest.",
  },
  {
    number: "03",
    word: "Efficient",
    claim: "You brief it. We build it.",
    body: "We own the entire production process — from brief to final asset. You define what you need. We assemble, produce, refine, and deliver. Integrates alongside your agencies or internal teams, not against them.",
  },
  {
    number: "04",
    word: "Intelligent",
    claim: "Every job makes the next one better.",
    body: "Performance data flows back into your system automatically. Creative is evaluated, optimized, and aligned to platform best practices on a rolling basis. The more you use it, the more precisely it works for your brand.",
  },
];

function PillarCard({ pillar, delay, visible }: { pillar: typeof PILLARS[0]; delay: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "12px",
        padding: "36px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.09)" : "0 1px 3px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-3px)" : `translateY(${visible ? "0" : "24px"})`,
        opacity: visible ? 1 : 0,
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms, box-shadow 0.25s ease`,
      }}
    >
      {/* Top accent line on hover */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: "100%", height: "3px",
        background: "linear-gradient(90deg, #4F5FE6, transparent)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
      }} />

      <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "#4F5FE6", textTransform: "uppercase", margin: "0 0 20px" }}>
        {pillar.number}
      </p>

      <h3 style={{ fontSize: "clamp(26px, 2.5vw, 34px)", fontWeight: 700, color: "#1B1F2A", letterSpacing: "-0.02em", lineHeight: 1, margin: "0 0 12px" }}>
        {pillar.word}
      </h3>

      <div style={{ width: "32px", height: "3px", backgroundColor: "#4F5FE6", borderRadius: "2px", margin: "0 0 24px" }} />

      <p style={{ fontSize: "18px", fontWeight: 600, color: "#1B1F2A", lineHeight: 1.3, fontStyle: "italic", margin: "0 0 12px" }}>
        {pillar.claim}
      </p>

      <p style={{ fontSize: "15px", color: "#5E6370", lineHeight: 1.7, margin: 0 }}>
        {pillar.body}
      </p>
    </div>
  );
}

export function Pillars() {
  const { ref, visible } = useInView();

  return (
    <section style={{ backgroundColor: "#FFFFFF", paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      <div className="mx-auto" style={{ maxWidth: "1280px", paddingLeft: "clamp(24px, 6.25vw, 80px)", paddingRight: "clamp(24px, 6.25vw, 80px)" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#4F5FE6", margin: "0 0 16px" }}>
            The Kartel Advantage
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#1B1F2A", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 16px", maxWidth: "680px", marginLeft: "auto", marginRight: "auto" }}>
            What does the future of creative production look like?
          </h2>
          <p style={{ fontSize: "18px", color: "#5E6370", lineHeight: 1.6 }}>
            Four pillars. One platform. Zero compromises.
          </p>
        </div>

        {/* 2×2 grid */}
        <div
          ref={ref}
          style={{ display: "grid", gap: "24px" }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.word} pillar={pillar} delay={i * 80} visible={visible} />
          ))}
        </div>

      </div>
    </section>
  );
}
