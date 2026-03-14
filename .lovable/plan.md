

## SEO-оптимизация

### Изменения

**1. `index.html`** — обновить мета-теги:
- `lang="ru"` вместо `en`
- Title: «База отдыха Сон — отдых на Чёрном море, Тенгинка»
- Description с ключевыми словами (домики, бассейн, барбекю, Туапсинский район)
- OG и Twitter теги с правильным названием и описанием
- Canonical URL
- JSON-LD разметка `LodgingBusiness` с адресом, контактами, рейтингом, удобствами и ценами

**2. `src/pages/Index.tsx`** — добавить `useEffect` для динамического обновления `document.title`

### JSON-LD Schema
Тип `LodgingBusiness` с полями:
- name, description, url, telephone, email
- address (Тенгинка, Туапсинский район)
- geo coordinates
- aggregateRating (4.9)
- amenityFeature (Wi-Fi, бассейн, барбекю, кондиционер, терраса)
- priceRange

