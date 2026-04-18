import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Scissors } from 'lucide-react';
import { products } from '../data/products';
import PageTransition from '../components/PageTransition';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'saree', label: '🥻 Saree' },
  { id: 'lehenga', label: '👗 Lehenga' },
  { id: 'men', label: '🧵 Men Fabric' },
];

const CollectionPage = () => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <PageTransition>
      {/* Banner */}
      <section className="relative pt-36 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/images/hero.webp" alt="Dangi Suraj Sari Center full collection background" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-primary/10 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-primary/10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-xs uppercase tracking-[0.45em] mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-primary" /> Our Store <span className="w-8 h-px bg-primary" />
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-3">
            The <span className="text-primary italic">Collection</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-sm">
            Sarees, lehengas, and premium fabric cloth — all under one boutique roof.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-black sticky top-16 z-40 border-b border-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3 justify-center">
          {FILTERS.map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest border transition-all duration-300 ${filter === f.id ? 'bg-primary text-black border-primary font-bold' : 'text-gray-400 border-gray-800 hover:border-primary/40 hover:text-primary'}`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="bg-[#060606] py-14 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map(p => (
                <motion.div layout key={p.id}
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-black border border-gray-900 hover:border-primary/40 transition-all duration-500 overflow-hidden">

                  <div className="relative h-72 overflow-hidden">
                    <img src={p.image} alt={p.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 bg-black/85 backdrop-blur px-2.5 py-1 flex items-center gap-1.5 border border-primary/15">
                      {p.category === 'men' && <Scissors size={10} className="text-primary" />}
                      <span className="text-primary text-[10px] uppercase tracking-widest">
                        {p.category === 'men' ? 'Fabric' : p.category}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                      <Link to={`/product/${p.slug}`}
                        className="flex items-center gap-2 bg-primary text-black px-5 py-2.5 text-sm font-bold hover:bg-white transition-colors">
                        <ShoppingBag size={14} /> View Details
                      </Link>
                      <a href={`https://wa.me/917742534505?text=Hi! I'm interested in ${p.name}. Can you share more details?`}
                        target="_blank" rel="noreferrer"
                        className="bg-[#25D366] text-white px-5 py-2.5 text-sm font-bold hover:bg-green-400 transition-colors">
                        💬 WhatsApp Inquiry
                      </a>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-serif text-gray-200 group-hover:text-primary transition-colors duration-300 truncate">{p.name}</h3>
                    <p className="text-gray-500 text-xs mt-1 line-clamp-2 leading-relaxed">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-700">
              <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
              <p>No products in this filter.</p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default CollectionPage;
