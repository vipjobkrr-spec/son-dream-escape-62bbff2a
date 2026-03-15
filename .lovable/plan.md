

## Plan: Burger Menu with Cascading Animation

The burger menu hasn't been implemented yet, so we'll add it along with the staggered entrance animation.

### Changes

**1. `src/components/ui/floating-navbar.tsx`**
- Import `Menu` from lucide-react, `Sheet`/`SheetContent`/`SheetTrigger` from sheet component, and `motion` from motion/react
- Add `mobileMenuContent` prop (ReactNode)
- On mobile (`sm:hidden`): replace individual nav icon buttons with a single burger `Menu` button that opens a Sheet
- On desktop (`hidden sm:flex`): keep current inline nav items unchanged

**2. `src/components/Navbar.tsx`**
- Manage `open` state for the Sheet
- Build mobile menu content: vertical list of all links with icons + names
- Each item rendered as a `motion.button` with staggered animation:
  - `initial={{ opacity: 0, x: 30 }}`
  - `animate={{ opacity: 1, x: 0 }}`
  - `transition={{ delay: i * 0.06 }}` — cascading 60ms stagger
- Clicking a link closes the sheet (set open=false) then navigates
- Phone number at the bottom of the sheet
- Pass the Sheet trigger button and content directly in Navbar, keeping FloatingNav simpler

### Architecture
- Use the existing `Sheet` component (side="right") for the slide-out panel
- Use `motion/react` for per-item stagger animation inside the sheet
- Sheet controlled via `open`/`onOpenChange` state in Navbar

