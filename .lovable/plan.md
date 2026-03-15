

## Plan: Modern crisp font for FAQ block

Currently the FAQ uses `font-display` (Playfair Display serif) for the heading and `font-body` (Raleway) for text. To make it more modern and crisp, I'll switch the FAQ text to use Inter — a clean, highly legible sans-serif widely used in modern UI.

### Changes

1. **`src/index.css`** — Add Inter font import from Google Fonts alongside existing fonts.

2. **`tailwind.config.ts`** — Add `sans: ["Inter", "sans-serif"]` to `fontFamily`.

3. **`src/components/FaqSection.tsx`** — Apply `font-sans` to the FAQ section so all text (questions, answers, numbers) uses Inter. Keep the heading as `font-display` (Playfair Display) for brand consistency, or optionally switch it to `font-sans` too for a fully modern look.

### Specific changes in FaqSection.tsx
- Add `font-sans` to the `<section>` element
- Question text (line 45): change from `text-sm` to `text-[15px]` for slightly better readability
- Answer text (line 49): change from `text-sm` to `text-[14px] leading-relaxed`
- Number spans: keep `font-mono` for clean numbering

