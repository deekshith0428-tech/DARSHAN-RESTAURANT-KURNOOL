import { useEffect, useRef } from 'react';
import { Leaf, Heart, ShieldCheck, Flame } from 'lucide-react';

const stats = [
  { value: '125+', label: 'Google Reviews' },
  { value: '4.4', label: 'Star Rating' },
  { value: '100%', label: 'Vegetarian' },
  { value: 'Since', label: 'Opening Day' },
];

const features = [
  { icon: Leaf, text: 'Pure Vegetarian kitchen with no cross-contamination' },
  { icon: Heart, text: 'Family-friendly ambience with premium seating' },
  { icon: ShieldCheck, text: 'Hygienic preparation using fresh ingredients' },
  { icon: Flame, text: 'Authentic recipes from South & North India' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="text-gold text-xs tracking-widest uppercase font-medium mb-3">Our Story</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
            Where Every Meal is a <span className="gold-shimmer">Celebration</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <div className="space-y-6 reveal">
            <p className="text-white/70 text-lg leading-relaxed">
              Darshan Veg Restaurant was born from a passion for authentic Indian vegetarian cooking.
              Nestled in the heart of Kurnool, we have crafted a dining experience that blends
              the rich culinary traditions of South and North India under one elegant roof.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Every dish is prepared with handpicked ingredients, time-honoured recipes, and a
              dedication to purity. We take pride in serving food that nourishes the body and
              delights the soul — making each visit a truly memorable experience.
            </p>

            <div className="space-y-3 pt-2">
              {features.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-xl p-3 text-center border border-gold/10">
                  <p className="text-gold font-serif font-semibold text-xl">{s.value}</p>
                  <p className="text-white/50 text-xs mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image grid */}
          <div className="grid grid-cols-2 gap-3 reveal">
            <div className="col-span-2 rounded-2xl overflow-hidden h-56 sm:h-64">
              <img
                src="/images/gallery/Screenshot_2026-07-09_090354.png"
                alt="Darshan Veg Restaurant Dining Area"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-44">
              <img
                src="/images/gallery/Screenshot_2026-07-09_090429.png"
                alt="Restaurant Reception"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-44">
              <img
                src="/images/gallery/Screenshot_2026-07-09_090504.png"
                alt="Restaurant Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
