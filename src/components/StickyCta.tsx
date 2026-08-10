'use client'

import { useEffect, useState } from 'react'
import { Button } from './Button'
import { track } from '../lib/analytics'
import './StickyCta.css'

/**
 * Мобильная панель с CTA. Появляется, когда первый экран уехал вверх,
 * и прячется, когда пользователь дошёл до формы.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    /* Панель молчит, пока на экране есть свой призыв к действию:
       два зелёных элемента в одной зоне видимости — против design.mdc §2 */
    const targets = ['top', 'checklist', 'calc', 'cta']
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null)

    if (targets.length === 0) return

    const onScreen = new Set<Element>(targets.slice(0, 1))

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target)
        else onScreen.delete(entry.target)
      }
      setVisible(onScreen.size === 0)
    })

    for (const target of targets) observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={visible ? 'sticky-cta is-visible' : 'sticky-cta'} aria-hidden={!visible}>
      <div className="sticky-cta__inner">
        <span className="label sticky-cta__text">Прототип и первый месяц — бесплатно</span>
        <Button
          as="a"
          variant="accent"
          href="#cta"
          tabIndex={visible ? undefined : -1}
          onClick={() => track('cta_click', { place: 'sticky' })}
        >
          Оставить заявку
        </Button>
      </div>
    </div>
  )
}
