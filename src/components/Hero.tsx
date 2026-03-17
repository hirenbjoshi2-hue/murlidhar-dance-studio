import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-24 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05)_0%,transparent_100%)] z-0 pointer-events-none" />

      {/* Logo Container */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mt-4 mb-4">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/logo.jpg"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = document.getElementById('logo-fallback');
            if (fallback) fallback.style.display = 'flex';
          }}
          alt="Murlidhar Dance Studio Logo"
          className="w-full h-auto max-h-[60vh] md:max-h-[70vh] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          referrerPolicy="no-referrer"
        />
        
        {/* Fallback when image is missing */}
        <div id="logo-fallback" className="hidden flex-col items-center justify-center text-center p-8">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary flex items-center justify-center bg-black/50 shadow-[0_0_50px_rgba(236,72,153,0.3)] mb-8">
            <span className="text-primary font-display font-bold text-xl md:text-2xl">Murlidhar<br/>Studio</span>
          </div>
          <div className="bg-black/80 border border-primary/30 p-6 rounded-xl max-w-md backdrop-blur-sm">
            <p className="text-white font-medium mb-2">Image not found</p>
            <p className="text-gray-400 text-sm">To see your logo here, open the <strong>public</strong> folder in the left sidebar, upload your image, and rename it to exactly <strong>logo.jpg</strong></p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4 tracking-tight drop-shadow-xl">
            Learn Dance. Stay Fit. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white">
              Express Yourself.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light tracking-wide drop-shadow-md">
            Professional dance training for all age groups in Gandhinagar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-primary rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center gap-2">
                Join Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white border-2 border-white/20 rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
            >
              <span className="relative flex items-center gap-2">
                <Play size={20} className="text-primary" fill="currentColor" /> Book Free Trial Class
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-8 bg-gradient-to-b from-primary/50 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
