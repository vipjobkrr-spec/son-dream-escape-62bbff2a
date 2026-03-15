

## План: JSON-LD Article для статей блога

Добавить в `BlogPost.tsx` structured data типа `Article` через уже существующий проп `jsonLd` компонента `<SEO />`.

### Изменения

**`src/pages/BlogPost.tsx`** — передать `jsonLd` в `<SEO />`:

```ts
jsonLd={{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": post.title,
  "description": post.excerpt,
  "image": post.image,
  "datePublished": post.date,
  "dateModified": post.date,
  "author": {
    "@type": "Organization",
    "name": "База отдыха Сон",
    "url": "https://son-dream-escape.lovable.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "База отдыха Сон",
    "logo": {
      "@type": "ImageObject",
      "url": "https://son-dream-escape.lovable.app/og-image.jpg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://son-dream-escape.lovable.app/blog/${post.slug}`
  }
}}
```

Один файл, одно изменение — проп `jsonLd` уже поддерживается компонентом `SEO`.

