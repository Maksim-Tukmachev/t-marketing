# 03 — Команда и «О нас»

Здесь важнее всего **не свалиться в сток**. Правило простое: никто не смотрит в
камеру и не улыбается по команде. Люди заняты делом.

Ч/б — предпочтительный режим для этого раздела: он снимает вопрос «а почему у нас
все в разной одежде и при разном свете».

---

## 3.1 Ч/б репортаж команды

Основной кадр для «Нашей истории».

```
black and white documentary photograph of {КОЛИЧЕСТВО} people working together
in a bright studio, mid-conversation, unposed and candid,
nobody looking at the camera, natural body language, mid-motion,
high contrast monochrome, deep blacks, clean white highlights,
soft north window light from the left, available light only,
wide framing showing the room around them, environmental portrait,
shot on medium format camera, 50mm lens, fine grain,
documentary style, editorial magazine quality, sharp focus
--ar 3:2 --style raw --stylize 150 --v 7
```

`{КОЛИЧЕСТВО}`: `two` / `three` / `a small group of four`

## 3.2 Одиночный портрет сотрудника

Под карточку в сетке команды, `4:5`.

```
black and white environmental portrait of a person at their workspace,
turned slightly away from camera, absorbed in their work,
plain background, minimal clutter on the desk,
high contrast monochrome, deep blacks,
soft window light from the side, gentle gradient falloff,
waist up framing, subject in the left third, empty space on the right,
shot on medium format camera, 80mm lens, fine grain,
natural skin texture, no retouching, documentary style,
editorial magazine quality, sharp focus, clean composition
--ar 4:5 --style raw --stylize 150 --v 7
```

## 3.3 Формальный портрет на цвете

Если нужен цвет — только строгий студийный портрет, единый фон на всех.

```
studio portrait of a person against a solid seamless warm sand backdrop,
neutral direct gaze, no smile, relaxed shoulders,
plain dark clothing with no visible branding,
flat even studio light, shadowless, catalogue lighting,
head and shoulders, centred composition, generous headroom,
shot on medium format camera, 80mm lens, fine grain, true blacks,
natural skin texture with visible pores, no beauty retouching,
editorial magazine quality, high detail, sharp focus
--ar 4:5 --style raw --stylize 120 --v 7
```

> Для сетки команды фон должен быть **один и тот же** у всех. Разные фоны у
> коллег — самый частый способ развалить страницу «О нас».

## 3.4 Руки и процесс

Обезличенные кадры — удобно, когда реальных фото команды ещё нет.

```
close up of hands {ДЕЙСТВИЕ}, no face visible,
plain neutral surface, minimal props,
hard direct light from above, crisp defined shadow,
tight framing, hands occupying the centre of the frame,
black and white, high contrast, deep blacks,
shot on medium format camera, 80mm lens, fine grain,
natural skin texture, documentary style, editorial magazine quality, sharp focus
--ar 3:2 --style raw --stylize 150 --v 7
```

`{ДЕЙСТВИЕ}`: `sketching in a notebook` · `arranging printed photographs on a table` ·
`adjusting a camera lens` · `mixing paint on a palette` · `holding a stack of paper samples`

## 3.5 Общий план офиса

```
wide black and white photograph of a minimal open plan studio,
a few people at desks in the distance, small in frame,
tall windows, concrete floor, restrained furniture,
available daylight, low contrast, soft shadows,
straight-on perspective, architectural composition, generous negative space,
shot on medium format camera, 35mm lens, fine grain,
documentary style, editorial magazine quality, sharp focus
--ar 16:9 --style raw --stylize 120 --v 7
```

---

## Стоп-лист для этого раздела

Добавляй в негативный промпт дополнительно:

```
posed group photo, everyone looking at camera, forced smile, thumbs up,
high five, applause, sticky notes on glass wall, whiteboard with diagrams,
laptop with visible screen content, coffee cup hero shot, stock photo vibe,
diverse team stereotype, business suit, conference room
```

## Честное предупреждение

Сгенерированные «сотрудники» на странице «О нас» — риск: посетитель, который узнает
лица из нейросети, теряет доверие ко всему остальному на сайте. Используй генерацию
для **атмосферных и обезличенных** кадров (3.4, 3.5, силуэты), а реальных людей
снимай камерой. Если фото команды всё-таки генерируются — стоит указать это в
подписи или в футере.
