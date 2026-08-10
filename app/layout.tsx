import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TUSAM Group — прототип и первый месяц рекламы бесплатно',
  description:
    'Маркетинговое агентство полного цикла: контекстная и таргетированная реклама, SEO, аналитика, сайты, брендинг. Соберём прототип посадочной страницы и проведём первый месяц кампании бесплатно — вы платите только за рекламный бюджет.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'TUSAM Group',
    title: 'TUSAM Group — реклама, которая окупается',
    description:
      'Прототип посадочной страницы и первый месяц рекламной кампании — бесплатно. Вы платите только за рекламный бюджет.',
    url: 'https://tusam-group.ru/',
    images: [{ url: 'https://tusam-group.ru/og-cover.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TUSAM Group — реклама, которая окупается',
    description:
      'Прототип посадочной страницы и первый месяц рекламной кампании — бесплатно. Вы платите только за рекламный бюджет.',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
