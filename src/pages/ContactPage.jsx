import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const ContactPage = () => {
  const phone = '+91 77425 34505';
  const waNumber = '917742534505';

  return (
    <PageTransition>
      {/* Header */}
      <section className="relative pt-36 pb-16 bg-black overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full border border-primary/10"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-primary/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-primary text-xs uppercase tracking-[0.4em] mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-primary"></span> Reach Us <span className="w-8 h-px bg-primary"></span>
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
            Visit Our <span className="text-primary italic">Showroom</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-xl mx-auto">
            We'd love to welcome you. Stop by to experience the magic of our collection in person.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards + Map */}
      <section className="bg-[#060606] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Info Cards */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Address */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="bg-black border border-gray-900 hover:border-primary/30 transition-colors duration-400 p-6 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-white text-lg mb-2">Showroom Address</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Dangi Suraj Sari Center<br />
                      Near Bank of India, Pirawa Road<br />
                      Soyat Kalan, Madhya Pradesh
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-black border border-gray-900 hover:border-primary/30 transition-colors duration-400 p-6 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-white text-lg mb-2">Call Us</h4>
                    <a href={`tel:${waNumber}`} className="text-primary hover:text-white transition-colors text-lg tracking-wide font-medium">
                      {phone}
                    </a>
                    <p className="text-gray-600 text-xs mt-1">Tap to call directly</p>
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-black border border-gray-900 hover:border-green-500/30 transition-colors duration-400 p-6 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="text-green-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-white text-lg mb-2">WhatsApp Inquiry</h4>
                    <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noreferrer"
                      className="inline-block bg-[#25D366] text-white text-sm font-medium px-5 py-2.5 mt-1 hover:bg-green-400 transition-colors">
                      Chat with Us
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-black border border-gray-900 hover:border-primary/30 transition-colors duration-400 p-6 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Clock className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-white text-lg mb-3">Opening Hours</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between gap-8">
                        <span className="text-gray-400">Monday – Sunday</span>
                        <span className="text-primary font-medium">09:00 AM – 07:30 PM</span>
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-400 text-xs">Always Open · No Holiday</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Location Banner */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3 relative overflow-hidden border border-primary/20 bg-[#0a0a0a] min-h-[400px] lg:min-h-[500px] flex flex-col items-center justify-center p-10">
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-primary/30 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-primary/30 pointer-events-none" />
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full border border-primary/5 translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border border-primary/5 -translate-x-1/2 translate-y-1/2" />

              <div className="text-center max-w-sm relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-4">
                  Visit Our <span className="text-primary italic">Showroom</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Dangi Suraj Sari Center<br />
                  Near Bank of India, Pirawa Road<br />
                  <span className="text-primary">Soyat Kalan, Madhya Pradesh</span>
                </p>
                <div className="border border-primary/20 px-6 py-3 text-primary text-xs uppercase tracking-widest mb-6">
                  09:00 AM – 07:30 PM · Mon – Sun
                </div>
                <a
                  href={`tel:${waNumber}`}
                  className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-3.5 uppercase tracking-widest text-sm hover:bg-white transition-colors"
                >
                  📞 Call Now
                </a>
              </div>
            </motion.div>
          </div>

          {/* Full CTA Banner */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 border border-primary/20 p-8 md:p-12 bg-black flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-3xl font-bold text-white mb-2">Ready to Find Your Dream Saree?</h3>
              <p className="text-gray-500">Walk in or message us — we're here to help you find perfection.</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href={`tel:${waNumber}`} className="bg-primary text-black font-semibold px-8 py-3.5 uppercase tracking-widest text-sm hover:bg-white transition-colors">
                Call Now
              </a>
              <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noreferrer"
                className="bg-[#25D366] text-white font-semibold px-8 py-3.5 uppercase tracking-widest text-sm hover:bg-green-400 transition-colors">
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;
