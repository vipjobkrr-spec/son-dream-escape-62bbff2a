import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  priceDescription?: string;
  description: string;
  features?: string[];
  isPopular?: boolean;
  isActive?: boolean;
  isVip?: boolean;
  tag?: string;
  onClick?: () => void;
  className?: string;
}

const cardVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.04,
    y: -6,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,
      title,
      price,
      priceDescription,
      description,
      features,
      isPopular = false,
      isActive = false,
      isVip = false,
      tag,
      onClick,
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        className={cn(
          "relative rounded-2xl p-5 md:p-6 text-left cursor-pointer flex flex-col border transition-colors duration-300",
          isActive
            ? "bg-primary text-primary-foreground border-primary/50 shadow-xl ring-2 ring-primary/20"
            : isVip
              ? "bg-gradient-to-br from-amber-50 to-popover border-amber-400/30 shadow-lg"
              : "bg-popover border-border/50 shadow-card hover:border-primary/30",
          className
        )}
      >
        {/* Tag */}
        {tag && (
          <span
            className={cn(
              "absolute -top-3 left-4 px-3 py-0.5 rounded-full text-[11px] font-semibold",
              isActive
                ? "bg-primary-foreground/20 text-primary-foreground backdrop-blur"
                : isVip
                  ? "bg-amber-500 text-primary-foreground"
                  : isPopular
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-primary text-primary-foreground"
            )}
          >
            {tag}
          </span>
        )}

        {/* Header */}
        <div className="mb-3">
          <h3
            className={cn(
              "text-sm font-medium mb-1",
              isActive ? "text-primary-foreground/80" : "text-muted-foreground"
            )}
          >
            {title}
          </h3>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              {price}
            </span>
            {priceDescription && (
              <span
                className={cn(
                  "text-xs",
                  isActive ? "text-primary-foreground/60" : "text-muted-foreground"
                )}
              >
                {priceDescription}
              </span>
            )}
          </div>
        </div>

        {/* Divider */}
        <div
          className={cn(
            "h-px w-full mb-3",
            isActive ? "bg-primary-foreground/20" : "bg-border"
          )}
        />

        {/* Description */}
        <p
          className={cn(
            "text-xs leading-relaxed mb-4",
            isActive ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="space-y-2 mt-auto">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check
                  className={cn(
                    "w-3.5 h-3.5 mt-0.5 shrink-0",
                    isActive ? "text-primary-foreground/80" : "text-primary"
                  )}
                />
                <span
                  className={cn(
                    "text-xs",
                    isActive ? "text-primary-foreground/80" : "text-foreground/80"
                  )}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Active checkmark */}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center"
          >
            <Check className="w-3.5 h-3.5" />
          </motion.div>
        )}
      </motion.div>
    );
  }
);
PricingCard.displayName = "PricingCard";

export { PricingCard };
export type { PricingCardProps };
