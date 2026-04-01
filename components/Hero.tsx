"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  onOpenModal?: () => void;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ── Icon SVGs ─────────────────────────────────────────────────────────────────

function IconPlatform() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="2" width="16" height="11" rx="2" stroke="white" strokeWidth="1.5" strokeOpacity="0.9" fill="none"/>
      <path d="M6 16h6M9 13v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.9"/>
    </svg>
  );
}

function IconOrchestration() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="4" cy="9" r="2" stroke="white" strokeWidth="1.5" strokeOpacity="0.9"/>
      <circle cx="14" cy="4" r="2" stroke="white" strokeWidth="1.5" strokeOpacity="0.9"/>
      <circle cx="14" cy="14" r="2" stroke="white" strokeWidth="1.5" strokeOpacity="0.9"/>
      <path d="M6 9h3M9 9L12 4.5M9 9L12 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7"/>
    </svg>
  );
}

function IconTalent() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="6" r="3" stroke="white" strokeWidth="1.5" strokeOpacity="0.9"/>
      <path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.9"/>
    </svg>
  );
}

function IconTools() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M10 3l-1.5 4H13L8 15l1.5-4.5H6L10 3z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" strokeOpacity="0.9" fill="none"/>
    </svg>
  );
}

// ── Stack graphic ─────────────────────────────────────────────────────────────

function StackGraphic() {
  const [hovered, setHovered] = useState<number | null>(null);

  const LAYERS = [
    {
      label: "Platform",
      sub: "Kartel OS — proprietary creative infrastructure",
      bg: "#4F5FE6",
      bgHover: "#5B6AEA",
      glow: "rgba(79,95,230,0.5)",
      icon: <IconPlatform />,
    },
    {
      label: "Orchestration",
      sub: "Workflow automation, model routing & task sequencing",
      bg: "#3A4BD4",
      bgHover: "#4557DC",
      glow: "rgba(58,75,212,0.4)",
      icon: <IconOrchestration />,
    },
    {
      label: "Talent",
      sub: "AI artists, prompt engineers & creative directors",
      bg: "#2A38AA",
      bgHover: "#3344B8",
      glow: "rgba(42,56,170,0.4)",
      icon: <IconTalent />,
    },
    {
      label: "Tools",
      sub: "ComfyUI, gen-AI models, APIs & custom pipelines",
      bg: "#1C2880",
      bgHover: "#243090",
      glow: "rgba(28,40,128,0.4)",
      icon: <IconTools />,
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(160deg, #0C0E1C 0%, #111527 50%, #0E1020 100%)",
        borderRadius: "16px",
        padding: "24px 20px 20px",
        border: "1px solid rgba(79,95,230,0.18)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.03) inset",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glow */}
      <div style={{
        position: "absolute", top: "-40px", left: "50%", transform: "translateX(-50%)",
        width: "200px", height: "120px",
        background: "radial-gradient(ellipse, rgba(79,95,230,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "20px", position: "relative" }}>
        <p style={{
          fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em",
          color: "rgba(255,255,255,0.35)", textTransform: "uppercase", margin: 0,
        }}>
          The Creative Stack
        </p>
      </div>

      {/* Layers */}
      <div style={{ perspective: "900px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", transform: "rotateX(4deg)", transformStyle: "preserve-3d" }}>
          {LAYERS.map((layer, i) => {
            const isHovered = hovered === i;
            const zDepth = (LAYERS.length - 1 - i) * 6;
            return (
              <div key={layer.label}>
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    background: isHovered
                      ? `linear-gradient(115deg, ${layer.bgHover} 0%, ${layer.bg} 100%)`
                      : `linear-gradient(115deg, ${layer.bg} 0%, ${layer.bg}CC 100%)`,
                    borderRadius: "8px",
                    padding: "11px 14px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: isHovered
                      ? `0 8px 28px ${layer.glow}, 0 1px 0 rgba(255,255,255,0.15) inset`
                      : `0 ${3 + i}px ${10 + zDepth}px ${layer.glow}, 0 1px 0 rgba(255,255,255,0.07) inset`,
                    transform: `translateZ(${zDepth}px) ${isHovered ? "translateY(-1px) scale(1.01)" : ""}`,
                    transition: "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "default",
                    position: "relative",
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: "34px", height: "34px", borderRadius: "7px",
                    backgroundColor: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 1px 0 rgba(255,255,255,0.1) inset",
                  }}>
                    {layer.icon}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: "13px", fontWeight: 700, color: "#fff", letterSpacing: "0.01em", lineHeight: 1.2 }}>
                      {layer.label}
                    </p>
                    <p style={{ margin: "3px 0 0", fontSize: "10.5px", color: "rgba(255,255,255,0.6)", lineHeight: 1.4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {layer.sub}
                    </p>
                  </div>

                  {/* Layer indicator */}
                  <div style={{
                    width: "6px", height: "6px", borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.4)",
                    flexShrink: 0,
                    boxShadow: "0 0 6px rgba(255,255,255,0.3)",
                  }} />
                </div>

                {/* Connector arrow between layers */}
                {i < LAYERS.length - 1 && (
                  <div style={{ display: "flex", justifyContent: "center", height: "8px", alignItems: "center" }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M5 0 L5 5 M2.5 3 L5 6 L7.5 3" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <p style={{
        textAlign: "center", fontSize: "10px",
        color: "rgba(255,255,255,0.2)",
        margin: "16px 0 0", letterSpacing: "0.06em",
      }}>
        Every layer. One company. Zero dependencies.
      </p>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

export function Hero({ onOpenModal }: HeroProps) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = requestAnimationFrame(() => setLoaded(true)); return () => cancelAnimationFrame(t); }, []);

  const reveal = (delay = 0): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
  });

  return (
    <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "var(--section-py)" }}>
      <div className="mx-auto" style={{ maxWidth: "1280px", paddingLeft: "clamp(24px, 6.25vw, 80px)", paddingRight: "clamp(24px, 6.25vw, 80px)" }}>
        <div style={{ display: "grid", gap: "48px", alignItems: "center" }} className="grid-cols-1 lg:grid-cols-[3fr_2fr]">

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

          {/* Right — 3D stack graphic */}
          <div style={reveal(200)}>
            <StackGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
