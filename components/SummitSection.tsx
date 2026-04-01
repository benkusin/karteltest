import Link from "next/link";

const details = [
  "June 15–18, 2026",
  "Moscone Center, San Francisco + Virtual",
  "800+ sessions, keynotes and training",
  "Early-bird pricing: 50% off through April 30",
];

export function SummitSection() {
  return (
    <section className="w-full py-24" style={{ backgroundColor: "#1B3139" }}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Left column — text content */}
          <div>
            {/* Eyebrow */}
            <p
              className="mb-4 text-[12px] font-semibold uppercase tracking-[0.1em]"
              style={{ color: "#FF3621" }}
            >
              Event
            </p>

            {/* Heading */}
            <h2
              className="text-[28px] font-bold leading-tight text-white md:text-[40px]"
            >
              Data + AI Summit 2026
            </h2>

            {/* Subtitle */}
            <p
              className="mt-4 text-[18px] font-normal leading-relaxed"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              The premier 2026 AI event for the global data, analytics and AI
              community.
            </p>

            {/* Detail list */}
            <ul className="my-6 mb-8 space-y-1">
              {details.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[16px] leading-8"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  <span
                    className="mt-1 shrink-0 text-[18px] font-bold leading-none"
                    style={{ color: "#FF3621" }}
                    aria-hidden="true"
                  >
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="/dataaisummit"
              className="inline-flex items-center rounded px-7 py-[14px] text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#E02E1A]"
              style={{ backgroundColor: "#FF3621" }}
            >
              Register Now
            </Link>
          </div>

          {/* Right column — visual placeholder */}
          <div
            className="flex h-[360px] items-center justify-center rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #39606D 0%, #1B3139 100%)",
            }}
          >
            <p className="px-8 text-center text-2xl font-bold text-white md:text-3xl">
              Data + AI Summit 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
