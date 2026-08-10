'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from './Button'
import { company } from '../data/company'
import { CONSENT_ERROR, PHONE_ERROR, formatPhone, isPhoneComplete } from '../lib/phone'
import { track } from '../lib/analytics'
import './ExitIntent.css'

const SEEN_KEY = 'tusam:exit-intent'

/**
 * Ловит тех, кто уходит без заявки: предлагает чек-лист вместо созвона.
 * Показывается один раз за сессию и только на устройствах с мышью —
 * на мобильном «уход со страницы» не отследить без ложных срабатываний.
 */
export function ExitIntent() {
  const [open, setOpen] = useState(false)
  const [phone, setPhone] = useState('')
  const [agree, setAgree] = useState(false)
  const [phoneError, setPhoneError] = useState<string>()
  const [agreeError, setAgreeError] = useState<string>()
  const [sent, setSent] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setOpen(false)
    restoreFocusRef.current?.focus()
  }, [])

  useEffect(() => {
    if (window.sessionStorage.getItem(SEEN_KEY)) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const onMouseOut = (event: MouseEvent) => {
      if (event.relatedTarget || event.clientY > 0) return

      window.sessionStorage.setItem(SEEN_KEY, '1')
      restoreFocusRef.current = document.activeElement as HTMLElement | null
      setOpen(true)
      track('exit_intent_shown')
      document.removeEventListener('mouseout', onMouseOut)
    }

    document.addEventListener('mouseout', onMouseOut)
    return () => document.removeEventListener('mouseout', onMouseOut)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
        return
      }
      if (event.key !== 'Tab') return

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not(:disabled), input:not(:disabled)',
      )
      if (!focusable || focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, close])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextPhone = isPhoneComplete(phone) ? undefined : PHONE_ERROR
    const nextAgree = agree ? undefined : CONSENT_ERROR
    setPhoneError(nextPhone)
    setAgreeError(nextAgree)
    if (nextPhone || nextAgree) return

    console.log('Заявка на чек-лист (exit intent)', { phone })
    track('exit_intent_submit')
    setSent(true)
  }

  if (!open) return null

  return (
    <div className="exit" onClick={close}>
      <div
        className="exit__sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="exit__close" onClick={close} aria-label="Закрыть">
          <span aria-hidden="true">×</span>
        </button>

        {sent ? (
          <div className="exit__body">
            <p className="h2" id="exit-title">
              Чек-лист отправили
            </p>
            <p>
              {/* TODO: подставить ссылку на PDF */}
              Ссылка ушла в SMS. Если не дошла — напишите в{' '}
              <a className="link-text" href={company.telegramHref} target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="exit__body">
            <p className="label exit__kicker">Не готовы оставлять заявку?</p>
            <h2 className="h2" id="exit-title">
              Заберите чек-лист
            </h2>
            <p className="exit__text">
              12 точек, где утекает рекламный бюджет в Директе и VK Рекламе. Проверите
              свой кабинет сами, без нас и без созвона.
            </p>

            <form className="exit__form" onSubmit={handleSubmit} noValidate>
              <label className="visually-hidden" htmlFor="exit-phone">
                Телефон
              </label>
              <div className="exit__row">
                <input
                  id="exit-phone"
                  className="input field__input"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  aria-invalid={phoneError ? true : undefined}
                  aria-describedby={phoneError ? 'exit-phone-error' : undefined}
                  onChange={(event) => setPhone(formatPhone(event.target.value))}
                  onFocus={() => {
                    if (phone === '') setPhone('+7')
                  }}
                />
                <Button variant="accent" type="submit">
                  Забрать чек-лист
                </Button>
              </div>
              {phoneError ? (
                <p id="exit-phone-error" className="field__error">
                  {phoneError}
                </p>
              ) : null}

              <div className="checkbox-row">
                <input
                  id="exit-agree"
                  className="checkbox"
                  type="checkbox"
                  checked={agree}
                  aria-invalid={agreeError ? true : undefined}
                  aria-describedby={agreeError ? 'exit-agree-error' : undefined}
                  onChange={(event) => setAgree(event.target.checked)}
                />
                <label className="checkbox-row__text" htmlFor="exit-agree">
                  Согласен на обработку персональных данных и принимаю{' '}
                  <a href={company.privacyUrl}>политику конфиденциальности</a>.
                </label>
              </div>
              {agreeError ? (
                <p id="exit-agree-error" className="field__error">
                  {agreeError}
                </p>
              ) : null}

              <p className="caption exit__note">
                Никаких звонков без вашего запроса — пришлём только ссылку.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
