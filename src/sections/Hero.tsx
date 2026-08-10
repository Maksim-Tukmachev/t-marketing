'use client'

import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Ferrofluid } from '../components/Ferrofluid'
import { Media } from '../components/Media'
import { heroFacts } from '../data/company'
import './Hero.css'

const ferroColors = ['#ffffff', '#d4d4d4', '#9e9e9e'] as const

export function Hero() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__stage">
        {!reduceMotion && (
          <div className="hero__bg">
            <Ferrofluid
              colors={[...ferroColors]}
              speed={0.32}
              scale={1.45}
              turbulence={0.9}
              fluidity={0.12}
              rimWidth={0.22}
              sharpness={2.2}
              shimmer={1.2}
              glow={1.55}
              opacity={0.55}
              flowDirection="down"
              mouseInteraction
              mouseStrength={0.85}
              mouseRadius={0.4}
              mouseDampening={0.18}
              mixBlendMode="screen"
            />
          </div>
        )}

        <div className="container hero__inner">
          <h1 className="display hero__title">
            <span>Реклама,</span>
            <span>которая</span>
            <span>окупается</span>
          </h1>

          <div className="hero__body">
            <p className="body-lg hero__lead">
              Прототип посадочной и первый месяц рекламы — бесплатно.
              Вы платите только рекламный бюджет.
            </p>

            <div className="hero__actions">
              <Button as="a" variant="accent" fullOnMobile href="#cta">
                Получить прототип бесплатно
              </Button>
              <Button as="a" variant="pill" onDark fullOnMobile href="#cases">
                Смотреть кейсы
              </Button>
            </div>
          </div>

          {/* TODO: заменить на реальные данные */}
          <ul className="hero__facts scroll-row label" aria-label="Коротко о нас">
            {heroFacts.map((fact) => (
              <li className="hero__fact" key={fact}>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* IMAGE: полоса под первым экраном — design/IMAGES.md § 6.1 */}
      <Media
        className="media-band hero__band"
        src="/images/hero.jpeg"
        alt=""
        width={2752}
        height={1536}
        position="50% 70%"
      />
    </section>
  )
}
