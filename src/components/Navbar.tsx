import { Phone, Truck } from "lucide-react";

const Navbar = () => {
  const phoneNumber = "+221XXXXXXXXX";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-navy-dark/95 backdrop-blur-md border-b border-primary-foreground/5">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <Truck className="w-6 h-6 text-secondary" />
          <span className="text-lg font-extrabold text-primary-foreground tracking-tight">
            POUYE<span className="text-gradient">TRANS</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { label: "Véhicule", href: "#vehicule" },
            { label: "Services", href: "#services" },
            { label: "Confiance", href: "#confiance" },
            { label: "Zones", href: "#zones" },
            { label: "Galerie", href: "#galerie" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${phoneNumber}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            Appeler
          </a>
          <a
            href="#devis"
            className="inline-flex items-center px-5 py-2 rounded-lg bg-secondary text-secondary-foreground font-bold text-sm shadow-orange hover:bg-orange-dark transition-all"
          >
            Devis gratuit
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
