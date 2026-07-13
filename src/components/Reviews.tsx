import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Ramesh Kumar',
    rating: 5,
    text: 'Amazing vegetarian food! Very hygienic and the ambience is excellent. Best restaurant in Kurnool.',
    time: '2 weeks ago',
  },
  {
    name: 'Priya Reddy',
    rating: 5,
    text: 'Best family restaurant in Kurnool. The Paneer Butter Masala is absolutely divine. Highly recommended!',
    time: '1 month ago',
  },
  {
    name: 'Srinivas Rao',
    rating: 5,
    text: 'Paneer dishes are delicious. Quick service and friendly staff. Will definitely come back!',
    time: '3 weeks ago',
  },
  {
    name: 'Kavitha Sharma',
    rating: 5,
    text: 'Affordable prices with premium taste. The Veg Biryani is outstanding. Loved every bite!',
    time: '2 months ago',
  },
  {
    name: 'Venkat Naidu',
    rating: 5,
    text: 'Hygienic kitchen, beautiful interiors, and wonderful food. A must-visit for vegetarians in Kurnool.',
    time: '1 week ago',
  },
  {
    name: 'Anjali Patel',
    rating: 5,
    text: 'The Kaju Paneer was to die for! Great ambience, AC restaurant, and very polite staff.',
    time: '3 months ago',
  },
  {
    name: 'Mohan Goud',
    rating: 4,
    text: 'Excellent food and great variety. The Dal Tadka and Veg Biryani combo was fantastic.',
    time: '5 weeks ago',
  },
  {
    name: 'Sunita Devi',
    rating: 5,
    text: 'Perfect place for family dining. Kids loved the Veg Pulao and Paneer Tikka Masala.',
    time: '2 weeks ago',
  },
  {
    name: 'Krishnamurti',
    rating: 5,
    text: 'Fresh ingredients, authentic recipes. This is our go-to restaurant for every special occasion.',
    time: '1 month ago',
  },
  {
    name: 'Lalitha Rani',
    rating: 5,
    text: 'Mushroom Tikka Masala was heavenly. The staff is so warm and welcoming. Love this place!',
    time: '2 months ago',
  },
];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="shrink-0 w-72 glass rounded-2xl p-5 border border-gold/15 mx-3 hover:border-gold/35 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center border border-gold/30 shrink-0">
          <span className="text-gold font-serif font-semibold text-base">{review.name[0]}</span>
        </div>
        <div>
          <p className="text-white font-medium text-sm">{review.name}</p>
          <p className="text-white/40 text-xs">{review.time}</p>
        </div>
        <div className="ml-auto flex items-center gap-1 bg-white/5 rounded-full px-2 py-1">
          <svg viewBox="0 0 24 24" className="w-3 h-3" fill="#4285F4"><path d="M21.35 11.1H12v2.8h5.35C16.84 16.28 14.66 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.55 0 2.96.6 4.02 1.57l2.1-2.1C16.54 4.03 14.41 3 12 3 7.03 3 3 7.03 3 12s4.03 9 9 9c4.97 0 9-3.58 9-8.98 0-.6-.05-1.19-.15-1.92z"/></svg>
          <span className="text-[10px] text-white/50">Google</span>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
        ))}
      </div>
      <p className="text-white/65 text-sm leading-relaxed">"{review.text}"</p>
    </div>
  );
}

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews" ref={ref} className="py-24 bg-black-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center reveal">
          <p className="text-gold text-xs tracking-widest uppercase font-medium mb-3">Testimonials</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
            What Our <span className="gold-shimmer">Guests Say</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-gold fill-gold" />)}
            </div>
            <span className="text-white font-serif text-2xl font-semibold">4.4</span>
            <span className="text-white/50 text-sm">based on 125+ reviews</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-container relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black-800 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black-800 to-transparent z-10 pointer-events-none" />

        <div className="flex marquee-track">
          {doubled.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
