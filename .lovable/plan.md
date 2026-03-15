

## Plan: Highlight key phrases in HeroSection subtitle

In `src/components/HeroSection.tsx` line 117, wrap key phrases in `<span>` tags with `font-semibold text-white` styling (same treatment as the price):

**Current:**
```
Малая семейная база из 8 домиков с бассейном и баней: тишина, горы, море
и безопасная территория для отдыха с детьми.
```

**Updated — 3 highlights:**
- "семейная" → `<span className="font-semibold text-white">семейная</span>`
- "8 домиков с бассейном" → `<span className="font-semibold text-white">8 домиков с бассейном</span>`
- In `keyPoints` array (line 23): wrap "До моря 10–15 минут" portion — but since keyPoints render as plain strings, we'd need to convert that entry to JSX or split the text

**Simpler approach:** Keep keyPoints as-is (they already have a checkmark icon drawing attention), and only highlight the two phrases in the subtitle paragraph. For the "До моря" phrase, we can bold it within keyPoints by converting the array to support JSX nodes.

### Files to modify
- `src/components/HeroSection.tsx` — wrap "семейная", "8 домиков с бассейном" in subtitle with bold white spans; update keyPoints entry for "До моря 10–15 минут" to use JSX with a bold span

