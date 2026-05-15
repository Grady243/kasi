import Nav from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import SocialProof from "@/components/sections/social-proof";
import WhyKasiPOS from "@/components/sections/why-kasipos";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import Testimonials from "@/components/sections/testimonials";
import FinalCTA from "@/components/sections/final-cta";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="stats">
          <SocialProof />
        </section>
        <section id="why">
          <WhyKasiPOS />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="how">
          <HowItWorks />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="cta">
          <FinalCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
