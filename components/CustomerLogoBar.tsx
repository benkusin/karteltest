// Inline SVG wordmarks — no external requests, always renders

function LogoMGM() {
  return (
    <svg width="160" height="36" viewBox="0 0 160 36" fill="none" aria-label="MGM Resorts" role="img">
      {/* Lion head silhouette */}
      <path d="M8 28 C8 28 6 24 7 20 C6 18 5 16 6 14 C7 12 9 11 10 12 C10 10 11 8 13 8 C14 6 16 6 17 8 C18 6 21 6 22 8 C24 7 25 9 24 11 C26 11 27 13 26 15 C27 17 27 20 25 22 C26 25 25 28 24 28 Z" fill="currentColor" opacity="0.9"/>
      {/* MGM RESORTS text */}
      <text x="30" y="23" fontFamily="Georgia, serif" fontSize="14" fontWeight="700" letterSpacing="1.5" fill="currentColor">MGM RESORTS</text>
    </svg>
  );
}

function LogoNetflix() {
  return (
    <svg width="80" height="36" viewBox="0 0 80 36" fill="none" aria-label="Netflix" role="img">
      {/* N lettermark */}
      <text x="0" y="30" fontFamily="Arial Black, sans-serif" fontSize="34" fontWeight="900" fill="currentColor" letterSpacing="-1">N</text>
      <text x="28" y="28" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="currentColor" letterSpacing="0.5">ETFLIX</text>
    </svg>
  );
}

function LogoNewell() {
  return (
    <svg width="150" height="36" viewBox="0 0 150 36" fill="none" aria-label="Newell Brands" role="img">
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" fill="currentColor" letterSpacing="0.5">NEWELL BRANDS</text>
    </svg>
  );
}

function LogoWarner() {
  return (
    <svg width="170" height="36" viewBox="0 0 170 36" fill="none" aria-label="Warner Music Group" role="img">
      {/* W badge */}
      <rect x="0" y="4" width="28" height="28" rx="7" fill="currentColor" opacity="0.15"/>
      <text x="3" y="24" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="currentColor">W</text>
      {/* Wordmark */}
      <text x="34" y="16" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="currentColor" letterSpacing="0.3">WARNER MUSIC</text>
      <text x="34" y="29" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="currentColor" letterSpacing="0.3">GROUP</text>
    </svg>
  );
}

function LogoColeman() {
  return (
    <svg width="130" height="36" viewBox="0 0 130 36" fill="none" aria-label="Coleman" role="img">
      {/* Badge bg */}
      <rect x="0" y="2" width="130" height="32" rx="4" fill="currentColor" opacity="0.12"/>
      <text x="65" y="23" fontFamily="Arial Rounded MT Bold, Arial, sans-serif" fontSize="17" fontWeight="900" fill="currentColor" letterSpacing="0.5" textAnchor="middle">Coleman</text>
    </svg>
  );
}

const LOGOS = [
  { name: "MGM Resorts",        Logo: LogoMGM },
  { name: "Netflix",            Logo: LogoNetflix },
  { name: "Newell Brands",      Logo: LogoNewell },
  { name: "Warner Music Group", Logo: LogoWarner },
  { name: "Coleman",            Logo: LogoColeman },
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
          {LOGOS.map(({ name, Logo }) => (
            <div
              key={name}
              style={{ color: "rgba(27,31,42,0.4)", display: "flex", alignItems: "center" }}
            >
              <Logo />
            </div>
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
