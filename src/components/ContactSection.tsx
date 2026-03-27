import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-12">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-accent mb-3">Get in Touch</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">Contact Us</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-4" />
        </div>
        <div
          className={`max-w-md mx-auto bg-background border border-border rounded-2xl p-10 text-center shadow-lg ${
            visible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="w-20 h-20 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">👤</span>
          </div>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Likhitha Chiruvolu</h3>
          <div className="space-y-4 font-body text-base">
            <a
              href="tel:+918639869683"
              className="flex items-center justify-center gap-3 text-muted-foreground hover:text-accent transition-colors"
            >
              <span>📞</span> +91 8639869683
            </a>
            <a
              href="mailto:likhitha.chiruvolu@gmail.com"
              className="flex items-center justify-center gap-3 text-muted-foreground hover:text-accent transition-colors"
            >
              <span>📧</span> likhitha.chiruvolu@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
