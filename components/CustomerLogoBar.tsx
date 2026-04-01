import { cn } from "@/lib/utils";

const LOGOS: string[] = [
  "Block",
  "Comcast",
  "Condé Nast",
  "Rivian",
  "Shell",
  "Nike",
  "Nationwide",
  "H&R Block",
  "T-Mobile",
  "Regeneron",
  "Walgreens",
  "Atlassian",
];

function LogoList() {
  return (
    <>
      {LOGOS.map((name) => (
        <span
          key={name}
          className={cn(
            "whitespace-nowrap px-2",
            "text-[17px] font-bold",
            "text-[#B0ADA5]",
            "transition-colors duration-300",
            "hover:text-[#1B3139]",
            "cursor-default select-none"
          )}
        >
          {name}
        </span>
      ))}
    </>
  );
}

export function CustomerLogoBar() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#FFFFFF", padding: "48px 0 56px" }}
    >
      {/* Eyebrow text */}
      <p
        className={cn(
          "text-[14px] font-medium text-center",
          "text-[#6B6760]",
          "mb-10",
          "max-w-[600px] mx-auto px-4"
        )}
      >
        More than 15,000 organizations worldwide, including over 60% of the
        Fortune 500, rely on Databricks.
      </p>

      {/* Scroll strip */}
      <div className="w-full overflow-hidden">
        {/* Track: two copies of logos for seamless loop */}
        <div
          className={cn(
            "flex items-center gap-16",
            "animate-scroll-logos",
            "hover:[animation-play-state:paused]"
          )}
          style={{ width: "200%" }}
          aria-hidden="true"
        >
          <LogoList />
          <LogoList />
        </div>
      </div>
    </section>
  );
}
