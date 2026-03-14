import maxLogo from "@/assets/max-logo.webp";

const MAX_URL =
  "https://max.me/79001234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA%20%C2%AB%D0%A1%D0%BE%D0%BD%C2%BB...";

const StickyBookingBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-popover/95 backdrop-blur-sm border-t border-muted shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 space-y-2">
      <a
        href={MAX_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full py-3.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity items-center justify-center gap-2"
      >
        <img src={maxLogo} alt="MAX" className="w-5 h-5 rounded-full" />
        Забронировать в MAX — от 6 500 ₽
      </a>
      <a
        href="https://travel.yandex.ru/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-2.5 text-center text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        или на Яндекс Путешествиях →
      </a>
    </div>
  );
};

export default StickyBookingBar;
