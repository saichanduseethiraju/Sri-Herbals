import { useScrollReveal } from "@/hooks/useScrollReveal";

const soaps = [
  { name: "Ubtan Soap", icon: "✨", desc: "Traditional turmeric & gram flour blend for radiant skin" },
  { name: "Orange Peel Soap", icon: "🍊", desc: "Vitamin C-rich citrus cleanser for a fresh glow" },
  { name: "Licorice Soap", icon: "🌱", desc: "Brightening formula for even-toned complexion" },
  { name: "Spirulina Soap", icon: "🌊", desc: "Nutrient-dense algae soap for deep nourishment" },
  { name: "Manjista Soap", icon: "🌺", desc: "Ayurvedic herb for clear, blemish-free skin" },
  { name: "Walnut Soap", icon: "🥜", desc: "Gentle exfoliating bar for smooth, soft skin" },
];

const SoapsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="soaps" className="py-24 leaf-pattern">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-accent mb-3">Handcrafted</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">Our Signature Soaps</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {soaps.map((soap, i) => (
            <div
              key={soap.name}
              className={`bg-background border border-border rounded-xl p-8 text-center hover-card-lift cursor-default ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-5xl mb-4 block">{soap.icon}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{soap.name}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{soap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoapsSection;
