import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const OpeningHours = () => {
  return (
    <section className="py-20 bg-black border-t border-gray-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-primary/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full border border-primary/5"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-xs uppercase tracking-[0.5em] mb-3 flex items-center justify-center gap-3">
            <span className="w-10 h-px bg-primary/60" />
            Store Timings
            <span className="w-10 h-px bg-primary/60" />
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Opening <span className="text-primary italic">Hours</span>
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative border border-primary/20 bg-[#0a0a0a] p-8 md:p-12 overflow-hidden"
        >
          {/* Gold corner accents */}
          <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-primary/40 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-primary/40 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Clock icon + day */}
            <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Every Day</p>
              <h3 className="text-3xl font-serif font-bold text-white">
                Monday – Sunday
              </h3>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />
            <div className="block md:hidden w-24 h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />

            {/* Timing */}
            <div className="text-center md:text-right">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2 tracking-wide"
              >
                09:00 AM – 07:30 PM
              </motion.div>
              <div className="flex items-center justify-center md:justify-end gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs uppercase tracking-widest font-medium">
                  Always Open · No Holiday
                </span>
              </div>
            </div>
          </div>

          {/* Bottom tag */}
          <div className="mt-8 pt-6 border-t border-gray-900 text-center">
            <p className="text-gray-600 text-sm">
              📍 Dangi Suraj Sari Center, Near Bank of India, Pirawa Road, Soyat Kalan
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpeningHours;
