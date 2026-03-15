

## Plan: Three micro-improvements for trust and clarity

### 1. BookingForm.tsx — Privacy note under phone field
After the phone input and its error message (around line 134), add:
```
<p className="text-[11px] text-muted-foreground mt-1">🔒 Мы не передаём ваши контакты третьим лицам</p>
```

### 2. PricesSection.tsx — "Чаще всего выбирают" badge on Summer
The summer/peak season already has `tag: "Популярный"` and `isPopular: true`. Change the tag text from `"Популярный"` to `"Чаще всего выбирают"` (line 28).

### 3. CabinsSection.tsx — Guest capacity line
Under the subtitle "Уютные домики для семейного отдыха" (line 128), add a small line:
```
<p className="text-sm text-muted-foreground mb-4">Оптимально для семьи: 2 взрослых + 2 ребёнка</p>
```

### Files to modify
- `src/components/BookingForm.tsx` — add privacy micro-copy
- `src/components/PricesSection.tsx` — change tag on line 28
- `src/components/CabinsSection.tsx` — add capacity line

