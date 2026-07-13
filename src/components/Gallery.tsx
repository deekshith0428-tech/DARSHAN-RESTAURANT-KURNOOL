import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';

const photos = [
  {
    src: '/images/gallery/Screenshot_2026-07-09_090354.png',
    alt: 'Dining Area - Elegant booth seating',
    span: 'col-span-2',
  },
  {
    src: '/images/gallery/Screenshot_2026-07-09_090429.png',
    alt: 'Reception - Cash counter with decor',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/Screenshot_2026-07-09_090504.png',
    alt: 'Restaurant Ambience',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/Screenshot_2026-07-09_090533.png',
    alt: 'Dining Section with Entertainment',
    span: 'col-span-2',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && setLightbox(null);
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section id="gallery" ref={ref} className="py-24 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <p className="text-gold text-xs tracking-widest uppercase font-medium mb-3">Gallery</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
            Experience the <span className="gold-shimmer">Ambience</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="text-white/50 text-sm max-w-xl mx-auto">
            Step inside Darshan Veg Restaurant — where elegant interiors meet warm hospitality.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-3 gap-3 reveal">
          {photos.map((p) => (
            <div
              key={p.src}
              className={`${p.span} relative group overflow-hidden rounded-2xl cursor-pointer`}
              style={{ height: p.span === 'col-span-2' ? '280px' : '280px' }}
              onClick={() => setLightbox(p.src)}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black-900/0 group-hover:bg-black-900/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gold/20 backdrop-blur-sm rounded-full p-3 border border-gold/40">
                  <ZoomIn className="w-6 h-6 text-gold" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs">{p.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black-900/95 backdrop-blur-md p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full glass border border-gold/30 flex items-center justify-center text-white hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
