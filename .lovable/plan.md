

## Plan: Add "Book on Yandex Travel" button

Add a prominent "Забронировать на Яндекс Путешествиях" button to the booking form section, alongside the existing "Отправить заявку" and "Написать в MAX" buttons. Use a placeholder URL for now.

### Changes in `src/components/BookingForm.tsx`

1. Add a third button in the action buttons area — a link styled as a button with the Yandex Travel branding (red/orange accent).
2. Use a placeholder URL (`https://travel.yandex.ru/`) that can be replaced later with the real listing link.
3. Button text: "Забронировать на Яндекс Путешествиях" with a `ExternalLink` icon from lucide-react.
4. Restructure the button group to stack on mobile: form submit, MAX link, and Yandex Travel link — all in a vertical column on small screens.

### Also update: `StickyBookingBar.tsx` and `HeroSection.tsx`

5. In `StickyBookingBar.tsx` — add a small secondary link to Yandex Travel below the main booking button.
6. No changes to hero section (already has booking + MAX buttons, adding a third would clutter it).

Single file changed: `BookingForm.tsx`. One minor update to `StickyBookingBar.tsx`.

