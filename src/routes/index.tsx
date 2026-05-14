import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/navbar";
import Features from "@/components/sections/features";
import FinalCTA from "@/components/sections/final-cta";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import SocialProof from "@/components/sections/social-proof";
import Testimonials from "@/components/sections/testimonials";
import WhyKasiPOS from "@/components/sections/why-kasipos";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "KasiPOS — Modern Point of Sale for Merchants" },
      {
        name: "description",
        content:
          "KasiPOS is a modern point-of-sale system to manage sales, inventory and reports effortlessly across every device.",
      },
      { property: "og:title", content: "KasiPOS — Modern Point of Sale" },
      {
        property: "og:description",
        content: "Simplify your sales with a modern, fast and secure POS built for merchants.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <SocialProof />
      <WhyKasiPOS />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
