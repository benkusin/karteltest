"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  onOpenModal?: () => void;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function PromoCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        padding: "20px",
        border: "1px solid #E5E7EB",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.25s ease",
        cursor: "pointer",
      }}
    >
      <div style={{
        width: "100%", height: "180px", backgroundColor: "#242836",
        borderRadius: "6px", marginBottom: "16px",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: "40px", height: "40px", borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.12)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
            <path d="M1 1l12 7-12 7V1z" fill="white" opacity="0.8" />
          </svg>
        </div>
      </div>
      <p style={{ fontSize: "16px", fontWeight: 700, color: "#1B1F2A", margin: 0, lineHeight: 1.35 }}>
        From 1 brief to 50+ outputs
      </p>
      <p style={{ fontSize: "14px", color: "#5E6370", marginTop: "6px", lineHeight: 1.5 }}>
        See how brands scale creative production with Kartel
      </p>
      <button
        onClick={() => scrollTo("the-stack")}
        style={{
          display: "inline-block", marginTop: "14px", fontSize: "14px",
          fontWeight: 500, color: "#4F5FE6", background: "none",
          border: "none", padding: 0, cursor: "pointer",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.textDecoration = "underline"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.textDecoration = "none"; }}
      >
        Watch the overview →
      </button>
    </div>
  );
}

export function Hero({ onOpenModal }: HeroProps) {
  // Animate in on mount — hero is above fold so use mounted state
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = requestAnimationFrame(() => setLoaded(true)); return () => cancelAnimationFrame(t); }, []);

  const reveal = (delay = 0): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
  });

  return (
    <section style={{ backgroundColor: "#FFFFFF", paddingTop: "140px", paddingBottom: "var(--section-py)" }}>
      <div className="mx-auto" style={{ maxWidth: "1280px", paddingLeft: "clamp(24px, 6.25vw, 80px)", paddingRight: "clamp(24px, 6.25vw, 80px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="lg:grid-cols-[3fr_2fr]">

          {/* Left */}
          <div>
            <h1 style={{ ...reveal(0), fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700, color: "#1B1F2A", lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: "600px", margin: 0 }}>
              Your AI creative supply chain — built and operated
            </h1>

            <p style={{ ...reveal(80), fontSize: "clamp(16px, 1.5vw, 19px)", color: "#5E6370", lineHeight: 1.65, maxWidth: "520px", marginTop: "24px" }}>
              Kartel builds the tools, assembles the talent, orchestrates the workflows,
              and operates the platform. You submit a brief. We deliver brand-accurate
              creative across every channel.
            </p>

            {/* CTAs */}
            <div style={{ ...reveal(160), display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "32px" }}>
              <button
                onClick={onOpenModal}
                style={{ backgroundColor: "#4F5FE6", color: "#FFFFFF", border: "none", borderRadius: "6px", padding: "12px 24px", fontSize: "15px", fontWeight: 600, cursor: "pointer", transition: "background-color 0.2s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#3D4BD4"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#4F5FE6"; }}
              >
                Start a pilot →
              </button>
              <button
                onClick={() => scrollTo("resources")}
                style={{ backgroundColor: "transparent", color: "#1B1F2A", border: "1px solid #E5E7EB", borderRadius: "6px", padding: "12px 24px", fontSize: "15px", fontWeight: 600, cursor: "pointer", transition: "border-color 0.2s ease, color 0.2s ease" }}
                onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "#4F5FE6"; b.style.color = "#4F5FE6"; }}
                onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "#E5E7EB"; b.style.color = "#1B1F2A"; }}
              >
                See demos →
              </button>
            </div>

            {/* Stats strip */}
            <div style={{ ...reveal(240), display: "flex", gap: "0", marginTop: "48px", flexWrap: "wrap" }}>
              {[
                { value: "1→50+",     label: "outputs per creative idea" },
                { value: "3×",        label: "faster time to market" },
                { value: "Always on", label: "learns with every job" },
              ].map((stat, i) => (
                <div key={stat.value} style={{ paddingRight: "32px", marginRight: "32px", borderRight: i < 2 ? "1px solid #E5E7EB" : "none" }}>
                  <div style={{ fontSize: "28px", fontWeight: 700, color: "#1B1F2A", lineHeight: 1.15 }}>{stat.value}</div>
                  <div style={{ fontSize: "13px", color: "#5E6370", marginTop: "4px", lineHeight: 1.4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={reveal(200)}>
            <PromoCard />
          </div>
        </div>
      </div>
    </section>
  );
}
