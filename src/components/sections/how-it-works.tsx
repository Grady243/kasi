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
              className="flex flex-col bg-background p-8 transition-colors hover:bg-surface-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl font-bold leading-none tracking-tight text-[#03ab3a] md:text-6xl">
                  {s.n}
                </span>
                <s.icon className="h-8 w-8 text-[#03ab3a]" strokeWidth={1.75} />
              </div>
              <h3 className="mt-8 text-xl font-semibold">{s.title}</h3>
              <p className="mt-18 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
