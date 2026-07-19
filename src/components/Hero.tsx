import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero({ onOrder, onCatalog }: { onOrder: () => void; onCatalog: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden bg-leaf-800">
      {/* Ambient organic glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-citron-400/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-leaf-400/25 blur-3xl" />
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-citron-400/30 bg-citron-400/10 px-3.5 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-citron-400" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-citron-300">
              Pressé à froid · Dakar
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-sand-50 sm:text-5xl md:text-6xl"
          >
            La Teranga se boit
            <br />
            <span className="italic text-citron-400">fraîche.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-sand-200 md:text-lg"
          >
            Sept saveurs sénégalaises pressées à froid — Bissap, Bouye, Gingembre, Orange, Citron —
            sans conservateur, préparées fraîches et livrées chez vous sur commande (24h à l'avance).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              onClick={onOrder}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-citron-400 px-7 py-3.5 text-sm font-bold text-leaf-900 shadow-lg shadow-citron-400/20 transition-transform hover:scale-[1.03] cursor-pointer"
            >
              Composer mon pack (10 000 FCFA)
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={onCatalog}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-50/25 px-7 py-3.5 text-sm font-bold text-sand-50 transition-colors hover:bg-sand-50/10 cursor-pointer"
            >
              Découvrir les 7 saveurs
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-sand-50/10 pt-6 text-xs font-semibold text-sand-300"
          >
            <span>📅 Sur commande (24-48h)</span>
            <span>🌿 100% naturel</span>
            <span>🇸🇳 Fabriqué à Dakar</span>
            <span>💳 Paiement à la livraison</span>
          </motion.div>
        </div>

        {/* Visual */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-md"
          >
            <div className="blob-mask absolute -inset-6 bg-citron-400/25" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2.5rem] border border-sand-50/15 shadow-2xl"
            >
              <img
                src="/images/hero-five-bottles.webp"
                alt="Bouteilles de jus Teranga Jus : Bissap, Baobab, Orange, Gingembre"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-leaf-900/80 to-transparent p-5">
                <span className="rounded-full bg-sand-50/95 px-3 py-1 font-mono text-[11px] font-bold text-leaf-800">
                  🌿 Préparé frais, sur commande
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
