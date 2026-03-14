import ScrollReveal from "./ScrollReveal";

interface Props {
  image: string;
  alt: string;
  text?: string;
  subtext?: string;
}

const ParallaxDivider = ({ image, alt, text, subtext }: Props) => (
  <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
    <img
      src={image}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      style={{ transform: "translateZ(0)" }}
      loading="lazy"
    />
    <div className="absolute inset-0 bg-foreground/40" />
    {text && (
      <div className="absolute inset-0 flex items-center justify-center">
        <ScrollReveal className="text-center px-5">
          <p className="text-3xl md:text-5xl font-display font-semibold text-primary-foreground mb-2">
            {text}
          </p>
          {subtext && (
            <p className="text-primary-foreground/70 text-sm md:text-base">
              {subtext}
            </p>
          )}
        </ScrollReveal>
      </div>
    )}
  </div>
);

export default ParallaxDivider;
