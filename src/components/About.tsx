import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">About Our Studio</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Spreading the Joy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Dance & Fitness</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Murlidhar Dance Studio is a vibrant dance academy dedicated to spreading the joy of dance, fitness, and culture. Our experienced instructors train students in both traditional and modern dance forms while creating a fun and motivating learning environment.
            </p>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Whether you want to stay fit, perform on stage, or learn traditional dance, our studio offers the perfect place to begin your dance journey.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 text-left max-w-3xl mx-auto">
              {[
                "Experienced Instructors",
                "All Age Groups",
                "Traditional & Modern Styles",
                "Stage Performance Training",
                "Fitness Focused",
                "Friendly Environment"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-200 font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-dark-card border border-primary/50 hover:bg-primary/20 rounded-full transition-all"
            >
              Explore Our Classes
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
