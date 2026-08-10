import type { CSSProperties } from 'react'
import './Placeholder.css'

type PlaceholderProps = {
  /** Назначение кадра, например «КЕЙС» */
  kind: string
  /** Размер в пикселях, например «1200×1500» */
  size: string
  /** Пропорция для aspect-ratio, например «4 / 5» */
  ratio: string
  /** Описание для скринридера — что здесь будет за кадр */
  description: string
  className?: string
}

/**
 * Осознанная заглушка под фотографию: серый блок нужной пропорции
 * с подписью mono-шрифтом. Не «сломанная картинка», а место под кадр.
 */
export function Placeholder({ kind, size, ratio, description, className }: PlaceholderProps) {
  return (
    <div
      className={className ? `placeholder ${className}` : 'placeholder'}
      /* Пропорция через переменную, чтобы её можно было переопределить в медиазапросе */
      style={{ '--ratio': ratio } as CSSProperties}
      role="img"
      aria-label={description}
    >
      <span className="placeholder__caption label" aria-hidden="true">
        {kind} · {size}
      </span>
    </div>
  )
}
