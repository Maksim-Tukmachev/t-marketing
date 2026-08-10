'use client'

import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from './Button'
import { company } from '../data/company'
import { CONSENT_ERROR, PHONE_ERROR, formatPhone, isPhoneComplete } from '../lib/phone'
import { track } from '../lib/analytics'
import './FloatingWidget.css'

/**
 * Плавающая кнопка связи: Telegram, звонок, почта и обратный звонок.
 * Панель — белый лист с рамкой 1px и прямыми углами: теней в системе нет,
 * поэтому от фона её отделяет линия (design.mdc §5.8).
 */
export function FloatingWidget() {
  const [open, setOpen] = useState(false)
  const [phone, setPhone] = useState('')
  const [agree, setAgree] = useState(false)
  const [phoneError, setPhoneError] = useState<string>()
  const [agreeError, setAgreeError] = useState<string>()
  const [sent, setSent] = useState(false)
  const [nearForm, setNearForm] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  /* Рядом с финальной формой кнопка не нужна: там уже есть полная форма,
     а на мобильном кнопка просто ложится поверх текста. */
  useEffect(() => {
    const form = document.getElementById("cta")
    if (!form || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(([entry]) => setNearForm(entry.isIntersecting))
    observer.observe(form)
    return () => observer.disconnect()
  }, [])

  /* Пока панель открыта, липкая панель заявки и сама кнопка прячутся:
     на мобильном они занимают то же место. */
  useEffect(() => {
    if (!open) {
      delete document.body.dataset.widgetOpen
      return
    }
    document.body.dataset.widgetOpen = 'true'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointerdown', onPointerDown)
    return () => {
      delete document.body.dataset.widgetOpen
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  function toggle() {
    /* Событие считаем здесь, а не внутри setState: обновляющая функция
       должна оставаться чистой, иначе в StrictMode оно уходит дважды. */
    const next = !open
    if (next) track('widget_open')
    setOpen(next)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextPhone = isPhoneComplete(phone) ? undefined : PHONE_ERROR
    const nextAgree = agree ? undefined : CONSENT_ERROR
    setPhoneError(nextPhone)
    setAgreeError(nextAgree)
    if (nextPhone || nextAgree) return

    console.log('Заявка на обратный звонок', { phone })
    track('form_submit', { form: 'widget_callback' })
    setSent(true)
  }

  return (
    <div
      className={nearForm && !open ? "widget widget--muted" : "widget"}
      ref={rootRef}
    >
      {open ? (
        <div className="widget__panel" role="dialog" aria-label="Связаться с агентством">
          <div className="widget__head">
            <p className="label widget__title">Связаться</p>
            <button
              type="button"
              className="widget__close"
              onClick={() => setOpen(false)}
              aria-label="Закрыть"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <ul className="widget__channels">
            <li>
              {/* TODO: заменить на реальные данные */}
              <a
                className="widget__channel"
                href={company.telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('widget_channel', { channel: 'telegram' })}
              >
                <span>Telegram</span>
                <span className="caption widget__channel-note">{company.telegram}</span>
              </a>
            </li>
            <li>
              <a
                className="widget__channel"
                href={company.phoneHref}
                onClick={() => track('widget_channel', { channel: 'phone' })}
              >
                <span>Позвонить</span>
                <span className="caption widget__channel-note">{company.phone}</span>
              </a>
            </li>
            <li>
              <a
                className="widget__channel"
                href={`mailto:${company.email}`}
                onClick={() => track('widget_channel', { channel: 'email' })}
              >
                <span>Написать на почту</span>
                <span className="caption widget__channel-note">{company.email}</span>
              </a>
            </li>
          </ul>

          {sent ? (
            <p className="widget__done">
              {/* TODO: заменить на реальные данные */}
              Приняли. Перезвоним за {company.callbackTime} в рабочее время.
            </p>
          ) : (
            <form className="widget__form" onSubmit={handleSubmit} noValidate>
              <p className="widget__form-title">Перезвонить мне</p>

              <label className="visually-hidden" htmlFor="widget-phone">
                Телефон
              </label>
              <input
                id="widget-phone"
                className="input field__input"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                aria-invalid={phoneError ? true : undefined}
                aria-describedby={phoneError ? 'widget-phone-error' : undefined}
                onChange={(event) => setPhone(formatPhone(event.target.value))}
                onFocus={() => {
                  if (phone === '') {
                    setPhone('+7')
                    track('form_start', { form: 'widget_callback' })
                  }
                }}
              />
              {phoneError ? (
                <p id="widget-phone-error" className="field__error">
                  {phoneError}
                </p>
              ) : null}

              <div className="checkbox-row">
                <input
                  id="widget-agree"
                  className="checkbox"
                  type="checkbox"
                  checked={agree}
                  aria-invalid={agreeError ? true : undefined}
                  aria-describedby={agreeError ? 'widget-agree-error' : undefined}
                  onChange={(event) => setAgree(event.target.checked)}
                />
                <label className="checkbox-row__text" htmlFor="widget-agree">
                  Согласен на обработку данных и принимаю{' '}
                  <a href={company.privacyUrl}>политику конфиденциальности</a>.
                </label>
              </div>
              {agreeError ? (
                <p id="widget-agree-error" className="field__error">
                  {agreeError}
                </p>
              ) : null}

              <Button variant="solid" type="submit">
                Жду звонка
              </Button>
              <p className="caption widget__note">Без обязательств, 30 секунд.</p>
            </form>
          )}
        </div>
      ) : null}

      <button
        type="button"
        className="widget__toggle btn btn-pill"
        aria-expanded={open}
        onClick={toggle}
      >
        {open ? 'Свернуть' : 'Связаться'}
      </button>
    </div>
  )
}
