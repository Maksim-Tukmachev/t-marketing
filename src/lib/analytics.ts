/* ===========================================================
   Разметка событий. Без счётчиков и библиотек: пишем в dataLayer,
   его читает любой менеджер тегов. Пока счётчик не подключён —
   события видно в консоли в dev-режиме.
   =========================================================== */

export type TrackEvent =
  | 'cta_click'
  | 'form_start'
  | 'form_submit'
  | 'quiz_start'
  | 'quiz_step'
  | 'quiz_submit'
  | 'widget_open'
  | 'widget_channel'
  | 'exit_intent_shown'
  | 'exit_intent_submit'
  | 'contact_click'

type Payload = Record<string, string | number | boolean | undefined>

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>
}

export function track(event: TrackEvent, payload: Payload = {}): void {
  if (typeof window === 'undefined') return

  const target = window as DataLayerWindow
  target.dataLayer = target.dataLayer ?? []
  target.dataLayer.push({ event, ...payload })

  if (process.env.NODE_ENV === 'development') {
    console.log('[track]', event, payload)
  }
}
