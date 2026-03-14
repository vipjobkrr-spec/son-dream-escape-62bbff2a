import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#prices", label: "Цены" },
  { href: "#cabins", label: "Домики" },
  { href: "#gallery", label: "Галерея" },
  { href: "#location", label: "Локация" },
  { href: "#faq", label: "FAQ" },
  { href: "#booking", label: "Бронирование" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className={`text-sm font-medium transition-colors hover:opacity-70 ${
                scrolled ? "text-foreground/80" : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-popover/95 backdrop-blur-sm border-t border-muted px-5 py-4 space-y-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="block w-full text-left py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
