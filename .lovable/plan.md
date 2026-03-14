

## 3D Room Tour Section

### Concept
Create an interactive "virtual tour" section using the 9 uploaded real interior photos. Since we don't have actual 3D panorama data, the approach is an immersive room-by-room carousel experience that simulates a walkthrough -- each "room zone" (Спальня, Кухня, Гостиная, Санузел) gets its own tab/card with multiple photos and descriptions.

### Design
- Section placed after CabinsSection in the page flow
- Tab-based navigation with 4 zones: Спальня, Кухня, Гостиная, Санузел
- Each tab shows a large hero image with thumbnail strip below for additional angles
- Clicking a thumbnail swaps the main image with a smooth crossfade
- 3D-inspired visual treatment: perspective transforms on hover, subtle parallax, depth shadows
- Mobile: swipeable tabs + vertical image stack
- Call-to-action at the bottom linking to booking

### Photos Mapping
| Zone | Images |
|------|--------|
| Спальня | 9VDPM.jpg (bed+wardrobe), BntRU.jpg (bed angle 2), AK7l1.jpg (full room) |
| Кухня | JrWri.jpg (kitchen+table), 3LiBg.jpg (kitchen angle 2), Mzg1e.jpg (fridge area) |
| Гостиная | Nf9Le.jpg (sofa blue), w5uW1.jpg (sofa white) |
| Санузел | kHQfw.jpg (bathroom) |

### Files Changed
1. **Copy 9 uploaded images** to `src/assets/tour/`
2. **Create `src/components/RoomTourSection.tsx`** -- new component with tabbed room viewer
3. **Edit `src/pages/Index.tsx`** -- add `<RoomTourSection />` after `<CabinsSection />`

### Technical Details
- Uses existing ScrollReveal for entrance animations
- Tab state managed with `useState`
- Selected image state per tab
- CSS perspective/transform for 3D depth effect on the main image container
- Responsive: tabs become horizontal scroll on mobile, main image full-width

