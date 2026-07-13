import { useEffect, useRef } from 'react';
import { Heart, Cake, Star, Building2, Truck, Phone, MessageCircle } from 'lucide-react';

const events = [
  { icon: Heart, label: 'Wedding Catering', desc: 'Grand meals for the most special day of your life' },
  { icon: Cake, label: 'Birthday Parties', desc: 'Celebrate milestones with delicious spreads' },
  { icon: Star, label: 'Anniversary Events', desc: 'Make every anniversary unforgettable' },
  { icon: Building2, label: 'Corporate Events', desc: 'Professional catering for meetings & conferences' },
  { icon: Truck, label: 'Outdoor Catering', desc: 'We come to your venue, anywhere in Kurnool' },
];

export default function Catering() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-black-900 relative overflow-hidden">
      {/* Gold glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass rounded-3xl border border-gold/20 overflow-hidden">
          {/* Header band */}
          <div
            className="relative py-16 px-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(18,53,36,0.8) 0%, rgba(11,11,11,0.9) 50%, rgba(18,53,36,0.8) 100%)',
            }}
          >
            <div className="gold-divider w-16 mx-auto mb-6 reveal" />
            <p className="text-gold text-xs tracking-widest uppercase font-medium mb-4 reveal">Catering Services</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4 reveal">
              Your Event, Our <span className="gold-shimmer">Expertise</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-base reveal">
              From intimate family gatherings to grand celebrations — Darshan Veg Restaurant
              brings authentic flavours to your doorstep with impeccable service.
            </p>
          </div>

          {/* Event cards */}
          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              {events.map((e, i) => (
                <div
                  key={e.label}
                  className="reveal card-hover text-center p-5 rounded-2xl border border-gold/10 hover:border-gold/30 transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-green-800 flex items-center justify-center mx-auto mb-3 border border-gold/20">
                    <e.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-white font-serif font-semibold text-sm mb-1">{e.label}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center reveal">
              <p className="text-white/50 text-sm mb-5">
                Custom menus, flexible portions, and on-time delivery — we handle everything.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:07416256608"
                  className="inline-flex items-center gap-2 btn-gold relative z-10 px-8 py-4 rounded-full text-black font-semibold text-base shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Book Catering Now
                </a>
                <a
                  href="https://wa.me/917416256608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Catering Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
