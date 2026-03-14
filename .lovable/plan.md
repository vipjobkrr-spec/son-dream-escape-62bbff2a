

## Plan: Add SEO paragraphs to 4 sections

### 1. AboutSection.tsx (line ~95)
After the existing description paragraph (line 94), add a second `<ScrollReveal>` paragraph with the SEO text about Краснодар/Сочи/Тенгинка before the stats grid.

### 2. CabinsSection.tsx (line ~51)
After the existing description paragraph (line 50), add a second `<p>` with the SEO text about cabins as an alternative to hotels in Sochi/Krasnodar.

### 3. LocationSection.tsx (line ~13)
After the existing intro paragraph (line 12), add a second `<p>` with the expanded travel details from Krasnodar/Sochi/Tuapse.

### 4. BookingForm.tsx (line ~57)
Replace the short subtitle with the longer SEO paragraph about booking convenience for residents of Krasnodar, Sochi, and the region.

All texts use the user's exact wording. Styling matches existing `text-muted-foreground text-sm/text-base` patterns in each section.

