import { Reveal } from '../components/Reveal'
import './Process.css'

/* Сроки — плейсхолдеры. TODO: заменить на реальные данные */
const steps = [
  { n: '01', title: 'Заявка', term: '{{1 день}}', text: 'Созвон на 20 минут.' },
  { n: '02', title: 'Бриф и аудит', term: '{{3 дня}}', text: 'Показываем точки потерь.' },
  { n: '03', title: 'Прототип', term: '{{5 дней}}', text: 'Структура, тексты, медиаплан.' },
  { n: '04', title: 'Запуск', term: '{{2 дня}}', text: 'Кампании, цели, бюджет.' },
  { n: '05', title: 'Отчёт', term: '{{30 дней}}', text: 'Расход, заявки, цена заявки.' },
  { n: '06', title: 'Решение', term: '{{1 день}}', text: 'Работаем дальше или расходимся.' },
] as const

export function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <h2 className="h2">Как мы работаем</h2>
            <p className="section__lead">От заявки до отчёта — месяц.</p>
          </div>
        </Reveal>
      </div>

      <div className="process__scroller scroll-row">
        <ol className="container process__track">
          {steps.map((step) => (
            <li className="process__step" key={step.n}>
              <span className="h1 process__n" aria-hidden="true">
                {step.n}
              </span>
              <h3 className="body-lg process__title">{step.title}</h3>
              <p className="process__text">{step.text}</p>
              {/* TODO: заменить на реальные данные */}
              <span className="process__term label">{step.term}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
