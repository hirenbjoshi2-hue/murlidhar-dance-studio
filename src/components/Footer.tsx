import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="text-2xl font-display font-bold text-white flex items-center gap-2">
              <span className="text-primary">Murlidhar</span>
              <span>Dance Studio</span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Join one of the most energetic and exciting dance studios where rhythm, culture, and fitness come together.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/murlidhar_dance_studio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-500 hover:border-pink-500 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/murlidhar_garba_classes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-500 hover:border-pink-500 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Classes & Services', 'Kids Batches', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().split(' ')[0]}`} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Our Classes</h4>
            <ul className="space-y-4">
              {['Zumba & Aerobics', 'Dance Fitness', 'Bollywood', 'Contemporary', 'Hip-Hop', 'Garba (Folk)'].map((cls) => (
                <li key={cls}>
                  <a href="#services" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50" /> {cls}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-400 leading-relaxed">421/L, Above SBI Bank, Super Mall 1, Infocity, Gandhinagar</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+919913311569" className="text-gray-400 hover:text-white transition-colors">+91 99133 11569</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:murlidhargarbaclasses@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all">murlidhargarbaclasses@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Murlidhar Dance Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
