import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { PremiumCursor } from "@/components/premium-cursor";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Stats } from "@/components/stats";
import { WhySiteva } from "@/components/why-siteva";
import { Founder } from "@/components/founder";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { InquiryModal } from "@/components/inquiry-modal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SITEVA LAB | Premium Web Design Agency" },
      {
        name: "description",
        content:
          "Premium websites and digital experiences for modern brands. We help startups, creators, and businesses build websites that look premium and convert better.",
      },
      { property: "og:title", content: "SITEVA LAB | Premium Web Design Agency" },
      {
        property: "og:description",
        content: "Premium websites and digital experiences for modern brands.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setModalOpen(true);
    window.addEventListener("open-inquiry", handler);
    return () => window.removeEventListener("open-inquiry", handler);
  }, []);

  return (
    <main className="bg-background">
      <PremiumCursor />
      <Header />
      <InquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Hero />
      <Services />
      <Projects />
      <Stats />
      <WhySiteva />
      <Founder />
      <FinalCTA />
      <Footer />
    </main>
  );
}
