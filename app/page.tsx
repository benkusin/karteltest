"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CustomerLogoBar } from "@/components/CustomerLogoBar";
import { Pillars } from "@/components/Pillars";
import { TheStack } from "@/components/TheStack";
import { HowItWorks } from "@/components/HowItWorks";
import { Resources } from "@/components/Resources";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { DemoModal } from "@/components/DemoModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <Nav onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <CustomerLogoBar />
        <Pillars />
        <TheStack onOpenModal={openModal} />
        <HowItWorks />
        <Resources />
        <CtaBand onOpenModal={openModal} />
      </main>
      <Footer />

      <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
