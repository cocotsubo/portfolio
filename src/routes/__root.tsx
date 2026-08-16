import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          "Corentin De Saint Riquier — Conseiller clientèle bancaire à Nice. Cinq ans d'expérience en banque et assurance, expert IARD, épargne et crédits. Auteur de « La Course d'Orientation ».",
      },
      { title: 'Corentin De Saint Riquier — Conseiller clientèle bancaire' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        {children}
        <div className="grain-overlay" aria-hidden="true" />
        <Scripts />
      </body>
    </html>
  )
}
