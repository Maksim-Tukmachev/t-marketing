import type { ComponentPropsWithoutRef } from 'react'
import './Field.css'

type FieldProps = {
  id: string
  label: string
  /** Текст ошибки. Ошибка объясняется словами, а не красной рамкой. */
  error?: string
  hint?: string
} & Omit<ComponentPropsWithoutRef<'input'>, 'id' | 'className'>

export function Field({ id, label, error, hint, ...input }: FieldProps) {
  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const describedBy = [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(' ')

  return (
    <div className="field">
      <label className="field__label caption" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="input field__input"
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        {...input}
      />
      {hint ? (
        <p id={hintId} className="field__hint caption">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="field__error">
          {error}
        </p>
      ) : null}
    </div>
  )
}
