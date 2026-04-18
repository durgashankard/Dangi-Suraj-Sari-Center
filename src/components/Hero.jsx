import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero.webp"
          alt="Bridal saree collection in Soyat Kalan"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
      </div>

      {/* Decorative floating orbs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-10 w-72 h-72 rounded-full border border-primary/10 z-0"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute top-32 right-16 w-52 h-52 rounded-full border border-primary/10 z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-primary text-sm md:text-base uppercase tracking-[0.4em] font-medium mb-6 flex items-center gap-3"
          >
            <span className="w-12 h-px bg-primary inline-block"></span>
            Dangi Suraj Sari Center
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
            Best Saree Shop in
            <span className="block text-primary italic">Soyat Kalan</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gray-300 text-base md:text-lg mb-10 font-light max-w-xl"
          >
            Visit us near Bank of India, Pirawa Road for exclusive bridal sarees, lehengas, and premium fabrics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/collection"
              className="group relative bg-primary text-black font-semibold py-4 px-10 uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] text-center"
            >
              <span className="relative z-10">Explore Collection</span>
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
            <a
              href="https://wa.me/917742534505"
              target="_blank"
              rel="noreferrer"
              className="border border-primary/60 text-primary hover:bg-primary/10 font-semibold py-4 px-10 uppercase tracking-widest transition-all duration-300 text-center"
            >
              WhatsApp Now
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
