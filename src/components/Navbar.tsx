import { useNavigate, useLocation } from "react-router-dom";
import { Phone, Star, Home, DollarSign, Building, Video, Image, TreePine, BookOpen, MessageSquare, MapPin, HelpCircle, CalendarDays, Sparkles } from "lucide-react";
import { FloatingNav, FloatingNavItem } from "@/components/ui/floating-navbar";
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

  const handleClick = (link: string, isPage?: boolean) => {
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
    <FloatingNav
      navItems={links}
      onItemClick={handleClick}
      leftContent={
        <div className="flex items-center gap-2">
          <span className="font-display text-base font-bold text-foreground whitespace-nowrap">Сон</span>
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-secondary/10 text-xs font-medium text-foreground">
            <Star className="w-3 h-3 fill-secondary text-secondary" />
            <span>4.9</span>
          </div>
          <WeatherWidget />
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
  );
};

export default Navbar;
