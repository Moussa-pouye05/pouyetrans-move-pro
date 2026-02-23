import { Check } from "lucide-react";
import masterExterior from "@/assets/master-exterior.jpg";

const features = [
  "Renault Master 3 places",
  "Grande capacité de chargement",
  "Idéal pour déménagements et marchandises",
  "Chargement organisé et sécurisé",
  "Véhicule entretenu régulièrement",
];

const VehicleSection = () => {
  return (
    <section className="py-20 bg-background" id="vehicule">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
            <img
              src={masterExterior}
              alt="Renault Master PouyeTransportExpress - véhicule de transport"
              className="relative rounded-xl shadow-card w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              Notre véhicule
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Un véhicule adapté à{" "}
              <span className="text-gradient">vos besoins</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Notre Renault Master est spécialement équipé pour le transport de vos biens en toute sécurité. Avec sa grande capacité de chargement, il est parfait pour les déménagements et le transport de marchandises.
            </p>
            <ul className="space-y-3 pt-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;
