import { MapPin, Globe } from "lucide-react";

const cities = [
  "Dakar", "Thiès", "Touba", "Kaolack", "Saint-Louis", "Ziguinchor",
  "Mbour", "Rufisque", "Tambacounda", "Kolda",
];

const CoverageSection = () => {
  return (
    <section className="py-20 bg-background" id="zones">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
            Zone d'intervention
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Partout au{" "}
            <span className="text-gradient">Sénégal</span>{" "}
            et au-delà
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Nous couvrons l'ensemble du territoire sénégalais et proposons des trajets internationaux sur demande.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {cities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 bg-card rounded-lg px-4 py-3 shadow-card border border-border/50 hover:border-secondary/30 transition-colors"
              >
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="font-semibold text-foreground text-sm">{city}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 border border-primary/10">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">
                + Transport hors du pays disponible sur demande
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
