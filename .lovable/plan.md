

## Обновление Hero-секции с scroll-анимацией и динамической сменой фото

### Суть

Заменить статичную hero-секцию на главной странице на `ContainerScroll` + `BentoGrid` из `hero-gallery-scroll-animation.tsx` — точно как на странице досуга. При скролле текст исчезает, а bento-галерея из 5 фото масштабируется и собирается в сетку.

### Изменения в `src/components/HeroSection.tsx`

**Структура:**

```text
ContainerScroll (h-[300vh], sticky)
├── BentoGrid (5 ячеек с фото базы)
│   ├── BentoCell — atmosphere.webp (главное, большое)
│   ├── BentoCell — pool-2.webp
│   ├── BentoCell — territory-1.webp
│   ├── BentoCell — terrace.jpg
│   └── BentoCell — pool-3.webp
│
└── ContainerScale (текст поверх, исчезает при скролле)
    ├── Заголовок «База отдыха Сон»
    ├── Подзаголовок + фичи (терраса, барбекю, кондиционер, Wi-Fi)
    └── Inline booking bar (дата заезда/выезда + кнопки)
```

**Ключевые решения:**
- Используем 5 локальных фото базы (atmosphere, pool-2, territory-1, terrace, pool-3) — разнообразие ракурсов
- Booking bar остаётся внутри `ContainerScale` — исчезает вместе с текстом при скролле (дублируется `StickyBookingBar` ниже)
- Scroll hint убираем — сама анимация подсказывает скроллить
- На мобильных bento-grid показывает только главное фото (остальные hidden), текст крупный

### Файлы

| Файл | Действие |
|---|---|
| `src/components/HeroSection.tsx` | Полная переработка — ContainerScroll + BentoGrid |

