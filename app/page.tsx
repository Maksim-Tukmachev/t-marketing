import { CtaBanner } from '@/components/CtaBanner'
import { ExitIntent } from '@/components/ExitIntent'
import { FloatingWidget } from '@/components/FloatingWidget'
import { StickyCta } from '@/components/StickyCta'
import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero'
import { FreeStart } from '@/sections/FreeStart'
import { Quiz } from '@/sections/Quiz'
import { Honest } from '@/sections/Honest'
import { Services } from '@/sections/Services'
import { Process } from '@/sections/Process'
import { Guarantees } from '@/sections/Guarantees'
import { Cases } from '@/sections/Cases'
import { Reviews } from '@/sections/Reviews'
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

        {/* Интерактив на месте первого сомнения: человек уже понял оффер,
            но ещё не готов звонить */}
        <Quiz />

        <Honest />
        <Services />
        <Process />
        <Guarantees />

        {/* Лид-магнит: забирает тех, кому рано на созвон */}
        <CtaBanner
          id="checklist"
          kicker="Бесплатно, без созвона"
          title="Чек-лист: где утекает рекламный бюджет"
          text="12 точек, которые сливают деньги в Директе и VK Рекламе. Проверьте свой кабинет за 15 минут."
          buttonLabel="Забрать чек-лист"
          successTitle="Чек-лист отправили"
          successText={
            <>
              Ссылка ушла в SMS. Если не дошла — напишите в{' '}
              {/* TODO: заменить на реальные данные */}
              <a href={company.telegramHref} rel="noopener noreferrer" target="_blank">
                Telegram {company.telegram}
              </a>
              .
            </>
          }
        />

        <Cases />
        <Reviews />
        <Clients />
        <Team />
        <Faq />
        <CtaForm />
      </main>
      <Footer />

      <StickyCta />
      <FloatingWidget />
      <ExitIntent />
    </>
  )
}
