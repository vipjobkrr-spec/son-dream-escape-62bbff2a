

## Plan: Active item highlighting in desktop nav

### Changes

**`src/components/ui/floating-navbar.tsx`**
- Add `activeItem` prop (string, optional)
- For each nav button, compare `navItem.link === activeItem` to apply active styling
- Active state: `text-primary` with a small animated dot below using `motion.div` with `layoutId="active-nav-dot"` for smooth sliding between items
- Inactive state: keep current `text-foreground/70`

**`src/components/Navbar.tsx`**
- Compute the active link: find the first link where `isActive(item)` returns true, take its `.link`
- Pass it as `activeItem` prop to `FloatingNav`

### Visual
- Active item gets `text-primary` color
- A 4px-wide dot (`h-1 w-1 rounded-full bg-primary`) slides underneath the active item via `layoutId` animation

