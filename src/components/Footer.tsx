const Footer = () => (
  <footer className="bg-forest py-10">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-2xl font-bold text-primary-foreground mb-2">🌿 Sri Herbals</p>
      <p className="font-display italic text-ivory/60 text-sm">Pure. Natural. Ayurvedic.</p>
      <p className="font-body text-xs text-ivory/50 mt-2">📦 All Over India Delivery Available</p>
      <p className="font-body text-xs text-ivory/40 mt-6">© {new Date().getFullYear()} Sri Herbals. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
