'use client'

import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { Button } from './Button'
import { company } from '../data/company'
import { CONSENT_ERROR, PHONE_ERROR, formatPhone, isPhoneComplete } from '../lib/phone'
import './QuickForm.css'

type QuickFormProps = {
  /** Уникальный префикс: на странице несколько таких форм */
  id: string
  buttonLabel: string
  /** Что уходит в аналитику вместе с номером */
  source: string
  successTitle: string
  successText: ReactNode
  onDark?: boolean
}

/**
 * Короткая форма в один шаг: телефон + согласие.
 * Реальной отправки нет — console.log и состояние «отправлено».
 */
export function QuickForm({
  id,
  buttonLabel,
  source,
  successTitle,
  successText,
  onDark = true,
}: QuickFormProps) {
  const [phone, setPhone] = useState('')
  const [agree, setAgree] = useState(false)
  const [phoneError, setPhoneError] = useState<string>()
  const [agreeError, setAgreeError] = useState<string>()
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextPhone = isPhoneComplete(phone) ? undefined : PHONE_ERROR
    const nextAgree = agree ? undefined : CONSENT_ERROR
    setPhoneError(nextPhone)
    setAgreeError(nextAgree)
    if (nextPhone || nextAgree) return

    console.log('Заявка', { source, phone, agree })
    setSent(true)
  }

  if (sent) {
    return (
      <div className="quick-form__done">
        <p className="h3 quick-form__done-title">{successTitle}</p>
        <p className="quick-form__done-text">{successText}</p>
      </div>
    )
  }

  return (
    <form
      className={onDark ? 'quick-form form-dark' : 'quick-form'}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="quick-form__row">
        <div className="quick-form__field">
          <label className="visually-hidden" htmlFor={`${id}-phone`}>
            Телефон
          </label>
          <input
            id={`${id}-phone`}
            className="input field__input"
            type="tel"
            inputMode="tel"
            name="phone"
            autoComplete="tel"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? `${id}-phone-error` : undefined}
            onChange={(event) => setPhone(formatPhone(event.target.value))}
            onFocus={() => {
              if (phone === '') setPhone('+7')
            }}
          />
        </div>

        <Button variant="accent" type="submit" className="quick-form__submit">
          {buttonLabel}
        </Button>
      </div>

      {phoneError ? (
        <p id={`${id}-phone-error`} className="field__error">
          {phoneError}
        </p>
      ) : null}

      <div className="checkbox-row quick-form__agree">
        <input
          id={`${id}-agree`}
          className="checkbox"
          type="checkbox"
          name="agree"
          checked={agree}
          aria-invalid={agreeError ? true : undefined}
          aria-describedby={agreeError ? `${id}-agree-error` : undefined}
          onChange={(event) => setAgree(event.target.checked)}
        />
        <label className="checkbox-row__text" htmlFor={`${id}-agree`}>
          Согласен на обработку персональных данных и принимаю{' '}
          <a href={company.privacyUrl}>политику конфиденциальности</a>.
        </label>
      </div>

      {agreeError ? (
        <p id={`${id}-agree-error`} className="field__error">
          {agreeError}
        </p>
      ) : null}
    </form>
  )
}
