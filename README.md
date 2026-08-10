# TUSAM Group — лендинг

Маркетинговый лендинг на Next.js (App Router) + React + TypeScript.

## Запуск

```bash
npm install
npm run dev
```

Откроется [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # продакшен-сборка
npm run start   # запуск собранного приложения
npm run lint    # eslint
```

## Структура

```
app/           # App Router: layout, page, глобальные стили
src/
  components/  # UI-компоненты
  sections/    # секции лендинга
  data/        # контент и контакты
  lib/         # утилиты (телефон и т.п.)
  styles/      # глобальная база
design/        # токены, шрифты, промпты к изображениям
public/        # статика (favicon, images)
```

Данные компании и плейсхолдеры — в `src/data/company.ts`.
Спеки картинок — в `design/IMAGES.md`.
