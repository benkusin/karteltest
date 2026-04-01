"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <div
      className={cn(
        "announcement-banner",
        "sticky top-0 z-50 w-full py-3",
        "bg-[#1B3139] text-white"
      )}
    >
      <div className="container-db relative mx-auto flex items-center justify-center px-4">
        <p className="text-center text-xs sm:text-sm font-normal leading-snug pr-8">
          <strong>Data + AI Summit 2026</strong>
          {" — Registration Now Open. Early-bird pricing: 50% off through April 30. June 15–18, 2026 | San Francisco + Virtual "}
          <Link
            href="/dataaisummit"
            className="underline-offset-2 hover:text-[#FF3621] hover:underline transition-colors"
          >
            Register Now &rarr;
          </Link>
        </p>
        <button
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-lg leading-none opacity-80 hover:opacity-100 transition-opacity"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
