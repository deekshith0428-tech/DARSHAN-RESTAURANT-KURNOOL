import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

export default function OrderOnline() {
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
    <section ref={ref} className="py-24 bg-black-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <p className="text-gold text-xs tracking-widest uppercase font-medium mb-3">Delivery</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
            Order <span className="gold-shimmer">Online</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="text-white/50 text-sm">Get fresh food delivered to your doorstep in minutes.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Swiggy */}
          <div className="reveal card-hover glass rounded-3xl p-8 text-center border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="w-24 h-24 rounded-2xl bg-white/95 flex items-center justify-center mx-auto mb-5 group-hover:bg-white transition-colors border border-orange-500/20 p-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
                alt="Swiggy"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-2xl text-white font-semibold mb-2">Order on Swiggy</h3>
            <p className="text-white/50 text-sm mb-6">Fast delivery with live order tracking. Fresh food at your door.</p>
            <a
              href="https://www.swiggy.com/city/kurnool/darshan-veg-restaurant-sampath-nagar-rest1157883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, #FF5200, #FF7B00)' }}
            >
              <ExternalLink className="w-4 h-4" />
              Order on Swiggy
            </a>
          </div>

          {/* Zomato */}
          <div className="reveal card-hover glass rounded-3xl p-8 text-center border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group">
            <div className="w-24 h-24 rounded-2xl bg-white/95 flex items-center justify-center mx-auto mb-5 group-hover:bg-white transition-colors border border-red-500/20 p-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
                alt="Zomato"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-2xl text-white font-semibold mb-2">Order on Zomato</h3>
            <p className="text-white/50 text-sm mb-6">Premium dining experience delivered. Track every step of your order.</p>
            <a
              href="https://www.zomato.com/kurnool/darshan-veg-restaurant-kurnool-locality/order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, #E23744, #FF4C5E)' }}
            >
              <ExternalLink className="w-4 h-4" />
              Order on Zomato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
