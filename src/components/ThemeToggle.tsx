import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* ignore */
    }
  }

  return { theme, toggle }
}

export function ThemeToggle({ theme, toggle }: { theme: 'light' | 'dark'; toggle: () => void }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={toggle}
      aria-label="Basculer entre le mode clair et le mode sombre"
      aria-pressed={isDark}
      className="theme-toggle-track relative flex h-8 w-16 items-center rounded-full border border-[var(--line)] px-1"
      style={{ backgroundColor: isDark ? 'var(--brand-blue-800)' : 'var(--surface-muted)' }}
    >
      <span
        className="theme-toggle-knob flex h-6 w-6 items-center justify-center rounded-full text-[11px]"
        style={{
          backgroundColor: isDark ? 'var(--brand-gold-soft)' : '#fff',
          transform: isDark ? 'translateX(30px)' : 'translateX(0px)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
        }}
      >
        {isDark ? (
          <Moon size={13} color="var(--brand-blue-900)" strokeWidth={2.4} />
        ) : (
          <Sun size={13} color="var(--brand-blue-700)" strokeWidth={2.4} />
        )}
      </span>
    </button>
  )
}
