# IMAGES — съёмка для лендинга TUSAM Group

Слоты, промпты и требования к файлам. Имена файлов совпадают с тем, что
подключено в коде, — новый файл просто кладётся поверх старого в `public/images/`.

**Итого 14 кадров:** 6 кейсов, 4 портрета команды, 2 широкие полосы, 2 кадра
внутри секций.

---

## 1. Главное правило: кадр объясняет блок, рядом с которым стоит

Это сайт агентства перформанс-маркетинга. Картинка здесь работает как
доказательство, а не как украшение. Если кадр не отвечает на вопрос «что здесь
происходит и почему я должен поверить» — он не нужен.

Библиотека `design/prompts/` писалась под референс PRODIGIES — платформу для
креативщиков. Её фэшн-портреты на кобальтовом фоне и пустые фотостудии
к маркетинговому агентству отношения не имеют: карточка кейса «Производство
мебели» с портретом модели на красном фоне не сообщает ничего. Поэтому сюжеты
ниже заданы заново, а из библиотеки взяты только свет, оптика и требования
к качеству.

**Что снимаем:**

| Блок | Смысл блока | Что в кадре |
|---|---|---|
| Полоса под первым экраном | Работаем руками, а не продаём словами | Команда за работой, общий план |
| Рядом с зелёной плашкой | Комплект, который отдаём бесплатно | Раскладка распечатанных материалов |
| «В чём подвох» | Честный разговор, ничего не прячем | Двое разговаривают за столом |
| Полоса над кейсами | Переход к результатам | Разбор распечаток на стене |
| Кейсы | Ниша клиента | Среда или предмет из этой ниши |
| Команда | Живые люди, а не аватары | Обезличенные рабочие кадры |

## 2. Цвет: одна серия на весь сайт

- **Полосы, «В чём подвох», команда — чистое ч/б.** Высокий контраст, глубокий
  чёрный, без цветного каста.
- **Шесть кейсов — приглушённый монохром с холодным нейтральным тоном.**
  Не ч/б, но и не насыщенный цвет.

Почему не цветные фоны из `prompts/00-style-core.md`: шесть карточек на красном,
синем, песочном, голубом, оранжевом и розовом превращают сетку в карнавал,
спорят друг с другом и убивают кислотный зелёный — единственный сигнальный цвет
интерфейса. `design.mdc` § 7 требует, чтобы внутри одного грида цвета не спорили;
самый надёжный способ это выдержать — снять всю серию в одной приглушённой гамме.

Кислотный `#B0E200` в кадрах не использовать вообще.

## 3. Что нельзя показывать (важнее остального)

- **Никакого текста в кадре.** Ни вывесок, ни подписей, ни цифр. Генератор не
  умеет кириллицу и налепит кракозябры.
- **Никаких экранов с содержимым, дашбордов, графиков и диаграмм.** Выдуманная
  аналитика на сайте агентства — это ложная реклама, а не «рыба». Мониторы
  разворачиваем от камеры, ноутбуки закрываем.
- **Никаких логотипов и узнаваемых брендов** ни на одежде, ни на упаковке.
- **Никаких стоковых улыбок**, рукопожатий, «пятёрок» и переговорок с флипчартом.
- **Никаких узнаваемых лиц в блоке команды** — см. § 7.

## 4. Негативный промпт — добавлять к каждому кадру

```
text, letters, words, cyrillic, numbers, watermark, logo, signage, ui elements,
screenshot, dashboard, chart, graph, diagram, infographic, visible screen content,
stock photo vibe, corporate handshake, forced smile, thumbs up, high five,
business suit, conference room, sticky notes on glass wall, whiteboard with diagrams,
coffee cup hero shot, collage, split screen, multiple panels, frame, border,
oversaturated, hdr, heavy vignette, lens flare, bokeh balls, tilt shift,
plastic skin, waxy skin, beauty filter, extra fingers, deformed hands,
distorted face, cluttered background, busy pattern, low resolution, blurry
```

## 5. Технические требования

| Параметр | Значение |
|---|---|
| Формат | WebP, качество 80 |
| Вес | карточки до 150 КБ, полосы до 250 КБ |
| Пропорция | **строго** как в таблице — вёрстка режет по `object-fit: cover` |
| Safe area | смысловой центр держать внутри центральных 80% кадра |
| Параметры MJ | `--style raw --stylize 100–150 --v 7` |
| Flux / Ideogram | guidance `3.0–3.5`, steps `28–35` |

Пропорция критична: если прислать портрет 2:3 в слот полосы 3:1, вёрстка возьмёт
узкую горизонтальную полоску из середины и растянет её — именно так сломалась
первая версия.

Серийность: свет и фокусное фиксируются на всю серию, меняется только сюжет.
В Midjourney дополнительно зафиксировать `--seed`.

---

## 6. Слоты и промпты

| Файл | Где | Пропорция | Размер | Гамма |
|---|---|---|---|---|
| `hero-band.webp` | Полоса под первым экраном | 3:1 | 2400×800 | ч/б |
| `texture-paper.webp` | Рядом с зелёной плашкой | 3:2 | 1800×1200 | приглушённый |
| `honest-workspace.webp` | «В чём подвох» | 1:1 | 1400×1400 | ч/б |
| `cases-band.webp` | Полоса над кейсами | 3:1 | 2400×800 | ч/б |
| `case-01-furniture.webp` | Кейс: производство мебели | 4:5 | 1200×1500 | приглушённый |
| `case-02-barbershop.webp` | Кейс: сеть барбершопов | 4:5 | 1200×1500 | приглушённый |
| `case-03-clinic.webp` | Кейс: клиника эстетики | 4:5 | 1200×1500 | приглушённый |
| `case-04-school.webp` | Кейс: онлайн-школа | 4:5 | 1200×1500 | приглушённый |
| `case-05-construction.webp` | Кейс: строительная компания | 4:5 | 1200×1500 | приглушённый |
| `case-06-retail.webp` | Кейс: локальный ритейл | 4:5 | 1200×1500 | приглушённый |
| `team-01.webp` … `team-04.webp` | Команда | 4:5 | 1200×1500 | ч/б |

### 6.1 `hero-band.webp` — полоса под первым экраном, 3:1, 2400×800, ч/б

Первое доказательство после заголовка «Реклама, которая окупается»: живая
команда за работой. Кадр широкий и низкий, поэтому люди — в нижней половине.

```
black and white documentary photograph of a small team working in a bright open
office, four people at desks along a tall window, seen from across the room,
nobody looking at the camera, monitors turned away from the lens,
printed sheets pinned to a plain wall behind them,
high contrast monochrome, deep blacks, clean white highlights,
available daylight from the left, no artificial light,
wide panoramic framing, people occupying the lower half of the frame,
empty ceiling and wall above them, generous negative space,
shot on medium format camera, 35mm lens, fine grain, true blacks,
documentary style, editorial magazine quality, sharp focus,
no text, no letters, no readable screens, no charts, no logos
--ar 3:1 --style raw --stylize 120 --v 7
```

### 6.2 `texture-paper.webp` — рядом с зелёной плашкой, 3:2, 1800×1200

Стоит вплотную к фразе «Всё это — бесплатно». Показываем ровно то, что клиент
уносит с собой: распечатанный комплект. Листы пустые — только серые блоки
и линии, никакого текста.

```
top down photograph of printed wireframe sheets laid out in a neat grid on a
plain light desk, the sheets show only blank grey rectangles and empty ruled
lines, a pencil and a metal ruler beside them,
one hand entering from the edge of the frame adjusting a sheet,
muted desaturated palette, cool neutral tones, soft even daylight, shadowless,
low contrast, straight-on top down perspective,
generous margins around the layout, clean composition,
shot on medium format camera, 50mm lens, fine grain,
editorial magazine quality, sharp focus,
no text, no letters, no numbers, no logos, no charts
--ar 3:2 --style raw --stylize 100 --v 7
```

### 6.3 `honest-workspace.webp` — «В чём подвох», 1:1, 1400×1400, ч/б

Блок снимает недоверие, поэтому в кадре — разговор на равных: два человека
за пустым столом, никто не «продаёт».

```
black and white documentary photograph of two people talking across a plain
table in a quiet office, mid-conversation, relaxed posture, seen from the side,
neither of them looking at the camera, one open notebook and two cups on the
table, nothing else,
high contrast monochrome, deep blacks, clean white highlights,
soft north window light from the left, available light only,
medium wide framing, subjects in the lower two thirds, empty wall above,
shot on medium format camera, 50mm lens, fine grain, natural skin texture,
documentary style, editorial magazine quality, sharp focus,
no text, no letters, no readable screens, no logos
--ar 1:1 --style raw --stylize 120 --v 7
```

### 6.4 `cases-band.webp` — полоса над кейсами, 3:1, 2400×800, ч/б

Переход к результатам: человек разбирает распечатки на стене. Со спины, лицо
не нужно.

```
black and white documentary photograph of a person standing in front of a wide
plain wall covered with pinned printed sheets, seen from behind over the
shoulder, reaching up to move one sheet,
the sheets show only blank grey blocks and empty ruled lines,
high contrast monochrome, deep blacks, clean white highlights,
hard directional daylight from the right, crisp shadow edge,
wide panoramic framing, the figure in the left third,
empty wall filling the rest of the frame,
shot on medium format camera, 35mm lens, fine grain, true blacks,
documentary style, editorial magazine quality, sharp focus,
no text, no letters, no charts, no logos
--ar 3:1 --style raw --stylize 120 --v 7
```

### 6.5 Кейсы — 6 кадров, 4:5, 1200×1500, приглушённый монохром

Каждая карточка показывает **нишу клиента**, а не абстрактного человека.
Левый верхний угол держать пустым: на hover туда встаёт чип категории.

Общая база — меняется только `{СЮЖЕТ}`:

```
{СЮЖЕТ}, no people looking at the camera, no branding anywhere,
muted desaturated palette, cool neutral tones, gentle film wash,
soft overcast daylight from the left, low contrast, no harsh shadows,
centred composition, subject occupying about half the frame,
generous empty space in the upper left corner, eye level, straight-on perspective,
shot on medium format camera, 80mm lens, fine grain, true blacks,
editorial magazine quality, high detail, sharp focus, clean composition,
no text, no letters, no numbers, no logos, no signage
--ar 4:5 --style raw --stylize 120 --v 7
```

| Файл | `{СЮЖЕТ}` |
|---|---|
| `case-01-furniture.webp` | `a joiner's workbench with a stack of raw oak boards and hand tools, fine sawdust on the surface, workshop interior out of focus behind` |
| `case-02-barbershop.webp` | `an empty vintage barber chair in a minimal barbershop interior, chrome and worn leather, tiled floor, a folded towel on the armrest` |
| `case-03-clinic.webp` | `a minimal clinic treatment room, white surfaces, a folded towel and a stainless steel tray on a trolley, no equipment visible` |
| `case-04-school.webp` | `an empty study desk by a window, a closed laptop, a notebook and a glass of water, a chair pushed slightly back` |
| `case-05-construction.webp` | `a concrete building frame under construction seen from below, scaffolding and timber formwork against an overcast sky` |
| `case-06-retail.webp` | `a minimal retail shelf with plain unbranded packaging boxes and a folded garment, shop interior softly out of focus behind` |

### 6.6 Команда — 4 кадра, 4:5, 1200×1500, ч/б, обезличенные

Лица не идентифицируются. Это не художественный приём, а страховка: посетитель,
который узнает нейросетевое лицо на странице «Команда», перестанет верить всему
остальному на сайте — об этом прямо предупреждает `prompts/03-team.md`.

Общая база — меняется только `{РАКУРС}`:

```
black and white environmental photograph of a person at their desk in a quiet
office, {РАКУРС}, absorbed in work, face not identifiable,
plain background, minimal clutter on the desk, monitor turned away from the lens,
high contrast monochrome, deep blacks, clean white highlights,
soft window light from the side, gentle gradient falloff,
waist up framing, subject in the left third, empty space on the right,
shot on medium format camera, 80mm lens, fine grain, natural skin texture,
no retouching, documentary style, editorial magazine quality, sharp focus,
no text, no letters, no readable screens, no logos
--ar 4:5 --style raw --stylize 120 --v 7
```

| Файл | `{РАКУРС}` |
|---|---|
| `team-01.webp` | `seen from behind over the shoulder` |
| `team-02.webp` | `turned three quarters away from the camera` |
| `team-03.webp` | `head cropped by the top edge of the frame, hands and open notebook in focus` |
| `team-04.webp` | `silhouetted against a bright window, face fully in shadow` |

Свет, фон и оптика во всех четырёх — одинаковые. Разные фоны у коллег разваливают
блок «О нас» быстрее всего.

---

## 7. Приёмка

- [ ] Пропорция и пиксельный размер точно как в таблице
- [ ] В кадре нет ни одной буквы, цифры, вывески и логотипа
- [ ] Нет экранов с содержимым, графиков и дашбордов
- [ ] Шесть кейсов читаются как одна съёмка: один свет, одна гамма
- [ ] Полосы и команда — честное ч/б, без цветного каста
- [ ] Ни одно лицо в блоке команды нельзя опознать
- [ ] Кадр кейса читается при ширине 300 px
- [ ] Левый верхний угол карточки кейса свободен под чип
- [ ] Вес: карточки до 150 КБ, полосы до 250 КБ

## 8. Чего в списке нет

- **Логотипы клиентов** — не генерируются. Серые заглушки с подписью «Логотип
  клиента»; реальные бренды ставить только с письменного согласия.
- **OG-картинка** `og-cover.jpg` 1200×630 — собирается из типографики
  (чёрный фон, `РЕКЛАМА, КОТОРАЯ ОКУПАЕТСЯ` display-шрифтом), не фотография.
- **Иконки** — бургер и плюс в аккордеоне нарисованы в CSS.
