import { forwardRef, type ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal = forwardRef<HTMLDivElement, Props>(
  ({ children, className = "", delay = 0 }, _ref) => {
    const { ref, isVisible } = useScrollReveal();

    return (
      <div
        ref={ref}
        className={className}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(32px)",
          transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
        }}
      >
        {children}
      </div>
    );
  }
);
ScrollReveal.displayName = "ScrollReveal";

export default ScrollReveal;
