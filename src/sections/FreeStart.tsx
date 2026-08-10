import { Media } from '../components/Media'
import { Reveal } from '../components/Reveal'
import './FreeStart.css'

const items = [
  { n: '01', title: 'Аудит рекламы и сайта', text: 'Показываем, где утекает бюджет.' },
  { n: '02', title: 'Прототип посадочной', text: 'Структура, офферы, форма. Макет остаётся у вас.' },
  { n: '03', title: 'Медиаплан', text: 'Прогноз заявок и цена обращения до запуска.' },
  { n: '04', title: 'Настройка и запуск', text: 'Семантика, объявления, цели, аналитика.' },
  { n: '05', title: 'Ведение месяц', text: 'Чистим площадки, тестируем связки, режем лишнее.' },
  { n: '06', title: 'Отчёт', text: 'Расход, заявки, цена заявки. Цифры из систем.' },
] as const

export function FreeStart() {
  return (
    <section className="section free-start" id="start">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <h2 className="h2">Что входит в бесплатный старт</h2>
            <p className="section__lead">Тот же объём работ, что в платном проекте.</p>
          </div>

          <ul className="free-start__grid">
            {items.map((item) => (
              <li className="free-start__item" key={item.n}>
                <span className="free-start__n label">{item.n}</span>
                <h3 className="body-lg free-start__title">{item.title}</h3>
                <p className="free-start__text">{item.text}</p>
              </li>
            ))}
          </ul>

          <div className="free-start__bottom">
            <p className="h2 free-start__note">
              Всё это — бесплатно. Вы оплачиваете только рекламный бюджет.
            </p>

            {/* IMAGE: фактура — design/prompts/02-portfolio-cards.md § 2.5 */}
            <Media
              className="free-start__media"
              src="/images/texture-paper.webp"
              alt=""
              width={1800}
              height={1200}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
