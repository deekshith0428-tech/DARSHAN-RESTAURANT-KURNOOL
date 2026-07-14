import { MessageCircle } from 'lucide-react';

export default function WhatsAppDelivery() {
  const handleWhatsAppClick = () => {
    const phone = '917416256608';
    const message = 'Hi Darshan Veg Restaurant, I would like to place an order';
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4 flex justify-center">
          <MessageCircle className="w-12 h-12 text-[#D4AF37]" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Experience our new <span className="text-[#D4AF37]">WHATSAPP DELIVERY SERVICE</span>
        </h2>
        
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Order directly through WhatsApp and get your favorite dishes delivered to your doorstep. 
          Quick, convenient, and delicious!
        </p>
        
        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          ORDER NOW
        </button>
        
        <p className="text-sm text-gray-400 mt-6">
          📞 Available for delivery across the city | 24/7 WhatsApp support
        </p>
      </div>
    </section>
  );
}
