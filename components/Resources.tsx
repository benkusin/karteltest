"use client";

import { useEffect, useRef, useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const CARDS = [
  {
    tag: "OVERVIEW",
    title: "The Kartel System: How It Works",
    desc: "A complete walkthrough of AI-powered creative production",
    cta: "Read now →",
  },
  {
    tag: "CASE STUDY",
    title: "Fox Studios × Kartel: Masked Singer",
    desc: "AI creative pipelines for network entertainment",
    cta: "See the case study →",
  },
  {
    tag: "PLATFORM",
    title: "The Creative Intelligence Platform",
    desc: "A tour of the three-layer system behind Kartel",
    cta: "Explore →",
  },
  {
    tag: "GUIDE",
    title: "From Agency Model to AI Supply Chain",
    desc: "Why brands are replacing fragmented vendor relationships",
    cta: "Get the guide →",
  },
];

// ── Scroll-reveal hook ────────────────────────────────────────────────────────

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

// ── Card ──────────────────────────────────────────────────────────────────────

interface CardProps {
  tag: string;
  title: string;
  desc: string;
  cta: string;
  delay: number;
  visible: boolean;
}

function ResourceCard({ tag, title, desc, cta, delay, visible }: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease, opacity 0.5s ease, translateY 0.5s ease",
        opacity: visible ? 1 : 0,
        // translate via a combined transition string
        // Note: we handle reveal translate separately below
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Reveal animation wrapper */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Thumbnail */}
        <div style={{ width: "100%", height: "140px", backgroundColor: "#242836", flexShrink: 0 }} />

        {/* Content */}
        <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
          {/* Tag */}
          <span style={{
            display: "inline-block",
            padding: "4px 10px",
            borderRadius: "4px",
            backgroundColor: "rgba(79,95,230,0.08)",
            color: "#4F5FE6",
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            alignSelf: "flex-start",
          }}>
            {tag}
          </span>

          {/* Title */}
          <p style={{
            fontSize: "16px", fontWeight: 700, color: "#1B1F2A",
            margin: "12px 0 0", lineHeight: 1.35,
          }}>
            {title}
          </p>

          {/* Description */}
          <p style={{
            fontSize: "14px", color: "#5E6370", lineHeight: 1.5,
            margin: "6px 0 0", flex: 1,
          }}>
            {desc}
          </p>

          {/* CTA */}
          <a
            href="#"
            style={{
              display: "inline-block",
              marginTop: "12px",
              fontSize: "14px",
              fontWeight: 500,
              color: "#4F5FE6",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none"; }}
          >
            {cta}
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function Resources() {
  const { ref, visible } = useInView();

  return (
    <section id="resources" style={{ backgroundColor: "#FFFFFF", paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
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
          Resources
        </p>

        {/* Headline */}
        <h2 style={{
          fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, color: "#1B1F2A",
          lineHeight: 1.15, letterSpacing: "-0.015em", margin: "0 0 48px",
        }}>
          Go deeper
        </h2>

        {/* Card grid */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "24px",
          }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {CARDS.map((card, i) => (
            <ResourceCard
              key={card.title}
              {...card}
              delay={i * 100}
              visible={visible}
            />
          ))}
        </div>

        {/* See more link */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a
            href="#"
            style={{
              fontSize: "15px", fontWeight: 500, color: "#4F5FE6", textDecoration: "none",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none"; }}
          >
            See more resources →
          </a>
        </div>
      </div>
    </section>
  );
}
