import { whyItems } from "@/data/why-items";

export default function WhyKasiPOS() {
  return (
    <section id="why" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-primary">Why KasiPOS</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Why businesses choose KasiPOS
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six reasons merchants of every size move their day-to-day operations onto KasiPOS — and
            stay.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {whyItems.map((item) => (
            <div
              key={item.title}
              className="bg-background p-8 transition-colors hover:bg-surface-2"
            >
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
