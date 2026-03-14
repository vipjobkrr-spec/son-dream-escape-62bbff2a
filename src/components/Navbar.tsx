import { useNavigate, useLocation } from "react-router-dom";
import { Phone, Star, Home, DollarSign, Building, Video, Image, TreePine, BookOpen, MessageSquare, MapPin, HelpCircle, CalendarDays, Sparkles } from "lucide-react";
import { FloatingNav, FloatingNavItem } from "@/components/ui/floating-navbar";

const links: (FloatingNavItem & { id: string; isPage?: boolean })[] = [
  { name: "О нас", link: "#about", id: "about", icon: <Home className="w-4 h-4" /> },
  { name: "Цены", link: "#prices", id: "prices", icon: <DollarSign className="w-4 h-4" /> },
  { name: "Домики", link: "#cabins", id: "cabins", icon: <Building className="w-4 h-4" /> },
  { name: "Тур", link: "#tour", id: "tour", icon: <Video className="w-4 h-4" /> },
  { name: "Галерея", link: "#gallery", id: "gallery", icon: <Image className="w-4 h-4" /> },
  { name: "Досуг", link: "/leisure", id: "leisure", isPage: true, icon: <TreePine className="w-4 h-4" /> },
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
      rightContent={
        <div className="flex items-center gap-2 ml-2">
          <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-secondary/10 text-xs font-medium text-foreground">
            <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
            <span>4.9</span>
          </div>
          <a
            href="tel:+79001234567"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">+7 (900) 123-45-67</span>
          </a>
        </div>
      }
    />
  );
};

export default Navbar;
