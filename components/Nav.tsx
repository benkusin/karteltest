"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavDropdown } from "@/types";

// ── Data ────────────────────────────────────────────────────────────────────

const NAV_DROPDOWNS: NavDropdown[] = [
  {
    label: "Platform",
    columns: [
      {
        items: [
          { label: "Data Engineering", href: "/platform/data-engineering" },
          { label: "Data Warehousing", href: "/platform/data-warehousing" },
          { label: "Machine Learning", href: "/platform/machine-learning" },
          { label: "Streaming", href: "/platform/streaming" },
          { label: "Mosaic AI", href: "/platform/mosaic-ai" },
          { label: "Lakeflow", href: "/platform/lakeflow" },
          { label: "Lakebase", href: "/platform/lakebase" },
          { label: "Unity Catalog", href: "/platform/unity-catalog" },
          { label: "Delta Sharing", href: "/platform/delta-sharing" },
          { label: "Databricks SQL", href: "/platform/databricks-sql" },
          { label: "AI/BI", href: "/platform/ai-bi" },
          { label: "Databricks Apps", href: "/platform/databricks-apps" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        heading: "By Industry",
        items: [
          { label: "Financial Services", href: "/solutions/financial-services" },
          { label: "Healthcare & Life Sciences", href: "/solutions/healthcare" },
          { label: "Media & Entertainment", href: "/solutions/media" },
          { label: "Retail & CPG", href: "/solutions/retail" },
          { label: "Public Sector", href: "/solutions/public-sector" },
          { label: "Manufacturing", href: "/solutions/manufacturing" },
          { label: "Technology", href: "/solutions/technology" },
        ],
      },
      {
        heading: "By Use Case",
        items: [
          { label: "Data Engineering", href: "/solutions/use-case/data-engineering" },
          { label: "Data Warehousing", href: "/solutions/use-case/data-warehousing" },
          { label: "Generative AI", href: "/solutions/use-case/generative-ai" },
          { label: "Machine Learning", href: "/solutions/use-case/machine-learning" },
          { label: "Data Governance", href: "/solutions/use-case/data-governance" },
          { label: "Real-Time Analytics", href: "/solutions/use-case/real-time-analytics" },
          { label: "Marketing Analytics", href: "/solutions/use-case/marketing-analytics" },
        ],
      },
      {
        heading: "By Cloud",
        items: [
          { label: "AWS", href: "/solutions/aws" },
          { label: "Azure", href: "/solutions/azure" },
          { label: "Google Cloud", href: "/solutions/google-cloud" },
        ],
      },
    ],
  },
  {
    label: "Learn",
    columns: [
      {
        items: [
          { label: "Documentation", href: "/learn/documentation" },
          { label: "Tutorials", href: "/learn/tutorials" },
          { label: "Blog", href: "/blog" },
          { label: "Events", href: "/learn/events" },
          { label: "Certification", href: "/learn/certification" },
          { label: "Community", href: "/learn/community" },
          { label: "Webinars", href: "/learn/webinars" },
        ],
      },
    ],
  },
  {
    label: "Company",
    columns: [
      {
        items: [
          { label: "About Us", href: "/company/about" },
          { label: "Customers", href: "/company/customers" },
          { label: "Partners", href: "/company/partners" },
          { label: "Newsroom", href: "/company/newsroom" },
          { label: "Careers", href: "/company/careers" },
          { label: "Contact Us", href: "/company/contact" },
          { label: "Press Kit", href: "/company/press-kit" },
        ],
      },
    ],
  },
];

// ── Logo ─────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 flex-shrink-0">
      {/* Red square placeholder for flame icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <rect width="20" height="20" rx="2" fill="#FF3621" />
      </svg>
      <span
        className="text-xl font-bold tracking-tight"
        style={{ color: "#1B3139" }}
      >
        databricks
      </span>
    </Link>
  );
}

// ── Dropdown panel ────────────────────────────────────────────────────────────

interface DropdownPanelProps {
  dropdown: NavDropdown;
}

function DropdownPanel({ dropdown }: DropdownPanelProps) {
  const multiCol = dropdown.columns.length > 1;

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full mt-0 bg-white"
      style={{
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        borderTop: "2px solid #FF3621",
        padding: "24px 32px",
        minWidth: multiCol ? "640px" : "220px",
        zIndex: 200,
      }}
    >
      <div
        className={cn(
          "grid gap-x-10",
          multiCol ? `grid-cols-${dropdown.columns.length}` : "grid-cols-1"
        )}
        style={{
          gridTemplateColumns: multiCol
            ? `repeat(${dropdown.columns.length}, minmax(0, 1fr))`
            : undefined,
        }}
      >
        {dropdown.columns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-1">
            {col.heading && (
              <p
                className="mb-2 font-semibold"
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#6B6760",
                }}
              >
                {col.heading}
              </p>
            )}
            {col.items.map((item) => (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                className="whitespace-nowrap transition-colors duration-150"
                style={{ fontSize: "14px", color: "#1B3139" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#FF3621";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#1B3139";
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Desktop nav item with dropdown ───────────────────────────────────────────

interface NavItemDesktopProps {
  label: string;
  href?: string;
  dropdown?: NavDropdown;
}

function NavItemDesktop({ label, href, dropdown }: NavItemDesktopProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click (safety net)
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {href ? (
        <Link
          href={href}
          className="flex items-center gap-1 transition-colors duration-150"
          style={{ fontSize: "15px", fontWeight: 500, color: "#1B3139" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#FF3621";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#1B3139";
          }}
        >
          {label}
        </Link>
      ) : (
        <button
          className="flex items-center gap-1 transition-colors duration-150 bg-transparent border-0 cursor-pointer p-0"
          style={{ fontSize: "15px", fontWeight: 500, color: open ? "#FF3621" : "#1B3139" }}
          aria-haspopup="true"
          aria-expanded={open}
        >
          {label}
          <span
            className="text-xs transition-transform duration-200"
            style={{ display: "inline-block", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            aria-hidden="true"
          >
            ▾
          </span>
        </button>
      )}

      {dropdown && open && <DropdownPanel dropdown={dropdown} />}
    </div>
  );
}

// ── Mobile accordion item ─────────────────────────────────────────────────────

interface MobileNavItemProps {
  label: string;
  href?: string;
  dropdown?: NavDropdown;
  onClose: () => void;
}

function MobileNavItem({ label, href, dropdown, onClose }: MobileNavItemProps) {
  const [expanded, setExpanded] = useState(false);

  if (!dropdown) {
    return (
      <Link
        href={href ?? "#"}
        className="block py-3 border-b font-medium text-base"
        style={{ color: "#1B3139", borderColor: "#EDEAE5" }}
        onClick={onClose}
      >
        {label}
      </Link>
    );
  }

  return (
    <div className="border-b" style={{ borderColor: "#EDEAE5" }}>
      <button
        className="flex items-center justify-between w-full py-3 font-medium text-base bg-transparent border-0 cursor-pointer p-0 text-left"
        style={{ color: "#1B3139" }}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {label}
        <span
          className="text-xs transition-transform duration-200"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {expanded && (
        <div className="pb-3 flex flex-col gap-4">
          {dropdown.columns.map((col, colIdx) => (
            <div key={colIdx}>
              {col.heading && (
                <p
                  className="mb-1 font-semibold"
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#6B6760",
                  }}
                >
                  {col.heading}
                </p>
              )}
              <div className="flex flex-col gap-1 pl-2">
                {col.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href ?? "#"}
                    className="py-1 text-sm transition-colors duration-150"
                    style={{ color: "#1B3139" }}
                    onClick={onClose}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#FF3621";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#1B3139";
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Hamburger icon ────────────────────────────────────────────────────────────

interface HamburgerProps {
  open: boolean;
  onClick: () => void;
}

function Hamburger({ open, onClick }: HamburgerProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 bg-transparent border-0 cursor-pointer rounded"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <span
        className="block w-6 h-0.5 transition-all duration-300 origin-center"
        style={{
          backgroundColor: "#1B3139",
          transform: open ? "translateY(8px) rotate(45deg)" : "none",
        }}
      />
      <span
        className="block w-6 h-0.5 transition-all duration-300"
        style={{
          backgroundColor: "#1B3139",
          opacity: open ? 0 : 1,
        }}
      />
      <span
        className="block w-6 h-0.5 transition-all duration-300 origin-center"
        style={{
          backgroundColor: "#1B3139",
          transform: open ? "translateY(-8px) rotate(-45deg)" : "none",
        }}
      />
    </button>
  );
}

// ── Main Nav component ────────────────────────────────────────────────────────

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 4);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="w-full bg-white"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          height: "76px",
          borderBottom: "1px solid #EDEAE5",
          boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
          transition: "box-shadow 0.2s ease",
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

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
            {NAV_DROPDOWNS.map((item) => (
              <NavItemDesktop
                key={item.label}
                label={item.label}
                dropdown={item}
              />
            ))}
            <NavItemDesktop label="Pricing" href="/pricing" />
          </nav>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="font-medium transition-colors duration-150"
              style={{ fontSize: "15px", color: "#1B3139" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#FF3621";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#1B3139";
              }}
            >
              Log In
            </Link>
            <Link
              href="/try-databricks"
              className="font-semibold text-white rounded transition-colors duration-150"
              style={{
                backgroundColor: "#FF3621",
                padding: "10px 20px",
                fontSize: "15px",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#E02E1A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FF3621";
              }}
            >
              Try Databricks
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <Hamburger open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-white overflow-y-auto lg:hidden"
          style={{ zIndex: 99, top: "76px" }}
        >
          <div
            className="mx-auto px-6 py-4 flex flex-col"
            style={{ maxWidth: "1280px" }}
          >
            {NAV_DROPDOWNS.map((item) => (
              <MobileNavItem
                key={item.label}
                label={item.label}
                dropdown={item}
                onClose={() => setMobileOpen(false)}
              />
            ))}
            <MobileNavItem
              label="Pricing"
              href="/pricing"
              onClose={() => setMobileOpen(false)}
            />

            {/* Mobile CTA buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="/login"
                className="text-center font-medium py-3 border rounded transition-colors duration-150"
                style={{
                  color: "#1B3139",
                  borderColor: "#1B3139",
                  borderRadius: "4px",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/try-databricks"
                className="text-center font-semibold text-white py-3 rounded"
                style={{
                  backgroundColor: "#FF3621",
                  borderRadius: "4px",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Try Databricks
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
