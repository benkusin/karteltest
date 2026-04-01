import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CustomerLogoBar } from "@/components/CustomerLogoBar";
import { PlatformTabs } from "@/components/PlatformTabs";
import { SummitSection } from "@/components/SummitSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Nav />
      <main>
        <Hero />
        <CustomerLogoBar />
        <PlatformTabs />
        <SummitSection />
      </main>
      <Footer />
    </>
  );
}
