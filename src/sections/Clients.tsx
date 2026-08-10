import { Reveal } from '../components/Reveal'
import './Clients.css'

/* Реальных брендов здесь нет и быть не должно, пока клиенты не дали согласие.
   TODO: заменить на реальные данные */
const slots = ['01', '02', '03', '04', '05', '06'] as const

export function Clients() {
  return (
    <section className="section clients" id="clients">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <h2 className="h2">Клиенты</h2>
            <p className="section__lead">Логотипы — только с письменного согласия клиента.</p>
          </div>

          <ul className="clients__row">
            {slots.map((slot) => (
              <li className="clients__item" key={slot}>
                <span className="clients__logo label">Логотип клиента</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
