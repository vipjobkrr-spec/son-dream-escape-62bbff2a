

## Plan: Logo block with weather + Footer social & payment icons

### What we saw on thegarden.camp
- **Header**: Brand name + subtitle + Yandex rating badge (stars + score) + weather informer (temperature + icon + city name)
- **Footer**: Social media icons (VK, Telegram, WhatsApp, TikTok) + payment gateway logos

### Changes

#### 1. Weather Informer Component
Create `src/components/WeatherWidget.tsx` — a small inline widget showing current weather for Тенгинка/Туапсе:
- Use Open-Meteo free API (no key needed) with coordinates for Тенгинка (44.15°N, 38.88°E)
- Show temperature + weather icon (Sun/Cloud/Rain via Lucide) + "Тенгинка"
- Fetch on mount, cache in state, show skeleton while loading
- Compact design to fit in the floating navbar

#### 2. Update Navbar — Add Logo + Weather
Modify `src/components/Navbar.tsx` and `src/components/ui/floating-navbar.tsx`:
- Add a `leftContent` prop to FloatingNav
- In Navbar, pass a left block with: brand name "Сон" (display font) + Yandex rating badge (already exists as rightContent star) + WeatherWidget
- Keep existing nav links and right phone button

#### 3. Update Footer — Social Icons + Payment Icons
Modify `src/components/Footer.tsx`:
- **Social icons row**: VK, Telegram, WhatsApp, YouTube (or relevant) — using inline SVG icons for VK (not in Lucide), Lucide for Telegram/WhatsApp
- **Payment icons row**: Visa, Mastercard, Mir, SBP (СБП) — rendered as simple SVG badges or styled text badges
- Place both rows in the bottom bar area, between copyright and "Наверх" button

### Technical Details

- **Open-Meteo API**: `https://api.open-meteo.com/v1/forecast?latitude=44.15&longitude=38.88&current_weather=true` — free, no CORS issues, no API key
- **Weather icon mapping**: WMO code → Lucide icon (Sun, Cloud, CloudRain, CloudSnow, etc.)
- **SVG payment/social icons**: Inline SVGs for brand icons not available in Lucide (VK, Visa, Mastercard, Mir, СБП)
- No external dependencies needed

### Files to create/modify
- **Create**: `src/components/WeatherWidget.tsx`
- **Modify**: `src/components/ui/floating-navbar.tsx` (add leftContent prop)
- **Modify**: `src/components/Navbar.tsx` (add logo + weather in left content)
- **Modify**: `src/components/Footer.tsx` (add social + payment icons)

