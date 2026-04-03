"use client";

import { useState } from "react";

// ── Platform dashboard mockup ─────────────────────────────────────────────────

function PlatformMockup() {
  const rows = [
    { name: "No Title",               project: "Carbone Riviera at Bellagio", priority: "Medium", status: "Draft",       statusColor: "#E5E7EB", statusText: "#5E6370" },
    { name: "Data Parsing",           project: 'Bruno Mars ("The Romantic…)', priority: "Medium", status: "Scheduled",   statusColor: "#DBEAFE", statusText: "#1D4ED8" },
    { name: "No Title",               project: "Carbone Riviera at Bellagio", priority: "Medium", status: "Draft",       statusColor: "#E5E7EB", statusText: "#5E6370" },
    { name: "Social Media - Assets",  project: 'Bruno Mars ("The Romantic…)', priority: "Medium", status: "In Progress", statusColor: "#D1FAE5", statusText: "#065F46" },
    { name: "On-Sale 15s Cutdown",    project: 'Bruno Mars ("The Romantic…)', priority: "Assigned",status: "Assigned",   statusColor: "#FEF3C7", statusText: "#92400E" },
  ];

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Monitor frame */}
      <div style={{
        background: "linear-gradient(160deg,#3a3a3c 0%,#1c1c1e 100%)",
        borderRadius: "16px 16px 8px 8px",
        padding: "12px 12px 8px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}>
        {/* Screen bezel */}
        <div style={{
          backgroundColor: "#000",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.05)",
        }}>
          {/* Screen content */}
          <div style={{ display: "flex", height: "340px", fontSize: "9px", fontFamily: "system-ui,sans-serif" }}>

            {/* Sidebar */}
            <div style={{ width: "110px", backgroundColor: "#1B1F2A", flexShrink: 0, display: "flex", flexDirection: "column", padding: "10px 0" }}>
              {/* Logo */}
              <div style={{ padding: "0 10px 10px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontWeight: 900, fontSize: "11px", letterSpacing: "0.15em", color: "#fff" }}>KARTEL</div>
                <div style={{ fontSize: "6px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", marginTop: "2px" }}>CREATIVE INTELLIGENCE PLATFORM</div>
              </div>
              {/* Company */}
              <div style={{ padding: "8px 10px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: "6px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Company</div>
                <div style={{ fontSize: "8px", color: "#fff", fontWeight: 600, marginTop: "2px" }}>MGM Resorts</div>
              </div>
              {/* Nav */}
              <div style={{ padding: "8px 0", flex: 1 }}>
                {[
                  { label: "Dashboard", active: true },
                  { label: "Projects", active: false },
                  { label: "Deliverables", active: false },
                  { label: "Activity Log", active: false },
                ].map(({ label, active }) => (
                  <div key={label} style={{
                    padding: "5px 10px",
                    fontSize: "8px",
                    fontWeight: active ? 600 : 400,
                    color: active ? "#fff" : "rgba(255,255,255,0.5)",
                    backgroundColor: active ? "rgba(79,95,230,0.3)" : "transparent",
                    borderRadius: active ? "4px" : 0,
                    margin: active ? "0 6px" : 0,
                  }}>
                    {label}
                  </div>
                ))}
                <div style={{ padding: "8px 10px 3px", fontSize: "6px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Admin</div>
                {["Users","Clients"].map(l => (
                  <div key={l} style={{ padding: "5px 10px", fontSize: "8px", color: "rgba(255,255,255,0.5)" }}>{l}</div>
                ))}
              </div>
              {/* User */}
              <div style={{ padding: "8px 10px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#7C3AED", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "7px", fontWeight: 700, color: "#fff", flexShrink: 0 }}>BK</div>
                <div>
                  <div style={{ fontSize: "7px", fontWeight: 600, color: "#fff" }}>Ben Kusin</div>
                  <div style={{ fontSize: "6px", color: "rgba(255,255,255,0.4)" }}>ben@kartel.ai</div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div style={{ flex: 1, backgroundColor: "#F5F5F7", overflowY: "auto", padding: "12px 14px" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#1B1F2A", lineHeight: 1 }}>Dashboard</div>
              <div style={{ fontSize: "7px", color: "#5E6370", marginTop: "3px", marginBottom: "10px" }}>An overview of your organisation's activity.</div>

              {/* Stat cards */}
              <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
                {[
                  { val: "5",  label: "Projects" },
                  { val: "15", label: "Deliverable Requests" },
                  { val: "17", label: "Assets Received" },
                ].map(({ val, label }) => (
                  <div key={label} style={{ flex: 1, backgroundColor: "#fff", borderRadius: "6px", padding: "8px", border: "1px solid #E5E7EB" }}>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: "#1B1F2A", lineHeight: 1 }}>{val}</div>
                    <div style={{ fontSize: "6px", color: "#5E6370", marginTop: "3px" }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* Table */}
              <div style={{ backgroundColor: "#fff", borderRadius: "6px", border: "1px solid #E5E7EB", padding: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <div style={{ fontSize: "8px", fontWeight: 600, color: "#1B1F2A" }}>Recent Deliverable Requests</div>
                  <div style={{ fontSize: "6px", color: "#4F5FE6" }}>View all</div>
                </div>
                {/* Header row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 56px 60px", gap: "4px", padding: "3px 4px", borderBottom: "1px solid #F3F4F6" }}>
                  {["NAME","PROJECT","PRIORITY","STATUS"].map(h => (
                    <div key={h} style={{ fontSize: "6px", color: "#9CA3AF", letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</div>
                  ))}
                </div>
                {rows.map((row, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 56px 60px", gap: "4px", padding: "4px", borderBottom: i < rows.length-1 ? "1px solid #F9FAFB" : "none", alignItems: "center" }}>
                    <div style={{ fontSize: "7px", color: "#1B1F2A", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.name}</div>
                    <div style={{ fontSize: "6px", color: "#5E6370", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.project}</div>
                    <div style={{ fontSize: "6px" }}>
                      <span style={{ backgroundColor: "#FEF3C7", color: "#92400E", borderRadius: "3px", padding: "1px 4px" }}>{row.priority}</span>
                    </div>
                    <div style={{ fontSize: "6px" }}>
                      <span style={{ backgroundColor: row.statusColor, color: row.statusText, borderRadius: "3px", padding: "1px 4px" }}>{row.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Monitor stand */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "60px", height: "18px", background: "linear-gradient(180deg,#3a3a3c,#2c2c2e)", clipPath: "polygon(20% 0%,80% 0%,100% 100%,0% 100%)" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100px", height: "5px", backgroundColor: "#3a3a3c", borderRadius: "3px" }} />
      </div>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

interface TabData {
  id: string;
  label: string;
  badge: string;
  title: string;
  body: string;
  tags: string[];
  ctas: Array<{ label: string; isModal?: boolean }>;
}

const TABS: TabData[] = [
  {
    id: "platform",
    label: "Platform",
    badge: "CIP",
    title: "The client-facing command center",
    body: "The Client Intelligence Platform (CIP) is the client's window into the entire supply chain. Submit projects and briefs at any level — parent brand, division, product line, or individual campaign. Track progress, review outputs, and manage feedback without ever touching the production layer beneath it. Brand governance, usage analytics, and performance data all live here.",
    tags: ["Project submission", "Brief management", "Asset delivery", "Brand governance", "Performance dashboard", "Usage analytics", "Multi-brand hierarchy"],
    ctas: [
      { label: "See how →", isModal: true },
      { label: "Schedule demo →", isModal: true },
    ],
  },
  {
    id: "orchestration",
    label: "Orchestration",
    badge: "GP · IPP",
    title: "The engine room",
    body: "Built on AWS serverless infrastructure, the Internal Production Platform (IPP) and Generative Platform (GP) handle all task sequencing, model routing, and workflow automation. A brief enters the platform and is automatically broken into tasks, assigned to the right combination of agents and talent, sequenced for production, and tracked through to delivery. Agentic agents run 24/7 across the production pipeline.",
    tags: ["Task sequencing", "Model routing", "Agentic agents", "Workflow automation", "AWS serverless", "API orchestration", "Production tracking", "24/7 operation"],
    ctas: [
      { label: "See how →", isModal: true },
      { label: "Watch demo →", isModal: true },
    ],
  },
  {
    id: "talent",
    label: "Teams & Talent",
    badge: "Human + AI",
    title: "Human creative intelligence directing the machine",
    body: "Kartel's creative talent is embedded inside the supply chain — not separate from it. Creative Engineers direct generative output and maintain brand accuracy. Production specialists manage quality and delivery pipelines. Generative artists push the tools beyond their defaults to produce work that's genuinely brand-native. ML engineers tune models and maintain training pipelines. You never need to source, hire, or manage this team — they come with the system.",
    tags: ["Creative Engineers", "Generative artists", "Production specialists", "ML engineers", "Prompt engineering", "Quality control", "Brand direction"],
    ctas: [
      { label: "Meet the team →", isModal: true },
      { label: "Schedule demo →", isModal: true },
    ],
  },
  {
    id: "tools",
    label: "Tools & Agents",
    badge: "LLM + Image + Video + MCP + CRON",
    title: "The best generative infrastructure in the market",
    body: "Kartel integrates and operates the leading generative AI tools — ComfyUI, LLMs, image and video generation models, and custom pipelines — connected through MCP and our agent network (KLAW). You don't select tools, manage APIs, or absorb model updates. The tool layer is maintained, upgraded, and optimized by our engineering team continuously. Your brief hits the platform; the right tools fire automatically.",
    tags: ["ComfyUI", "LLM models", "Image generation", "Video generation", "Agentic agents (KLAW)", "MCP integrations", "Custom pipelines", "API layer"],
    ctas: [
      { label: "See how →", isModal: true },
      { label: "Watch demo →", isModal: true },
    ],
  },
  {
    id: "data",
    label: "Data & Training",
    badge: "Brand Intelligence",
    title: "The compounding advantage",
    body: "Every job enriches your brand model. Performance data from VidMob and other sources flows back into the training layer — so Kartel learns what performs, what's on-brand, and what resonates with each audience segment. Brand data, governance rules, and usage patterns are encoded as custom training inputs. The result: outputs that get faster, more precise, and more distinctly yours with every engagement. This is the compounding moat that no one else in the market offers.",
    tags: ["Custom brand models", "Performance data loops", "Brand accuracy training", "Governance encoding", "Usage pattern learning", "Segment intelligence", "Continuous improvement", "Zero data leakage"],
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
        gap: "40px",
        alignItems: "center",
        pointerEvents: visible ? "auto" : "none",
      }}
      className="grid-cols-1 md:grid-cols-2"
    >
      {/* Visual */}
      <div style={{ flexShrink: 0 }}>
        {tab.id === "platform" ? (
          <PlatformMockup />
        ) : (
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
            }}
          >
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {tab.label} screenshot
            </span>
          </div>
        )}
      </div>

      {/* Copy */}
      <div style={{ paddingLeft: "0" }} className="md:pl-12">
        {/* Badge */}
        <span style={{
          display: "inline-block", fontSize: "11px", fontWeight: 600,
          letterSpacing: "0.06em", color: "#4F5FE6",
          background: "rgba(79,95,230,0.08)", border: "1px solid rgba(79,95,230,0.2)",
          borderRadius: "4px", padding: "3px 8px", marginBottom: "16px",
          fontFamily: "monospace",
        }}>
          {tab.badge}
        </span>

        <h3 style={{
          fontSize: "24px", fontWeight: 700, color: "#1B1F2A",
          margin: 0, lineHeight: 1.25,
        }}>
          {tab.title}
        </h3>

        <p style={{
          fontSize: "15px", color: "#5E6370", lineHeight: 1.7,
          marginTop: "12px", marginBottom: "20px",
        }}>
          {tab.body}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
          {tab.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: 500, color: "#5E6370",
              border: "1px solid #E5E7EB", borderRadius: "4px",
              padding: "4px 10px", fontFamily: "monospace",
            }}>
              {tag}
            </span>
          ))}
        </div>

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

        {/* Tab panels — inactive panels are absolute (out of flow); active panel is in flow to set true height */}
        <div style={{ marginTop: "40px", position: "relative" }}>
          {TABS.map((tab, i) => {
            const isActive = activeIdx === i;
            return (
              <div
                key={tab.id}
                style={{
                  opacity: isActive ? 1 : 0,
                  pointerEvents: isActive ? "auto" : "none",
                  transition: "opacity 0.3s ease",
                  ...(isActive ? {} : { position: "absolute", top: 0, left: 0, width: "100%" }),
                }}
              >
                <TabPanel
                  tab={tab}
                  onOpenModal={onOpenModal}
                  visible={isActive}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
