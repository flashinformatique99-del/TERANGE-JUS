import { Juice, DakarNeighborhood } from "./types";

export const BOTTLE_PRICE = 1800;
export const PACK6_PRICE = 10000;
export const PACK25_PRICE = 35000;

export const JUICES: Juice[] = [
  {
    id: "bissap",
    name: "Bissap Royal",
    localName: "Bissap",
    emoji: "🌺",
    color: "from-bissap-500 to-bissap-600",
    badgeColor: "bg-bissap-500/10 text-bissap-600 border-bissap-500/20",
    description:
      "L'infusion royale de fleurs d'hibiscus rouge, brassée avec des feuilles de menthe fraîche du terroir sénégalais.",
    flavorProfile: "Acidulé, tonique, très désaltérant, arômes floraux intenses.",
    healthBenefits: "Antioxydant puissant, régulateur naturel de tension, riche en fer.",
    image: "/images/bissap.webp",
  },
  {
    id: "baobab",
    name: "Baobab Onctueux",
    localName: "Bouye",
    emoji: "🌳",
    color: "from-citron-300 to-citron-500",
    badgeColor: "bg-citron-400/15 text-citron-700 border-citron-400/30",
    description:
      "Le légendaire fruit du baobab, au goût crémeux et velouté, délicatement parfumé de vanille.",
    flavorProfile: "Onctueux, doux, légère acidité naturelle, notes lactées réconfortantes.",
    healthBenefits: "Très riche en vitamine C, calcium, potassium et fibres.",
    image: "/images/bouye.webp",
  },
  {
    id: "orange",
    name: "Pure Orange d'Afrique",
    localName: "Orange",
    emoji: "🍊",
    color: "from-citron-400 to-orange-500",
    badgeColor: "bg-orange-500/10 text-orange-700 border-orange-500/20",
    description: "Pressée de fruits mûris sous le soleil, sans conservateur ni sucre ajouté.",
    flavorProfile: "Gorgé de soleil, fruité éclatant et rafraîchissant.",
    healthBenefits: "Boost d'immunité, forte concentration en vitamine C active.",
    image: "/images/orange.webp",
  },
  {
    id: "baobab_mangue",
    name: "Baobab-Mangue",
    localName: "Bouye-Mangue",
    emoji: "🥭",
    color: "from-citron-300 to-leaf-400",
    badgeColor: "bg-leaf-400/10 text-leaf-600 border-leaf-400/25",
    description:
      "Fusion tropicale entre l'onctuosité du baobab et la pulpe sucrée de mangue locale de fin de saison.",
    flavorProfile: "Intensément fruité, texture purée premium, notes de mangue mûre.",
    healthBenefits: "Favorise la vitalité cellulaire et régule le transit intestinal.",
    image: "/images/baobab-mangue.webp",
  },
  {
    id: "cocktail_fruits",
    name: "Cocktail du Soleil",
    localName: "Cocktail de fruits",
    emoji: "🍹",
    color: "from-bissap-400 to-citron-400",
    badgeColor: "bg-orange-400/10 text-bissap-500 border-orange-300/25",
    description:
      "Mélange secret d'ananas sucré, fruit de la passion tonique et mangue — festif et multivitaminé.",
    flavorProfile: "Exotique, complexe, cocktail sucré-frais pour petits et grands.",
    healthBenefits: "Riche en oligo-éléments, hydratation optimale sous la chaleur.",
    image: "/images/cocktail.webp",
  },
  {
    id: "gingembre",
    name: "Gingembre Piquant",
    localName: "Gingembre",
    emoji: "🫚",
    color: "from-leaf-300 to-citron-400",
    badgeColor: "bg-leaf-400/10 text-leaf-600 border-leaf-400/25",
    description:
      "Élixir tonifiant de gingembre fraîchement râpé, relevé d'un filet de citron vert et de menthe nanah.",
    flavorProfile: "Corsé, très rafraîchissant, piquant revigorant, fini herbeux.",
    healthBenefits: "Digestion facilitée après un repas copieux, anti-inflammatoire naturel.",
    image: "/images/gingembre.webp",
  },
  {
    id: "citron",
    name: "Pure Citron",
    localName: "Citron",
    emoji: "🍋",
    color: "from-citron-300 to-leaf-300",
    badgeColor: "bg-citron-400/15 text-citron-700 border-citron-400/30",
    description:
      "Citrons pressés du terroir pour une fraîcheur tonique inégalée, sans colorant ni conservateur.",
    flavorProfile: "Vif, acidulé, intensément rafraîchissant, pointe de douceur naturelle.",
    healthBenefits: "Détoxifiant puissant, riche en antioxydants, booste l'immunité.",
    image: "/images/citron.webp",
  },
];

export const NEIGHBORHOODS: DakarNeighborhood[] = [
  { name: "Almadies / Ngor / Yoff", deliveryFee: 1500, estimatedTime: "25-30 min" },
  { name: "Plateau / Médina / Bel-Air", deliveryFee: 1000, estimatedTime: "30-45 min" },
  { name: "Mermoz / Fann / Point E / Sacré-Cœur", deliveryFee: 1000, estimatedTime: "25-35 min" },
  { name: "Parcelles Assainies / Patte d'Oie / Grand-Yoff", deliveryFee: 1200, estimatedTime: "35-45 min" },
  { name: "Guédiawaye / Pikine / Keur Massar", deliveryFee: 1800, estimatedTime: "45-60 min" },
  { name: "Rufisque / Diamniadio", deliveryFee: 2500, estimatedTime: "60-90 min" },
  { name: "Autre Zone de Dakar", deliveryFee: 1500, estimatedTime: "40-50 min" },
];

export const TESTIMONIALS = [
  {
    name: "Aminata D.",
    area: "Mermoz",
    quote:
      "Le Bissap est exactement comme celui de ma grand-mère à Thiès. Livré glacé en 30 minutes pour la Tabaski, tout le monde a adoré.",
    rating: 5,
  },
  {
    name: "Moussa K.",
    area: "Almadies",
    quote:
      "J'ai commandé le pack de 25 pour un baptême. Zéro déception, les bouteilles étaient encore froides à l'arrivée.",
    rating: 5,
  },
  {
    name: "Fatou S.",
    area: "Parcelles Assainies",
    quote:
      "Le Bouye a une texture incroyable, très onctueuse. Le paiement à la livraison rassure beaucoup.",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "Comment se passe le paiement ?",
    a: "Vous payez à la livraison, en espèces, Wave ou Orange Money — après avoir vérifié vos bouteilles. Aucun paiement en ligne requis.",
  },
  {
    q: "Vos jus contiennent-ils des conservateurs ?",
    a: "Jamais. Nos jus sont pressés à froid à Dakar, sans colorant, sans conservateur ni sucre ajouté. Consommation recommandée sous 4 jours au frais.",
  },
  {
    q: "Quel est le délai de livraison ?",
    a: "Entre 25 et 90 minutes selon votre quartier de Dakar. Le délai estimé s'affiche automatiquement une fois votre quartier sélectionné.",
  },
  {
    q: "Puis-je personnaliser mon pack de 6 ?",
    a: "Oui, gratuitement. Choisissez la répartition exacte de vos 6 bouteilles parmi nos 7 saveurs dans le configurateur de commande.",
  },
  {
    q: "Livrez-vous en dehors de Dakar ?",
    a: "Nous livrons actuellement Dakar et sa banlieue proche (Rufisque, Diamniadio inclus). Contactez-nous sur WhatsApp pour toute autre zone.",
  },
];
