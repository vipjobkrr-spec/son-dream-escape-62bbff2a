

## Автоматическая смена фото в Hero с crossfade

### Подход

Первая ячейка BentoGrid — главное большое фото (col-span-6, row-span-3). Добавим автоматическую смену всех 5 изображений внутри этой ячейки каждые 5 секунд с crossfade через `AnimatePresence` + `motion.img`.

### Изменения в `src/components/HeroSection.tsx`

1. Добавить `useState` для текущего индекса + `useEffect` с `setInterval(5000)`
2. Заменить первый `<img>` в BentoCell на стек из двух `motion.img` (входящее и уходящее) через `AnimatePresence mode="popLayout"`
3. Все 5 фото циклически сменяют друг друга в главной ячейке
4. Остальные 4 ячейки остаются статичными

```text
BentoCell[0] (главная)
└── AnimatePresence
    └── motion.img key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
```

### Файлы

| Файл | Действие |
|---|---|
| `src/components/HeroSection.tsx` | Добавить useState/useEffect + AnimatePresence для crossfade в первой ячейке |

