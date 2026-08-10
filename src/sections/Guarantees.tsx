import { Reveal } from '../components/Reveal'
import { company } from '../data/company'
import './Guarantees.css'

export function Guarantees() {
  const items = [
    {
      n: '01',
      title: 'Договор до начала работ',
      /* TODO: заменить на реальные данные */
      text: `${company.legalName}, ${company.inn}. Подписываем договор и NDA, закрываем актами.`,
    },
    {
      n: '02',
      title: 'Первый месяц ничего не стоит',
      text: 'Не устроил результат — уходите. Ни штрафов, ни обязательного периода в договоре нет.',
    },
    {
      n: '03',
      title: 'Кабинеты оформляем на вас',
      text: 'Доступы к рекламным кабинетам и аналитике остаются у клиента в любом случае.',
    },
    {
      n: '04',
      title: 'Бюджет идёт напрямую площадке',
      text: 'Вы платите Яндексу и VK со своего кабинета. Мы к рекламному бюджету не прикасаемся.',
    },
    {
      n: '05',
      title: 'Стоимость фиксируется в договоре',
      /* TODO: подтвердить формулировку у юриста и заменить срок */
      text: 'Называем сумму в конце бесплатного месяца и держим её {{весь срок договора}}.',
    },
    {
      n: '06',
      title: 'Отчёт из систем, а не из презентации',
      text: 'Расход, заявки и цена обращения выгружаются из рекламных кабинетов и аналитики.',
    },
  ]

  return (
    <section className="section guarantees" id="guarantees">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <h2 className="h2">Гарантии</h2>
            <p className="section__lead">
              Не «гарантируем качество», а то, что записано в договоре.
            </p>
          </div>

          <ul className="guarantees__grid">
            {items.map((item) => (
              <li className="guarantees__item" key={item.n}>
                <span className="guarantees__n label">{item.n}</span>
                <h3 className="body-lg guarantees__title">{item.title}</h3>
                <p className="guarantees__text">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
