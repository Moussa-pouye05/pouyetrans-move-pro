import { Phone, MessageCircle, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const phoneNumber = "+221771110168";
  const whatsappLink = `https://wa.me/221771110168?text=${encodeURIComponent("Bonjour, je souhaite demander un devis pour un transport.")}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Véhicule Renault Master PouyeTrans chargé en route au Sénégal"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="container relative z-10 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 mb-4">
            <span className="text-sm font-medium text-secondary-foreground opacity-90">
              🚛 Service professionnel 7j/7
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
            Transport sécurisé de bagages et déménagements{" "}
            <span className="text-gradient">au Sénégal</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Plus de 10 ans d'expérience — Service fiable, rapide et professionnel partout au Sénégal et au-delà.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#devis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-bold text-lg shadow-orange hover:bg-orange-dark transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              Demander un devis
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground/10 text-primary-foreground font-semibold text-lg border border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#25D366] text-primary-foreground font-semibold text-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
