import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const galleryImages = [
  {
    src: "/navratri-garba.png",
    alt: "Navratri Garba",
    category: "Garba Event"
  },
  {
    src: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&q=80&w=800",
    alt: "Student Practice",
    category: "Practice"
  },
  {
    src: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=800",
    alt: "Studio Moments",
    category: "Studio"
  },
  {
    src: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=800",
    alt: "Fitness Session",
    category: "Fitness"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-dark-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
            >
              Our Gallery
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            >
              Moments from <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Our Studio</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-6 md:mt-0"
          >
            <Instagram className="w-5 h-5 group-hover:text-pink-500 transition-colors" />
            <span className="font-medium">Follow on Instagram</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent font-medium text-sm mb-1">{image.category}</span>
                <h3 className="text-white font-display font-bold text-xl">{image.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white border border-primary/50 hover:bg-primary/20 rounded-full transition-all"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
