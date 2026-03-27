import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24 leaf-pattern">
      <div
        className={`container mx-auto px-4 max-w-3xl text-center ${visible ? "animate-fade-up" : "opacity-0"}`}
        ref={ref}
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-accent mb-3">Our Story</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-8">About Sri Herbals</h2>
        <div className="w-20 h-0.5 bg-accent mx-auto mb-8" />
        <p className="font-body text-lg leading-relaxed text-muted-foreground mb-6">
          Sri Herbals is rooted in ancient Ayurvedic wisdom, crafting 100% natural skincare and haircare products
          with pure botanical ingredients. Every product is a tribute to nature's healing power — free from harsh
          chemicals, parabens, and synthetic fragrances.
        </p>
        <p className="font-display text-xl italic text-foreground/70">
          "Where nature meets nurture."
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
