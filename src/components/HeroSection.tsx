import heroHerbals from "@/assets/hero-herbals.jpg";
import heroLeaves from "@/assets/hero-leaves.png";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.querySelector("#soaps")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroHerbals}
        alt="Ayurvedic herbs and botanicals"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest/85" />

      {/* Floating botanical leaves — top-left */}
      <img
        src={heroLeaves}
        alt=""
        width={800}
        height={800}
        className="absolute -top-10 -left-10 w-72 sm:w-96 opacity-30 pointer-events-none"
      />
      {/* Mirrored leaves — bottom-right */}
      <img
        src={heroLeaves}
        alt=""
        width={800}
        height={800}
        className="absolute -bottom-10 -right-10 w-72 sm:w-96 opacity-20 rotate-180 pointer-events-none"
      />

      {/* Decorative SVG leaves */}
      <svg className="absolute top-16 right-12 opacity-20 w-28 h-28" viewBox="0 0 100 100" fill="none">
        <path d="M50 5C30 20 10 40 20 60C30 80 50 70 50 70C50 70 70 80 80 60C90 40 70 20 50 5Z" stroke="hsl(33,65%,47%)" strokeWidth="1.5" />
      </svg>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-clay mb-4">Handcrafted with Love</p>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-lg">
          Sri Herbals
        </h1>
        <p className="font-display text-xl sm:text-2xl italic text-ivory/80 mb-4">
          Pure. Natural. Ayurvedic.
        </p>
        <p className="font-body text-sm tracking-wide text-clay/90 mb-10 flex items-center justify-center gap-2">
          <span>📦</span> All Over India Delivery Available
        </p>
        <button
          onClick={scrollToProducts}
          className="glow-btn inline-block bg-accent text-accent-foreground font-body font-bold tracking-wide px-10 py-4 rounded-full text-lg hover:scale-105 transition-transform"
        >
          Explore Products
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
