
## Обновление типографики по трендам 2026

### Анализ статьи

Статья выделяет три ключевых тренда шрифтов 2026:
1. **Выразительные засечки** — Playfair Display, Merriweather, Oranienbaum
2. **Крупные гротески** — Raleway, Manrope, Mulish, Geologica
3. **Акцидентные шрифты** — для акцентов и заголовков

### Текущее состояние
- Заголовки: **Cormorant Garamond** (serif)
- Основной текст: **Inter** (sans-serif)

### Рекомендация

Для базы отдыха премиум-класса оптимальная пара:

- **Playfair Display** (заголовки) — элегантный шрифт с засечками, тренд 2026, идеален для премиум и travel-брендов. Заменяет Cormorant Garamond.
- **Raleway** (основной текст) — лёгкий современный гротеск с удлинёнными элементами, стильный и изящный. Заменяет Inter.

Оба шрифта доступны на Google Fonts с кириллицей.

### Изменения

**1. `src/index.css`**
- Обновить Google Fonts import: Playfair Display (400–700, italic) + Raleway (300–600)
- Обновить CSS-переменные `--font-display` и `--font-body`

**2. `tailwind.config.ts`**
- Обновить `fontFamily.display` и `fontFamily.body`

Никаких изменений в компонентах не требуется — все используют CSS-переменные и Tailwind-классы (`font-display`, `font-body`, `text-display`).
