import { motion } from 'motion/react';
import { Smile, Music, Star, ShieldCheck } from 'lucide-react';

export default function KidsBatches() {
  return (
    <section id="kids" className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-dark-card to-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Content Side */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-semibold text-sm tracking-wider mb-6 border border-accent/30">
                  SPECIAL PROGRAM
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Kids Dance <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Batches</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Fun and engaging dance classes designed especially for children to develop rhythm, creativity, and confidence.
                </p>

                <div className="bg-dark/50 p-6 rounded-2xl border border-white/5 mb-10">
                  <h3 className="text-xl font-display font-bold text-white mb-4">Batch Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-medium w-16">Days:</span>
                      <span className="text-gray-300">Tuesday • Thursday • Saturday</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-medium w-16">Time:</span>
                      <span className="text-gray-300">07:00 PM – 08:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {[
                    { icon: <Smile className="w-6 h-6 text-accent" />, text: "Fun & Playful Environment" },
                    { icon: <Music className="w-6 h-6 text-primary" />, text: "Rhythm & Coordination" },
                    { icon: <Star className="w-6 h-6 text-highlight" />, text: "Builds Confidence" },
                    { icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />, text: "Safe & Supportive" }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-dark/50 p-4 rounded-xl border border-white/5">
                      <div className="bg-dark-card p-2 rounded-lg border border-white/10">
                        {feature.icon}
                      </div>
                      <span className="text-gray-200 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 font-bold text-dark bg-accent hover:bg-accent-dark rounded-full transition-all shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:scale-105"
                >
                  Enroll Your Child Today
                </a>
              </motion.div>
            </div>

            {/* Image Side */}
            <div className="relative h-64 lg:h-auto hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1000"
                alt="Kids Dance Class"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-card via-transparent to-transparent" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
