import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

const scheduleData = [
  {
    day: "Classical (Kathak)",
    classes: [
      { time: "05:00 PM - 06:00 PM", name: "Tuesday - Thursday - Saturday", type: "All Ages" },
      { time: "06:00 PM - 07:00 PM", name: "Tuesday - Thursday - Saturday", type: "All Ages" },
      { time: "07:00 PM - 08:00 PM", name: "Tuesday - Thursday - Saturday", type: "All Ages" }
    ]
  },
  {
    day: "Zumba • Yoga • Fitness",
    classes: [
      { time: "06:00 AM - 07:00 AM", name: "Morning (Mon-Sat)", type: "Fitness" },
      { time: "07:00 AM - 08:00 AM", name: "Morning (Mon-Sat)", type: "Fitness" },
      { time: "08:00 AM - 09:00 AM", name: "Morning (Mon-Sat)", type: "Fitness" },
      { time: "05:00 PM - 06:00 PM", name: "Evening (Mon-Wed-Fri)", type: "Fitness" },
      { time: "06:00 PM - 07:00 PM", name: "Evening (Mon-Wed-Fri)", type: "Fitness" },
      { time: "07:00 PM - 08:00 PM", name: "Evening (Mon-Wed-Fri)", type: "Fitness" }
    ]
  },
  {
    day: "Bollywood • Hip-Hop • Contemporary",
    classes: [
      { time: "04:00 PM - 05:00 PM", name: "Monday - Wednesday - Friday", type: "All Ages" },
      { time: "07:00 PM - 08:00 PM", name: "Monday - Wednesday - Friday", type: "All Ages" },
      { time: "08:00 PM - 09:00 PM", name: "Monday - Wednesday - Friday", type: "All Ages" },
      { time: "09:00 PM - 10:00 PM", name: "Monday - Wednesday - Friday", type: "All Ages" }
    ]
  }
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-dark-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Class Timings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Weekly <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Schedule</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Find the perfect time to dance. We offer flexible batches for all age groups and skill levels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {scheduleData.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-dark border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary/10 border-b border-primary/20 p-6 flex items-center gap-3">
                <Calendar className="text-primary w-6 h-6" />
                <h3 className="text-xl font-display font-bold text-white">{schedule.day}</h3>
              </div>
              <div className="p-6 space-y-6">
                {schedule.classes.map((cls, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-medium">{cls.name}</h4>
                      <span className="text-xs font-semibold px-2 py-1 rounded bg-white/5 text-accent border border-white/10">
                        {cls.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{cls.time}</span>
                    </div>
                    {idx < schedule.classes.length - 1 && <div className="h-px bg-white/5 mt-4" />}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">* Schedule is subject to change. Please contact us to confirm batch availability.</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-primary hover:bg-primary-dark rounded-full transition-all shadow-[0_0_15px_rgba(126,34,206,0.5)]"
          >
            Book Free Trial Class
          </a>
        </div>
      </div>
    </section>
  );
}
