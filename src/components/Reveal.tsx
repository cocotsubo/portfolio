import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  as?: 'div' | 'li' | 'section'
  variant?: 'up' | 'left' | 'right' | 'scale'
  delay?: number
  className?: string
}

const variantClass: Record<NonNullable<RevealProps['variant']>, string> = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
}

export function Reveal({ children, as = 'div', variant = 'up', delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Tag = as as any

  return (
    <Tag
      ref={ref}
      className={`${variantClass[variant]} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
