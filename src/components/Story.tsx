import { Leaf, ThermometerSnowflake, ShieldCheck, Clock } from "lucide-react";
import Reveal from "./Reveal";

const PILLARS = [
  {
    icon: Leaf,
    title: "100% naturel",
    text: "Fruits et fleurs locaux, aucun colorant ni conservateur ajouté.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Chaîne du froid",
    text: "Transport en glacières isolées, du pressoir jusqu'à votre porte.",
  },
  {
    icon: ShieldCheck,
    title: "Paiement sécurisé",
    text: "Réglez à la livraison, après vérification de vos bouteilles.",
  },
  {
    icon: Clock,
    title: "Livraison rapide",
    text: "25 à 90 minutes selon votre quartier, 7 jours sur 7.",
  },
];

export default function Story() {
  return (
    <section id="histoire" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="blob-mask absolute -inset-4 bg-leaf-400/15" />
            <img
              src="/images/evenement.webp"
              alt="Bouteilles de jus Teranga prêtes pour un événement"
              className="relative rounded-[2rem] shadow-xl"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-leaf-500">
            Notre histoire
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-leaf-900 md:text-4xl">
            Le goût de la maison, <span className="italic text-leaf-500">pensé pour Dakar</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-900/65 md:text-base">
            Teranga Jus est né d'une conviction simple&nbsp;: les meilleures recettes de nos grand-mères —
            bissap infusé à la menthe, bouye onctueux, gingembre corsé — méritent d'arriver chez vous aussi
            fraîches qu'au sortir du pressoir. Chaque bouteille est préparée en petites quantités à Dakar,
            pour vos fêtes, vos mariages, vos Tabaski et vos repas de tous les jours.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-leaf-900/8 bg-sand-50 p-4">
                <p.icon className="h-5 w-5 text-leaf-600" />
                <h3 className="mt-2.5 text-sm font-bold text-leaf-900">{p.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-900/55">{p.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
