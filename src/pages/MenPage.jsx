import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Scissors } from 'lucide-react';
import { products } from '../data/products';
import PageTransition from '../components/PageTransition';

const FILTERS = [
  { id: 'kurta', label: '👘 Kurta Sets' },
  { id: 'shirt', label: '👔 Shirts' },
  { id: 'pants', label: '👖 Pants' },
  { id: 'fabric', label: '🧵 Fabric / Cloth' },
];

const MenPage = () => {
  const [active, setActive] = useState('all');
  const menProducts = products.filter(p => p.category === 'men');
  const filtered = active === 'all' ? menProducts : menProducts.filter(p => p.type === active);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/images/men.png" alt="Men Fashion" className="w-full h-full object-cover object-top opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        </div>
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full border border-primary/10 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
            className="text-primary text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-primary"></span> For the Modern Man
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-4">
            Men's <span className="text-primary italic">Fashion</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg max-w-lg">
            From regal kurtas to premium fabrics — dress with purpose, wear with pride.
          </motion.p>
        </div>
      </section>

      {/* Special Feature Tiles */}
      <section className="bg-black py-12 border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FILTERS.map((f, i) => (
              <motion.button key={f.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                onClick={() => setActive(f.id === active ? 'all' : f.id)}
                className={`p-5 border text-center transition-all duration-300 ${active === f.id ? 'border-primary bg-primary/10 text-primary' : 'border-gray-800 text-gray-400 hover:border-primary/40 hover:text-primary'}`}>
                <div className="text-2xl mb-2">{f.label.split(' ')[0]}</div>
                <div className="text-xs uppercase tracking-widest">{f.label.split(' ').slice(1).join(' ')}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-black sticky top-16 z-40 border-b border-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3 justify-center">
          <button onClick={() => setActive('all')}
            className={`px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${active === 'all' ? 'bg-primary text-black border-primary' : 'text-gray-400 border-gray-800 hover:border-primary/40 hover:text-primary'}`}>
            All Items
          </button>
          {FILTERS.map(f => (
            <button key={f.id} onClick={() => setActive(f.id)}
              className={`px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${active === f.id ? 'bg-primary text-black border-primary' : 'text-gray-400 border-gray-800 hover:border-primary/40 hover:text-primary'}`}>
              {f.label.split(' ').slice(1).join(' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <section className="bg-[#060606] py-14 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map(p => (
                <motion.div layout key={p.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-black border border-gray-900 hover:border-primary/40 transition-colors duration-500 overflow-hidden">
                  <div className="relative h-72 overflow-hidden">
                    <img src={p.image} alt={p.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 text-[10px] text-primary uppercase tracking-widest border border-primary/20">
                      {p.type === 'fabric' ? '🧵 Fabric' : p.type}
                    </div>
                    {p.type === 'fabric' && (
                      <div className="absolute top-3 right-3 bg-secondary/80 backdrop-blur px-2 py-1 flex items-center gap-1 text-white text-[10px]">
                        <Scissors size={10} /> Custom Stitch
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                      <Link to={`/product/${p.slug}`}
                        className="flex items-center gap-2 bg-primary text-black px-5 py-2.5 text-sm font-semibold hover:bg-white transition-colors">
                        <ShoppingBag size={15} /> View Details
                      </Link>
                      <a href={`https://wa.me/917742534505?text=Hi, I'm interested in ${p.name}. Can you share more details?`}
                        target="_blank" rel="noreferrer"
                        className="bg-[#25D366] text-white px-5 py-2.5 text-sm font-medium hover:bg-green-400 transition-colors">
                        💬 WhatsApp Inquiry
                      </a>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-gray-200 group-hover:text-primary transition-colors mb-1 truncate">{p.name}</h3>
                    <p className="text-gray-500 text-xs mt-1 line-clamp-2 leading-relaxed">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default MenPage;
