import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, BookOpen, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { ThemeToggle, useTheme } from '@/components/ThemeToggle'

export const Route = createFileRoute('/')({
  component: HomePage,
})

type Experience = {
  company: string
  role: string
  period: string
  location: string
  logo?: string
  logoLabel?: string
  bullets: string[]
  highlight?: boolean
}

const EXPERIENCES: Experience[] = [
  {
    company: 'Free Distribution — Free Mobile',
    role: 'Conseiller commercial',
    period: 'Août 2025 — aujourd’hui',
    location: 'Nice',
    logo: '/images/logo-free.png',
    bullets: [
      'Commercialisation de moyens de télécommunication : routeurs internet, assurances mobiles, smartphones, forfaits et solutions anti-virus.',
      'Conseil client de bout en bout, du diagnostic du besoin à la souscription.',
    ],
    highlight: true,
  },
  {
    company: 'Cabinet BOMAN',
    role: 'Chargé de clientèle — courtage assurance',
    period: 'Mai 2025',
    location: 'Nice',
    logoLabel: 'BO',
    bullets: [
      'Démarchage téléphonique pour un cabinet de courtage en assurance santé et prévoyance décès.',
      'Gestion et suivi des devis santé personnalisés.',
    ],
  },
  {
    company: 'Caisse d’Épargne Côte d’Azur',
    role: 'Conseiller clientèle premium',
    period: 'Mars 2023 — Mai 2024',
    location: 'Nice',
    logo: '/images/logo-caisse-epargne.png',
    bullets: [
      'Gestion d’un portefeuille de clients premium au sein d’une agence bancaire.',
      'Commercialisation IARD, crédits renouvelables et immobiliers, prévoyance.',
      'Produits d’épargne réglementaire et long terme : PEA, assurance-vie.',
    ],
    highlight: true,
  },
  {
    company: 'Crédit Agricole Provence Côte d’Azur',
    role: 'Conseiller commercial',
    period: 'Octobre 2022 — Mars 2023',
    location: 'Menton',
    logo: '/images/logo-credit-agricole.png',
    bullets: [
      'Gestion de l’accueil et des automates (ETS) en agence.',
      'Analyse du risque et souscription de contrats IARD et moyens de paiement.',
    ],
  },
  {
    company: 'Société Générale — SG Crédit du Nord',
    role: 'Téléconseiller — service Étoile Direct',
    period: 'Mars 2022 — Juin 2022',
    location: 'Paris / Lille',
    logo: '/images/logo-sg.png',
    bullets: [
      'Gestion des appels entrants, mise en place de contrats d’assurance et bancaires.',
      'Fidélisation client via des campagnes hebdomadaires et animations commerciales.',
      'Accompagnement de la fusion CDN – SG et adaptation aux nouveaux outils du groupe.',
    ],
  },
  {
    company: 'CIC Nord-Ouest',
    role: 'Conseiller clientèle polyvalent',
    period: 'Novembre 2021 — Mars 2022',
    location: 'Béthune',
    logo: '/images/logo-cic.jpg',
    bullets: [
      'Gestion d’un portefeuille clients, accueil, guichet et opérations courantes.',
      'Souscription de crédits à la consommation et immobiliers, contrats d’assurance et d’épargne (PEA, PEA-PME, assurance-vie).',
      'Prospection commerciale et plan d’action personnel hebdomadaire.',
    ],
    highlight: true,
  },
  {
    company: 'Oney Bank — Groupe BPCE',
    role: 'Chargé de clientèle — recouvrement amiable',
    period: 'Octobre 2021 — Novembre 2021',
    location: 'France',
    logo: '/images/logo-oney.jpg',
    bullets: [
      'Analyse du risque et accompagnement de la clientèle fragile.',
      'Montage de crédits à la consommation, rachats de crédits et crédits automobiles.',
    ],
  },
  {
    company: 'Monabanq — Groupe Crédit Mutuel',
    role: 'Téléconseiller bancaire',
    period: 'Mai 2021 — Septembre 2021',
    location: 'France',
    logo: '/images/logo-monabanq.png',
    bullets: [
      'Gestion d’un portefeuille collectif au sein d’une banque en ligne.',
      'Montage de crédits à la consommation, rachats et crédits automobiles ; premières bases en analyse du risque.',
    ],
  },
]

const EDUCATION = [
  {
    school: 'Lycée André Malraux — Béthune (62)',
    degree: 'BTS Services Informatiques aux Organisations',
    period: 'Septembre 2017 — Juin 2019',
  },
  {
    school: 'Lycée André Malraux — Béthune (62)',
    degree: 'Baccalauréat Technologique',
    period: 'Septembre 2016 — Juin 2017',
  },
]

const SKILLS = [
  'Portefeuille clients',
  'Analyse KPI',
  'Rebonds commerciaux',
  'Outils informatiques',
  'Certification AMF',
  'Analyse du risque (KYC)',
]

const NAV_LINKS = [
  { href: '#a-propos', label: 'À propos' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#competences', label: 'Compétences' },
  { href: '#livre', label: 'Le livre' },
  { href: '#contact', label: 'Contact' },
]

function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrollable = h.scrollHeight - h.clientHeight
      setProgress(scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return progress
}

function HomePage() {
  const { theme, toggle } = useTheme()
  const progress = useScrollProgress()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen font-body" style={{ fontFamily: 'var(--font-body)' }}>
      <div
        className="fixed left-0 top-0 z-50 h-[3px] bg-[var(--gold)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <header
        className="fixed inset-x-0 top-0 z-40 transition-colors duration-500"
        style={{
          backgroundColor: scrolled ? 'color-mix(in srgb, var(--background) 88%, transparent)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
            C. <span className="text-gold">De Saint Riquier</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="underline-swipe text-sm opacity-80 hover:opacity-100">
                {link.label}
              </a>
            ))}
            <ThemeToggle theme={theme} toggle={toggle} />
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle theme={theme} toggle={toggle} />
            <button aria-label="Ouvrir le menu" onClick={() => setMenuOpen((v) => !v)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div
            className="flex flex-col gap-1 border-t px-6 py-4 md:hidden"
            style={{ borderColor: 'var(--line)', backgroundColor: 'var(--background)' }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm opacity-80"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="top">
        <Hero />
        <About />
        <Experiences />
        <Education />
        <Skills />
        <Book />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
      style={{ background: 'var(--background)' }}
    >
      <div className="brand-gradient absolute inset-0" />
      <div
        className="drift absolute -left-24 top-16 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: 'var(--brand-blue-500)' }}
      />
      <div
        className="float-slow absolute right-[-6rem] bottom-[-4rem] h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ backgroundColor: 'var(--brand-gold)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, transparent 0 42px, rgba(255,255,255,0.6) 42px 43px)',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr]">
        <Reveal variant="left">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--brand-gold-soft,#e3cd9a)]" style={{ color: 'var(--brand-gold)' }}>
            Conseiller clientèle bancaire · Nice
          </p>
          <h1
            className="font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Corentin
            <br />
            De Saint <span className="text-gold">Riquier</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/80">
            Cinq ans au service de la relation client bancaire. Rigueur technique, sens du
            résultat et conformité totale — je fais grandir des portefeuilles, pas seulement
            des chiffres.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#parcours"
              className="rounded-full px-7 py-3 text-sm font-medium text-[var(--brand-blue-950)] transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--brand-gold)' }}
            >
              Découvrir mon parcours
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Me contacter
            </a>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={150}>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-6 rounded-[2.5rem] opacity-60 blur-2xl"
              style={{ backgroundColor: 'var(--brand-blue-500)' }}
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <img
                src="/images/profile-blue.jpg"
                alt="Portrait de Corentin De Saint Riquier"
                className="h-full w-full object-cover"
                style={{
                  maskImage:
                    'radial-gradient(120% 100% at 50% 35%, black 62%, transparent 100%)',
                  WebkitMaskImage:
                    'radial-gradient(120% 100% at 50% 35%, black 62%, transparent 100%)',
                }}
              />
            </div>
            <div
              className="float-slow absolute -bottom-5 -right-5 rounded-2xl border px-5 py-3 text-white shadow-xl backdrop-blur"
              style={{ backgroundColor: 'color-mix(in srgb, var(--brand-blue-800) 85%, transparent)', borderColor: 'rgba(255,255,255,0.15)' }}
            >
              <p className="text-2xl font-semibold leading-none text-gold">5 ans</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-white/70">en banque &amp; assurance</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60">
        <div className="h-9 w-5 rounded-full border border-white/40 p-1">
          <div className="float-slow h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal variant="left">
          <p className="text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
            À propos
          </p>
          <h2 className="mt-3 font-display text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            Une expertise bâtie <span className="text-gold">agence après agence</span>
          </h2>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <p className="text-lg leading-relaxed opacity-90">
            Conseiller de 25 ans spécialisé en services bancaires. En cinq ans passés en banque
            et en assurance, j’ai développé une expertise solide en IARD, prévoyance, KYC,
            épargne bancaire et financière et crédits.
          </p>
          <p className="mt-5 text-lg leading-relaxed opacity-90">
            Expert de la relation client et de l’analyse financière, je conjugue rigueur
            technique et sens du service. Orienté résultats et KPI, je m’engage à développer
            votre portefeuille dans le respect total de la conformité.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 opacity-80">
              <MapPin size={16} style={{ color: 'var(--accent)' }} />
              1 Rue Oscar II, 06000 Nice
            </div>
            <div className="flex items-center gap-2 opacity-80">
              <Phone size={16} style={{ color: 'var(--accent)' }} />
              06 66 33 66 68
            </div>
            <div className="flex items-center gap-2 opacity-80">
              <Mail size={16} style={{ color: 'var(--accent)' }} />
              c.dsr@outlook.fr
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Français — natif', 'Anglais', 'Espagnol'].map((lang) => (
              <span
                key={lang}
                className="rounded-full border px-4 py-1.5 text-xs"
                style={{ borderColor: 'var(--line)' }}
              >
                {lang}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function LogoBadge({ src, label }: { src?: string; label?: string }) {
  if (src) {
    return (
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-white p-2 shadow-sm"
        style={{ borderColor: 'var(--line)' }}
      >
        <img src={src} alt="" className="h-full w-full object-contain" />
      </div>
    )
  }
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border text-sm font-semibold shadow-sm"
      style={{ borderColor: 'var(--line)', backgroundColor: 'var(--surface)', color: 'var(--accent)' }}
    >
      {label}
    </div>
  )
}

function Experiences() {
  return (
    <section
      id="parcours"
      className="px-6 py-28"
      style={{ backgroundColor: 'var(--surface-muted)' }}
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-center text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
            Parcours professionnel
          </p>
          <h2 className="mt-3 text-center font-display text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            Huit agences, <span className="text-gold">une seule exigence</span>
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div
            className="timeline-line absolute left-7 top-0 h-full w-px md:left-1/2"
            aria-hidden="true"
          />
          <ul className="space-y-14">
            {EXPERIENCES.map((exp, i) => (
              <TimelineItem key={exp.company} exp={exp} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ exp, index }: { exp: Experience; index: number }) {
  const isRight = index % 2 === 1
  return (
    <li className="relative pl-20 md:pl-0">
      <div
        className="absolute left-4 top-1 z-10 h-6 w-6 rounded-full border-4 md:left-1/2 md:-translate-x-1/2"
        style={{
          backgroundColor: exp.highlight ? 'var(--gold)' : 'var(--surface)',
          borderColor: 'var(--accent)',
        }}
      />
      <div className={`md:grid md:grid-cols-2 md:gap-10 ${isRight ? '' : ''}`}>
        <div className={isRight ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1 md:text-right'}>
          <Reveal variant={isRight ? 'right' : 'left'}>
            <div
              className="rounded-2xl border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              style={{ borderColor: 'var(--line)', backgroundColor: 'var(--surface)' }}
            >
              <div className={`flex items-start gap-4 ${isRight ? '' : 'md:flex-row-reverse'}`}>
                <LogoBadge src={exp.logo} label={exp.logoLabel} />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider opacity-60">{exp.period} · {exp.location}</p>
                  <h3 className="mt-1 font-display text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                    {exp.company}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                    {exp.role}
                  </p>
                </div>
              </div>
              <ul className={`mt-4 space-y-2 text-sm opacity-85 ${isRight ? '' : 'md:text-right'}`}>
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </li>
  )
}

function Education() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
          Formation
        </p>
        <h2 className="mt-3 font-display text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
          Les bases <span className="text-gold">à Béthune</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {EDUCATION.map((edu, i) => (
          <Reveal key={edu.degree} variant="up" delay={i * 120}>
            <div
              className="h-full rounded-2xl border p-6"
              style={{ borderColor: 'var(--line)', backgroundColor: 'var(--surface)' }}
            >
              <p className="text-xs uppercase tracking-wide opacity-60">{edu.period}</p>
              <h3 className="mt-2 font-display text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm opacity-75">{edu.school}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  const loopedSkills = [...SKILLS, ...SKILLS]
  return (
    <section id="competences" className="py-24" style={{ backgroundColor: 'var(--accent)' }}>
      <Reveal>
        <h2
          className="px-6 text-center font-display text-3xl text-white sm:text-4xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Compétences clés
        </h2>
      </Reveal>
      <div className="relative mt-12 overflow-hidden">
        <div className="marquee-track gap-6 py-2">
          {loopedSkills.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="mx-3 whitespace-nowrap rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Book() {
  return (
    <section id="livre" className="relative overflow-hidden px-6 py-28" style={{ backgroundColor: 'var(--background)' }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal variant="scale">
          <div className="relative mx-auto flex max-w-sm items-end justify-center gap-4">
            <img
              src="/images/book-cover.jpg"
              alt="Couverture du livre La Course d'Orientation de Corentin De Saint Riquier"
              className="w-2/3 rounded-lg shadow-2xl"
            />
            <img
              src="/images/book-hands.jpg"
              alt="Le livre La Course d'Orientation tenu en main"
              className="float-slow hidden w-1/2 -translate-y-6 rounded-lg shadow-2xl sm:block"
            />
          </div>
        </Reveal>

        <Reveal variant="right" delay={100}>
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
            <BookOpen size={16} /> Ma plume, hors de l’agence
          </p>
          <h2 className="mt-3 font-display text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            La Course <span className="text-gold">d’Orientation</span>
          </h2>
          <p className="mt-2 text-sm italic opacity-70">
            Le roman autobiographique d’un élève — Bibliothèques Sans Frontières, 2020
          </p>
          <p className="mt-6 text-lg leading-relaxed opacity-90">
            Avant les portefeuilles clients, il y a eu les couloirs du lycée. Dans ce récit
            autobiographique, je reviens sur les doutes, les faux départs et les décisions qui
            construisent une trajectoire — la mienne, entre orientation scolaire et
            affirmation de soi.
          </p>
          <a
            href="https://www.amazon.fr/Course-dOrientation-Corentin-MOTTE-ebook/dp/B08PSL4VZT"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            Lire sur Amazon
            <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      <div className="brand-gradient absolute inset-0" />
      <div className="relative mx-auto max-w-3xl text-center text-white">
        <Reveal variant="scale">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Parlons de votre projet</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Une opportunité à me proposer ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/80">
            Basé à Nice, mobile sur toute la Côte d’Azur. Disponible pour un échange autour
            d’un poste de conseiller clientèle, chargé de portefeuille ou toute mission liée à
            la relation bancaire.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:c.dsr@outlook.fr"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-[var(--brand-blue-950)]"
              style={{ backgroundColor: 'var(--brand-gold)' }}
            >
              <Mail size={16} /> c.dsr@outlook.fr
            </a>
            <a
              href="tel:+33666336668"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              <Phone size={16} /> 06 66 33 66 68
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-8 text-center text-xs opacity-60" style={{ backgroundColor: 'var(--background)' }}>
      © {new Date().getFullYear()} Corentin De Saint Riquier — Nice, France
    </footer>
  )
}
