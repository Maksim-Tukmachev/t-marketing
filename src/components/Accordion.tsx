import type { ReactNode } from 'react'
import './Accordion.css'

export type AccordionItem = {
  question: string
  answer: ReactNode
}

type AccordionProps = {
  items: readonly AccordionItem[]
  /** Общее имя группы: браузер сам закрывает соседние пункты */
  name?: string
}

/** Аккордеон на нативных <details>/<summary>, без JavaScript. */
export function Accordion({ items, name }: AccordionProps) {
  return (
    <div className="accordion">
      {items.map((item) => (
        <details className="accordion__item" key={item.question} name={name}>
          <summary className="accordion__q h3">
            <span>{item.question}</span>
            <span className="accordion__sign" aria-hidden="true" />
          </summary>
          <div className="accordion__a">{item.answer}</div>
        </details>
      ))}
    </div>
  )
}
