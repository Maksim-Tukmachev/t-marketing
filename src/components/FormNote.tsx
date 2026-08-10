import { company } from '../data/company'
import './FormNote.css'

type FormNoteProps = {
  /** Показать цепочку «что произойдёт после нажатия кнопки» */
  withSteps?: boolean
  className?: string
}

/**
 * Микрокопия под кнопкой. Отвечает на вопрос «что будет, если я нажму»:
 * пока человек этого не знает, он не нажимает.
 */
export function FormNote({ withSteps = true, className }: FormNoteProps) {
  return (
    <div className={className ? `form-note ${className}` : 'form-note'}>
      <ul className="form-note__facts label">
        <li>Займёт 30 секунд</li>
        <li>Без обязательств</li>
        <li>Номер не передаём третьим лицам</li>
      </ul>

      {withSteps ? (
        <ol className="form-note__steps caption">
          {/* TODO: заменить на реальные данные */}
          <li>Перезвоним за {company.callbackTime}</li>
          <li>Зададим пять вопросов</li>
          <li>Пришлём расчёт и медиаплан</li>
        </ol>
      ) : null}
    </div>
  )
}
