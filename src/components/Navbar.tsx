import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Phone, Star, Home, DollarSign, Building, Video, Image, TreePine, BookOpen, MessageSquare, MapPin, HelpCircle, CalendarDays, Sparkles, Menu } from "lucide-react";
import { motion } from "motion/react";
import { FloatingNav, FloatingNavItem } from "@/components/ui/floating-navbar";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import WeatherWidget from "@/components/WeatherWidget";

const links: (FloatingNavItem & { id: string; isPage?: boolean })[] = [
  { name: "О нас", link: "#about", id: "about", icon: <Home className="w-4 h-4" /> },
  { name: "Цены", link: "#prices", id: "prices", icon: <DollarSign className="w-4 h-4" /> },
  { name: "Домики", link: "#cabins", id: "cabins", icon: <Building className="w-4 h-4" /> },
  { name: "Тур", link: "#tour", id: "tour", icon: <Video className="w-4 h-4" /> },
  { name: "Галерея", link: "#gallery", id: "gallery", icon: <Image className="w-4 h-4" /> },
  { name: "Досуг", link: "/leisure", id: "leisure", isPage: true, icon: <TreePine className="w-4 h-4" /> },
  { name: "Услуги", link: "/services", id: "services", isPage: true, icon: <Sparkles className="w-4 h-4" /> },
  { name: "Блог", link: "/blog", id: "blog", isPage: true, icon: <BookOpen className="w-4 h-4" /> },
  { name: "Отзывы", link: "#reviews", id: "reviews", icon: <MessageSquare className="w-4 h-4" /> },
  { name: "Локация", link: "#location", id: "location", icon: <MapPin className="w-4 h-4" /> },
  { name: "FAQ", link: "#faq", id: "faq", icon: <HelpCircle className="w-4 h-4" /> },
  { name: "Бронь", link: "#booking", id: "booking", icon: <CalendarDays className="w-4 h-4" /> },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleClick = (link: string, isPage?: boolean) => {
    setSheetOpen(false);
    if (isPage) {
      navigate(link);
      return;
    }
    if (!isHome) {
      navigate("/" + link);
      return;
    }
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <FloatingNav
        navItems={links}
        onItemClick={handleClick}
        leftContent={
          <div className="flex items-center gap-2">
            <button onClick={() => handleClick("/", true)} className="font-display text-base font-bold text-foreground whitespace-nowrap hover:text-primary transition-colors">Сон</button>
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-secondary/10 text-xs font-medium text-foreground">
              <Star className="w-3 h-3 fill-secondary text-secondary" />
              <span>4.9</span>
            </div>
            <WeatherWidget />
          </div>
        }
        mobileMenuContent={
          <div className="sm:hidden">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <button
                onClick={() => setSheetOpen(true)}
                className="flex items-center justify-center w-8 h-8 rounded-full text-foreground/70 hover:text-foreground transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <SheetContent side="right" className="w-72 pt-12 bg-popover/95 backdrop-blur-lg border-border/30">
                <SheetTitle className="sr-only">Навигация</SheetTitle>
                <nav className="flex flex-col gap-1">
                  {links.map((item, i) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                      onClick={() => handleClick(item.link, item.isPage)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-colors text-left"
                    >
                      {item.icon}
                      <span className="text-sm font-medium">{item.name}</span>
                    </motion.button>
                  ))}
                </nav>
                <div className="mt-6 px-4">
                  <a
                    href="tel:+79898397000"
                    className="flex items-center gap-2 px-4 py-3 rounded-full bg-primary/15 text-primary border border-primary/25 text-sm font-medium hover:bg-primary/25 transition-all justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    +7 989 839-70-00
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        }
        rightContent={
          <div className="flex items-center gap-2 ml-2">
            <a
              href="tel:+79898397000"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/25 backdrop-blur-sm text-sm font-medium hover:bg-primary/25 hover:border-primary/40 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">+7 989 839-70-00</span>
            </a>
          </div>
        }
      />
    </>
  );
};

export default Navbar;
