import maxLogo from "@/assets/max-logo.webp";

const MAX_URL =
  "https://max.me/79001234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA%20%C2%AB%D0%A1%D0%BE%D0%BD%C2%BB...";

const MaxFab = () => (
  <a
    href={MAX_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Написать в MAX"
    className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 bg-gradient-to-r from-[#6C5CE7] to-[#a855f7] text-white pl-3 pr-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
  >
    <img src={maxLogo} alt="MAX" className="w-7 h-7 rounded-full" />
    <span className="text-sm font-medium">MAX</span>
  </a>
);

export default MaxFab;
