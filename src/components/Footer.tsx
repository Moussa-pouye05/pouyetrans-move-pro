import { Phone, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const phoneNumber = "+221771110168";

  return (
    <footer className="bg-navy-dark py-12 text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="PouyeTrans logo" className="w-7 h-7 object-contain" />
              <span className="text-xl font-extrabold tracking-tight">
                POUYE<span className="text-gradient">TRANS</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 leading-relaxed">
              Transport & Déménagement — Votre partenaire de confiance pour le transport sécurisé de vos biens au Sénégal.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Véhicule", href: "#vehicule" },
                { label: "Services", href: "#services" },
                { label: "Zones", href: "#zones" },
                { label: "Galerie", href: "#galerie" },
                { label: "Devis", href: "#devis" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/60 hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="space-y-3">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {phoneNumber}
              </a>
              <a
                href={`https://wa.me/221771110168`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="mailto:modoupouye0168@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                modoupouye0168@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} PouyeTrans — Transport & Déménagement. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
