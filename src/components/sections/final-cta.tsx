import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="cta" className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-secondary-foreground md:text-5xl">
          Stop fighting your POS. Start growing your business.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-secondary-foreground/80">
          Join thousands of merchants using KasiPOS to run faster, leaner and clearer operations —
          starting today, with zero setup fees.
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
