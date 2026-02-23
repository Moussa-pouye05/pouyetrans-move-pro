import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink = `https://wa.me/221XXXXXXXXX?text=${encodeURIComponent("Bonjour, je souhaite des informations sur vos services de transport.")}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-soft"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
