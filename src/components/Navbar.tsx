import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Véhicule", href: "#vehicule" },
  { label: "Services", href: "#services" },
  { label: "Confiance", href: "#confiance" },
  { label: "Zones", href: "#zones" },
  { label: "Galerie", href: "#galerie" },
];

const Navbar = () => {
  const phoneNumber = "+221771110168";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-navy-dark/95 backdrop-blur-md border-b border-primary-foreground/5">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="PouyeTrans logo" className="w-7 h-7 object-contain" />
          <span className="text-lg font-extrabold text-primary-foreground tracking-tight">
            POUYE<span className="text-gradient">TRANS</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
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
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-lg bg-secondary text-secondary-foreground font-bold text-sm shadow-orange hover:bg-orange-dark transition-all"
          >
            Devis gratuit
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-dark/98 backdrop-blur-md border-t border-primary-foreground/10 animate-fade-up">
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-primary-foreground/80 hover:text-secondary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-primary-foreground/10">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 py-2 text-primary-foreground/80 hover:text-primary-foreground font-semibold"
              >
                <Phone className="w-4 h-4" />
                Appeler
              </a>
              <a
                href="#devis"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-secondary text-secondary-foreground font-bold text-sm shadow-orange"
              >
                Devis gratuit
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
