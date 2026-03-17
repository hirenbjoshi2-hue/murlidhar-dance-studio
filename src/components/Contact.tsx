import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Ready to start your dance journey? Reach out to us for class inquiries, trial bookings, or any questions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-dark-card border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-400 leading-relaxed">
                    421/L, Above SBI Bank,<br />
                    Super Mall 1, Infocity,<br />
                    Gandhinagar, Gujarat
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">Email Us</h3>
                  <a href="mailto:murlidhargarbaclasses@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
                    murlidhargarbaclasses@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">Call or WhatsApp</h3>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <a href="tel:+919913311569" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dark border border-white/10 hover:bg-white/5 rounded-full text-white font-medium transition-colors">
                      <Phone className="w-4 h-4" /> Call Now
                    </a>
                    <a href="https://wa.me/919913311569" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 rounded-full text-[#25D366] font-medium transition-colors">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">Instagram</h3>
                  <div className="flex flex-col gap-2 mt-2">
                    <a href="https://instagram.com/murlidhar_dance_studio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                      @murlidhar_dance_studio
                    </a>
                    <a href="https://instagram.com/murlidhar_garba_classes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                      @murlidhar_garba_classes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="bg-dark-card border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            
            <h3 className="text-2xl font-display font-bold text-white mb-6 relative z-10">Book a Free Trial Class</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const phone = formData.get('phone');
              const email = formData.get('email');
              const interest = formData.get('interest');
              const message = formData.get('message');

              const text = `Hi, I would like to book a free trial class.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Interested In:* ${interest}%0A*Message:* ${message}`;
              window.open(`https://wa.me/919913311569?text=${text}`, '_blank');
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-400">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="+91 99133 11569"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium text-gray-400">Interested In</label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                >
                  <option value="">Select a class</option>
                  <option value="Zumba - Aerobics">Zumba - Aerobics</option>
                  <option value="Bollywood">Bollywood</option>
                  <option value="Contemporary">Contemporary</option>
                  <option value="Hip-Hop">Hip-Hop</option>
                  <option value="Classical (Kathak)">Classical (Kathak)</option>
                  <option value="Garba (Folk)">Garba (Folk)</option>
                  <option value="Kids Dance Batch">Kids Dance Batch</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell us about your dance experience..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_15px_rgba(126,34,206,0.5)]"
              >
                Submit Request <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 rounded-3xl overflow-hidden border border-white/10 h-[400px] relative"
        >
          {/* Placeholder for iframe to avoid actual loading in preview if not needed, but we'll use a real embed if possible. Using a generic map embed for Gandhinagar */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.400135359735!2d72.6264!3d23.1913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0000000000%3A0x0!2sInfocity%2C%20Gandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
