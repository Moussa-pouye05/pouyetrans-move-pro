import { Shield, Clock, CalendarCheck, Lock, HandHelping, FileText } from "lucide-react";

const strengths = [
  { icon: Clock, title: "10+ ans d'expérience", desc: "Un savoir-faire éprouvé dans le transport" },
  { icon: CalendarCheck, title: "Disponible 7j/7", desc: "Week-ends et jours fériés inclus" },
  { icon: Shield, title: "Respect des délais", desc: "Ponctualité et engagement tenus" },
  { icon: Lock, title: "Biens sécurisés", desc: "Vos affaires sont protégées" },
  { icon: HandHelping, title: "Aide au chargement", desc: "Assistance selon les conditions" },
  { icon: FileText, title: "Devis personnalisé", desc: "Tarifs adaptés à vos besoins" },
];

const SecuritySection = () => {
  return (
    <section className="py-20 bg-navy-gradient text-primary-foreground" id="confiance">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
            Pourquoi nous choisir
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            Sécurité &{" "}
            <span className="text-gradient">professionnalisme</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg mt-4">
            Votre confiance est notre priorité. Nous mettons tout en œuvre pour garantir un service irréprochable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-primary-foreground/60 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
