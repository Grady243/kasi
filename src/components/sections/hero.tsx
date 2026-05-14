import { ArrowRight, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 bg-primary/10 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 bg-primary" />
            Modern Point Of Sales
          </div>
          <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            Simplify your sales with <span className="text-primary">KasiPOS</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground">
            A modern point-of-sale system to manage sales, inventory and reports effortlessly —
            across every device, in every store.
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
