import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Zumba Student",
    text: "Joining Murlidhar Dance Studio was the best decision! The energy in the Zumba classes is unmatched. I've lost weight and gained so much confidence.",
    rating: 5
  },
  {
    name: "Rahul Patel",
    role: "Parent of Kids Batch",
    text: "My daughter absolutely loves her dance classes here. The instructors are so patient and creative. Her coordination and rhythm have improved significantly.",
    rating: 5
  },
  {
    name: "Sneha Desai",
    role: "Garba Enthusiast",
    text: "The Garba training here is authentic and incredibly fun. I was ready for Navratri in just a few weeks. Highly recommend their folk dance sessions!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Student Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Students Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-dark-card border border-white/5 rounded-2xl p-8 relative group hover:border-primary/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-primary/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-display font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
