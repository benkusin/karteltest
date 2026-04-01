"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TabData {
  tabLabel: string;
  eyebrow: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

const TABS: TabData[] = [
  {
    tabLabel: "Data Engineering",
    eyebrow: "Lakeflow",
    headline: "Meet no-code ETL.",
    body: "Relying only on data engineers for production-grade pipelines creates a bottleneck. Lakeflow Designer lets teams build robust data pipelines visually — no code, no bottlenecks.",
    ctaLabel: "Explore Lakeflow",
    ctaHref: "/product/lakeflow",
  },
  {
    tabLabel: "Data Warehousing",
    eyebrow: "Databricks SQL",
    headline: "Eliminate legacy warehouse costs.",
    body: "Eliminate legacy warehouse costs and lower TCO with an open, intelligent data warehouse. Serverless data warehousing on open lake data, with governance and AI built-in.",
    ctaLabel: "Explore Databricks SQL",
    ctaHref: "/product/databricks-sql",
  },
  {
    tabLabel: "Machine Learning",
    eyebrow: "Mosaic AI",
    headline: "Build AI agents that continuously improve.",
    body: "Build AI agents that continuously improve quality and accuracy, optimized on your data. Agent Bricks — domain-specific synthetic data generation, task-aware evaluation, and automated optimization.",
    ctaLabel: "Explore Mosaic AI",
    ctaHref: "/product/machine-learning",
  },
  {
    tabLabel: "AI & Analytics",
    eyebrow: "AI/BI",
    headline: "The next generation of analytics is here.",
    body: "From natural language dashboard creation to deep conversational analytics with Genie, this is BI built on AI from the start. Now, everyone can explore data and uncover insights.",
    ctaLabel: "Explore AI/BI",
    ctaHref: "/product/ai-bi",
  },
  {
    tabLabel: "Data Governance",
    eyebrow: "Unity Catalog",
    headline: "One governance layer for everything.",
    body: "Maintain compliance across data, models, dashboards, and agents. Get deeper insight into your data all in one unified, open governance layer.",
    ctaLabel: "Explore Unity Catalog",
    ctaHref: "/product/unity-catalog",
  },
  {
    tabLabel: "Apps & Sharing",
    eyebrow: "Databricks Apps",
    headline: "Build, deploy, and scale data apps.",
    body: "Build, deploy, and scale interactive data intelligence apps within your fully governed and secure Databricks environment to rapidly deliver user-facing tools.",
    ctaLabel: "Explore Databricks Apps",
    ctaHref: "/product/databricks-apps",
  },
];

export function PlatformTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TABS[activeIndex];

  return (
    <section className="w-full bg-[#F9F7F4] py-[96px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-20">
        {/* Section Heading */}
        <h2 className="mb-12 text-center text-[28px] font-bold leading-tight text-[#1B3139] lg:text-[40px]">
          One unified platform. Every data and AI workload.
        </h2>

        {/* Tab Navigation */}
        <div className="border-b border-[#EDEAE5]">
          <div className="flex overflow-x-auto scrollbar-hide">
            {TABS.map((tab, index) => (
              <button
                key={tab.tabLabel}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "shrink-0 cursor-pointer border-b-2 border-transparent bg-transparent px-6 py-3 text-[15px] font-medium text-[#6B6760] transition-colors duration-150 hover:text-[#1B3139]",
                  index === activeIndex &&
                    "border-[#FF3621] font-semibold text-[#1B3139]"
                )}
              >
                {tab.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panel */}
        <div className="grid grid-cols-1 gap-16 pt-12 lg:grid-cols-2">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#FF3621]">
              {active.eyebrow}
            </p>

            {/* Headline */}
            <h3 className="text-[24px] font-bold leading-tight text-[#1B3139] lg:text-[32px]">
              {active.headline}
            </h3>

            {/* Body */}
            <p className="mt-4 text-[17px] font-normal leading-[1.65] text-[#4A4742]">
              {active.body}
            </p>

            {/* CTA */}
            <Link
              href={active.ctaHref}
              className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-[#FF3621] hover:underline"
            >
              {active.ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Right: Feature Visual Placeholder */}
          <div
            className="flex h-[320px] items-center justify-center rounded-xl bg-gradient-to-br from-[#1B3139] to-[#39606D]"
            aria-label={`${active.eyebrow} feature visual`}
          >
            <span className="text-center text-[18px] font-semibold text-white">
              {active.eyebrow}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
