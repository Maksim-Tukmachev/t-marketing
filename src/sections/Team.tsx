import { Media } from '../components/Media'
import { Reveal } from '../components/Reveal'
import './Team.css'

/* Имена — плейсхолдеры. TODO: заменить на реальные данные */
const team = [
  {
    name: '{{Имя Фамилия}}',
    role: 'Основатель, стратегия',
    image: '/images/team-01.webp',
  },
  {
    name: '{{Имя Фамилия}}',
    role: 'Руководитель отдела рекламы',
    image: '/images/team-02.webp',
  },
  {
    name: '{{Имя Фамилия}}',
    role: 'Веб-аналитик',
    image: '/images/team-03.webp',
  },
  {
    name: '{{Имя Фамилия}}',
    role: 'Дизайнер, прототипы',
    image: '/images/team-04.webp',
  },
] as const

export function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <h2 className="h2">Команда</h2>
            <p className="section__lead">Проект ведут те, кто делал аудит. Без менеджеров-посредников.</p>
          </div>

          <ul className="team__grid">
            {team.map((member, index) => (
              <li className="team__card" key={index}>
                {/* IMAGE: портрет — design/prompts/03-team.md § 3.2
                    Лучше заменить на реальные снимки команды. */}
                <Media
                  className="team__photo"
                  src={member.image}
                  alt={`Сотрудник агентства: ${member.role}`}
                  width={1200}
                  height={1500}
                />
                {/* TODO: заменить на реальные данные */}
                <h3 className="body-lg team__name">{member.name}</h3>
                <p className="team__role">{member.role}</p>
              </li>
            ))}
          </ul>

          <p className="team__note caption">
            Фотографии в этом блоке — заглушки. Публикуем только реальные снимки команды.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
