import { steps } from "@/data/steps";

export default function HowItWorks() {
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
              className="relative overflow-hidden bg-background p-8 transition-all duration-300 hover:bg-surface-2"
            >
              {/* Decorative Number */}
              <span className="absolute right-8 top-8 text-6xl font-bold leading-none text-muted-foreground/10 md:text-7xl">
                {s.n}
              </span>

              {/* Icon */}
              <div className="inline-flex h-18 w-18 items-center justify-center rounded-xl bg-primary/0 text-primary">
                <s.icon className="h-7 w-7" strokeWidth={1.8} />
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>

                <p className="mt-20 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
