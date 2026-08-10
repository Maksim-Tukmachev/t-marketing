'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../components/Button'
import { Field } from '../components/Field'
import { company } from '../data/company'
import { CONSENT_ERROR, PHONE_ERROR, formatPhone, isPhoneComplete } from '../lib/phone'
import './CtaForm.css'

type Errors = {
  name?: string
  phone?: string
  agree?: string
}

export function CtaForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [site, setSite] = useState('')
  const [agree, setAgree] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const next: Errors = {}
    if (name.trim().length === 0) next.name = 'Напишите, как к вам обращаться.'
    if (!isPhoneComplete(phone)) next.phone = PHONE_ERROR
    if (!agree) next.agree = CONSENT_ERROR

    setErrors(next)
    if (Object.keys(next).length > 0) return

    console.log('Заявка на бесплатный прототип', {
      name: name.trim(),
      phone,
      site: site.trim(),
      agree,
    })
    setSent(true)
  }

  return (
    <section className="section section--dark cta" id="cta">
      <div className="container cta__inner">
        <h2 className="display cta__title">
          <span>Заберите</span>
          <span>прототип</span>
        </h2>

        <div className="cta__side">
          {sent ? (
            <div className="cta__done">
              <p className="h3 cta__done-title">Заявка отправлена</p>
              <p className="cta__done-text">
                Свяжемся с вами в течение {company.replyTime} в рабочее время.
                {/* TODO: заменить на реальные данные */}
              </p>
              <Button variant="pill" onDark fullOnMobile onClick={() => setSent(false)}>
                Отправить ещё одну
              </Button>
            </div>
          ) : (
            <form className="cta__form form-dark" onSubmit={handleSubmit} noValidate>
              <Field
                id="cta-name"
                label="Имя"
                name="name"
                autoComplete="name"
                value={name}
                error={errors.name}
                onChange={(event) => setName(event.target.value)}
              />

              <Field
                id="cta-phone"
                label="Телефон"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                error={errors.phone}
                onChange={(event) => setPhone(formatPhone(event.target.value))}
                onFocus={() => {
                  if (phone === '') setPhone('+7')
                }}
              />

              <Field
                id="cta-site"
                label="Сайт или ниша"
                name="site"
                autoComplete="url"
                placeholder="tusam-group.ru или «доставка воды»"
                value={site}
                error={undefined}
                onChange={(event) => setSite(event.target.value)}
              />

              <div className="cta__agree">
                <div className="checkbox-row">
                  <input
                    id="cta-agree"
                    className="checkbox"
                    type="checkbox"
                    name="agree"
                    checked={agree}
                    aria-invalid={errors.agree ? true : undefined}
                    aria-describedby={errors.agree ? 'cta-agree-error' : undefined}
                    onChange={(event) => setAgree(event.target.checked)}
                  />
                  <label className="checkbox-row__text" htmlFor="cta-agree">
                    Согласен на обработку персональных данных и принимаю{' '}
                    <a href={company.privacyUrl}>политику конфиденциальности</a>.
                  </label>
                </div>
                {errors.agree ? (
                  <p id="cta-agree-error" className="field__error">
                    {errors.agree}
                  </p>
                ) : null}
              </div>

              <Button variant="solid" onDark type="submit">
                Отправить заявку
              </Button>

              {/* TODO: заменить на реальные данные */}
              <p className="caption cta__reply">
                Ответим в течение {company.replyTime} в рабочее время.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
