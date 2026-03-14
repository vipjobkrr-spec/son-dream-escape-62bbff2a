

## Plan: Add amenity icon cards to the Cabins section

Replace the plain checklist (lines 103–117) with a grid of compact icon cards. Each card will have a Lucide icon, a bold title, and a short description — matching the style already used in `AmenitiesSection`.

### Changes in `src/components/CabinsSection.tsx`

1. **Import icons**: Add `Sun, Flame, Wind, BedDouble, ShowerHead, UtensilsCrossed` from `lucide-react`.

2. **Replace the `<ul>` list** (lines 103–117) with a `grid grid-cols-2 gap-3` of 6 small cards:
   - `Sun` — Терраса / Стол и стулья для завтраков
   - `Flame` — Зона барбекю / Индивидуальный мангал
   - `UtensilsCrossed` — Кухня / Холодильник, плита, посуда
   - `BedDouble` — Кровать + диван / Ортопедические матрасы
   - `ShowerHead` — Санузел / Душевая и полотенца
   - `Wind` — Кондиционер / Комфорт в любую погоду

3. **Card style**: Each card — `bg-muted/50 rounded-xl p-3`, icon in `text-primary`, title `font-semibold text-sm`, description `text-xs text-muted-foreground`. Compact enough to fit the right column without overwhelming the slider.

No new files or dependencies needed.

