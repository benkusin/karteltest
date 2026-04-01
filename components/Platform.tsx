"use client";

import { useEffect, useRef, useState } from "react";

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconLightning() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="rgba(79,95,230,0.08)" />
      <path d="M22 8L12 22h9l-3 10 11-14h-9l3-10z" fill="#4F5FE6" />
    </svg>
  );
}

function IconExpand() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="rgba(79,95,230,0.08)" />
      <path d="M14 14h-4v4M10 14l5 5M26 14h4v4M30 14l-5 5M14 26h-4v-4M10 26l5-5M26 26h4v-4M30 26l-5-5"
        stroke="#4F5FE6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconRefresh() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="rgba(79,95,230,0.08)" />
      <path d="M27 14.5A9 9 0 1 0 29 20" stroke="#4F5FE6" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M29 14.5v5h-5" stroke="#4F5FE6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Scroll-reveal hook ────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
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

// ── Feature column ────────────────────────────────────────────────────────────

interface FeatureColProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  delay: number;
  visible: boolean;
}

function FeatureCol({ icon, title, body, delay, visible }: FeatureColProps) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {icon}
      <p style={{ fontSize: "18px", fontWeight: 700, color: "#1B1F2A", margin: "16px 0 0" }}>
        {title}
      </p>
      <p style={{ fontSize: "15px", color: "#5E6370", lineHeight: 1.6, margin: "8px 0 0" }}>
        {body}
      </p>
    </div>
  );
}

// ── Sidebar card ──────────────────────────────────────────────────────────────

interface SidebarCardProps {
  title: string;
  subtitle: string;
  linkLabel: string;
}

function SidebarCard({ title, subtitle, linkLabel }: SidebarCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        border: "1px solid #E5E7EB",
        padding: "20px",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        cursor: "pointer",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#242836",
          borderRadius: "6px",
        }}
      />
      <p style={{ fontSize: "14px", fontWeight: 700, color: "#1B1F2A", margin: "12px 0 0", lineHeight: 1.35 }}>
        {title}
      </p>
      <p style={{ fontSize: "13px", color: "#5E6370", margin: "4px 0 0", lineHeight: 1.5 }}>
        {subtitle}
      </p>
      <a
        href="#"
        style={{ display: "inline-block", marginTop: "12px", fontSize: "13px", fontWeight: 500, color: "#4F5FE6", textDecoration: "none" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none"; }}
      >
        {linkLabel}
      </a>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

interface PlatformProps {
  onOpenModal?: () => void;
}

export function Platform({ onOpenModal }: PlatformProps) {
  const { ref, visible } = useInView();

  return (
    <section
      id="platform"
      style={{ backgroundColor: "#FFFFFF", paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1280px",
          paddingLeft: "clamp(24px, 6.25vw, 80px)",
          paddingRight: "clamp(24px, 6.25vw, 80px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "64px",
            alignItems: "start",
          }}
          className="grid-cols-1 lg:grid-cols-[65fr_30fr]"
        >
          {/* ── Main content ── */}
          <div>
            {/* Label */}
            <p style={{
              fontSize: "12px", fontWeight: 600, textTransform: "uppercase",
              letterSpacing: "0.1em", color: "#4F5FE6", margin: "0 0 16px",
            }}>
              Platform
            </p>

            {/* Headline */}
            <h2 style={{
              fontSize: "clamp(30px, 3vw, 40px)", fontWeight: 700, color: "#1B1F2A",
              lineHeight: 1.15, letterSpacing: "-0.015em", margin: "0 0 16px",
            }}>
              The Kartel Creative Intelligence Platform
            </h2>

            {/* Subhead */}
            <p style={{
              fontSize: "18px", color: "#5E6370", lineHeight: 1.6,
              maxWidth: "560px", margin: "0 0 48px",
            }}>
              Kartel brings AI to your creative production to help you bring creative to the world.
            </p>

            {/* 3-column feature grid */}
            <div
              ref={ref}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "32px",
              }}
            >
              <FeatureCol
                icon={<IconLightning />}
                title="Accelerate production"
                body="Visualize and execute creative ideas at speed. Unlimited shots on goal. Ideas come alive in days, not weeks."
                delay={0}
                visible={visible}
              />
              <FeatureCol
                icon={<IconExpand />}
                title="Scale across channels"
                body="One piece of creative becomes 50+ variants across every channel, market, format, and audience segment."
                delay={100}
                visible={visible}
              />
              <FeatureCol
                icon={<IconRefresh />}
                title="Optimize continuously"
                body="Every engagement trains your brand model. The system compounds — smarter, faster, and more on-brand with every job."
                delay={200}
                visible={visible}
              />
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", alignItems: "center", gap: "24px", marginTop: "40px", flexWrap: "wrap" }}>
              <button
                onClick={() => document.getElementById("the-stack")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  backgroundColor: "#4F5FE6", color: "#FFFFFF", border: "none",
                  borderRadius: "6px", padding: "12px 24px", fontSize: "15px",
                  fontWeight: 600, cursor: "pointer", transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#3D4BD4"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#4F5FE6"; }}
              >
                Explore the platform →
              </button>
              <button
                onClick={onOpenModal}
                style={{
                  background: "none", border: "none", padding: 0, fontSize: "15px",
                  fontWeight: 500, color: "#4F5FE6", cursor: "pointer",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.textDecoration = "underline"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.textDecoration = "none"; }}
              >
                See demos
              </button>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <SidebarCard
              title="The Complete Guide to AI Creative Production"
              subtitle="How brands are rebuilding their supply chains"
              linkLabel="Get the overview →"
            />
            <SidebarCard
              title="Kartel for Entertainment Studios"
              subtitle="From script to screen — AI-powered pipelines"
              linkLabel="Learn more →"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
