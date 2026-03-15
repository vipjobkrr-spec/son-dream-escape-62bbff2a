import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export interface FloatingNavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
  isPage?: boolean;
}

export const FloatingNav = ({
  navItems,
  className,
  onItemClick,
  leftContent,
  rightContent,
  mobileMenuContent,
  activeItem,
  hidden,
}: {
  navItems: FloatingNavItem[];
  className?: string;
  onItemClick?: (link: string, isPage?: boolean) => void;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  mobileMenuContent?: React.ReactNode;
  activeItem?: string;
  hidden?: boolean;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-border/30 rounded-full bg-popover/90 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-6 py-2 items-center justify-center space-x-3",
          className
        )}
      >
        {leftContent}
        <div className="w-px h-4 bg-border/30 hidden sm:block" />
        <div className="hidden sm:flex items-center space-x-3">
          {navItems.map((navItem, idx) => (
            <button
              key={idx}
              onClick={() => onItemClick?.(navItem.link, navItem.isPage)}
              className={cn(
                "relative items-center flex flex-col space-x-1 transition-colors pb-1",
                activeItem === navItem.link
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              <span className="hidden sm:block text-sm whitespace-nowrap">
                {navItem.name}
              </span>
              {activeItem === navItem.link && (
                <motion.div
                  layoutId="active-nav-dot"
                  className="absolute -bottom-0.5 h-1 w-1 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        {mobileMenuContent}
        {rightContent}
      </motion.div>
    </AnimatePresence>
  );
};
