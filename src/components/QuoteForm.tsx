import { useState } from "react";
import { Send } from "lucide-react";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    villeDepart: "",
    villeDestination: "",
    typeChargement: "",
    volume: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Bonjour PouyeTrans,\n\nDemande de devis :\n- Nom : ${formData.nom}\n- Téléphone : ${formData.telephone}\n- Départ : ${formData.villeDepart}\n- Destination : ${formData.villeDestination}\n- Type : ${formData.typeChargement}\n- Volume : ${formData.volume}\n- Date : ${formData.date}\n- Message : ${formData.message}`;
    const whatsappUrl = `https://wa.me/221XXXXXXXXX?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all";

  return (
    <section className="py-20 bg-navy-gradient text-primary-foreground" id="devis">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              Devis gratuit
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
              Recevez votre{" "}
              <span className="text-gradient">devis personnalisé</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mt-4">
              Remplissez le formulaire ci-dessous et nous vous répondons rapidement.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2">Demande envoyée !</h3>
              <p className="text-primary-foreground/70">Nous vous contacterons dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="nom"
                  placeholder="Votre nom *"
                  required
                  maxLength={100}
                  value={formData.nom}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  name="telephone"
                  placeholder="Téléphone *"
                  required
                  maxLength={20}
                  type="tel"
                  value={formData.telephone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="villeDepart"
                  placeholder="Ville de départ *"
                  required
                  maxLength={100}
                  value={formData.villeDepart}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  name="villeDestination"
                  placeholder="Ville de destination *"
                  required
                  maxLength={100}
                  value={formData.villeDestination}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <select
                  name="typeChargement"
                  required
                  value={formData.typeChargement}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Type de chargement *</option>
                  <option value="demenagement">Déménagement</option>
                  <option value="meubles">Meubles</option>
                  <option value="outils">Outils / Matériel</option>
                  <option value="marchandises">Marchandises</option>
                  <option value="bagages">Bagages</option>
                  <option value="autre">Autre</option>
                </select>
                <input
                  name="volume"
                  placeholder="Volume estimé (ex: petit, moyen, grand)"
                  maxLength={100}
                  value={formData.volume}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className={inputClass}
              />
              <textarea
                name="message"
                placeholder="Message ou détails supplémentaires..."
                rows={4}
                maxLength={1000}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-bold text-lg shadow-orange hover:bg-orange-dark transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                Recevoir mon devis
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
