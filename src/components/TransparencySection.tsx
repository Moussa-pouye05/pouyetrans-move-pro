import { Info } from "lucide-react";

const TransparencySection = () => {
  return (
    <section className="py-16 bg-surface-warm">
      <div className="container">
        <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-foreground mb-3">
                Transparence totale
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                L'aide au chargement est <strong className="text-foreground">incluse pour les charges légères</strong>. 
                Pour les charges lourdes ou volumineuses, un <strong className="text-foreground">supplément peut être demandé</strong> — 
                nous vous informons toujours à l'avance. Aucune surprise, que de la clarté.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
