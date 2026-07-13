import { Leaf, Heart, Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = ['Home', 'About', 'Menu', 'Gallery', 'Reviews', 'Contact'];

export default function Footer() {
  const scroll = (id: string) => {
    document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black-900 border-t border-gold/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center border border-gold/40">
                <Leaf className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="block font-serif font-bold text-gold text-xl">Darshan</span>
                <span className="block text-white/50 text-xs tracking-widest uppercase">Veg Restaurant</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-5">
              Authentic South Indian & North Indian Vegetarian Cuisine in the heart of Kurnool.
              Pure vegetarian, family-friendly, and crafted with love.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full glass border border-gold/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-gold font-serif font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scroll(link)}
                    className="text-white/50 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-serif font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Kurnool, Andhra Pradesh, India – 518 001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:07416256608" className="text-white/50 hover:text-gold transition-colors text-sm">
                  07416256608
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@darshanveg.com" className="text-white/50 hover:text-gold transition-colors text-sm">
                  info@darshanveg.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/50 text-sm">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>12:00 PM – 10:00 PM<br />Open Every Day</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/35 text-xs">
          <p>© {new Date().getFullYear()} Darshan Veg Restaurant, Kurnool. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Developed with <Heart className="w-3 h-3 text-gold fill-gold" /> for Darshan Veg Restaurant
          </p>
        </div>
      </div>
    </footer>
  );
}
