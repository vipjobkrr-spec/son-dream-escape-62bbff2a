

## План: динамические мета-теги через react-helmet-async

Сейчас страницы устанавливают `document.title` и description вручную через `useEffect`, а OG-теги не меняются при переходе между страницами. `react-helmet-async` позволит декларативно управлять всеми мета-тегами.

### Шаги

1. **Установить `react-helmet-async`**

2. **Обернуть приложение в `HelmetProvider`** в `src/App.tsx`

3. **Создать компонент `SEO`** (`src/components/SEO.tsx`) — переиспользуемый компонент с пропсами `title`, `description`, `image`, `url`, `type`. Устанавливает `<title>`, `meta description`, `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:*`.

4. **Добавить `<SEO />` на каждую страницу**, убрав ручные `useEffect` для title/description:

   | Страница | title | description |
   |----------|-------|-------------|
   | Index | База отдыха Сон — отдых на Чёрном море, Тенгинка | (текущий из index.html) |
   | Leisure | Досуг и развлечения — База отдыха Сон, Тенгинка | Море, горные реки, SUP-борды… |
   | Services | Услуги — База отдыха Сон, Тенгинка | Баня, квадроциклы, конные прогулки… |
   | Blog | Блог — База отдыха Сон | Статьи об отдыхе в Тенгинке… |
   | BlogPost | {post.title} \| База отдыха Сон | {post.excerpt} + og:image = post.image |
   | Privacy | Политика конфиденциальности | — |

5. **BlogPost** — динамический `og:image` из поста для красивого шаринга каждой статьи.

### Технические детали
- Базовый URL: `https://son-dream-escape.lovable.app`
- Дефолтное OG-изображение: `/og-image.jpg`
- Удалить `useEffect` с `document.title` из всех страниц, заменив на `<SEO />`

