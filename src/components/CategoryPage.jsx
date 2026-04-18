import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

// Reusable category page shell
const CategoryPage = ({ title, subtitle, bgImage, products, filters }) => {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? products : products.filter(p => p.type === active);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgImage} alt="Category background" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        </div>
        {/* Decorative rings */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-primary/10 pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-primary/10 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-primary text-xs uppercase tracking-[0.4em] mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-primary"></span> Dangi Suraj <span className="w-8 h-px bg-primary"></span>
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-3">
            {title.split(' ').map((w, i, arr) =>
              i === arr.length - 1
                ? <span key={i} className="text-primary italic"> {w}</span>
                : <span key={i}>{w} </span>
            )}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg">{subtitle}</motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-6 bg-black sticky top-16 z-40 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3 justify-center">
          <button onClick={() => setActive('all')}
            className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${active === 'all' ? 'bg-primary text-black border-primary' : 'text-gray-400 border-gray-800 hover:border-primary/40 hover:text-primary'}`}>
            All
          </button>
          {filters.map(f => (
            <button key={f.id} onClick={() => setActive(f.id)}
              className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${active === f.id ? 'bg-primary text-black border-primary' : 'text-gray-400 border-gray-800 hover:border-primary/40 hover:text-primary'}`}>
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-[#060606] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map(p => (
                <motion.div layout key={p.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-black/60 backdrop-blur border border-gray-900 hover:border-primary/40 transition-colors duration-500 overflow-hidden rounded-sm">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img loading="lazy" src={p.image} alt={`Dangi Suraj Saree Center - ${p.name}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 text-[10px] text-primary uppercase tracking-widest border border-primary/20">
                      {p.type}
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                      <Link to={`/product/${p.slug}`}
                        className="flex items-center gap-2 bg-primary text-black px-5 py-2.5 text-sm font-semibold hover:bg-white transition-colors">
                        <ShoppingBag size={15} /> View Details
                      </Link>
                      <a href={`https://wa.me/917742534505?text=Hi, I'm interested in ${p.name}. Can you share more details?`}
                        target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 text-sm font-medium hover:bg-green-400 transition-colors">
                        💬 WhatsApp Inquiry
                      </a>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-gray-200 group-hover:text-primary transition-colors duration-300 mb-1 truncate">{p.name}</h3>
                    <p className="text-gray-500 text-xs mt-0.5 line-clamp-2 leading-relaxed">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-600">
              <ShoppingBag size={48} className="mx-auto mb-4 opacity-30" />
              <p>No items found in this filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
