

## Plan: New Hero Screen + Guest Journey Restructure

This is a major restructuring of the page flow and hero section to match the user's detailed specification.

### 1. Rewrite HeroSection.tsx — New informational hero

Replace the current hero with the specified content:

**Structure:**
- Fullscreen background slideshow (keep existing images + swipe)
- New title: "Спокойный отдых в домиках у моря в Тенгинке"
- New subtitle paragraph about the base
- 3 key bullet points (kitchen/amenities, sea distance, family atmosphere)
- Primary CTA: "Проверить свободные домики" → scrolls to #booking
- Under CTA: microcopy "Ответим в течение 15 минут и подтвердим бронь. Предоплата — 1 сутки проживания."
- Secondary CTA: "Задать вопрос в MAX" → opens MAX messenger
- Remove bottom booking bar with date inputs (simplify to just buttons)
- Keep trust badges (8 домиков, 4.9, etc.) but move them below the buttons

### 2. Create WhyHereSection.tsx — "Почему именно здесь"

New compact section replacing TrustBar, placed right after hero:
- 5 concrete bullets:
  - Только 8 домиков — без толпы и шума больших отелей
  - Безопасная закрытая территория, бассейн и детская зона
  - Удобно из Краснодара, Туапсе, Сочи — приехать на машине вечером после работы
  - Хозяева живут на месте — помогут с маршрутами и любыми вопросами
  - Домики под ключ: кухня, санузел, кондиционер, Wi-Fi

### 3. Update PricesSection.tsx — Add season mini-stories

For each season card, replace dry descriptions with mini-stories:
- "Весна — тихо, меньше людей, выгодные цены"
- "Лето — максимум солнца и моря"
- "Бархатный сезон — тёплое море без жары"
- Add family example: "5 ночей для семьи 2+2 — от X ₽"

### 4. Merge BookingTerms into BookingForm — Single booking section

Combine the booking steps + rules into one section:
- Keep the 3-step process visual (request → confirm → prepay)
- Add key rules inline (check-in/out times, children, pets)
- Single form: dates, guests, phone/messenger
- Below form: alternative buttons "Написать в MAX" / "Написать в WhatsApp"
- Remove separate BookingTerms section

### 5. Restructure Index.tsx — New page order

```text
Navbar
HeroSection          (new: informational, 2 buttons)
WhyHereSection       (new: 5 bullets "почему именно здесь")
AboutSection         (keep: tabs with nature/comfort/activities)
CabinsSection        (keep: cabin cards with amenities)
AmenitiesSection     (keep: what's in each cabin)
ParallaxDivider      (pool)
PricesSection        (updated: season stories + calculator)
WhyNotHotelSection   (keep: comparison table)
GallerySection       (keep)
LeisureHeroBlock     (keep)
ReviewsSection       (keep: with social proof badges)
ParallaxDivider      (bbq)
BookingForm          (merged: form + steps + rules + contacts)
LocationSection      (moved after booking form)
FaqSection           (keep)
GiftCertificateSection (keep)
Footer
StickyBookingBar
MaxFab
```

### Files to create/modify
- **Create**: `src/components/WhyHereSection.tsx`
- **Rewrite**: `src/components/HeroSection.tsx`
- **Modify**: `src/components/PricesSection.tsx` (season stories + family examples)
- **Modify**: `src/components/BookingForm.tsx` (merge booking terms inline)
- **Modify**: `src/pages/Index.tsx` (new section order, remove BookingTerms import)

### Technical notes
- Keep existing slideshow/swipe logic in Hero, just change content
- WhyHereSection is a simple static component with icons + text
- BookingTerms rules get folded into a collapsible or grid below the form
- No new dependencies needed

