import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black-900/95 backdrop-blur-md shadow-lg border-b border-gold/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-green-800 flex items-center justify-center border border-gold/40 group-hover:border-gold transition-colors">
              <Leaf className="w-5 h-5 text-gold" />
            </div>
            <div className="leading-none">
              <span className="block font-serif font-bold text-gold text-lg leading-tight">Darshan</span>
              <span className="block text-white/70 text-[10px] tracking-widest uppercase">Veg Restaurant</span>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-white/80 hover:text-gold transition-colors text-sm font-medium tracking-wide relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="btn-gold relative z-10 px-5 py-2 rounded-full text-black font-semibold text-sm"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-black-900/98 backdrop-blur-xl border-t border-gold/10`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-white/80 hover:text-gold transition-colors text-base font-medium text-left py-2 border-b border-white/5"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="btn-gold relative z-10 px-6 py-3 rounded-full text-black font-semibold mt-2"
          >
            Reserve Table
          </button>
        </div>
      </div>
    </nav>
  );
}
