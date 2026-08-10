# 06 — Аватары

`1:1`, рендер 400×400, в макете показываются кружком 32–56px.

Главное ограничение: **аватар живёт размером 32px**. Всё, что мельче головы,
на этом размере исчезает. Значит — лицо крупно, фон плоский, никаких деталей.

---

## 6.1 Базовый аватар

```
tight head shot portrait of a person, face filling most of the frame,
neutral relaxed expression, slight smile, looking directly into camera,
against a solid flat {ЦВЕТ} background with no gradient and no texture,
flat even studio light, shadowless, catalogue lighting,
centred composition, head and top of shoulders only,
shot on medium format camera, 80mm lens, fine grain,
natural skin texture with visible pores, no beauty retouching,
editorial magazine quality, high detail, sharp focus
--ar 1:1 --style raw --stylize 120 --v 7
```

`{ЦВЕТ}`: `light grey` · `warm sand` · `pale sky blue` · `off white`

Для набора аватаров лучше **один фон на всех** — тогда список отзывов или
участников выглядит как единая база, а не как коллаж.

## 6.2 Ч/б аватар

Универсальный вариант: снимает проблему разных оттенков кожи и фонов.

```
tight black and white head shot portrait, face filling the frame,
neutral expression, direct gaze,
plain light grey background, nothing else in frame,
soft even light, low contrast monochrome, clean midtones,
centred composition, head and top of shoulders,
shot on medium format camera, 80mm lens, fine grain,
natural skin texture, no retouching,
editorial magazine quality, sharp focus
--ar 1:1 --style raw --stylize 120 --v 7
```

## 6.3 Заглушка вместо лица

Если генерировать людей не хочется — нейтральная плашка в стиле системы.

```
minimal abstract 3d render of a smooth matte sphere,
single flat colour {ЦВЕТ}, no texture, no pattern,
soft ambient light, very subtle shadow underneath,
centred composition, sphere occupying 60% of the frame,
plain light grey background,
octane render, matte clay material,
high detail, sharp focus, clean composition
--ar 1:1 --style raw --stylize 150 --v 7
```

Либо вообще без картинки: круг `--c-grey-light` с инициалами шрифтом
`--f-display` — это дешевле, честнее и всегда одинаково выглядит.

---

## Технические требования

| Параметр | Значение |
|---|---|
| Рендер | 400×400 |
| В макете | 32px (шапка), 40px (списки), 56px (профиль) |
| Формат | WebP, качество 85 |
| Кроп | Голова в центре, до края кадра от макушки — 10% |
| Вес | до 20 КБ |

Проверка: сожми до 32px и посмотри. Если человек неузнаваем как человек — кроп
слишком широкий, режь плотнее.

## Про генерацию лиц

Аватар с несуществующим человеком рядом с реальным именем и отзывом — это
выдуманное свидетельство. Для плейсхолдеров при разработке — нормально; на
проде под настоящим отзывом должно быть настоящее фото или нейтральная
заглушка (6.3). Это вопрос не только этики, но и доверия: сгенерированные
лица сегодня узнают довольно быстро.
