import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#050505] relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Visit Our Showroom</h2>
          <div className="w-24 h-1 bg-primary mx-auto opacity-50 mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">Step into the world of luxury. We'd love to help you find your perfect saree.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-primary/10 rounded-none border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-serif text-white mb-2">Showroom Address</h4>
                <p className="text-gray-400 leading-relaxed max-w-sm">
                  Dangi Suraj Sari Center, <br />
                  Near Bank of India, Pirawa Road, <br />
                  Soyat Kalan, Madhya Pradesh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-primary/10 rounded-none border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-serif text-white mb-2">Call Us</h4>
                <a href="tel:+917742534505" className="text-gray-400 hover:text-primary transition-colors text-lg tracking-wide">
                  +91 77425 34505
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-primary/10 rounded-none border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                <MessageCircle className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-serif text-white mb-2">WhatsApp Inquiry</h4>
                <a 
                  href="https://wa.me/917742534505" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2"
                >
                  Chat with our stylist
                </a>
              </div>
            </div>
            
          </motion.div>

          {/* Location Card (no map) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-80 border border-primary/20 bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center justify-center p-8"
          >
            <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-primary/30 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-primary/30 pointer-events-none" />
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-white font-serif text-lg font-semibold mb-2">Soyat Kalan, Madhya Pradesh</p>
              <p className="text-gray-500 text-sm mb-1">Near Bank of India, Pirawa Road</p>
              <p className="text-primary text-xs uppercase tracking-widest mt-3">Mon – Sun · 09:00 AM – 07:30 PM</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs">Always Open</span>
              </div>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default Contact;
