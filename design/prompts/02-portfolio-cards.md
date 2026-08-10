# 02 — Карточки портфолио и кейсов

Самый массовый тип. Сетка 4×N, пропорция `4:5` (1200×1500).

Кадры живут рядом друг с другом, поэтому **серийность важнее эффектности**.
Один яркий кадр среди приглушённых развалит грид.

---

## Правило серии

Генерь пачками по 8–12 с одинаковыми светом и фокусным, меняя только сюжет и
фон из палитры. Тогда грид будет читаться как одна съёмка.

Чередование в ряду из четырёх:
```
[цветной] [ч/б] [цветной] [приглушённый]
```

---

## 2.1 Фэшн-портрет на цвете

Базовый кадр, годится для большинства карточек.

```
editorial fashion portrait, head and shoulders, subject looking into camera,
neutral expression, minimal styling, no visible branding on clothing,
against a solid seamless {ЦВЕТ} studio backdrop, flat backdrop with no gradient,
hard direct light from one source, crisp defined shadow edge,
centred composition, generous headroom above the subject,
shot on medium format camera, 80mm lens, fine grain, true blacks,
natural skin texture with visible pores, no retouching,
editorial magazine quality, high detail, sharp focus, clean composition
--ar 4:5 --style raw --stylize 150 --v 7
```

`{ЦВЕТ}`: `deep coral red` · `soft blush pink` · `cobalt blue` · `warm sand` ·
`pale sky blue` · `bright marigold`

## 2.2 Ч/б портрет

Пауза между цветными.

```
black and white editorial portrait, head and shoulders,
subject in a dark structured jacket against a plain light grey wall,
high contrast monochrome, deep blacks, clean white highlights,
soft north window light from the left, gentle gradient falloff,
centred composition, generous negative space,
shot on medium format camera, 80mm lens, fine grain,
natural skin texture, no retouching, documentary style,
editorial magazine quality, sharp focus
--ar 4:5 --style raw --stylize 150 --v 7
```

## 2.3 Предметный кадр

Для кейсов по брендингу и продуктовому дизайну.

```
still life product photograph of {ПРЕДМЕТ} on a plain {ЦВЕТ} surface,
single object, nothing else in frame,
hard direct light from above right, crisp defined shadow falling to the left,
centred composition, object occupying 40% of the frame,
shot on medium format camera, 80mm lens, fine grain, true blacks,
catalogue photography, high detail, sharp focus, clean composition,
no text, no logos, no branding
--ar 4:5 --style raw --stylize 120 --v 7
```

`{ПРЕДМЕТ}`: `a structured leather handbag` · `a stack of matte printed booklets` ·
`a folded garment` · `a ceramic vessel` · `a pair of sculptural sunglasses` ·
`a translucent acrylic chair`

## 2.4 Движение и ткань

Динамика в статичном гриде.

```
a figure in a flowing oversized {ЦВЕТ} garment caught mid-motion,
fabric billowing and frozen in air, face partly obscured by cloth,
against a plain pale sky backdrop,
hard direct sunlight, crisp shadow, high contrast,
full body wide framing, subject small in frame, lots of empty space,
shot on medium format camera, 80mm lens, fine grain,
editorial magazine quality, sharp focus, clean composition
--ar 4:5 --style raw --stylize 180 --v 7
```

## 2.5 Крупный план детали

Хорошо работает как «якорь» в ряду.

```
extreme close up macro detail of {ФАКТУРА},
filling the entire frame, no context visible,
flat even studio light, shadowless,
abstract framing, high detail, tactile surface texture,
shot on medium format camera, 100mm macro lens, fine grain,
editorial magazine quality, sharp focus
--ar 4:5 --style raw --stylize 150 --v 7
```

`{ФАКТУРА}`: `woven raw linen` · `crumpled matte paper` · `polished metal with fingerprints` ·
`thick oil paint impasto` · `frosted glass` · `hand stitched leather seam`

## 2.6 Интерьер / пространство

```
minimal interior photograph of a {ПОМЕЩЕНИЕ},
no people, restrained styling, one strong architectural line,
soft daylight from a large window on the left, low contrast,
straight-on perspective, centred composition, generous negative space,
muted desaturated palette, pale tones,
shot on medium format camera, 50mm lens, fine grain,
editorial magazine quality, sharp focus, clean composition
--ar 4:5 --style raw --stylize 120 --v 7
```

`{ПОМЕЩЕНИЕ}`: `designer's workspace` · `empty gallery room` · `concrete stairwell` ·
`photography studio with seamless paper backdrop`

---

## Чек серии

- [ ] Один и тот же свет во всех кадрах
- [ ] Герой занимает примерно одну и ту же долю кадра
- [ ] Левый верхний угол свободен под чип категории
- [ ] Ни один кадр не «кричит» громче остальных
- [ ] Кадр читается при ширине 300px
- [ ] Ч/б кадров не больше трети от общего числа
