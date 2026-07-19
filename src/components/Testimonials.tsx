import { Star } from "lucide-react";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="avis" className="bg-leaf-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-xl text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-citron-400">
            Ils nous font confiance
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-sand-50 md:text-4xl">
            La fraîcheur, racontée par Dakar
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-3xl border border-sand-50/10 bg-leaf-800/60 p-6">
                <div className="flex gap-0.5 text-citron-400">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 font-display text-base italic leading-relaxed text-sand-100">
                  "{t.quote}"
                </p>
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-sand-300">
                  {t.name} · {t.area}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
