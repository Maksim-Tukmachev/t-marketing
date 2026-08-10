'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../components/Button'
import { FormNote } from '../components/FormNote'
import { Reveal } from '../components/Reveal'
import { company } from '../data/company'
import { quizOutcome, quizQuestions } from '../data/quiz'
import { CONSENT_ERROR, PHONE_ERROR, formatPhone, isPhoneComplete } from '../lib/phone'
import { track } from '../lib/analytics'
import './Quiz.css'

type Answers = Partial<Record<string, string>>

const lastStep = quizQuestions.length

export function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [phone, setPhone] = useState('')
  const [agree, setAgree] = useState(false)
  const [phoneError, setPhoneError] = useState<string>()
  const [agreeError, setAgreeError] = useState<string>()
  const [sent, setSent] = useState(false)

  const question = quizQuestions[step]
  const total = lastStep + 1
  const onContactStep = step === lastStep

  function choose(id: string, value: string) {
    if (step === 0 && Object.keys(answers).length === 0) track('quiz_start')

    setAnswers((prev) => ({ ...prev, [id]: value }))
    track('quiz_step', { step: step + 1, question: id, answer: value })
    setStep((prev) => Math.min(prev + 1, lastStep))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextPhone = isPhoneComplete(phone) ? undefined : PHONE_ERROR
    const nextAgree = agree ? undefined : CONSENT_ERROR
    setPhoneError(nextPhone)
    setAgreeError(nextAgree)
    if (nextPhone || nextAgree) return

    console.log('Заявка из квиза', { ...answers, phone })
    track('quiz_submit', { task: answers.task, niche: answers.niche })
    setSent(true)
  }

  return (
    <section className="section quiz" id="quiz">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <h2 className="h2">Подберём решение за 2 минуты</h2>
            <p className="section__lead">
              Четыре вопроса — и мы посчитаем прогноз заявок в вашей нише. Без созвона
              и без обязательств.
            </p>
          </div>

          <div className="quiz__panel">
            {sent ? (
              <div className="quiz__done">
                <p className="label quiz__kicker">Заявка принята</p>
                <p className="h3">Мы поняли задачу</p>
                <p className="quiz__outcome">
                  {answers.task ? quizOutcome[answers.task] : ''}
                </p>

                <dl className="quiz__summary">
                  {quizQuestions.map((item) =>
                    answers[item.id] ? (
                      <div className="quiz__summary-row" key={item.id}>
                        <dt className="label">{item.question}</dt>
                        <dd>{answers[item.id]}</dd>
                      </div>
                    ) : null,
                  )}
                </dl>

                {/* TODO: заменить на реальные данные */}
                <p className="quiz__done-note caption">
                  Перезвоним за {company.callbackTime} в рабочее время.
                </p>
              </div>
            ) : (
              <>
                <div className="quiz__progress">
                  <span className="label">
                    Шаг {step + 1} из {total}
                  </span>
                  <span className="quiz__bar" aria-hidden="true">
                    <span
                      className="quiz__bar-fill"
                      style={{ inlineSize: `${((step + 1) / total) * 100}%` }}
                    />
                  </span>
                </div>

                {onContactStep ? (
                  <form className="quiz__contact" onSubmit={handleSubmit} noValidate>
                    <div className="quiz__q">
                      <h3 className="h3" id="quiz-contact-title">
                        Куда прислать расчёт?
                      </h3>
                      <p className="quiz__hint">
                        Ответы уже у нас. Остался номер — по нему пришлём медиаплан
                        и вилку бюджета.
                      </p>
                    </div>

                    <div className="quiz__contact-body">
                      <div className="quiz__field">
                        <label className="field__label caption" htmlFor="quiz-phone">
                          Телефон
                        </label>
                        <input
                          id="quiz-phone"
                          className="input field__input"
                          type="tel"
                          inputMode="tel"
                          name="phone"
                          autoComplete="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={phone}
                          aria-invalid={phoneError ? true : undefined}
                          aria-describedby={phoneError ? 'quiz-phone-error' : undefined}
                          onChange={(event) => setPhone(formatPhone(event.target.value))}
                          onFocus={() => {
                            if (phone === '') {
                              setPhone('+7')
                              track('form_start', { form: 'quiz' })
                            }
                          }}
                        />
                        {phoneError ? (
                          <p id="quiz-phone-error" className="field__error">
                            {phoneError}
                          </p>
                        ) : null}
                      </div>

                      <div className="checkbox-row">
                        <input
                          id="quiz-agree"
                          className="checkbox"
                          type="checkbox"
                          checked={agree}
                          aria-invalid={agreeError ? true : undefined}
                          aria-describedby={agreeError ? 'quiz-agree-error' : undefined}
                          onChange={(event) => setAgree(event.target.checked)}
                        />
                        <label className="checkbox-row__text" htmlFor="quiz-agree">
                          Согласен на обработку персональных данных и принимаю{' '}
                          <a href={company.privacyUrl}>политику конфиденциальности</a>.
                        </label>
                      </div>
                      {agreeError ? (
                        <p id="quiz-agree-error" className="field__error">
                          {agreeError}
                        </p>
                      ) : null}

                      <div className="quiz__actions">
                        <Button
                          variant="rect"
                          onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
                        >
                          Назад
                        </Button>
                        <Button variant="accent" type="submit" className="quiz__submit">
                          Получить расчёт
                        </Button>
                      </div>

                      <FormNote className="form-note--light" />
                    </div>
                  </form>
                ) : (
                  <div className="quiz__step">
                    <div className="quiz__q">
                      <h3 className="h3" id={`quiz-q-${question.id}`}>
                        {question.question}
                      </h3>
                      <p className="quiz__hint">{question.hint}</p>
                    </div>

                    <div
                      className="quiz__options"
                      role="group"
                      aria-labelledby={`quiz-q-${question.id}`}
                    >
                      {question.options.map((option) => (
                        <button
                          type="button"
                          key={option}
                          className="quiz__option"
                          aria-pressed={answers[question.id] === option}
                          onClick={() => choose(question.id, option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {step > 0 ? (
                      <div className="quiz__actions">
                        <Button
                          variant="rect"
                          onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
                        >
                          Назад
                        </Button>
                      </div>
                    ) : null}
                  </div>
                )}
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
