export default function FlavorMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-leaf-900/10 bg-sand-100 py-3 -rotate-1 scale-[1.03]">
      <div className="marquee-track flex w-max gap-0">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0 items-center gap-10 px-5">
            {["Bissap", "Bouye", "Orange", "Gingembre", "Citron", "Baobab-Mangue", "Cocktail du Soleil"].map((f) => (
              <span key={f} className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-leaf-700/70">
                {f}
                <span className="h-1.5 w-1.5 rounded-full bg-citron-400" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
