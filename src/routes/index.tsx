import { createFileRoute } from "@tanstack/react-router";
import {
  ShoppingCart,
  Package,
  BarChart3,
  Zap,
  ShieldCheck,
  MonitorSmartphone,
  ArrowRight,
  Github,
  BookOpen,
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.png";
import howItWorksImage from "@/assets/how-it-works.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "KasiPOS — Modern Point of Sale for Merchants" },
      {
        name: "description",
        content:
          "KasiPOS is a modern point-of-sale system to manage sales, inventory and reports effortlessly.",
      },
      { property: "og:title", content: "KasiPOS — Modern Point of Sale" },
      {
        property: "og:description",
        content: "Simplify your sales with a modern, fast and secure POS built for merchants.",
      },
    ],
  }),
});

const features = [
  { icon: ShoppingCart, title: "Sales Management", desc: "Track every sale in real time with a clean, fast register." },
  { icon: Package, title: "Inventory Tracking", desc: "Always know what's in stock with automatic updates." },
  { icon: BarChart3, title: "Reports & Analytics", desc: "Make decisions with clear daily, weekly and monthly insights." },
  { icon: Zap, title: "Fast Checkout", desc: "Optimised flow that gets customers paid in seconds." },
  { icon: ShieldCheck, title: "Secure Transactions", desc: "End-to-end encryption and best-in-class compliance." },
  { icon: MonitorSmartphone, title: "Multi-device Support", desc: "Tablet, phone or desktop — works seamlessly everywhere." },
];

const steps = [
  { n: "01", title: "Create your store", desc: "Set up your business profile in under two minutes." },
  { n: "02", title: "Add your products", desc: "Import your catalogue or add items one by one." },
  { n: "03", title: "Start selling instantly", desc: "Open the register and accept your first payment." },
];

function Nav() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block h-3 w-3 bg-primary" />
          KasiPOS
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#" className="hover:text-foreground transition-colors">Docs</a>
        </nav>
        <a
          href="#cta"
          className="bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 bg-primary" />
            New — KasiPOS 2.0 is here
          </div>
          <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-6xl">
            Simplify your sales with KasiPOS
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground">
            A modern point-of-sale system to manage sales, inventory and reports effortlessly.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-border-strong px-5 py-3 text-sm font-medium text-foreground hover:border-primary transition-colors"
            >
              <BookOpen className="h-4 w-4" /> View Documentation
            </a>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl border border-border bg-surface p-2">
          <img
            src={heroImage}
            alt="KasiPOS dashboard preview"
            width={1280}
            height={960}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-primary">Features</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Everything you need to run your shop
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built for merchants who want clarity, speed and control without the bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative border border-transparent bg-surface p-8 transition-colors hover:border-primary"
            >
              <f.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-6 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-primary">How it works</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Up and running in three steps
          </h2>
        </div>

        <div className="mb-16 border border-border bg-surface p-6">
          <img
            src={howItWorksImage}
            alt="KasiPOS workflow"
            width={1600}
            height={640}
            loading="lazy"
            className="mx-auto w-full max-w-4xl"
          />
        </div>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-surface p-8">
              <div className="text-2xl font-semibold text-primary">{s.n}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          Ready to manage your business smarter?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground">
          Join merchants using KasiPOS to run faster, leaner and clearer operations.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <p>© 2026 KasiPOS. Built for modern commerce.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="#" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
            <BookOpen className="h-4 w-4" /> Documentation
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
