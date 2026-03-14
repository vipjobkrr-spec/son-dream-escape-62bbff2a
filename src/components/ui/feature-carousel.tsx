import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  subtitle: string;
  images: { src: string; alt: string }[];
}

export const HeroSection = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ title, subtitle, images, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(images.length / 2));

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    React.useEffect(() => {
      const timer = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(timer);
    }, [handleNext]);

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden rounded-2xl',
          className
        )}
        {...props}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--secondary)/0.3),transparent_60%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-12 gap-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              {title}
            </h2>
            <p className="text-primary-foreground/70 text-base md:text-lg max-w-xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Main Showcase Section */}
          <div className="relative w-full flex items-center justify-center" style={{ height: '400px' }}>
            {/* Carousel Wrapper */}
            <div className="relative w-full h-full flex items-center justify-center">
              {images.map((image, index) => {
                const offset = index - currentIndex;
                const total = images.length;
                let pos = (offset + total) % total;
                if (pos > Math.floor(total / 2)) {
                  pos = pos - total;
                }

                const isCenter = pos === 0;
                const isAdjacent = Math.abs(pos) === 1;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-700 ease-in-out rounded-xl overflow-hidden shadow-2xl"
                    style={{
                      width: isCenter ? '320px' : isAdjacent ? '240px' : '180px',
                      height: isCenter ? '380px' : isAdjacent ? '300px' : '220px',
                      transform: `translateX(${pos * 200}px) scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})`,
                      zIndex: isCenter ? 30 : isAdjacent ? 20 : 10,
                      opacity: Math.abs(pos) > 2 ? 0 : isCenter ? 1 : isAdjacent ? 0.8 : 0.5,
                      visibility: Math.abs(pos) > 1 ? 'hidden' as const : 'visible' as const,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-40 rounded-full bg-primary-foreground/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-40 rounded-full bg-primary-foreground/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

HeroSection.displayName = 'HeroSection';
