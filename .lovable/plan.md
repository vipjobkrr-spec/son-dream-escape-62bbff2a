

## Plan: Enhance "Домики" section visual style

### Current state
The section has a photo slider on the left and a plain info column on the right with a green badge ("8 домиков и баня") and a 2-column grid of flat amenity cards on `bg-muted/50`.

### Proposed changes in `src/components/CabinsSection.tsx`

1. **Section background**: Add a subtle `bg-muted/30` background with a decorative SVG leaf/wave pattern using a pseudo-element or an inline SVG with low opacity, giving the section visual depth.

2. **Heading upgrade**: Add a decorative divider line below the heading — a short centered `w-16 h-1 bg-primary rounded-full` bar, common in hospitality sites.

3. **Info column redesign**:
   - Wrap the right column in a `bg-popover rounded-2xl shadow-card p-6` card to give it structure and contrast against the section background.
   - Badge "8 домиков и баня" — add a subtle gradient: `bg-gradient-to-r from-primary to-primary/80`.
   - Add a short tagline below the badge: "Уютные домики для семейного отдыха" in italic Playfair Display.

4. **Amenity cards upgrade**:
   - Each card gets a `bg-background` (white) background with `shadow-soft` and a left border accent: `border-l-2 border-primary`.
   - Icon wrapped in a small `w-9 h-9 rounded-lg bg-primary/10` circle for visual weight.
   - Hover effect: `hover:shadow-card hover:-translate-y-0.5 transition-all`.

5. **Decorative dots**: Add a small decorative pattern (3 dots in a row) between badge and amenities grid, using `text-secondary` color — a subtle visual separator.

### No new files or dependencies needed. Single file edit.

