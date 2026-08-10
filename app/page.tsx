import { CtaBanner } from '@/components/CtaBanner'
import { StickyCta } from '@/components/StickyCta'
import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero'
import { FreeStart } from '@/sections/FreeStart'
import { Honest } from '@/sections/Honest'
import { Services } from '@/sections/Services'
import { Process } from '@/sections/Process'
import { Cases } from '@/sections/Cases'
import { Clients } from '@/sections/Clients'
import { Team } from '@/sections/Team'
import { Faq } from '@/sections/Faq'
import { CtaForm } from '@/sections/CtaForm'
import { Footer } from '@/sections/Footer'
import { company } from '@/data/company'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FreeStart />

        {/* Лид-магнит: забирает тех, кто ещё не готов на созвон */}
        <CtaBanner
          id="checklist"
          kicker="Бесплатно, без созвона"
          title="Чек-лист: где утекает рекламный бюджет"
          text="12 точек, которые сливают деньги в Директе и VK Рекламе. Проверьте свой кабинет за 15 минут."
          buttonLabel="Забрать чек-лист"
          successTitle="Чек-лист отправили"
          successText={
            <>
              Ссылка ушла в SMS. Если не дошла — напишите в{' '}
              {/* TODO: заменить на реальные данные */}
              <a href={company.telegramHref} rel="noopener noreferrer" target="_blank">
                Telegram {company.telegram}
              </a>
              .
            </>
          }
        />

        <Honest />
        <Services />
        <Process />

        {/* Второй удар: расчёт бюджета — низкий порог входа */}
        <CtaBanner
          id="calc"
          kicker="20 минут"
          title="Посчитаем бюджет и прогноз заявок"
          text="Оставьте номер. Перезвоним, зададим пять вопросов и назовём вилку по бюджету в вашей нише."
          buttonLabel="Получить расчёт"
          successTitle="Приняли"
          successText={`Перезвоним в течение ${company.replyTime} в рабочее время.`}
        />

        <Cases />
        <Clients />
        <Team />
        <Faq />
        <CtaForm />
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
