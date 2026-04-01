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
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

interface CtaBandProps {
  onOpenModal?: () => void;
}

export function CtaBand({ onOpenModal }: CtaBandProps) {
  const { ref, visible } = useInView();

  const reveal = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.5s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.5s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
  });

  return (
    <section style={{ backgroundColor: "#1B1F2A", paddingTop: "80px", paddingBottom: "80px" }}>
      <div
        ref={ref}
        className="mx-auto"
        style={{
          maxWidth: "1280px",
          paddingLeft: "clamp(24px, 6.25vw, 80px)",
          paddingRight: "clamp(24px, 6.25vw, 80px)",
          textAlign: "center",
        }}
      >
        <h2 style={{ ...reveal(0), fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, letterSpacing: "-0.015em", margin: 0 }}>
          Ready to scale your creative?
        </h2>

        <p style={{ ...reveal(80), fontSize: "18px", color: "#A0A5B2", marginTop: "16px", lineHeight: 1.6 }}>
          Take the first step — start with one project
        </p>

        <div style={{ ...reveal(160), display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", marginTop: "32px", flexWrap: "wrap" }}>
          <button
            onClick={onOpenModal}
            style={{ backgroundColor: "#FFFFFF", color: "#1B1F2A", border: "none", borderRadius: "6px", padding: "12px 28px", fontSize: "15px", fontWeight: 600, cursor: "pointer", transition: "background-color 0.2s ease" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F0F0F0"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FFFFFF"; }}
          >
            Request a demo →
          </button>
          <button
            onClick={onOpenModal}
            style={{ backgroundColor: "transparent", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "6px", padding: "12px 28px", fontSize: "15px", fontWeight: 600, cursor: "pointer", transition: "border-color 0.2s ease, background-color 0.2s ease" }}
            onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "rgba(255,255,255,0.6)"; b.style.backgroundColor = "rgba(255,255,255,0.05)"; }}
            onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "rgba(255,255,255,0.3)"; b.style.backgroundColor = "transparent"; }}
          >
            Try Kartel
          </button>
        </div>
      </div>
    </section>
  );
}
