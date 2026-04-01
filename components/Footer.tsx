import Link from "next/link";
import type { FooterColumn } from "@/types";

const footerColumns: FooterColumn[] = [
  {
    heading: "Platform",
    links: [
      { label: "Data Engineering", href: "#" },
      { label: "Data Warehousing", href: "#" },
      { label: "Machine Learning", href: "#" },
      { label: "Streaming", href: "#" },
      { label: "Mosaic AI", href: "#" },
      { label: "Lakeflow", href: "#" },
      { label: "Lakebase", href: "#" },
      { label: "Unity Catalog", href: "#" },
      { label: "Delta Sharing", href: "#" },
      { label: "Databricks SQL", href: "#" },
      { label: "AI/BI", href: "#" },
      { label: "Databricks Apps", href: "#" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Financial Services", href: "#" },
      { label: "Healthcare & Life Sciences", href: "#" },
      { label: "Media & Entertainment", href: "#" },
      { label: "Retail & CPG", href: "#" },
      { label: "Public Sector", href: "#" },
      { label: "Manufacturing", href: "#" },
      { label: "Technology", href: "#" },
      { label: "AWS", href: "#" },
      { label: "Azure", href: "#" },
      { label: "Google Cloud", href: "#" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Tutorials", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Events", href: "#" },
      { label: "Certification", href: "#" },
      { label: "Community", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "Training", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
  },
];

const legalLinks: Array<{ label: string; href: string }> = [
  { label: "Privacy Notice", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Cookie Settings", href: "#" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1B3139" }} className="pt-20 pb-10">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Top grid: logo column + 4 link columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Logo Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[#FF3621] text-base leading-none">&#9632;</span>
              <span
                className="text-white font-bold"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                databricks
              </span>
            </div>
            <p
              className="mt-3"
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              The Data Intelligence Platform
            </p>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.heading} className="md:col-span-1">
              <h3
                className="text-white mb-4 uppercase tracking-[0.08em]"
                style={{ fontSize: "13px", fontWeight: 600 }}
              >
                {col.heading}
              </h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 leading-loose hover:text-white hover:underline transition-colors"
                      style={{ fontSize: "14px", fontWeight: 400 }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-16 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
            &copy; 2026 Databricks, Inc.
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
