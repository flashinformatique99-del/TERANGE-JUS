import Reveal from "./Reveal";

export default function Newsletter() {
  return (
    <section className="bg-citron-400 py-16">
      <Reveal className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-leaf-900 md:text-3xl">
          Recevez nos promos avant tout le monde
        </h2>
        <p className="mt-3 text-sm text-leaf-800/80">
          Rejoignez notre liste WhatsApp : offres Tabaski, Magal et Gamou, en avant-première.
        </p>
        <a
          href="https://wa.me/221776910564?text=Bonjour%2C%20je%20souhaite%20rejoindre%20la%20liste%20des%20promos%20Teranga%20Jus%20%F0%9F%8D%8B"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-leaf-900 px-7 py-3.5 text-sm font-bold text-sand-50 transition-transform hover:scale-105"
        >
          Rejoindre sur WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
