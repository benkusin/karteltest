const LOGOS = [
  "MGM RESORTS",
  "NETFLIX",
  "NEWELL BRANDS",
  "WARNER MUSIC GROUP",
  "COLEMAN",
];

export function CustomerLogoBar() {
  return (
    <section
      style={{
        backgroundColor: "#F7F7F8",
        paddingTop: "48px",
        paddingBottom: "48px",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1280px",
          paddingLeft: "clamp(24px, 6.25vw, 80px)",
          paddingRight: "clamp(24px, 6.25vw, 80px)",
          textAlign: "center",
        }}
      >
        {/* Label */}
        <p
          style={{
            fontSize: "12px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#5E6370",
            margin: 0,
          }}
        >
          Trusted by brands and studios
        </p>

        {/* Wordmarks */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
            marginTop: "24px",
          }}
          className="logo-bar-row"
        >
          {LOGOS.map((name) => (
            <span
              key={name}
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "rgba(27, 31, 42, 0.35)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .logo-bar-row {
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
