import { Reveal } from '../components/Reveal'
import './Services.css'

const services = [
  { n: '01', title: 'Контекстная реклама', text: 'Директ: поиск, РСЯ, ретаргетинг. Площадки чистим руками.' },
  { n: '02', title: 'Таргетированная реклама', text: 'VK Реклама и Telegram Ads. Тестируем связками, а не наугад.' },
  { n: '03', title: 'SEO', text: 'Только коммерческие запросы. Трафик, который покупает.' },
  { n: '04', title: 'Веб-аналитика', text: 'Метрика, цели, коллтрекинг. Видно, какой канал приносит деньги.' },
  { n: '05', title: 'Разработка сайтов', text: 'Посадочные под трафик. Быстрые, мобильные, с рабочей формой.' },
  { n: '06', title: 'Брендинг', text: 'Айдентика и упаковка оффера. Одно лицо во всех каналах.' },
] as const

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <h2 className="h2">Услуги</h2>
            <p className="section__lead">Подключаем только то, что окупается.</p>
          </div>

          <ul className="services__grid">
            {services.map((service) => (
              <li className="services__card" key={service.n}>
                <span className="services__n label">{service.n}</span>
                <h3 className="body-lg services__title">{service.title}</h3>
                <p className="services__text">{service.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
