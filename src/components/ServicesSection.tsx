import { Home, Armchair, Wrench, Package, Globe } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Déménagement",
    description: "Maison et appartement — déménagement complet avec soin et organisation.",
  },
  {
    icon: Armchair,
    title: "Transport de meubles",
    description: "Vos meubles transportés en sécurité, protégés et bien calés.",
  },
  {
    icon: Wrench,
    title: "Outils & matériel",
    description: "Transport d'outils et matériel professionnel en toute sécurité.",
  },
  {
    icon: Package,
    title: "Marchandises",
    description: "Livraison fiable de vos marchandises partout au Sénégal.",
  },
  {
    icon: Globe,
    title: "National & international",
    description: "Transport dans tout le Sénégal et trajets hors du pays disponibles.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-surface" id="services">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Des solutions de transport{" "}
            <span className="text-gradient">sur mesure</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Quel que soit votre besoin, nous avons la solution adaptée pour transporter vos biens en toute sécurité.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
