const LOGOS = [
  { name: "MGM Resorts",        domain: "mgmresorts.com" },
  { name: "Netflix",            domain: "netflix.com" },
  { name: "Newell Brands",      domain: "newellbrands.com" },
  { name: "Warner Music Group", domain: "wmg.com" },
  { name: "Coleman",            domain: "coleman.com" },
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

        {/* Logos */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
            marginTop: "28px",
          }}
          className="logo-bar-row"
        >
          {LOGOS.map(({ name, domain }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={name}
              src={`https://logo.clearbit.com/${domain}`}
              alt={name}
              width={120}
              height={40}
              style={{
                objectFit: "contain",
                maxHeight: "36px",
                width: "auto",
                filter: "grayscale(100%)",
                opacity: 0.45,
                userSelect: "none",
              }}
            />
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
