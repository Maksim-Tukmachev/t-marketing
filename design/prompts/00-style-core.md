# 00 — Ядро стиля

Общая база для всех промптов. Приклеивается к любому сюжету из остальных файлов.

---

## Суффикс качества

Добавляй в конец **каждого** промпта:

```
shot on medium format camera, 80mm lens, natural falloff, fine grain,
true blacks, no crushed shadows, editorial magazine quality, high detail,
sharp focus on subject, clean composition, generous negative space
```

## Негативный промпт

```
text, letters, words, watermark, logo, signature, caption, ui elements,
frame, border, collage, split screen, multiple panels, stock photo vibe,
corporate handshake, forced smile, thumbs up, office background,
oversaturated, hdr, heavy vignette, lens flare, bokeh balls, tilt shift,
plastic skin, waxy skin, beauty filter, extra fingers, deformed hands,
distorted face, cluttered background, busy pattern, low resolution, blurry
```

## Параметры

| Генератор | Параметры |
|---|---|
| Midjourney | `--ar 4:5 --style raw --stylize 150 --v 7` |
| Flux / Ideogram | guidance `3.0–3.5`, steps `28–35` |
| Общее | Всегда `--style raw` или его аналог — стилизация «по умолчанию» даёт глянец, который ломает швейцарский минимализм |

`--stylize` держи низким (100–200). Высокая стилизация добавляет декор, а нам
нужна документальная точность.

---

## Цветовые сценарии

В одном гриде **не смешивать** сценарии — либо все карточки насыщенные, либо все
приглушённые. Ч/б работает как пауза между цветными.

### A. Плотный цветной фон (основной)

```
subject against a solid seamless studio backdrop in {ЦВЕТ},
flat even backdrop with no gradient, subject fully separated from background
```

Палитра фонов — берём насыщенные, но не кислотные:

| Цвет | Значение |
|---|---|
| `deep coral red` | `#E8503A` |
| `soft blush pink` | `#F5B3A5` |
| `cobalt blue` | `#1B4DE4` |
| `warm sand` | `#D9C4A3` |
| `pale sky blue` | `#C5DCE8` |
| `bright marigold` | `#F2A81D` |

> Кислотный `#B0E200` в фотографии **не использовать** — он зарезервирован за UI.
> Если зелёный кадр окажется рядом с зелёной кнопкой, акцент перестанет работать.

### B. Монохром

```
black and white photograph, high contrast, deep blacks, clean white highlights,
documentary style, available light, no colour cast
```

### C. Приглушённый / выцветший

```
muted desaturated palette, soft overcast light, low contrast, pale tones,
gentle film wash, restrained colour
```

---

## Свет

Три схемы, больше не нужно:

```
1. hard direct light, single source, crisp defined shadow edge
2. soft north window light from the left, gentle gradient falloff
3. flat even studio light, shadowless, catalogue lighting
```

## Композиция

```
single subject, centred composition, wide framing with generous headroom,
lots of empty space around the subject, subject occupying roughly 40% of frame,
eye level, straight-on perspective
```

Просить `generous negative space` важно: под чип категории в левом верхнем углу
карточки нужно пустое место, иначе он ляжет на лицо.

---

## Готовый шаблон

```
{СЮЖЕТ}, {ЦВЕТОВОЙ СЦЕНАРИЙ}, {СВЕТ}, {КОМПОЗИЦИЯ},
shot on medium format camera, 80mm lens, natural falloff, fine grain,
true blacks, editorial magazine quality, high detail, sharp focus on subject,
clean composition, generous negative space
--ar 4:5 --style raw --stylize 150 --v 7
```

## Как держать серию единой

Генеришь набор для одного грида — фиксируй три вещи и меняй только сюжет:

1. Одну схему света на всю серию
2. Одно фокусное расстояние (`80mm`)
3. Один цветовой сценарий

В Midjourney дополнительно фиксируй `--seed`, чтобы серия не разъезжалась.
