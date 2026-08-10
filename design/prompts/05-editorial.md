# 05 — Блог, новости, статьи

Пропорция `3:2` (1500×1000) для карточек в ленте, `16:9` для обложки статьи.

Тон здесь спокойнее, чем в портфолио: это иллюстрация к тексту, а не работа
в витрине. Кадр должен читаться с одного взгляда и не перетягивать заголовок.

---

## 5.1 Обложка статьи — пространство

```
minimal photograph of {ПРОСТРАНСТВО}, no people,
one strong architectural line, restrained composition,
soft daylight, low contrast, muted desaturated palette, pale tones,
straight-on perspective, generous negative space,
shot on medium format camera, 35mm lens, fine grain,
editorial magazine quality, sharp focus, clean composition
--ar 16:9 --style raw --stylize 120 --v 7
```

`{ПРОСТРАНСТВО}`: `an empty white gallery with framed works on the walls` ·
`a print workshop with paper stacked on shelves` · `a quiet library reading room` ·
`a photography studio with a seamless paper backdrop rolled down`

## 5.2 Карточка новости — предмет

```
still life of {ПРЕДМЕТ} arranged on a plain {ЦВЕТ} surface,
overhead flat lay, objects neatly aligned, generous space between items,
flat even studio light, shadowless, catalogue lighting,
straight-on top down perspective, centred composition,
shot on medium format camera, 80mm lens, fine grain,
editorial magazine quality, high detail, sharp focus,
no text, no logos, no readable print
--ar 3:2 --style raw --stylize 120 --v 7
```

`{ПРЕДМЕТ}`: `a stack of blank matte magazines` · `paper colour swatches fanned out` ·
`a camera body with two lenses` · `blank business cards and a pen` ·
`folded fabric samples in neutral tones`

> Важно: `no readable print` — иначе генератор нарисует псевдотекст,
> который выглядит как опечатка.

## 5.3 Карточка новости — человек в контексте

```
candid editorial photograph of a person {ДЕЙСТВИЕ},
three quarter view, not looking at camera, natural posture,
plain uncluttered background, muted desaturated palette,
soft window light from the left, low contrast, gentle falloff,
waist up framing, subject in the left third, empty space on the right,
shot on medium format camera, 80mm lens, fine grain,
natural skin texture, no retouching, documentary style,
editorial magazine quality, sharp focus, clean composition
--ar 3:2 --style raw --stylize 150 --v 7
```

`{ДЕЙСТВИЕ}`: `reviewing printed proofs` · `hanging a framed work on a wall` ·
`walking through a gallery` · `sorting slides on a lightbox`

## 5.4 Крупная деталь под короткую заметку

```
extreme close up of {ФАКТУРА}, filling the entire frame,
no context, abstract framing,
flat even light, shadowless, muted desaturated palette,
shot on medium format camera, 100mm macro lens, fine grain,
tactile surface texture, high detail, sharp focus
--ar 3:2 --style raw --stylize 150 --v 7
```

`{ФАКТУРА}`: `torn paper edge` · `ink bleeding into fibrous paper` ·
`stacked printed sheets seen from the side` · `a halftone printed surface magnified`

## 5.5 Ч/б портрет для интервью

```
black and white portrait for a magazine interview,
subject seated, leaning slightly forward, direct calm gaze,
plain light grey wall behind, nothing else in frame,
soft north window light from the left, gentle gradient falloff,
high contrast monochrome, deep blacks, clean white highlights,
waist up, subject in the right third, empty space on the left,
shot on medium format camera, 80mm lens, fine grain,
natural skin texture, no retouching,
editorial magazine quality, sharp focus, clean composition
--ar 3:2 --style raw --stylize 150 --v 7
```

---

## Правила для ленты

Лента из карточек `3:2` в три колонки — самое уязвимое место макета:
разнобой заметен сильнее, чем в портфолио.

- Держи **одну** цветовую температуру на всю ленту
- Не ставь два портрета подряд
- Каждая третья карточка — предметная или фактурная, для ритма
- Заголовок статьи всегда **под** изображением, а не поверх — так кадр можно
  не подбирать под текст

## Про текст внутри изображения

Ни один генератор не пишет по-русски без ошибок. Если в кадре нужна надпись
(обложка журнала, вывеска) — либо `no readable print` в промпте, либо накладывай
текст в вёрстке поверх. Второе всегда лучше: он будет живым, доступным для
скринридера и переводимым.
