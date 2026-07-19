import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { NEIGHBORHOODS } from "../data";

export default function DeliveryZones() {
  return (
    <section className="bg-sand-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <img
              src="/images/citron-promo.webp"
              alt="Commandez vos jus Teranga Jus à l'avance, préparés frais à Dakar"
              className="w-full rounded-[2rem] shadow-xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-leaf-500">Livraison</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-leaf-900 md:text-4xl">
              Fraîche, partout à Dakar
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-900/60">
              Vos jus sont pressés uniquement sur commande, pour rester aussi frais que possible. Passez votre
              commande au moins 24h à l'avance — le tarif de livraison s'affiche automatiquement selon votre
              quartier.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {NEIGHBORHOODS.map((n) => (
                <div
                  key={n.name}
                  className="flex items-start gap-2.5 rounded-xl border border-leaf-900/8 bg-white px-3.5 py-3"
                >
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-leaf-500" />
                  <div>
                    <p className="text-xs font-bold text-leaf-900">{n.name}</p>
                    <p className="font-mono text-[11px] text-ink-900/50">
                      {n.deliveryFee.toLocaleString("fr-FR")} FCFA · {n.estimatedTime}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
