import { Phone } from "lucide-react";
import { motion } from "motion/react";

const NAV = [
  { label: "Nos jus", id: "saveurs" },
  { label: "Notre histoire", id: "histoire" },
  { label: "Avis", id: "avis" },
  { label: "FAQ", id: "faq" },
];

export default function Header({ onOrder }: { onOrder: () => void }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-leaf-900/10 bg-sand-50/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" style={{ height: "4.5rem" }}>
        <button onClick={() => scrollTo("top")} className="flex items-center gap-2.5 cursor-pointer" aria-label="Retour en haut">
          <img src="/images/logo.webp" alt="Teranga Jus" className="h-11 w-11 rounded-full object-cover shadow-sm ring-1 ring-leaf-900/10" />
          <span className="hidden sm:block">
            <span className="block font-display text-lg font-semibold tracking-tight text-leaf-800">Teranga Jus</span>
            <span className="block -mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-leaf-500">Dakar · 100% Naturel</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="rounded-full px-4 py-2 text-sm font-semibold text-leaf-800/80 transition-colors hover:bg-leaf-900/5 hover:text-leaf-900 cursor-pointer"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+221776910564"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-leaf-900/10 bg-white px-3 py-2 font-mono text-xs font-bold text-leaf-800 transition-colors hover:border-leaf-900/20"
          >
            <Phone className="h-3.5 w-3.5" /> 77 691 05 64
          </a>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOrder}
            className="rounded-full bg-leaf-700 px-4 py-2.5 text-sm font-bold text-sand-50 shadow-sm shadow-leaf-900/20 transition-colors hover:bg-leaf-800 cursor-pointer"
          >
            Commander
          </motion.button>
        </div>
      </div>
    </header>
  );
}
