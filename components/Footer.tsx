const COLUMNS = [
  {
    heading: "Product",
    links: ["Platform", "The Stack", "Pricing", "Documentation"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Case Studies", "Demos", "Guides"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Contact", "Security"],
  },
];

const LINK_STYLE = {
  fontSize: "14px",
  color: "#A0A5B2",
  textDecoration: "none",
  lineHeight: "2.2",
  display: "block",
  transition: "color 0.2s ease",
} as const;

export function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "#1B1F2A",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingTop: "64px",
        paddingBottom: "32px",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1280px",
          paddingLeft: "clamp(24px, 6.25vw, 80px)",
          paddingRight: "clamp(24px, 6.25vw, 80px)",
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
          }}
          className="sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]"
        >
          {/* Brand column */}
          <div>
            <p style={{
              fontSize: "18px", fontWeight: 700, color: "#FFFFFF",
              letterSpacing: "0.18em", margin: 0,
            }}>
              KARTEL
            </p>
            <p style={{ fontSize: "14px", color: "#A0A5B2", marginTop: "8px", lineHeight: 1.6 }}>
              AI creative supply chain
            </p>
            <p style={{ fontSize: "14px", color: "#A0A5B2", margin: 0, lineHeight: 1.6 }}>
              Built &amp; operated
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p style={{
                fontSize: "12px", fontWeight: 600, textTransform: "uppercase",
                letterSpacing: "0.1em", color: "#FFFFFF", margin: "0 0 16px",
              }}>
                {col.heading}
              </p>
              <nav>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={LINK_STYLE}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#A0A5B2"; }}
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "#A0A5B2", margin: 0 }}>
            © 2026 Kartel AI. All rights reserved.
          </p>
          <p style={{ fontSize: "13px", color: "#A0A5B2", margin: 0 }}>
            <a href="#" style={{ color: "#A0A5B2", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#A0A5B2"; }}>
              Privacy
            </a>
            {" · "}
            <a href="#" style={{ color: "#A0A5B2", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#A0A5B2"; }}>
              Terms
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
