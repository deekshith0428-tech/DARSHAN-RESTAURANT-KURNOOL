import { useState, useEffect, useRef } from 'react';
import { Leaf } from 'lucide-react';

type MenuItem = { name: string; price: number; img: string };
type Category = { id: string; label: string; items: MenuItem[] };

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`;

const categories: Category[] = [
  {
    id: 'soups',
    label: 'Veg Soups',
    items: [
      { name: 'Tomato Soup', price: 120, img: pexels(12338625) },
      { name: 'Veg Hot Soup', price: 120, img: 'public/images/gallery/Screenshot 2026-07-14 001231.png' },
      { name: 'Veg Manchow Soup', price: 130, img: pexels(3296683) },
      { name: 'Sweet Corn Soup', price: 130, img: pexels(6693174) },
    ],
  },
  {
    id: 'veg-starters',
    label: 'Veg Starters',
    items: [
      { name: 'Gobi 65', price: 160, img: pexels(9148224) },
      { name: 'Chilli Gobi', price: 160, img: pexels(28674543) },
      { name: 'Veg Manchuria', price: 160, img: pexels(28674530) },
      { name: 'Veg Hara Bhara Kabab', price: 170, img: pexels(6790424) },
      { name: 'Veg Bullet', price: 160, img: pexels(5486690) },
      { name: 'Crispy Veg', price: 160, img: pexels(19105514) },
    ],
  },
  {
    id: 'mushroom-starters',
    label: 'Mushroom Starters',
    items: [
      { name: 'Mushroom Pepper Dry', price: 180, img: pexels(5848435) },
      { name: 'Mushroom Chilli', price: 180, img: pexels(6629122) },
      { name: 'Mushroom 65', price: 180, img: pexels(792024) },
      { name: 'Mushroom Manchuria', price: 180, img: pexels(15797951) },
    ],
  },
  {
    id: 'baby-corn',
    label: 'Baby Corn',
    items: [
      { name: 'Baby Corn 65', price: 160, img: pexels(105588) },
      { name: 'Baby Corn Chilli', price: 160, img: pexels(3026805) },
      { name: 'Baby Corn Manchuria', price: 160, img: pexels(15667778) },
      { name: 'Crispy Corn', price: 150, img: pexels(18379774) },
    ],
  },
  {
    id: 'paneer-starters',
    label: 'Paneer Starters',
    items: [
      { name: 'Paneer Chilli', price: 200, img: pexels(29631468) },
      { name: 'Paneer 65', price: 200, img: pexels(31783383) },
      { name: 'Paneer Majestic', price: 200, img: pexels(13788766) },
      { name: 'Paneer Manchuria', price: 200, img: pexels(17800213) },
      { name: 'Paneer Golden Fry', price: 200, img: pexels(604660) },
    ],
  },
  {
    id: 'egg-starters',
    label: 'Egg Starters',
    items: [
      { name: 'Egg 555', price: 130, img: pexels(27359363) },
      { name: 'Egg Schezwan', price: 140, img: pexels(8395783) },
      { name: 'Egg Pepper Fry', price: 130, img: pexels(5127316) },
      { name: 'Egg Golden Fry', price: 130, img: pexels(5589943) },
      { name: 'Egg Majestic', price: 150, img: pexels(17050759) },
    ],
  },
  {
    id: 'fried-rice',
    label: 'Fried Rice',
    items: [
      { name: 'Veg Fried Rice', price: 180, img: pexels(6937457) },
      { name: 'Schezwan Fried Rice', price: 200, img: pexels(7758253) },
      { name: 'Mushroom Fried Rice', price: 200, img: pexels(21482826) },
      { name: 'Paneer Fried Rice', price: 220, img: pexels(10695887) },
    ],
  },
  {
    id: 'veg-curries',
    label: 'Veg Curries',
    items: [
      { name: 'Mix Veg Curry', price: 200, img: pexels(2474661) },
      { name: 'Veg Shahi Kurma', price: 200, img: pexels(1640777) },
      { name: 'Veg Kolhapuri', price: 220, img: pexels(1279330) },
      { name: 'Veg Malai Kofta', price: 250, img: 'public/images/gallery/Screenshot 2026-07-14 001516.png' },
      { name: 'Palak Paneer', price: 240, img: pexels(5410400) },
      { name: 'Kadai Paneer', price: 240, img: "/images/gallery/Screenshot 2026-07-14 103026.png" },
      { name: 'Paneer Butter Masala', price: 250, img: 'public/images/gallery/Screenshot 2026-07-14 102849.png' },
      { name: 'Paneer Tikka Masala', price: 240, img: 'public/images/gallery/Screenshot 2026-07-14 102716.png' },
      { name: 'Paneer Shahi Kurma', price: 250, img: 'public/images/gallery/Screenshot 2026-07-14 103201.png' },
      { name: 'Paneer Burji Masala', price: 250, img: 'public/images/gallery/Screenshot 2026-07-14 103325.png' },
      { name: 'Veg Mushroom Masala', price: 220, img: 'public/images/gallery/Screenshot 2026-07-14 103422.png' },
      { name: 'Kadai Mushroom', price: 240, img: 'public/images/gallery/Screenshot 2026-07-14 103658.png' },
      { name: 'Kaju Kurma', price: 240, img: 'public/images/gallery/Screenshot 2026-07-14 103825.png' },
      { name: 'Kaju Curry', price: 240, img: 'public/images/gallery/Screenshot 2026-07-14 104002.png' },
      { name: 'Kaju Paneer', price: 280, img: 'public/images/gallery/Screenshot 2026-07-14 104106.png' },
      { name: 'Veg Raja Rani', price: 240, img: 'public/images/gallery/Screenshot 2026-07-14 104208.png' },
    ],
  },
  {
    id: 'breads',
    label: 'Tandoor & Breads',
    items: [
      { name: 'Butter Naan', price: 50, img: pexels(20446413) },
      { name: 'Garlic Naan', price: 60, img: pexels(10337726) },
      { name: 'Kulcha', price: 50, img: pexels(5589941) },
      { name: 'Roti / Chapati', price: 20, img: pexels(5434693) },
      { name: 'Butter Roti', price: 25, img: pexels(9407171) },
      { name: 'Paneer Tikka', price: 260, img: 'public/images/gallery/Screenshot 2026-07-14 101659.png' },
      { name: 'Mushroom Tikka', price: 240, img: pexels(8751408) },
      { name: 'Aloo Tikka', price: 200, img: 'public/images/gallery/Screenshot 2026-07-14 101911.png' },
    ],
  },
  {
    id: 'egg-curries',
    label: 'Egg Curries',
    items: [
      { name: 'Egg Burji', price: 120, img: pexels(25906336) },
      { name: 'Egg Curry Masala', price: 200, img: pexels(34217294) },
      { name: 'Egg Kadai', price: 220, img: pexels(35071817) },
      { name: 'Egg Kheema Masala', price: 240, img: pexels(8055166) },
      { name: 'Egg Kolhapuri', price: 240, img: pexels(8625813) },
      { name: 'Egg Kaju Curry', price: 250, img: pexels(10810653) },
    ],
  },
  {
    id: 'dal',
    label: 'Dal Varieties',
    items: [
      { name: 'Dal Fry', price: 150, img: pexels(7161739) },
      { name: 'Dal Palak', price: 160, img: pexels(13513758) },
      { name: 'Dal Tadka / Methi', price: 180, img: pexels(38108860) },
      { name: 'Dal Kolhapuri', price: 200, img: pexels(33430562) },
    ],
  },
  {
    id: 'biryani',
    label: 'Biryani & Pulao',
    items: [
      { name: 'Veg Pulao', price: 200, img: pexels(35041643) },
      { name: 'Veg Biryani', price: 210, img: 'public/images/gallery/Screenshot 2026-07-14 102235.png' },
      { name: 'Paneer Biryani', price: 250, img: 'public/images/gallery/Screenshot 2026-07-14 102402.png' },
      { name: 'Mushroom Biryani', price: 240, img:'public/images/gallery/Screenshot 2026-07-14 102519.png' },
      { name: 'Veg Hyderabad Biryani', price: 250, img: pexels(34159111) },
    ],
  },
];

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="glass rounded-xl overflow-hidden border border-gold/10 card-hover group">
      <div className="relative h-44 overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.pexels.com/photos/2871759/pexels-photo-2871759.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent" />
        <div className="absolute top-2 left-2 flex items-center gap-1 bg-green-800/90 backdrop-blur-sm rounded-full px-2 py-1 border border-green-600/50">
          <div className="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          </div>
          <span className="text-green-400 text-[9px] font-semibold uppercase tracking-wide">Veg</span>
        </div>
      </div>
      <div className="p-4 flex items-center justify-between">
        <p className="text-white font-medium text-sm leading-tight flex-1 pr-2">{item.name}</p>
        <p className="text-gold font-serif font-semibold text-base shrink-0">₹{item.price}</p>
      </div>
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState('soups');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <section id="menu" ref={ref} className="py-24 bg-black-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <p className="text-gold text-xs tracking-widest uppercase font-medium mb-3 flex items-center justify-center gap-2">
            <Leaf className="w-3 h-3" /> Our Menu
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
            Crafted with <span className="gold-shimmer">Passion</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 reveal">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === c.id
                  ? 'bg-gold text-black shadow-lg shadow-gold/20'
                  : 'glass border border-gold/20 text-white/70 hover:text-gold hover:border-gold/40'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {current.items.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>

        <p className="text-center text-white/40 text-sm mt-8">
          * All prices are inclusive of taxes. Portions may vary.
        </p>
      </div>
    </section>
  );
}
