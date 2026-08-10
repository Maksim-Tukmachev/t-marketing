'use client'

import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { navLinks } from '../data/company'
import { track } from '../lib/analytics'
import './Header.css'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className={open ? 'header is-menu-open' : 'header'}>
      <div className="container header__inner">
        <a className="header__logo" href="#top">
          TUSAM Group
        </a>

        <nav className="header__nav" aria-label="Основная навигация">
          <ul className="header__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="header__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Button
            as="a"
            variant="rect"
            onDark
            href="#cta"
            className="header__cta"
            onClick={() => track('cta_click', { place: 'header' })}
          >
            Получить прототип
          </Button>

          <button
            type="button"
            className="header__burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="visually-hidden">{open ? 'Закрыть меню' : 'Открыть меню'}</span>
            <span className={open ? 'header__burger-icon is-open' : 'header__burger-icon'} aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={open ? 'menu is-open' : 'menu'} hidden={!open}>
        <nav className="container menu__inner" aria-label="Мобильная навигация">
          <ul className="menu__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="menu__link h2" href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            as="a"
            variant="accent"
            fullOnMobile
            href="#cta"
            className="menu__cta"
            onClick={() => setOpen(false)}
          >
            Получить прототип
          </Button>
        </nav>
      </div>
    </header>
  )
}
