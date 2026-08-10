import { Media } from '../components/Media'
import { Reveal } from '../components/Reveal'
import { company } from '../data/company'
import './Honest.css'

export function Honest() {
  const points = [
    {
      title: 'Не сработает — вы уходите',
      text: 'Первый месяц за наш счёт. Не устроил результат — уходите, не заплатив нам ни рубля.',
    },
    {
      title: 'Показать дешевле, чем продавать',
      text: 'Месяц работы обходится нам дешевле, чем недели переговоров и презентаций. Мы пропускаем этот этап.',
    },
    {
      title: 'Берём не всех',
      /* TODO: заменить на реальные данные */
      text: `${company.slotsPerMonth} проектов в месяц, чтобы вести руками. Если ниша не наша — скажем на первом созвоне.`,
    },
  ]

  return (
    <section className="section honest" id="honest">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <h2 className="h2">В чём подвох</h2>
            <p className="section__lead">Экономика оффера без тумана.</p>
          </div>

          <div className="honest__layout">
            {/* IMAGE: интерьер — design/prompts/02-portfolio-cards.md § 2.6 */}
            <Media
              className="honest__media"
              src="/images/honest-workspace.webp"
              alt="Рабочее место команды агентства"
              width={1400}
              height={1400}
            />

            <ol className="honest__list">
              {points.map((point, index) => (
                <li className="honest__item" key={point.title}>
                  <span className="honest__n label">{String(index + 1).padStart(2, '0')}</span>
                  <div className="honest__body">
                    <h3 className="h3 honest__title">{point.title}</h3>
                    <p className="honest__text">{point.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
