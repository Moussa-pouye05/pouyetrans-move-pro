import masterExterior from "@/assets/master-exterior.jpg";
import masterLoaded from "@/assets/master-loaded.jpg";
import loadingProcess from "@/assets/loading-process.jpg";
import transportRoute from "@/assets/transport-route.jpg";

const images = [
  { src: masterExterior, alt: "Renault Master PouyeTransportExpress - vue extérieure" },
  { src: masterLoaded, alt: "Véhicule chargé - organisation du chargement" },
  { src: loadingProcess, alt: "Processus de chargement des meubles" },
  { src: transportRoute, alt: "Transport en cours au Sénégal" },
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-surface" id="galerie">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
            Galerie
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Notre service{" "}
            <span className="text-gradient">en images</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
