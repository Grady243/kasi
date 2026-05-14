import { stats } from "@/data/stats";

export default function SocialProof() {
  return (
    <section id="stats" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-primary">Trusted by merchants</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-4xl">
              Numbers that speak for themselves
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              From neighborhood shops to growing chains — KasiPOS keeps commerce running fast,
              reliable and always on.
            </p>
          </div>{" "}
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
