import { company, navLinks } from '../data/company'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a className="h2 footer__logo" href="#top">
            TUSAM Group
          </a>

          <div className="footer__cols">
            <section className="footer__col">
              <h2 className="label footer__col-title">Контакты</h2>
              {/* TODO: заменить на реальные данные */}
              <ul className="footer__list">
                <li>
                  <a className="footer__link" href={company.phoneHref}>
                    {company.phone}
                  </a>
                </li>
                <li>
                  <a className="footer__link" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                </li>
                <li>
                  <a
                    className="footer__link"
                    href={company.telegramHref}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Telegram {company.telegram}
                  </a>
                </li>
                <li className="footer__muted">{company.city}</li>
              </ul>
            </section>

            <section className="footer__col">
              <h2 className="label footer__col-title">Разделы</h2>
              <ul className="footer__list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a className="footer__link" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a className="footer__link" href="#cta">
                    Получить прототип
                  </a>
                </li>
              </ul>
            </section>

            <section className="footer__col">
              <h2 className="label footer__col-title">Юридическая информация</h2>
              {/* TODO: заменить на реальные данные */}
              <ul className="footer__list">
                <li className="footer__muted">{company.legalName}</li>
                <li className="footer__muted">{company.inn}</li>
                <li className="footer__muted">На рынке с {company.founded} года</li>
                <li>
                  <a className="footer__link" href={company.privacyUrl}>
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className="footer__bottom caption">
          {/* TODO: заменить на реальные данные */}
          <span>
            © {company.year} {company.legalName} · {company.inn}
          </span>
          <span>Не является публичной офертой</span>
        </div>
      </div>
    </footer>
  )
}
