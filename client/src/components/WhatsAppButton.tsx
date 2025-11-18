import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const handleClick = () => {
    trackWhatsAppClick('floating_button');
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      data-testid="button-whatsapp-floating"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" />
        
        <div className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="w-14 h-14 flex items-center justify-center">
            <MessageCircle className="w-7 h-7" />
          </div>
          
          <div 
            className={`overflow-hidden transition-all duration-300 pr-5 ${
              isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
            }`}
          >
            <span className="text-sm font-semibold whitespace-nowrap">
              Get Quote
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
