import { Reveal } from '../components/Reveal'
import './Reviews.css'

/* Структура готова, содержимое — плейсхолдеры.
   Отзывы нельзя придумывать: это не «рыба», а ложная реклама.
   TODO: заменить на реальные данные — цитата, имя, должность, компания,
   и по возможности скриншот из Telegram или с Яндекс.Карт. */
const reviews = [
  {
    quote: '{{Цитата клиента: что было до, что сделали, что стало. 2–3 предложения.}}',
    name: '{{Имя Фамилия}}',
    role: '{{Должность}}',
    company: '{{Компания}}',
    source: '{{Яндекс.Карты}}',
  },
  {
    quote: '{{Цитата клиента: что было до, что сделали, что стало. 2–3 предложения.}}',
    name: '{{Имя Фамилия}}',
    role: '{{Должность}}',
    company: '{{Компания}}',
    source: '{{Telegram}}',
  },
  {
    quote: '{{Цитата клиента: что было до, что сделали, что стало. 2–3 предложения.}}',
    name: '{{Имя Фамилия}}',
    role: '{{Должность}}',
    company: '{{Компания}}',
    source: '{{Видеоотзыв}}',
  },
] as const

export function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <h2 className="h2">Отзывы</h2>
            {/* TODO: заменить на реальные данные */}
            <p className="section__lead">
              Публикуем с указанием компании и должности — с согласия клиента.
              Рейтинг {'{{4,9}}'} на {'{{Яндекс.Картах}}'}, {'{{00}}'} отзывов.
            </p>
          </div>

          <ul className="reviews__grid">
            {reviews.map((review, index) => (
              <li className="reviews__card" key={index}>
                <blockquote className="reviews__quote">{review.quote}</blockquote>

                <div className="reviews__author">
                  {/* Аватар — единственное место со скруглением, кроме кнопок-пилюль */}
                  <span className="reviews__avatar" aria-hidden="true" />
                  <span className="reviews__who">
                    <span className="reviews__name">{review.name}</span>
                    <span className="caption reviews__role">
                      {review.role}, {review.company}
                    </span>
                  </span>
                </div>

                <span className="label reviews__source">Источник: {review.source}</span>
              </li>
            ))}
          </ul>

          <p className="reviews__note caption">
            Сюда же ставятся скриншоты переписок и видеоотзывы — они убеждают сильнее
            набранного текста.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
