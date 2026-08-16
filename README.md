# Site vitrine — Corentin De Saint Riquier

Site one-page présentant le parcours de conseiller clientèle bancaire de Corentin De Saint Riquier à destination de ses recruteurs : présentation, expériences en agence (avec les logos des enseignes), formation, compétences et une section dédiée à son livre *La Course d'Orientation*.

## Technologies

- [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7)
- Tailwind CSS 4, avec variables CSS pour le mode clair/sombre
- lucide-react pour les icônes
- Animations au scroll faites maison (`IntersectionObserver`), sans dépendance externe
- Déploiement sur Netlify

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est servi sur `http://localhost:3000` (ou via `netlify dev` sur le port configuré dans `netlify.toml`).

## Build de production

```bash
npm run build
```

Le résultat est généré dans `dist/client`, publié tel quel par Netlify.

## Structure

Voir `AGENTS.md` pour le détail de l'architecture et des choix de conception.
