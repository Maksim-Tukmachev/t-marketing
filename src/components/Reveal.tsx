'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import './Reveal.css'

type RevealProps = {
  children: ReactNode
  className?: string
}

/**
 * Появление блока при скролле: opacity 0→1 и translateY 16px→0, один раз.
 * При prefers-reduced-motion переход отключается в CSS.
 */
export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  /* Без IntersectionObserver показываем сразу — анимация не обязательна */
  const [shown, setShown] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
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
    <div
      ref={ref}
      className={['reveal', shown ? 'is-shown' : '', className ?? ''].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}
