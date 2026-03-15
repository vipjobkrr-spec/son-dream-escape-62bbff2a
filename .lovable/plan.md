

## Plan: Update copy for WhyHereSection, PricesSection (seasons), and BookingForm

Three sections need updated copy per the user's specification.

### 1. WhyHereSection.tsx — New title and bullets

- Title: "Почему гости выбирают «Сон у Моря»"
- 5 updated bullets with new wording (keeping same icons):
  1. Home: "Небольшая семейная база: всего 8 домиков, без шума больших отелей и чужих компаний."
  2. ShieldCheck: "Закрытая, ухоженная территория с бассейном, баней, мангалами и местами для отдыха."
  3. Wifi: "Домики под ключ: кухня, санузел, кондиционер, Wi‑Fi, терраса — всё для самостоятельного и комфортного отдыха."
  4. Car: "Удобно добираться из Краснодара, Туапсе и Сочи: приехали на машине — и вы уже у моря."
  5. MapPin (new icon): "Рядом море, реки, ущелья и горы — можно чередовать пляжный отдых с прогулками и поездками."

### 2. PricesSection.tsx — New season descriptions and title

- Title: "Какой сезон подойдёт вам"
- Subtitle: remove current subtitle, keep quick price badges
- Update 4 season descriptions (spring, peak/summer, velvet, autumn) with user's copy
- Remove "early-summer" as separate season (merge into summer/peak)
- Keep VIP card unchanged
- Add footer line: "Напишите нам даты — подскажем, какой сезон лучше подойдёт именно вам."

### 3. BookingForm.tsx — Updated steps and title

- Title: "Как забронировать домик"
- 3 steps with new copy:
  1. "Вы оставляете заявку на сайте или пишете нам в мессенджер с желаемыми датами и количеством гостей."
  2. "Мы в ближайшее время проверяем свободные домики и подтверждаем бронь."
  3. "Вы вносите предоплату за 1 сутки — и мы закрепляем домик за вами."
- Rules simplified to just: "Заезд после 14:00, выезд до 12:00" (single line under the form, remove other rules)

### Files to modify
- `src/components/WhyHereSection.tsx` — new title + bullets
- `src/components/PricesSection.tsx` — new title, 4 seasons (remove early-summer), descriptions, footer CTA line
- `src/components/BookingForm.tsx` — new title, step descriptions, simplified rules

