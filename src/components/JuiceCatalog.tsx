import { useState } from "react";
import { Juice } from "../types";
import { JUICES } from "../data";
import { X, Droplets, HeartPulse } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

export default function JuiceCatalog() {
  const [selected, setSelected] = useState<Juice | null>(null);

  return (
    <section id="saveurs" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-leaf-500">
          Le catalogue
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-leaf-900 md:text-4xl">
          Sept saveurs, un seul terroir
        </h2>
        <p className="mt-4 text-sm text-ink-900/60 md:text-base">
          Chaque bouteille est brassée et embouteillée à Dakar, sans colorant ni conservateur.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {JUICES.map((juice, i) => (
          <Reveal key={juice.id} delay={i * 0.05}>
            <motion.button
              layoutId={`card-${juice.id}`}
              onClick={() => setSelected(juice)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-leaf-900/8 bg-white text-left shadow-sm transition-shadow hover:shadow-xl cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={juice.image}
                  alt={juice.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wide text-leaf-700 shadow-sm">
                  {juice.localName}
                </span>
                {juice.labelImage && (
                  <img
                    src={juice.labelImage}
                    alt={`Étiquette ${juice.name}`}
                    className="absolute left-3 top-3 h-16 w-auto rounded-md object-contain shadow-md"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xl">{juice.emoji}</span>
                  <h3 className="font-display text-lg font-semibold text-leaf-900">{juice.name}</h3>
                </div>
                <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-ink-900/60">{juice.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-leaf-600">
                  Voir la fiche →
                </span>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-leaf-900/50 p-4 backdrop-blur-sm"
          >
            <motion.div
              layoutId={`card-${selected.id}`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-leaf-800 shadow cursor-pointer"
                aria-label="Fermer"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="bg-sand-100">
                <img src={selected.image} alt={selected.name} className="h-72 w-full object-contain" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selected.emoji}</span>
                  <h3 className="font-display text-2xl font-semibold text-leaf-900">{selected.name}</h3>
                  {selected.labelImage && (
                    <img
                      src={selected.labelImage}
                      alt={`Étiquette ${selected.name}`}
                      className="ml-auto h-14 w-auto rounded-md object-contain shadow-sm"
                    />
                  )}
                </div>
                <p className="text-sm leading-relaxed text-ink-900/70">{selected.description}</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-citron-400/25 bg-citron-50 p-3.5">
                    <div className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-citron-700">
                      <Droplets className="h-3.5 w-3.5" /> Goût
                    </div>
                    <p className="text-xs leading-relaxed text-ink-900/70">{selected.flavorProfile}</p>
                  </div>
                  <div className="rounded-2xl border border-leaf-400/20 bg-leaf-50 p-3.5">
                    <div className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-leaf-700">
                      <HeartPulse className="h-3.5 w-3.5" /> Bienfaits
                    </div>
                    <p className="text-xs leading-relaxed text-ink-900/70">{selected.healthBenefits}</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-leaf-800 p-4 text-center text-xs text-sand-100">
                  Le <strong className="text-citron-300">{selected.name}</strong> fait partie du pack de 6
                  bouteilles à <strong className="text-citron-300">10 000 FCFA</strong> — 1 litre par bouteille.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
