# 01 — Главный экран и обложки разделов

Кадр под гигантский заголовок. Главное требование: **изображение должно выдержать
текст поверх** и не спорить с ним. Значит — либо тёмное с одной зоной под белые
буквы, либо очень пустое.

Пропорция: `16:9` (2560×1440), для баннера `21:9`.

---

## 1.1 Портрет-герой на цвете

Основной вариант для главной.

```
editorial portrait of a young creative professional, three quarter view,
looking directly into camera with calm confident expression,
wearing structured minimal clothing in a single flat colour,
against a solid seamless deep coral red studio backdrop,
hard direct light from one source with a crisp shadow edge,
subject positioned in the right third of the frame, large empty area on the left,
shot on medium format camera, 80mm lens, fine grain, true blacks,
editorial magazine quality, high detail, sharp focus, generous negative space
--ar 16:9 --style raw --stylize 150 --v 7
```

Левая треть пустая — туда встанет заголовок.

## 1.2 Тёмный кинематографичный герой

Под белый текст во всю ширину.

```
cinematic wide shot of a creative studio interior at night,
single figure silhouetted against a large window,
deep shadows filling most of the frame, one pool of cool light,
very dark overall exposure, moody, almost monochrome,
architectural symmetry, wide angle 35mm,
shot on medium format camera, fine grain, true blacks, no crushed shadows,
editorial magazine quality, generous negative space
--ar 16:9 --style raw --stylize 150 --v 7
```

## 1.3 Ч/б репортаж

Для секции «Наша история».

```
black and white documentary photograph of three people collaborating
around a table in a bright studio, mid-motion, unposed, candid,
one person gesturing while others look on,
high contrast monochrome, deep blacks, clean white highlights,
soft north window light from the left, available light only,
wide framing, room visible around the group,
shot on medium format camera, 80mm lens, fine grain,
editorial magazine quality, sharp focus, documentary style
--ar 3:2 --style raw --stylize 150 --v 7
```

## 1.4 Абстрактный мазок (обложка раздела)

Живописная фактура во всю ширину — как «MAKERS» в референсе.

```
extreme close up of thick oil paint strokes on raw canvas,
bold cobalt blue and warm marigold orange gestural brushwork,
visible impasto texture and bristle marks, raw unprimed canvas showing through,
flat even studio light, shadowless,
abstract expressionist painting detail, no recognisable forms,
high detail, sharp focus, editorial magazine quality
--ar 21:9 --style raw --stylize 200 --v 7
```

## 1.5 Пустой архитектурный кадр

Максимум воздуха под крупный текст.

```
minimal architectural photograph of an empty white gallery space,
polished concrete floor, tall ceiling, one doorway with daylight spilling in,
no people, no artwork on the walls,
flat even natural light, soft shadows, low contrast,
straight-on one point perspective, centred composition,
shot on medium format camera, 50mm lens, fine grain,
editorial magazine quality, generous negative space, clean composition
--ar 16:9 --style raw --stylize 120 --v 7
```

---

## Переменные для подстановки

- `{ЦВЕТ ФОНА}` — из таблицы в [`00-style-core.md`](00-style-core.md)
- `{СТОРОНА}` — `left` / `right`, в зависимости от того, где встанет заголовок
- `{ВРЕМЯ СУТОК}` — `at night` / `in morning light` / `at golden hour`

## Проверка

Прежде чем брать кадр в hero — положи поверх белый текст 120px и посмотри,
читается ли он. Если приходится добавлять затемняющую подложку — кадр не подходит,
генерь заново с более тёмной/пустой зоной.
