import { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation } from 'lucide-react';

const hours = [
  { day: 'Open Every Day', time: '12:00 PM – 10:00 PM' },
];

export default function Contact() {
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
    <section id="contact" ref={ref} className="py-24 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <p className="text-gold text-xs tracking-widest uppercase font-medium mb-3">Find Us</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
            Visit <span className="gold-shimmer">Darshan</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Info */}
          <div className="space-y-6 reveal">
            {/* Address */}
            <div className="glass rounded-2xl p-6 border border-gold/15 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-800 flex items-center justify-center shrink-0 border border-gold/20">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="text-gold font-serif font-semibold text-base mb-1">Address</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Darshan Veg Restaurant,<br />
                  Kurnool, Andhra Pradesh,<br />
                  India – 518 001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="glass rounded-2xl p-6 border border-gold/15 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-800 flex items-center justify-center shrink-0 border border-gold/20">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="text-gold font-serif font-semibold text-base mb-1">Phone</h3>
                <a href="tel:07416256608" className="text-white/70 text-sm hover:text-gold transition-colors">
                  07416256608
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="glass rounded-2xl p-6 border border-gold/15 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-800 flex items-center justify-center shrink-0 border border-gold/20 mt-1">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-gold font-serif font-semibold text-base mb-3">Opening Hours</h3>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-white/60">{h.day}</span>
                      <span className="text-white/90 font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/917416256608?text=Hi%20Darshan%20Veg%20Restaurant%2C%20I%20would%20like%20to%20make%20a%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a
                href="tel:07416256608"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-black text-sm btn-gold relative z-10"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://maps.google.com/?q=Kurnool+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-gold text-sm glass border border-gold/30 hover:border-gold transition-all duration-300 hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4" />
                Directions
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="reveal rounded-2xl overflow-hidden border border-gold/15 h-[420px] lg:h-auto min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122424.28738143627!2d78.01139!3d15.82804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5d7d6dd04bad5%3A0x39d1a24c3b94c89d!2sKurnool%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Darshan Veg Restaurant Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
