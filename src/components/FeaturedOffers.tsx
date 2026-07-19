import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { PACK6_PRICE, PACK25_PRICE } from "../data";

export default function FeaturedOffers({ onOrder }: { onOrder: () => void }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto mb-12 max-w-xl text-center">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-leaf-500">
          Nos formats
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-leaf-900 md:text-4xl">
          Un pack pour chaque occasion
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-leaf-800 md:flex-row">
            <div className="flex-1 p-8 md:p-10">
              <span className="rounded-full bg-citron-400/15 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-citron-300">
                Le classique
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-sand-50 md:text-3xl">
                Pack Découverte — 6 bouteilles
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-sand-200">
                6 bouteilles d'1 litre, personnalisables parmi nos 7 saveurs. Idéal pour une famille ou un
                petit événement.
              </p>
              <p className="mt-6 font-mono text-3xl font-bold text-citron-400">
                {PACK6_PRICE.toLocaleString("fr-FR")} FCFA
              </p>
              <button
                onClick={onOrder}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-citron-400 px-6 py-3 text-sm font-bold text-leaf-900 transition-transform hover:scale-105 cursor-pointer"
              >
                Personnaliser mon pack <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <img
              src="/images/hero-five-bottles.webp"
              alt="Pack découverte de 6 bouteilles Teranga Jus"
              className="h-56 w-full object-cover md:h-auto md:w-72"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-leaf-900/8 bg-white">
            <img src="/images/pack-25.webp" alt="Pack événement de 25 bouteilles" className="h-48 w-full object-cover" />
            <div className="flex flex-1 flex-col p-6">
              <span className="w-fit rounded-full bg-bissap-500/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-bissap-500">
                Pour les grands événements
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-leaf-900">Pack Événement — 25 bouteilles</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-900/60">
                Mariages, baptêmes, Magal, Gamou — un plateau généreux de nos 7 saveurs pour régaler tous vos
                invités.
              </p>
              <p className="mt-4 font-mono text-2xl font-bold text-leaf-700">
                {PACK25_PRICE.toLocaleString("fr-FR")} FCFA
              </p>
              <button
                onClick={onOrder}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border-2 border-leaf-700 px-5 py-2.5 text-sm font-bold text-leaf-800 transition-colors hover:bg-leaf-700 hover:text-white cursor-pointer"
              >
                Commander ce pack
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
