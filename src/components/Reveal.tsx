'use client'

import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import './Reveal.css'

type RevealProps = {
  children: ReactNode
  className?: string
}

/**
 * Появление блока при скролле: opacity 0→1 и translateY 16px→0, один раз.
 *
 * Классы навешиваются на DOM, а не через состояние: на сервере
 * IntersectionObserver нет, и любое состояние «показан/скрыт» разъезжается
 * при гидрации. Блок изначально видим — если JS не отработал, контент
 * остаётся на месте.
 */
export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    /* Что уже на экране — не прячем: иначе первый экран моргнёт */
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight) return

    node.classList.add('is-armed')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('is-shown')
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className ? `reveal ${className}` : 'reveal'}>
      {children}
    </div>
  )
}
