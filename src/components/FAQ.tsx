import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";
import { FAQS } from "../data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="mb-10 text-center">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-leaf-500">Questions fréquentes</span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-leaf-900 md:text-4xl">
          Tout savoir avant de commander
        </h2>
      </Reveal>

      <div className="space-y-3">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.04}>
            <div className="overflow-hidden rounded-2xl border border-leaf-900/8 bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
              >
                <span className="text-sm font-bold text-leaf-900">{f.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-leaf-600 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm leading-relaxed text-ink-900/60">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
