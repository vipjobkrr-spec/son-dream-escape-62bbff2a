import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const links = [
  { href: "#prices", id: "prices", label: "Цены" },
  { href: "#cabins", id: "cabins", label: "Домики" },
  { href: "#gallery", id: "gallery", label: "Галерея" },
  { href: "#location", id: "location", label: "Локация" },
  { href: "#faq", id: "faq", label: "FAQ" },
  { href: "#booking", id: "booking", label: "Бронирование" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-popover/95 backdrop-blur-sm shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-14 md:h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`font-display text-lg font-semibold transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          «Сон»
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className={`text-sm font-medium transition-colors relative pb-0.5 ${
                scrolled ? "text-foreground/80" : "text-primary-foreground/80"
              } ${
                activeSection === l.id
                  ? scrolled
                    ? "!text-primary"
                    : "!text-primary-foreground"
                  : ""
              } hover:opacity-70`}
            >
              {l.label}
              {activeSection === l.id && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-current rounded-full" />
              )}
            </button>
          ))}
          <a
            href="tel:+79001234567"
            className={`flex items-center gap-1.5 text-sm font-medium ml-2 transition-colors ${
              scrolled
                ? "text-primary hover:text-primary/80"
                : "text-primary-foreground hover:text-primary-foreground/80"
            }`}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">+7 (900) 123-45-67</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:+79001234567"
            className={`transition-colors ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-popover/95 backdrop-blur-sm border-t border-muted px-5 py-4 space-y-1 animate-fade-in">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className={`block w-full text-left py-2.5 text-sm font-medium transition-colors ${
                activeSection === l.id
                  ? "text-primary"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {l.label}
            </button>
          ))}
          <a
            href="tel:+79001234567"
            className="block py-2.5 text-sm font-medium text-primary"
          >
            📞 +7 (900) 123-45-67
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
