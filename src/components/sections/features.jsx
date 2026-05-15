import { features } from "@/data/features";
import { Check } from "lucide-react";

export default function Features() {
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

        <div className="grid grid-cols-1 gap-px bg-border border border-border md:grid-cols-3">
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
              <div className="mt-4 flex items-start gap-2 pt-4">
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
