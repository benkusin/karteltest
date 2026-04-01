"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CustomerLogoBar } from "@/components/CustomerLogoBar";
import { PlatformTabs } from "@/components/PlatformTabs";
import { SummitSection } from "@/components/SummitSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Nav onOpenModal={() => setModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <CustomerLogoBar />
        <PlatformTabs />
        <SummitSection />
      </main>
      <Footer />

      {/* Demo request modal — placeholder until built */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-[12px] p-8 max-w-md w-full mx-4"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-[#1B1F2A] mb-2">Get in touch</h2>
            <p className="text-[#5E6370] text-sm mb-6">
              Tell us about your creative production needs and we'll be in touch shortly.
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="w-full py-3 font-semibold text-white rounded-[6px]"
              style={{ backgroundColor: "#4F5FE6", border: "none", cursor: "pointer" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
