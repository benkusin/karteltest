import Link from "next/link";

export function Hero({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <section className="w-full bg-[#F9F7F4] pt-[64px] pb-[48px] md:pt-[100px] md:pb-[80px]">
      <div className="mx-auto max-w-[900px] px-4 text-center">
        {/* Heading */}
        <h1
          className="
            font-bold text-[36px] md:text-[56px] text-[#1B3139]
            leading-[1.15] tracking-[-0.02em]
          "
        >
          The Data Intelligence Platform
        </h1>

        {/* Body */}
        <p
          className="
            mx-auto mt-6 max-w-[700px]
            text-[16px] md:text-[18px] font-normal
            text-[#4A4742] leading-[1.65]
          "
        >
          More than 15,000 organizations worldwide — including Block, Comcast,
          Condé Nast, Rivian, Shell, and over 60% of the Fortune 500 — rely on
          the Databricks Data Intelligence Platform to take control of their data
          and put it to work with AI.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {/* Primary */}
          <Link
            href="/try-databricks"
            className="
              inline-block rounded px-7 py-[14px]
              bg-[#FF3621] text-white
              text-base font-semibold
              transition-colors duration-200
              hover:bg-[#E02E1A]
            "
          >
            Try Databricks
          </Link>

          {/* Outline */}
          <Link
            href="/contact"
            className="
              inline-block rounded px-[26px] py-3
              border-2 border-[#1B3139] text-[#1B3139]
              bg-transparent text-base font-semibold
              transition-colors duration-200
              hover:border-[#FF3621] hover:text-[#FF3621]
            "
          >
            Get a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
