import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export default function Testimonials() {
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
              <div className="mt-6 flex items-center gap-3 pt-3">
                <div className="flex h-10 w-10 items-center justify-center bg-secondary text-sm font-semibold text-secondary-foreground">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
