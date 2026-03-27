import { useScrollReveal } from "@/hooks/useScrollReveal";

const products = [
  { name: "Shampoo", icon: "🧴" },
  { name: "Hair Oil", icon: "💧" },
  { name: "Black Hair Dye", icon: "🖤" },
  { name: "Lip Balm", icon: "💋" },
  { name: "Bath Powder", icon: "🛁" },
  { name: "Foot Cream", icon: "🦶" },
  { name: "Coffee Scrub", icon: "☕" },
  { name: "Walnut Scrub", icon: "🌰" },
  { name: "Aloe Vera Gel", icon: "🌿" },
  { name: "Saffron Gel", icon: "🌼" },
  { name: "Solid Perfume", icon: "🌸" },
  { name: "Hair Pack", icon: "💆" },
];

const ProductsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="products" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-accent mb-3">Natural Care</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">Full Product Range</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`bg-background border border-border rounded-xl p-6 text-center hover-card-lift cursor-default ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="text-4xl mb-3 block">{p.icon}</span>
              <h3 className="font-display text-base font-semibold text-foreground">{p.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
