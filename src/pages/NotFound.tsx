import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-display font-bold text-foreground">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Страница не найдена</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/15 text-primary border border-primary/25 backdrop-blur-sm font-medium hover:bg-primary/25 hover:border-primary/40 transition-all"
          >
            На главную
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;