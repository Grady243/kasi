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
  Sun,
  Moon,
  Check,
  Star,
  Rocket,
  Lock,
  RefreshCw,
  Gauge,
} from "lucide-react";
import { Store, Boxes, CreditCard, Users, Activity, Clock, TrendingUp } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

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

const features = [
  {
    icon: ShoppingCart,
    title: "Sales Management",
    desc: "Track every sale in real time with a clean, fast register.",
    benefit: "Close more transactions per hour without losing a single line item.",
  },
  {
    icon: Package,
    title: "Inventory Tracking",
    desc: "Stock levels update automatically with each sale or restock.",
    benefit: "Never oversell again — get low-stock alerts before you run out.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    desc: "Daily, weekly and monthly insights on revenue and performance.",
    benefit: "Make decisions backed by data, not guesswork.",
  },
  {
    icon: Zap,
    title: "Fast Checkout System",
    desc: "Optimised flow that gets customers paid in under five seconds.",
    benefit: "Shorter queues, happier customers, more revenue per shift.",
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-device Sync",
    desc: "Phone, tablet, desktop — your data stays in perfect sync.",
    benefit: "Run your business from anywhere, switch devices instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "End-to-end encryption with PCI-DSS compliant infrastructure.",
    benefit: "Sleep well knowing every transaction is protected.",
  },
];

const whyItems = [
  { icon: Gauge, title: "Ultra-fast checkout", desc: "Process sales in under 5 seconds with a register built for speed." },
  { icon: RefreshCw, title: "Real-time inventory", desc: "Stock updates the instant a sale closes — across every device." },
  { icon: BarChart3, title: "Intuitive dashboard", desc: "A clean interface that surfaces what matters, hides what doesn't." },
  { icon: MonitorSmartphone, title: "Works on every device", desc: "Tablet, phone or laptop — same experience, same data." },
  { icon: Lock, title: "Secure by default", desc: "Bank-grade encryption, daily backups and full audit trails." },
  { icon: Rocket, title: "Built to scale", desc: "From a single shop to a chain of stores, without changing tools." },
];

const steps = [
  {
    n: "01",
    title: "Create Your Store",
    desc: "Set up your store quickly with a simple onboarding process.",
    icon: Store,
  },
  {
    n: "02",
    title: "Add Your Products",
    desc: "Manage inventory and organize products in real time.",
    icon: Boxes,
  },
  {
    n: "03",
    title: "Start Selling Instantly",
    desc: "Process payments and monitor sales live.",
    icon: CreditCard,
  },
];

const testimonials = [
  {
    quote: "KasiPOS changed the way we manage our store. Everything is faster — checkout, restocking, reports.",
    name: "Amina Ndlovu",
    role: "Store Manager",
    company: "Urban Threads",
  },
  {
    quote: "We switched from a clunky legacy POS and never looked back. The dashboard alone saves me hours every week.",
    name: "Marcus Lee",
    role: "Owner",
    company: "Lee & Sons Grocery",
  },
  {
    quote: "Multi-device sync is flawless. I can ring up a sale on a tablet, then check the books from my laptop at home.",
    name: "Sofia Carvalho",
    role: "Co-founder",
    company: "Noma Coffee Bar",
  },
  {
    quote: "Inventory used to be our biggest headache. With KasiPOS we know exactly what's on the shelf in real time.",
    name: "David Okafor",
    role: "Operations Lead",
    company: "Bright Pharmacy",
  },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center border border-border text-foreground hover:border-primary transition-colors"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block h-3 w-3 bg-primary" />
          KasiPOS
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#why" className="hover:text-foreground transition-colors">Why KasiPOS</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Customers</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#cta"
            className="bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>
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
            A modern point-of-sale system to manage sales, inventory and reports effortlessly — across every device, in every store.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 border border-border-strong px-5 py-3 text-sm font-medium text-foreground hover:border-primary transition-colors"
            >
              <BookOpen className="h-4 w-4" /> Explore features
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Active Merchants",
    desc: "Shops growing with KasiPOS every day.",
  },
  {
    icon: Activity,
    value: "99.9%",
    label: "System Uptime",
    desc: "Reliable infrastructure you can count on.",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Sales Monitoring",
    desc: "Always-on visibility across every register.",
  },
  {
    icon: TrendingUp,
    value: "10K+",
    label: "Transactions",
    desc: "Processed securely, every single week.",
  },
];

function SocialProof() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-primary">Trusted by merchants</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Numbers that speak for themselves
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            From neighborhood shops to growing chains — KasiPOS keeps commerce running fast, reliable and always on.
          </p>
        </div>

        <div className="grid grid-cols-1 border border-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`group relative bg-background p-8 transition-colors hover:bg-surface ${
                i < stats.length - 1 ? "border-b border-border lg:border-b-0 lg:border-r" : ""
              } ${i < 2 ? "sm:border-b sm:border-border" : ""} ${
                i % 2 === 0 ? "sm:border-r sm:border-border lg:border-r" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <div className="mt-10 text-5xl font-semibold tracking-tight text-foreground">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium text-foreground">{s.label}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 h-px w-8 bg-[#03ab3a] transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyKasiPOS() {
  return (
    <section id="why" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-primary">Why KasiPOS</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Why businesses choose KasiPOS
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six reasons merchants of every size move their day-to-day operations onto KasiPOS — and stay.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {whyItems.map((item) => (
            <div key={item.title} className="bg-background p-8 transition-colors hover:bg-surface-2">
              <div className="inline-flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
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
              className="group bg-background p-8 transition-colors hover:bg-surface"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              <div className="mt-4 flex items-start gap-2 border-t border-border pt-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-foreground">{f.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-primary">How it works</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Up and running in three steps
          </h2>
          <p className="mt-4 text-muted-foreground">
            From signup to first sale in less than an hour. No installer, no training day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex flex-col bg-background p-8 transition-colors hover:bg-surface-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl font-bold leading-none tracking-tight text-[#03ab3a] md:text-6xl">
                  {s.n}
                </span>
                <s.icon className="h-8 w-8 text-[#03ab3a]" strokeWidth={1.75} />
              </div>
              <h3 className="mt-8 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-primary">Customers</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Loved by merchants worldwide
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real teams, real shops, real numbers. Here's what they say about KasiPOS.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-surface p-8">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-base leading-relaxed text-foreground">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 items-center justify-center bg-secondary text-sm font-semibold text-secondary-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-secondary-foreground md:text-5xl">
          Stop fighting your POS. Start growing your business.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-secondary-foreground/80">
          Join thousands of merchants using KasiPOS to run faster, leaner and clearer operations — starting today, with zero setup fees.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Start free trial <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 border border-secondary-foreground/30 px-6 py-3 text-sm font-medium text-secondary-foreground hover:border-primary transition-colors"
          >
            See features
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
