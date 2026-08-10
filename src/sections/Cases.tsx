import { Media } from '../components/Media'
import { Reveal } from '../components/Reveal'
import './Cases.css'

/* Ниши реальные, все цифры — плейсхолдеры.
   TODO: заменить на реальные данные */
const cases = [
  {
    category: 'Контекст',
    niche: 'Производство мебели',
    metric: '{{заявок ×2,4 за 3 месяца}}',
    image: '/images/case-01-furniture.webp',
  },
  {
    category: 'Таргет',
    niche: 'Сеть барбершопов',
    metric: '{{стоимость записи −38%}}',
    image: '/images/case-02-barbershop.webp',
  },
  {
    category: 'SEO',
    niche: 'Клиника эстетики',
    metric: '{{трафик из поиска ×3}}',
    image: '/images/case-03-clinic.webp',
  },
  {
    category: 'Аналитика',
    niche: 'Онлайн-школа',
    metric: '{{ROI 340%}}',
    image: '/images/case-04-school.webp',
  },
  {
    category: 'Разработка',
    niche: 'Строительная компания',
    metric: '{{конверсия 4,1%}}',
    image: '/images/case-05-construction.webp',
  },
  {
    category: 'Брендинг',
    niche: 'Локальный ритейл',
    metric: '{{средний чек +21%}}',
    image: '/images/case-06-retail.webp',
  },
] as const

export function Cases() {
  return (
    <section className="section cases" id="cases">
      {/* IMAGE: полоса над кейсами — design/prompts/02-portfolio-cards.md § 2.6 */}
      <Media
        className="media-band cases__band"
        src="/images/cases-band.webp"
        alt=""
        width={2400}
        height={800}
      />

      <div className="container">
        <Reveal>
          <div className="section__head">
            <h2 className="h2">Кейсы</h2>
            <p className="section__lead">Ниши, где у нас есть работающие связки. Метрики — из систем аналитики клиента.</p>
          </div>

          <ul className="cases__grid">
            {cases.map((item) => (
              <li key={item.niche}>
                {/* IMAGE: кейс — design/prompts/02-portfolio-cards.md § 2.1 */}
                <article className="card cases__frame">
                  <Media
                    className="card__media"
                    src={item.image}
                    alt={`Кейс: ${item.niche}`}
                    width={1200}
                    height={1500}
                  />
                  <span className="chip-category card__chip">{item.category}</span>
                </article>

                <div className="cases__meta">
                  <h3 className="body-lg cases__niche">{item.niche}</h3>
                  {/* TODO: заменить на реальные данные */}
                  <p className="cases__metric">{item.metric}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
