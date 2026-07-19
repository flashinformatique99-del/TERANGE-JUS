import { useState, FormEvent } from "react";
import { CartItem, Order, DakarNeighborhood } from "../types";
import { JUICES, NEIGHBORHOODS, PACK6_PRICE, PACK25_PRICE, BOTTLE_PRICE } from "../data";
import { Plus, Minus, MapPin, RotateCcw, CheckCircle2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

export function getWhatsAppOrderLink(order: Order): string {
  const phoneVal = "221776910564";
  let msg = `*🇸🇳 NOUVELLE COMMANDE — TERANGA JUS*\n`;
  msg += `=============================\n`;
  msg += `*Code commande :* #${order.id}\n`;
  msg += `*Client :* ${order.customerName}\n`;
  msg += `*Téléphone :* ${order.phone}\n`;
  msg += `*Quartier :* ${order.neighborhood}\n`;
  msg += `*Adresse :* ${order.deliveryAddress}\n`;
  msg += `=============================\n`;
  msg += `*🛒 DÉTAIL DE LA COMMANDE :*\n\n`;

  order.items.forEach((item) => {
    if (item.isPack) {
      msg += `📦 *${item.name}* — ${(item.price * item.quantity).toLocaleString("fr-FR")} FCFA\n`;
      if (item.packContentsCustomization) {
        Object.entries(item.packContentsCustomization).forEach(([juiceId, qty]) => {
          if (qty > 0) {
            const j = JUICES.find((juice) => juice.id === juiceId);
            msg += `    - ${j ? `${j.name} (${j.localName})` : juiceId} : x${qty}\n`;
          }
        });
      }
    } else {
      msg += `➕ *${item.name}* (x${item.quantity}) — ${(item.price * item.quantity).toLocaleString("fr-FR")} FCFA\n`;
    }
  });

  msg += `\n=============================\n`;
  msg += `*💰 TOTAL À PAYER : ${order.totalAmount.toLocaleString("fr-FR")} FCFA*\n`;
  msg += `_(Livraison incluse — paiement Wave, Orange Money ou espèces à la livraison)_\n`;
  msg += `_(Commande à préparer 24h à l'avance, 48h pour Rufisque/Diamniadio)_\n`;
  msg += `=============================\n\nMerci de confirmer ma commande ! 🍋`;

  return `https://wa.me/${phoneVal}?text=${encodeURIComponent(msg)}`;
}

const initialPackMix = () => {
  const initial: Record<string, number> = {};
  JUICES.forEach((j, i) => (initial[j.id] = i < 6 ? 1 : 0));
  return initial;
};

export default function OrderingPortal() {
  const [packQty, setPackQty] = useState(1);
  const [pack25Qty, setPack25Qty] = useState(0);
  const [extraQty, setExtraQty] = useState<Record<string, number>>({});
  const [packMix, setPackMix] = useState<Record<string, number>>(initialPackMix);
  const [customizing, setCustomizing] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [neighborhood, setNeighborhood] = useState<DakarNeighborhood>(NEIGHBORHOODS[0]);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);

  const mixSum = Object.values(packMix).reduce((a, b) => a + b, 0);
  const extraCount = Object.values(extraQty).reduce((a, b) => a + b, 0);

  const packTotal = packQty * PACK6_PRICE;
  const pack25Total = pack25Qty * PACK25_PRICE;
  const extraTotal = extraCount * BOTTLE_PRICE;
  const grandTotal = packTotal + pack25Total + extraTotal + (packQty || pack25Qty || extraCount ? neighborhood.deliveryFee : 0);

  const adjustMix = (id: string, delta: number) => {
    const current = packMix[id] || 0;
    if (delta > 0 && mixSum >= 6) return;
    if (current + delta < 0) return;
    setPackMix({ ...packMix, [id]: current + delta });
  };

  const adjustExtra = (id: string, delta: number) => {
    const current = extraQty[id] || 0;
    if (current + delta < 0) return;
    setExtraQty({ ...extraQty, [id]: current + delta });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!customerName.trim()) return setError("Merci d'indiquer votre nom complet.");
    if (phone.replace(/\s/g, "").length < 9) return setError("Numéro de téléphone invalide (9 chiffres min).");
    if (!address.trim()) return setError("Merci d'indiquer votre adresse précise.");
    if (packQty > 0 && mixSum !== 6) return setError("La composition du pack de 6 doit contenir exactement 6 bouteilles.");

    const items: CartItem[] = [];
    if (packQty > 0) {
      items.push({
        id: "pack-6",
        name: `Pack Découverte de 6 (x${packQty})`,
        price: PACK6_PRICE,
        quantity: packQty,
        isPack: true,
        packContentsCustomization: { ...packMix },
      });
    }
    if (pack25Qty > 0) {
      items.push({ id: "pack-25", name: "Pack Événement de 25", price: PACK25_PRICE, quantity: pack25Qty, isPack: true });
    }
    Object.entries(extraQty).forEach(([id, qty]) => {
      if (qty > 0) {
        const j = JUICES.find((x) => x.id === id);
        items.push({ id: `extra-${id}`, name: `Bouteille · ${j?.name || id}`, price: BOTTLE_PRICE, quantity: qty, isPack: false });
      }
    });

    if (items.length === 0) return setError("Votre panier est vide — ajoutez au moins un produit.");

    setSubmitting(true);
    const order: Order = {
      id: String(Math.floor(100000 + Math.random() * 900000)),
      customerName,
      phone,
      neighborhood: neighborhood.name,
      deliveryAddress: address,
      items,
      totalAmount: grandTotal,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    setTimeout(() => {
      setSubmitting(false);
      setConfirmedOrder(order);
      window.open(getWhatsAppOrderLink(order), "_blank");
    }, 700);
  };

  return (
    <section id="commander" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto mb-12 max-w-xl text-center">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-leaf-500">Commander</span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-leaf-900 md:text-4xl">
          Composez votre commande
        </h2>
        <p className="mt-3 text-sm text-ink-900/60">Vous ne payez qu'à la livraison, après vérification.</p>
        <p className="mx-auto mt-4 w-fit rounded-full border border-citron-400/40 bg-citron-50 px-4 py-1.5 text-xs font-bold text-leaf-800">
          ⏱ Commande à passer 24h à l'avance (48h pour Rufisque / Diamniadio)
        </p>
      </Reveal>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left: configuration */}
        <div className="space-y-6 lg:col-span-8">
          {/* Pack 6 */}
          <div className="rounded-3xl border border-leaf-900/8 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-leaf-900">1 · Pack Découverte (6 bouteilles)</h3>
                <p className="mt-0.5 text-xs text-ink-900/50">1 litre par bouteille, {PACK6_PRICE.toLocaleString("fr-FR")} FCFA le pack</p>
              </div>
              <Stepper value={packQty} onChange={(d) => setPackQty(Math.max(0, packQty + d))} />
            </div>

            {packQty > 0 && (
              <div className="mt-5 border-t border-leaf-900/8 pt-5">
                <button
                  type="button"
                  onClick={() => setCustomizing((c) => !c)}
                  className="rounded-full border border-leaf-700/20 bg-leaf-50 px-3.5 py-1.5 text-xs font-bold text-leaf-700 cursor-pointer"
                >
                  ⚙ Personnaliser la composition ({mixSum}/6)
                </button>

                <AnimatePresence>
                  {customizing && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 rounded-2xl bg-sand-50 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <span className={`text-xs font-bold ${mixSum === 6 ? "text-leaf-600" : "text-bissap-500"}`}>
                            Total : {mixSum} / 6 bouteilles
                          </span>
                          <button
                            type="button"
                            onClick={() => setPackMix(initialPackMix())}
                            className="flex items-center gap-1 text-[11px] font-bold text-ink-900/50 cursor-pointer"
                          >
                            <RotateCcw className="h-3 w-3" /> Réinitialiser
                          </button>
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {JUICES.map((j) => (
                            <div key={j.id} className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                              <span className="text-xs font-semibold text-leaf-900">
                                {j.emoji} {j.localName}
                              </span>
                              <Stepper compact value={packMix[j.id] || 0} onChange={(d) => adjustMix(j.id, d)} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Pack 25 */}
          <div className="rounded-3xl border border-leaf-900/8 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-leaf-900">2 · Pack Événement (25 bouteilles)</h3>
                <p className="mt-0.5 text-xs text-ink-900/50">Idéal mariages / Tabaski, {PACK25_PRICE.toLocaleString("fr-FR")} FCFA</p>
              </div>
              <Stepper value={pack25Qty} onChange={(d) => setPack25Qty(Math.max(0, pack25Qty + d))} />
            </div>
          </div>

          {/* Extras */}
          <div className="rounded-3xl border border-leaf-900/8 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-leaf-900">3 · Bouteilles supplémentaires</h3>
            <p className="mt-0.5 text-xs text-ink-900/50">{BOTTLE_PRICE.toLocaleString("fr-FR")} FCFA l'unité — optionnel</p>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {JUICES.map((j) => (
                <div key={j.id} className="flex items-center justify-between rounded-xl bg-sand-50 px-3.5 py-2.5">
                  <span className="text-xs font-semibold text-leaf-900">
                    {j.emoji} {j.name}
                  </span>
                  <Stepper compact value={extraQty[j.id] || 0} onChange={(d) => adjustExtra(j.id, d)} />
                </div>
              ))}
            </div>
          </div>

          {/* Delivery info */}
          <div className="rounded-3xl border border-leaf-900/8 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-leaf-900">4 · Vos informations de livraison</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Nom complet *">
                <input
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Ex : Aminata Diop"
                  className="input"
                />
              </Field>
              <Field label="Téléphone *">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex : 77 691 05 64"
                  className="input font-mono"
                />
              </Field>
              <Field label="Quartier *">
                <select
                  value={neighborhood.name}
                  onChange={(e) => setNeighborhood(NEIGHBORHOODS.find((n) => n.name === e.target.value) || NEIGHBORHOODS[0])}
                  className="input"
                >
                  {NEIGHBORHOODS.map((n) => (
                    <option key={n.name} value={n.name}>
                      {n.name} · {n.deliveryFee.toLocaleString("fr-FR")} FCFA ({n.estimatedTime})
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Adresse précise *">
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Rue, repère..."
                  className="input"
                />
              </Field>
            </div>
            {error && <p className="mt-4 text-xs font-bold text-bissap-500">{error}</p>}
          </div>
        </div>

        {/* Right: summary */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-5 rounded-3xl bg-leaf-900 p-6 text-sand-50 shadow-xl">
            <div className="flex items-center justify-between border-b border-sand-50/10 pb-3">
              <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide text-citron-400">
                <ShoppingBag className="h-3.5 w-3.5" /> Récapitulatif
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {packQty > 0 && <Row label={`Pack Découverte ×${packQty}`} value={packTotal} />}
              {pack25Qty > 0 && <Row label={`Pack Événement ×${pack25Qty}`} value={pack25Total} />}
              {extraCount > 0 && <Row label={`Bouteilles ×${extraCount}`} value={extraTotal} />}
              <Row label="Livraison" value={neighborhood.deliveryFee} muted />
              <div className="flex items-center justify-between border-t border-sand-50/10 pt-3 text-sm font-bold">
                <span>Total</span>
                <span className="font-mono text-lg text-citron-400">{grandTotal.toLocaleString("fr-FR")} FCFA</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-citron-400 py-3.5 text-sm font-bold text-leaf-900 transition-transform hover:scale-[1.02] disabled:opacity-60 cursor-pointer"
            >
              {submitting ? "Préparation..." : "Envoyer sur WhatsApp"}
            </button>
            <p className="text-center text-[10px] text-sand-300">
              Vous serez redirigé vers WhatsApp pour confirmer votre commande.
            </p>
          </div>
        </div>
      </form>

      <AnimatePresence>
        {confirmedOrder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-leaf-900/60 p-4 backdrop-blur-sm"
            onClick={() => setConfirmedOrder(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl"
            >
              <CheckCircle2 className="mx-auto h-12 w-12 text-leaf-600" />
              <h3 className="mt-4 font-display text-xl font-semibold text-leaf-900">Commande #{confirmedOrder.id}</h3>
              <p className="mt-2 text-sm text-ink-900/60">
                Confirmez l'envoi sur WhatsApp pour que notre équipe prépare votre commande (24h à l'avance).
              </p>
              <a
                href={getWhatsAppOrderLink(confirmedOrder)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-leaf-700 py-3 text-sm font-bold text-white cursor-pointer"
              >
                Ouvrir WhatsApp
              </a>
              <button
                onClick={() => setConfirmedOrder(null)}
                className="mt-3 w-full text-xs font-semibold text-ink-900/50 cursor-pointer"
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Stepper({ value, onChange, compact }: { value: number; onChange: (d: number) => void; compact?: boolean }) {
  const size = compact ? "h-6 w-6" : "h-8 w-8";
  return (
    <div className="flex items-center gap-2 rounded-full border border-leaf-900/10 bg-sand-50 p-1">
      <button type="button" onClick={() => onChange(-1)} className={`grid ${size} place-items-center rounded-full hover:bg-white cursor-pointer`}>
        <Minus className="h-3 w-3" />
      </button>
      <span className="w-4 text-center font-mono text-xs font-bold">{value}</span>
      <button type="button" onClick={() => onChange(1)} className={`grid ${size} place-items-center rounded-full hover:bg-white cursor-pointer`}>
        <Plus className="h-3 w-3" />
      </button>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-wide text-leaf-700/70">{label}</span>
      {children}
    </label>
  );
}

function Row({ label, value, muted }: { label: string; value: number; muted?: boolean }) {
  return (
    <div className={`flex justify-between ${muted ? "text-sand-300" : "text-sand-100"}`}>
      <span>{label}</span>
      <span className="font-mono">{value.toLocaleString("fr-FR")} FCFA</span>
    </div>
  );
}
