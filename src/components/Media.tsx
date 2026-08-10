import './Media.css'

type MediaProps = {
  src: string
  /**
   * Осмысленное описание кадра. Пустая строка допустима только для
   * декоративных полос, которые ничего не добавляют к тексту рядом.
   */
  alt: string
  /** Реальные пиксели файла — иначе браузер зарезервирует не тот бокс */
  width: number
  height: number
  className?: string
  /** Кадр в первом экране грузим сразу, остальные — лениво */
  eager?: boolean
  /** Куда смещать кадр при обрезке: 'center' | 'top' | '50% 30%' и т.д. */
  position?: string
}

/**
 * Единая вставка изображения: пропорция и обрезка задаются классом секции,
 * а не самим файлом. Без этого кадр другой пропорции распирает вёрстку.
 */
export function Media({
  src,
  alt,
  width,
  height,
  className,
  eager = false,
  position,
}: MediaProps) {
  return (
    <img
      className={className ? `media ${className}` : 'media'}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
      style={position ? { objectPosition: position } : undefined}
    />
  )
}
