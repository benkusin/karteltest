"use client";

import { useState, useEffect } from "react";

// ── Smooth scroll helper ──────────────────────────────────────────────────────

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ── Data ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "How it works",  sectionId: "how-it-works" },
  { label: "The Stack",     sectionId: "the-stack" },
  { label: "Platform",      sectionId: "platform" },
  { label: "About",         sectionId: "footer" },
];

// ── Logo ──────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <a
      href="/"
      className="flex-shrink-0 font-bold tracking-widest select-none"
      style={{ fontSize: "17px", color: "#1B1F2A", letterSpacing: "0.18em", textDecoration: "none" }}
      aria-label="Kartel home"
    >
      KARTEL
    </a>
  );
}

// ── Hamburger ─────────────────────────────────────────────────────────────────

function Hamburger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-transparent border-0 cursor-pointer"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <span
        className="block w-[22px] h-[1.5px] bg-[#1B1F2A] transition-all duration-300 origin-center"
        style={{ transform: open ? "translateY(6.5px) rotate(45deg)" : "none" }}
      />
      <span
        className="block w-[22px] h-[1.5px] bg-[#1B1F2A] transition-all duration-300"
        style={{ opacity: open ? 0 : 1 }}
      />
      <span
        className="block w-[22px] h-[1.5px] bg-[#1B1F2A] transition-all duration-300 origin-center"
        style={{ transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none" }}
      />
    </button>
  );
}

// ── Main Nav ──────────────────────────────────────────────────────────────────

export function Nav({ onOpenModal }: { onOpenModal?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (sectionId: string) => {
    setMobileOpen(false);
    scrollTo(sectionId);
  };

  const handleCTAClick = () => {
    setMobileOpen(false);
    onOpenModal?.();
  };

  return (
    <>
      <header
        className="w-full bg-white transition-all duration-300"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          height: "64px",
          borderBottom: scrolled ? "1px solid #E5E7EB" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between h-full"
          style={{
            maxWidth: "1280px",
            paddingLeft: "clamp(24px, 6.25vw, 80px)",
            paddingRight: "clamp(24px, 6.25vw, 80px)",
          }}
        >
          {/* Logo */}
          <Logo />

          {/* Desktop nav links — centered */}
          <nav
            className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map(({ label, sectionId }) => (
              <button
                key={label}
                onClick={() => handleNavClick(sectionId)}
                className="bg-transparent border-0 cursor-pointer p-0 font-medium transition-colors duration-200"
                style={{ fontSize: "15px", color: "#1B1F2A" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#4F5FE6"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#1B1F2A"; }}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={handleCTAClick}
              className="bg-transparent border-0 cursor-pointer p-0 font-medium transition-colors duration-200"
              style={{ fontSize: "15px", color: "#1B1F2A" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#4F5FE6"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#1B1F2A"; }}
            >
              Contact Us
            </button>
            <button
              onClick={handleCTAClick}
              className="font-semibold text-white transition-colors duration-200"
              style={{
                backgroundColor: "#4F5FE6",
                padding: "10px 20px",
                fontSize: "15px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#3D4BD4"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#4F5FE6"; }}
            >
              Try Kartel
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden">
            <Hamburger open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-x-0 bottom-0 bg-white overflow-y-auto md:hidden"
          style={{ zIndex: 999, top: "64px" }}
        >
          <div className="flex flex-col px-6 py-6 gap-1">
            {NAV_LINKS.map(({ label, sectionId }) => (
              <button
                key={label}
                onClick={() => handleNavClick(sectionId)}
                className="text-left py-3.5 border-b border-[#E5E7EB] bg-transparent border-x-0 border-t-0 cursor-pointer font-medium"
                style={{ fontSize: "16px", color: "#1B1F2A" }}
              >
                {label}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-6">
              <button
                onClick={handleCTAClick}
                className="py-3 border border-[#E5E7EB] rounded-[6px] font-medium bg-transparent cursor-pointer transition-colors duration-200"
                style={{ fontSize: "15px", color: "#1B1F2A" }}
              >
                Contact Us
              </button>
              <button
                onClick={handleCTAClick}
                className="py-3 font-semibold text-white rounded-[6px] cursor-pointer transition-colors duration-200"
                style={{ backgroundColor: "#4F5FE6", fontSize: "15px", border: "none" }}
              >
                Try Kartel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
