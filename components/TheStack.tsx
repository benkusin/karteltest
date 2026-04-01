"use client";

import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

interface TabData {
  id: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
  ctas: Array<{ label: string; isModal?: boolean }>;
}

const TABS: TabData[] = [
  {
    id: "platform",
    label: "Platform",
    title: "Build your brand command center",
    body: "A clean, intuitive interface built for brands and their agencies. Submit a brief in minutes. Track every deliverable in real time. Review, comment, request changes, and approve final assets — all in one place, with no production complexity leaking through.",
    bullets: [
      "Global campaign dashboard across all brands and divisions",
      "Project & task tracking with real-time status",
      "Built-in client chat on every deliverable",
      "Full desktop and mobile experience",
    ],
    ctas: [
      { label: "See how →", isModal: true },
      { label: "Schedule demo →", isModal: true },
    ],
  },
  {
    id: "orchestration",
    label: "Orchestration",
    title: "Where your production logic lives",
    body: "The operational spine of Kartel — invisible to clients, indispensable to production. Every brief is automatically broken into tasks, assembled into the right team, tracked through production, and delivered on schedule. Budget oversight, team coordination, and delivery management all run here.",
    bullets: [
      "Client & campaign management with full hierarchy",
      "Task sequencing & assignment from brief to delivery",
      "Cost & credit analytics across the entire operation",
      "Asset library & media search across all clients",
    ],
    ctas: [
      { label: "See how →", isModal: true },
      { label: "Watch demo →", isModal: true },
    ],
  },
  {
    id: "talent",
    label: "Talent",
    title: "Human creative intelligence directing the machine",
    body: "Creative engineers, generative artists, model trainers, and production specialists who know how to get the best from every tool. Not freelancers on a platform — embedded specialists who learn your brand and compound their expertise over time.",
    bullets: [
      "Dedicated creative engineers per client",
      "Prompt engineers and model trainers on staff",
      "Production specialists managing quality and delivery",
      "Human + AI collaboration at every stage",
    ],
    ctas: [
      { label: "Meet the team →", isModal: true },
      { label: "Schedule demo →", isModal: true },
    ],
  },
  {
    id: "tools",
    label: "Tools & Agents",
    title: "Generative infrastructure that runs for you",
    body: "The best generative AI tools in the market — connected, controlled, and operated as a production system. Not a toolkit you manage, but a machine that produces. Models are fine-tuned on your brand. Agents run continuously. Workflows are engineered to your specifications.",
    bullets: [
      "Real-time multiplayer generative canvas",
      "Custom model training on your brand data",
      "Agentic production — 24/7 autonomous generation",
      "Node-based workflow architecture",
    ],
    ctas: [
      { label: "See how →", isModal: true },
      { label: "Watch demo →", isModal: true },
    ],
  },
  {
    id: "data",
    label: "Data & Training",
    title: "The compounding advantage",
    body: "Brand data, performance signals, and usage patterns continuously train custom models that get more accurate and more native to your brand over time. Every brief, every approval, every performance metric feeds back into a system that knows your brand better than any agency ever could.",
    bullets: [
      "Brand intelligence that compounds with every job",
      "Performance data feedback loops",
      "Custom model fine-tuning on visual identity and tone",
      "Approval pattern learning for faster iterations",
    ],
    ctas: [
      { label: "See how →", isModal: true },
      { label: "Schedule demo →", isModal: true },
    ],
  },
];

// ── Tab button ────────────────────────────────────────────────────────────────

interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function TabButton({ label, active, onClick }: TabButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "10px 20px",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: 500,
        border: "none",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "background-color 0.2s ease, color 0.2s ease",
        backgroundColor: active
          ? "#4F5FE6"
          : hovered
          ? "#F7F7F8"
          : "transparent",
        color: active ? "#FFFFFF" : "#5E6370",
      }}
      aria-selected={active}
      role="tab"
    >
      {label}
    </button>
  );
}

// ── Tab panel ─────────────────────────────────────────────────────────────────

interface TabPanelProps {
  tab: TabData;
  onOpenModal?: () => void;
  visible: boolean;
}

function TabPanel({ tab, onOpenModal, visible }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "40px",
        alignItems: "center",
        pointerEvents: visible ? "auto" : "none",
      }}
      className="md:grid-cols-2"
    >
      {/* Screenshot placeholder */}
      <div
        style={{
          width: "100%",
          height: "380px",
          backgroundColor: "#242836",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          {tab.label} screenshot
        </span>
      </div>

      {/* Copy */}
      <div style={{ paddingLeft: "0" }} className="md:pl-12">
        <h3 style={{
          fontSize: "24px", fontWeight: 700, color: "#1B1F2A",
          margin: 0, lineHeight: 1.25,
        }}>
          {tab.title}
        </h3>

        <p style={{
          fontSize: "16px", color: "#5E6370", lineHeight: 1.65,
          marginTop: "12px", marginBottom: "24px",
        }}>
          {tab.body}
        </p>

        {/* Bullets */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {tab.bullets.map((bullet) => (
            <li
              key={bullet}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontSize: "15px",
                color: "#1B1F2A",
                lineHeight: 2.0,
              }}
            >
              <span style={{ color: "#4F5FE6", marginTop: "2px", flexShrink: 0, fontSize: "16px" }}>✓</span>
              {bullet}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginTop: "24px", flexWrap: "wrap" }}>
          {tab.ctas.map((cta) => (
            <button
              key={cta.label}
              onClick={cta.isModal ? onOpenModal : undefined}
              style={{
                background: "none", border: "none", padding: 0,
                fontSize: "15px", fontWeight: 500, color: "#4F5FE6",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.textDecoration = "underline"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.textDecoration = "none"; }}
            >
              {cta.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

interface TheStackProps {
  onOpenModal?: () => void;
}

export function TheStack({ onOpenModal }: TheStackProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="the-stack"
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
        {/* Label */}
        <p style={{
          fontSize: "12px", fontWeight: 600, textTransform: "uppercase",
          letterSpacing: "0.1em", color: "#4F5FE6", margin: "0 0 16px",
        }}>
          The Stack
        </p>

        {/* Headline */}
        <h2 style={{
          fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, color: "#1B1F2A",
          lineHeight: 1.15, letterSpacing: "-0.015em", margin: "0 0 40px",
        }}>
          Every layer. One company. Zero dependencies.
        </h2>

        {/* Tab bar */}
        <div
          role="tablist"
          aria-label="The Stack tabs"
          style={{
            display: "flex",
            gap: "4px",
            overflowX: "auto",
            paddingBottom: "2px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          } as React.CSSProperties}
        >
          {TABS.map((tab, i) => (
            <TabButton
              key={tab.id}
              label={tab.label}
              active={activeIdx === i}
              onClick={() => setActiveIdx(i)}
            />
          ))}
        </div>

        {/* Tab panels — stacked, only active one is visible */}
        <div style={{ marginTop: "40px", position: "relative" }}>
          {TABS.map((tab, i) => (
            <div
              key={tab.id}
              style={{
                position: i === 0 ? "relative" : "absolute",
                top: 0,
                left: 0,
                width: "100%",
                opacity: activeIdx === i ? 1 : 0,
                pointerEvents: activeIdx === i ? "auto" : "none",
                transition: "opacity 0.3s ease",
              }}
            >
              <TabPanel
                tab={tab}
                onOpenModal={onOpenModal}
                visible={activeIdx === i}
              />
            </div>
          ))}
          {/* Spacer so section has correct height regardless of active tab */}
          <div style={{ visibility: "hidden", pointerEvents: "none" }}>
            <TabPanel tab={TABS[0]} visible={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
