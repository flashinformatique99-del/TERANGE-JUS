# 🍋 Teranga Jus — Site web officiel

Site vitrine + commande premium pour Teranga Jus (Dakar), construit avec React, Vite,
Tailwind CSS et Framer Motion. Le site est 100% statique : aucun serveur ni base de
données à gérer, et il se déploie gratuitement sur Vercel en quelques clics.

Les commandes sont envoyées directement sur WhatsApp (77 691 05 64), avec le détail
complet du panier déjà rédigé — le client n'a plus qu'à appuyer sur "Envoyer".

---

## 🚀 Déployer le site (étape par étape, sans rien installer)

### Étape 1 — Créer un compte GitHub (si tu n'en as pas)
Va sur https://github.com/signup et crée un compte gratuit.

### Étape 2 — Mettre le projet sur GitHub
1. Va sur https://github.com/new
2. Nomme le dépôt `teranga-jus` (visibilité "Public" ou "Private", peu importe)
3. Ne coche **aucune** case (pas de README, pas de .gitignore) — clique "Create repository"
4. GitHub affiche alors une page avec des commandes. Sur ton ordinateur, ouvre un
   terminal (ou l'invite de commandes / PowerShell sous Windows) **dans le dossier
   de ce projet** et exécute, une ligne à la fois :

```bash
git init
git add .
git commit -m "Site Teranga Jus - version premium"
git branch -M main
git remote add origin https://github.com/TON-NOM-UTILISATEUR/teranga-jus.git
git push -u origin main
```

   ⚠️ Remplace `TON-NOM-UTILISATEUR` par ton nom d'utilisateur GitHub. GitHub te
   demandera de te connecter (un token à créer sur github.com/settings/tokens si
   demandé).

### Étape 3 — Déployer sur Vercel
1. Va sur https://vercel.com/signup et connecte-toi avec ton compte **GitHub**
   (bouton "Continue with GitHub")
2. Une fois connecté, clique sur **"Add New..." → "Project"**
3. Choisis le dépôt `teranga-jus` dans la liste et clique **"Import"**
4. Vercel détecte automatiquement qu'il s'agit d'un projet Vite — ne change rien
   aux réglages proposés
5. Clique sur **"Deploy"**
6. Après 30 à 60 secondes, ton site est en ligne sur une adresse du type
   `teranga-jus.vercel.app` 🎉

### Étape 4 — Mises à jour futures
À chaque fois que tu modifies le code et que tu fais :
```bash
git add .
git commit -m "description du changement"
git push
```
Vercel republie automatiquement le site en quelques secondes. Aucune autre
manipulation n'est nécessaire.

### (Optionnel) Nom de domaine personnalisé
Dans le tableau de bord Vercel du projet → onglet **"Domains"** → ajoute
`terangajus.sn` (ou le domaine de ton choix) et suis les instructions pour
configurer le DNS chez ton registrar.

---

## 💻 Travailler sur le site en local (optionnel)

Si tu veux voir tes modifications avant de les publier, il faut installer
[Node.js](https://nodejs.org) (version 18 ou plus), puis dans le dossier du
projet :

```bash
npm install       # installe les dépendances (une seule fois)
npm run dev        # lance le site en local sur http://localhost:5173
```

Pour vérifier que tout compile correctement avant de publier :
```bash
npm run build
```

---

## 🗂️ Où modifier quoi

| Je veux changer...                              | Fichier à ouvrir                          |
|--------------------------------------------------|--------------------------------------------|
| Les prix, la description des jus                 | `src/data.ts`                               |
| Les zones de livraison et frais                  | `src/data.ts` (variable `NEIGHBORHOODS`)    |
| Le numéro WhatsApp / téléphone                    | Rechercher `221776910564` dans `src/`       |
| Les témoignages clients                           | `src/data.ts` (variable `TESTIMONIALS`)     |
| Les questions FAQ                                 | `src/data.ts` (variable `FAQS`)             |
| Les couleurs du site                              | `src/index.css` (section `@theme`)          |
| Le texte du grand titre d'accueil                 | `src/components/Hero.tsx`                   |
| Le logo ou les photos de jus                      | Remplacer les fichiers dans `public/images/`|

Après toute modification, republie avec `git add . && git commit -m "..." && git push`.

---

## 📁 Structure du projet

```
teranga-jus/
├── public/images/       → toutes les photos et le logo (format .webp, optimisées)
├── src/
│   ├── components/      → chaque section du site (Hero, Catalogue, Commande...)
│   ├── data.ts           → produits, prix, quartiers, avis, FAQ
│   ├── types.ts           → structure des données (TypeScript)
│   ├── index.css          → couleurs, polices, styles globaux
│   ├── App.tsx             → assemble toutes les sections
│   └── main.tsx             → point d'entrée
├── index.html            → titre, SEO, réseaux sociaux
└── package.json          → dépendances du projet
```

---

## ℹ️ Notes sur cette refonte

- Le prix du **Pack Événement (25 bouteilles)** a été fixé à titre indicatif à
  35 000 FCFA (le fichier d'origine indiquait 10 000 FCFA pour 25 bouteilles,
  ce qui semblait être une erreur par rapport au pack de 6 à 10 000 FCFA).
  Ajuste ce chiffre dans `src/data.ts` si besoin.
- La fonctionnalité "suggestion IA d'accord mets-jus" (qui nécessitait un
  serveur et une clé API Gemini) a été retirée pour garder un site 100%
  statique, simple à déployer et gratuit à héberger. Si tu veux la
  réintégrer plus tard, dis-le moi.
- Le logo utilisé est celui que tu as fourni le plus récemment (badge rond
  avec baobab, mosquée, bissap, gingembre, orange et mangue) — nettement
  plus professionnel que l'ancien logo carré basse résolution.
