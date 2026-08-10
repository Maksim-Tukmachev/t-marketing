# 07 — Фоны и фактуры

Кадры, поверх которых ляжет текст. Требование одно: **они должны быть скучными**.
Любая интересная деталь в фоне начинает конкурировать с типографикой, а в этой
системе типографика — главное.

---

## 7.1 Бумажная фактура

Тёплая подложка под светлые секции.

```
extreme close up of plain uncoated paper surface,
subtle fibre texture, warm off white tone, no pattern, no print,
completely flat and even, filling the entire frame,
flat even studio light, shadowless, no vignette,
straight-on top down perspective,
shot on medium format camera, 100mm macro lens, very fine grain,
minimal tactile texture, uniform across the whole frame
--ar 16:9 --style raw --stylize 50 --v 7
```

## 7.2 Бетон

Под тёмные секции.

```
extreme close up of smooth polished concrete surface,
even mid grey tone, very subtle mottling, no cracks, no stains,
completely uniform, filling the entire frame,
flat even light, shadowless, no vignette,
straight-on perspective,
shot on medium format camera, 50mm lens, very fine grain,
minimal texture, uniform across the whole frame
--ar 16:9 --style raw --stylize 50 --v 7
```

## 7.3 Бесшовный студийный фон

Классическая циклорама — идеально под текст.

```
empty seamless studio backdrop in solid {ЦВЕТ},
paper roll curving gently at the bottom, no subject in frame,
soft even studio light, very gentle falloff toward the edges,
straight-on perspective, completely empty,
shot on medium format camera, 50mm lens, fine grain,
clean minimal, no objects, no shadows
--ar 16:9 --style raw --stylize 50 --v 7
```

## 7.4 Мягкая тень на стене

Даёт глубину, не отвлекая.

```
plain off white wall with the soft shadow of a window frame falling across it,
nothing else in frame, no objects, no people,
warm afternoon sunlight, soft shadow edges, low contrast,
straight-on perspective, most of the frame empty,
shot on medium format camera, 50mm lens, fine grain,
minimal, quiet, generous negative space
--ar 16:9 --style raw --stylize 100 --v 7
```

## 7.5 Тёмная фактура под белый текст

```
extreme close up of matte black textured surface,
very subtle grain, near uniform deep black, no highlights, no reflections,
filling the entire frame,
flat even light, shadowless,
shot on medium format camera, 100mm macro lens, very fine grain,
true blacks, minimal texture, uniform across the whole frame
--ar 16:9 --style raw --stylize 50 --v 7
```

---

## Правила для фонов

- `--stylize` держи на `50–100`. Чем ниже, тем «глупее» и ровнее результат — это то,
  что нужно.
- Контраст внутри кадра — минимальный. Если на фоне есть тёмное и светлое пятно,
  текст поверх будет читаться то так, то так.
- Проверка: положи поверх текст 16px `--c-grey`. Читается везде одинаково? Годится.

## Когда фон не нужен

В этой системе **сплошной цвет почти всегда лучше фактуры**. Швейцарский минимализм
строится на плоскости. Прежде чем генерить бумагу или бетон — попробуй просто
`--c-grey-light` или `--c-black`. В девяти случаях из десяти это будет чище,
быстрее грузиться и лучше выглядеть на ретине.

Фактура оправдана, когда нужно снять «цифровую стерильность» с большой пустой
секции — например, в подвале или на странице с длинным текстом.

## Технические требования

| Параметр | Значение |
|---|---|
| Рендер | 2560×1440, при тайлинге — 1024×1024 |
| Формат | WebP качество 75 (фон — можно жать сильнее) |
| Вес | до 120 КБ |
| Подключение | `background-image` + `background-color` фоллбэком в том же тоне |

Всегда прописывай `background-color` под картинкой — пока фон грузится, текст
должен быть читаемым.
