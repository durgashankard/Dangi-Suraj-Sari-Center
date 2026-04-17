import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OfferBanner = () => (
  <section className="relative overflow-hidden py-16 bg-[#050505]">
    {/* Background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative border border-primary/30 bg-gradient-to-r from-black via-[#1a0a00] to-black p-10 md:p-16 text-center overflow-hidden"
      >
        {/* Corner decor */}
        <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/40"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/40"></div>

        <p className="text-xs uppercase tracking-[0.5em] text-primary mb-4 animate-pulse">🔥 Limited Time Offer</p>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-3 leading-tight">
          Wedding Sale <span className="text-primary italic">2026</span>
        </h2>
        <p className="text-gray-400 text-lg mb-2">Special discounts on Bridal Sarees, Lehengas & Sherwani Sets</p>
        <p className="text-gray-500 text-sm mb-8">Walk in to our showroom or WhatsApp us to know more about current offers.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/category/saree"
            className="bg-primary text-black font-semibold px-8 py-4 uppercase tracking-widest text-sm hover:bg-white transition-colors">
            Shop Bridal Sarees
          </Link>
          <a href="https://wa.me/917742534505?text=Hi! I want to know about the Wedding Sale 2026 offers."
            target="_blank" rel="noreferrer"
            className="bg-[#25D366] text-white font-semibold px-8 py-4 uppercase tracking-widest text-sm hover:bg-green-400 transition-colors">
            💬 Ask on WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default OfferBanner;
