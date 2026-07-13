import { useEffect, useRef } from 'react';
import { Leaf, ShieldCheck, Users, Wind, Zap, BadgeDollarSign } from 'lucide-react';

const reasons = [
  {
    icon: Leaf,
    title: 'Veg Restaurant',
    desc: 'Strictly vegetarian kitchen. No eggs, no meat — ever. A trusted veg restaurant.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Kitchen',
    desc: 'Our kitchen meets the highest hygiene standards with daily sanitization protocols.',
  },
  {
    icon: Users,
    title: 'Family Dining',
    desc: 'Spacious, comfortable seating designed for families, couples, and group gatherings.',
  },
  {
    icon: Wind,
    title: 'AC Restaurant',
    desc: 'Fully air-conditioned ambience for a cool, comfortable dining experience year-round.',
  },
  {
    icon: Zap,
    title: 'Fast Service',
    desc: 'Quick preparation and attentive service — your food arrives fresh and on time.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Affordable Pricing',
    desc: 'Premium taste and quality at prices that make every visit worth it for the whole family.',
  },
];

export default function WhyChooseUs() {
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
    <section ref={ref} className="py-24 bg-green-900/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-black-900/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="text-gold text-xs tracking-widest uppercase font-medium mb-3">Why Us</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
            The <span className="gold-shimmer">Darshan</span> Difference
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="reveal card-hover glass rounded-2xl p-6 border border-gold/10 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-green-800 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300 border border-gold/20">
                <r.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-white font-serif font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
