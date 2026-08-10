'use client'

import type { ReactNode } from 'react'
import { QuickForm } from './QuickForm'
import { Reveal } from './Reveal'
import './CtaBanner.css'

type CtaBannerProps = {
  id: string
  /** Короткая надсечка mono-шрифтом */
  kicker: string
  title: string
  text: string
  buttonLabel: string
  successTitle: string
  successText: ReactNode
}

/** Чёрная плашка с одним полем: точечный удар между секциями. */
export function CtaBanner({
  id,
  kicker,
  title,
  text,
  buttonLabel,
  successTitle,
  successText,
}: CtaBannerProps) {
  return (
    <section className="cta-banner" id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal>
          <div className="cta-banner__inner">
            <div className="cta-banner__copy">
              <span className="label cta-banner__kicker">{kicker}</span>
              <h2 className="h2 cta-banner__title" id={`${id}-title`}>
                {title}
              </h2>
              <p className="cta-banner__text">{text}</p>
            </div>

            <div className="cta-banner__form">
              <QuickForm
                id={id}
                source={id}
                buttonLabel={buttonLabel}
                successTitle={successTitle}
                successText={successText}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
