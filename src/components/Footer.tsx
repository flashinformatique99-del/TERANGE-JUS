export default function Footer() {
  return (
    <footer className="bg-ink-900 py-10 text-sand-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 border-b border-sand-50/10 pb-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <img src="/images/logo.webp" alt="Teranga Jus" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="font-display text-base font-semibold text-sand-50">Teranga Jus</p>
              <p className="font-mono text-[11px] uppercase tracking-wide text-sand-400">Dakar, Sénégal</p>
            </div>
          </div>
          <div className="flex gap-6 text-sm font-semibold">
            <a href="tel:+221776910564" className="hover:text-citron-400">77 691 05 64</a>
            <a href="https://wa.me/221776910564" target="_blank" rel="noopener noreferrer" className="hover:text-citron-400">
              WhatsApp
            </a>
          </div>
        </div>
        <p className="pt-6 text-center text-xs text-sand-500">
          © {new Date().getFullYear()} Teranga Jus. Tous droits réservés. Jus 100% naturels, pressés et livrés à Dakar.
        </p>
      </div>
    </footer>
  );
}
