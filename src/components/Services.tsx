import { motion } from 'motion/react';

const services = [
  {
    title: "Zumba – Aerobics",
    description: "A high-energy fitness program that combines dance movements with aerobic exercises. Zumba helps burn calories, improve stamina, and keeps the body active while enjoying energetic music.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    color: "from-highlight/20 to-transparent",
    border: "border-highlight/30"
  },
  {
    title: "Yoga",
    description: "Yoga classes focus on flexibility, breathing techniques, balance, and mental relaxation. It improves physical health while reducing stress.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    color: "from-emerald-400/20 to-transparent",
    border: "border-emerald-400/30"
  },
  {
    title: "Dance Fitness",
    description: "A fun way to stay healthy through rhythm and movement. Dance fitness improves coordination, stamina, and overall body strength while making workouts enjoyable.",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=800",
    color: "from-pink-500/20 to-transparent",
    border: "border-pink-500/30"
  },
  {
    title: "Bollywood",
    description: "Learn energetic Bollywood dance inspired by Indian cinema. These classes focus on expressions, rhythm, and exciting choreography performed on popular Bollywood songs.",
    image: "/bollywood.jpg",
    color: "from-accent/20 to-transparent",
    border: "border-accent/30"
  },
  {
    title: "Contemporary",
    description: "A graceful and expressive dance style that blends modern movement with storytelling and emotional expression.",
    image: "/contemporary.jpg",
    color: "from-blue-400/20 to-transparent",
    border: "border-blue-400/30"
  },
  {
    title: "Hip-Hop",
    description: "A powerful street dance style full of attitude, rhythm, and freestyle movement. Hip-hop classes focus on energy, creativity, and modern choreography.",
    image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80&w=800",
    color: "from-yellow-500/20 to-transparent",
    border: "border-yellow-500/30"
  },
  {
    title: "Semi-Classical",
    description: "A beautiful fusion of classical dance techniques and modern choreography that keeps the elegance of traditional dance while adding creative expression.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
    color: "from-purple-400/20 to-transparent",
    border: "border-purple-400/30"
  },
  {
    title: "Classical (Kathak)",
    description: "Jaipur Gharana based traditional training. Strong foundation training including tatkaar, chakkars, hastak, and abhinaya. Guidance for stage performances and exams.",
    image: "/kathak.jpg",
    color: "from-orange-400/20 to-transparent",
    border: "border-orange-400/30"
  },
  {
    title: "Garba (Folk)",
    description: "Traditional Gujarati folk dance. Styles taught include: Dodhiya, Teen Taali, Dandiya-Raas, Langdi, Surti Free Style, and Dakla.",
    image: "/garba.jpg.webp",
    color: "from-red-500/20 to-transparent",
    border: "border-red-500/30"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-dark-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Our Dance Styles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Classes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            From high-energy fitness routines to graceful classical forms, we have a class for every passion and skill level.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative bg-dark border ${service.border} rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />
              
              <div className="relative h-48 w-full overflow-hidden shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-90" />
              </div>

              <div className="p-6 flex-1 relative z-10 flex flex-col">
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
