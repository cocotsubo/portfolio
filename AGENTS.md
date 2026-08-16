# AGENTS.md

## Vue d'ensemble

Site vitrine one-page pour Corentin De Saint Riquier, conseiller clientèle bancaire, destiné à ses recruteurs. Construit avec TanStack Start (React 19 + Vite) et déployé sur Netlify. Il n'y a qu'une seule route (`/`) : toutes les sections (hero, à propos, parcours, formation, compétences, livre, contact) sont assemblées sur la même page et reliées par des ancres.

### Stack

| Couche | Technologie |
|--------|-------------|
| Framework | TanStack Start |
| UI | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Style | Tailwind CSS 4 (variables CSS pour le thème clair/sombre) |
| Icônes | lucide-react |
| Déploiement | Netlify |

## Structure

```
public/images/       Photos, logos d'entreprises et visuels du livre
src/
  components/
    Reveal.tsx        Wrapper d'animation au scroll (IntersectionObserver)
    ThemeToggle.tsx    Interrupteur clair/sombre + hook useTheme
    ui/                Primitives Radix/Tailwind (badge, card, separator)
  routes/
    __root.tsx         Layout racine : polices, meta, script d'init du thème
    index.tsx           Page unique avec toutes les sections du site
  styles.css            Variables de thème, animations, police Josefin Sans / Avenir
```

## Décisions notables

- **Palette** : bleu profond échantillonné sur le fond de la photo de profil (`--brand-blue-*`), utilisé en dégradé pour le hero et la section contact afin que le portrait paraisse « incrusté » dans la page. Accent or (`--brand-gold`) pour les CTA et surlignages.
- **Thème clair/sombre** : classe `.dark` sur `<html>`, posée avant l'hydratation par un script inline dans `__root.tsx` (lit `localStorage.theme`, sinon la préférence système) pour éviter le flash de mauvais thème. Le bouton `ThemeToggle` bascule la classe et persiste le choix.
- **Typographie** : Josefin Sans (Google Fonts) pour les titres via `--font-display`, pile système de type Avenir (`--font-body`) pour le texte courant — Avenir n'est pas distribuable, la pile de secours vise les appareils Apple puis des sans-serif proches.
- **Animations au scroll** : composant `Reveal` générique (fade + translate/scale selon la variante) basé sur `IntersectionObserver`, désactivé si `prefers-reduced-motion: reduce`.
- **Données du parcours** : saisies à la main dans `EXPERIENCES`/`EDUCATION`/`SKILLS` (route `index.tsx`) à partir du CV fourni — pas de collection de contenu, le volume ne le justifiait pas.
- **Section livre** : renvoie vers la fiche Amazon de *La Course d'Orientation* ; images fournies par l'utilisateur dans `public/images/book-*.jpg`.

## Conventions

- Import paths via l'alias `@/*` → `src/*`.
- Composants en PascalCase, hooks en camelCase avec préfixe `use`.
- Couleurs et espacements de thème pilotés par variables CSS (`styles.css`), pas de valeurs Tailwind codées en dur pour les couleurs de marque.

## Commandes

```bash
npm run dev      # Serveur de développement (port 3000)
npm run build    # Build de production
```
