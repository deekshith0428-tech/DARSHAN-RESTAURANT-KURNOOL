import { Star, Phone, ChevronDown, Leaf, Users } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url('/images/hero/ChatGPT_Image_Jul_9,_2026,_09_46_54_AM.png')`,
        }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-900/70 via-black-900/55 to-black-900/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black-900/60 via-transparent to-black-900/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold/30 mb-6 animate-float">
          <Leaf className="w-4 h-4 text-gold" />
          <span className="text-gold text-xs font-medium tracking-widest uppercase">Veg Restaurant</span>
        </div>

        {/* Main heading */}
        <h1 className="font-serif font-700 text-white mb-4 leading-none">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">DARSHAN</span>
          <span className="block text-3xl sm:text-4xl md:text-5xl gold-shimmer font-semibold mt-1">VEG RESTAURANT</span>
        </h1>

        <div className="gold-divider w-32 mx-auto my-6" />

        <p className="text-white/75 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10">
          Authentic South Indian &amp; North Indian Vegetarian Cuisine<br className="hidden sm:block" />
          <span className="text-gold/80">Kurnool's Most Loved Family Restaurant</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <button
            onClick={scrollToMenu}
            className="btn-gold relative z-10 px-8 py-4 rounded-full text-black font-semibold text-base min-w-[160px] shadow-lg"
          >
            View Menu
          </button>
          <a
            href="tel:07416256608"
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-gold/60 text-gold font-semibold text-base min-w-[160px] justify-center hover:bg-gold/10 transition-all duration-300 hover:border-gold"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Floating cards */}
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="glass-dark rounded-2xl px-5 py-3 flex items-center gap-3 border border-gold/20">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-semibold">4.4 Rating</p>
              <p className="text-white/50 text-xs">125+ Google Reviews</p>
            </div>
          </div>

          <div className="glass-dark rounded-2xl px-5 py-3 flex items-center gap-3 border border-gold/20">
            <div className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-gold" />
            </div>
            <p className="text-white text-sm font-semibold">Veg Restaurant</p>
          </div>

          <div className="glass-dark rounded-2xl px-5 py-3 flex items-center gap-3 border border-gold/20">
            <div className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center">
              <Users className="w-4 h-4 text-gold" />
            </div>
            <p className="text-white text-sm font-semibold">Family Restaurant</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-gold/60" />
      </div>
    </section>
  );
}
