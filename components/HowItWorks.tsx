"use client";

import { useEffect, useRef, useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: "01",
    title: "Submit a brief",
    body: "A project, a campaign, performance data, or existing creative to update. Input at brand level, division level, product line, or campaign. As granular as you need.",
  },
  {
    number: "02",
    title: "We build the chain",
    body: "Kartel's orchestration layer routes your brief through the right tools, the right talent, and the right workflows — built specifically for your brand.",
  },
  {
    number: "03",
    title: "Assets delivered",
    body: "Brand-accurate creative across every channel and format. You review, direct, and select. We produce. Fast time-to-market, zero supply chain management on your side.",
  },
  {
    number: "04",
    title: "System learns",
    body: "Performance data feeds back in. Brand intelligence compounds. Each job makes the next one faster, smarter, and more precisely yours.",
  },
];

// ── Scroll-reveal hook ────────────────────────────────────────────────────────

function useInView(threshold = 0.2) {
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

// ── Main component ────────────────────────────────────────────────────────────

export function HowItWorks() {
  const { ref, visible } = useInView();

  return (
    <section
      id="how-it-works"
      style={{ backgroundColor: "#F7F7F8", paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1280px",
          paddingLeft: "clamp(24px, 6.25vw, 80px)",
          paddingRight: "clamp(24px, 6.25vw, 80px)",
        }}
      >
        {/* Label */}
        <p style={{
          fontSize: "12px", fontWeight: 600, textTransform: "uppercase",
          letterSpacing: "0.1em", color: "#4F5FE6", margin: "0 0 16px",
        }}>
          How It Works
        </p>

        {/* Headline */}
        <h2 style={{
          fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, color: "#1B1F2A",
          lineHeight: 1.15, letterSpacing: "-0.015em", margin: "0 0 56px",
        }}>
          Start where you need to. Scale from there.
        </h2>

        {/* ── Desktop timeline (md+) ── */}
        <div ref={ref} className="hidden md:block">
          <div style={{ position: "relative" }}>
            {/* Connecting line — horizontally centered on the circles */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "23px", /* half of 48px circle */
                left: "calc(12.5%)",   /* center of first col */
                right: "calc(12.5%)",  /* center of last col */
                height: "1px",
                backgroundColor: "#E5E7EB",
                zIndex: 0,
              }}
            />

            {/* Steps grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {/* Circle */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      border: "2px solid #E5E7EB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#1B1F2A", letterSpacing: "0.02em" }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <p style={{
                    fontSize: "18px", fontWeight: 700, color: "#1B1F2A",
                    margin: "24px 0 0", lineHeight: 1.3,
                  }}>
                    {step.title}
                  </p>

                  {/* Body */}
                  <p style={{
                    fontSize: "15px", color: "#5E6370", lineHeight: 1.65,
                    margin: "8px 0 0",
                  }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile timeline (< md) ── */}
        <div ref={ref} className="block md:hidden">
          <div style={{ position: "relative", paddingLeft: "36px" }}>
            {/* Vertical connecting line */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "23px", /* center of 48px circle */
                top: "24px",
                bottom: "24px",
                width: "1px",
                backgroundColor: "#E5E7EB",
                zIndex: 0,
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "24px",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
                    position: "relative",
                    zIndex: 1,
                    marginLeft: "-36px",
                  }}
                >
                  {/* Circle */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      border: "2px solid #E5E7EB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#1B1F2A", letterSpacing: "0.02em" }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div style={{ paddingTop: "8px" }}>
                    <p style={{ fontSize: "18px", fontWeight: 700, color: "#1B1F2A", margin: 0, lineHeight: 1.3 }}>
                      {step.title}
                    </p>
                    <p style={{ fontSize: "15px", color: "#5E6370", lineHeight: 1.65, margin: "8px 0 0" }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
