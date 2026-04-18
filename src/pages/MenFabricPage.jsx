import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Scissors, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import PageTransition from '../components/PageTransition';

const FILTERS = [
  { id: 'shirt-fabric', label: '👔 Shirting Cloth' },
  { id: 'pant-fabric', label: '👖 Pant / Suiting Cloth' },
  { id: 'suit-fabric', label: '🤵 Suit Fabric' },
  { id: 'kurta-fabric', label: '🧵 Kurta Cloth' },
];

const fabricTypes = [
  { icon: '🪡', label: 'Shirting', desc: 'Breathable cotton & linen' },
  { icon: '👖', label: 'Pant Fabric', desc: 'Premium woolen suiting' },
  { icon: '🤵', label: 'Suit Fabric', desc: 'Formal & wedding suits' },
  { icon: '✨', label: 'Kurta Cloth', desc: 'Rich ethnic patterns' },
];

const MenFabricPage = () => {
  const [active, setActive] = useState('all');
  const allFabric = products.filter(p => p.category === 'men-fabric');
  const filtered = active === 'all' ? allFabric : allFabric.filter(p => p.type === active);

  return (
    <PageTransition>
      <Helmet>
        <title>Premium Men's Fabric | Dangi Suraj Sari Center</title>
        <meta name="description" content="Find the best premium unstitched fabric for men. Shirting, suiting, and kurta cloth in Soyat Kalan." />
        <meta name="keywords" content="Men fabric shop in Soyat Kalan, Shirting fabric, Suiting cloth, Tailoring cloth near Pirawa Road" />
      </Helmet>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/images/fabric_suiting.webp" alt="Men's suiting fabric collection background" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
        <div className="absolute top-20 right-14 w-80 h-80 rounded-full border border-primary/10 pointer-events-none" />
        <div className="absolute top-40 right-24 w-48 h-48 rounded-full border border-primary/10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
            className="text-primary text-xs uppercase tracking-[0.45em] mb-4 flex items-center gap-3">
            <span className="w-10 h-px bg-primary" /> Premium Unstitched Fabric
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-4">
            Men's <br /><span className="text-primary italic">Fabric Collection</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-lg mb-6">
            Premium unstitched cloth for custom tailoring — shirts, suits, kurtas and more. Sold per meter.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            className="inline-flex items-center gap-2 text-primary border border-primary/30 px-4 py-2 text-xs uppercase tracking-widest">
            <Scissors size={14} /> Custom Stitching Available
          </motion.div>
        </div>
      </section>

      {/* Fabric type feature tiles */}
      <section className="bg-black border-y border-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fabricTypes.map((f, i) => (
              <motion.div key={f.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group p-5 text-center border border-gray-800 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default">
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="text-white font-serif text-sm font-semibold mb-1">{f.label}</div>
                <div className="text-gray-600 text-xs">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="bg-black sticky top-16 z-40 border-b border-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3 justify-center">
          <button onClick={() => setActive('all')}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest border transition-all duration-300 ${active === 'all' ? 'bg-primary text-black border-primary font-bold' : 'text-gray-400 border-gray-800 hover:border-primary/40 hover:text-primary'}`}>
            All Fabric
          </button>
          {FILTERS.map(f => (
            <button key={f.id} onClick={() => setActive(f.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest border transition-all duration-300 ${active === f.id ? 'bg-primary text-black border-primary font-bold' : 'text-gray-400 border-gray-800 hover:border-primary/40 hover:text-primary'}`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="bg-[#060606] py-14 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center text-gray-500 border border-gray-900 rounded-lg">
              <p className="text-xl font-serif text-white mb-2">No Fabric Found</p>
              <p className="text-sm">We currently don't have any products in this specific category.</p>
            </motion.div>
          )}

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map(p => (
                <motion.div layout key={p.id}
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-black border border-gray-900 hover:border-primary/40 transition-all duration-500 overflow-hidden">

                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img loading="lazy" src={p.image} alt={`Dangi Suraj Sari Center - ${p.name}`}
                      className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out" />

                    {/* Premium fabric overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                      <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold px-4 py-2 border border-primary/40 bg-black/50 backdrop-blur">
                        ✦ Premium Fabric Collection ✦
                      </p>
                      <div className="flex gap-3">
                        <Link to={`/product/${p.slug}`}
                          className="flex items-center gap-1.5 bg-primary text-black px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors">
                          <ShoppingBag size={13} /> View Details
                        </Link>
                        <a href={`https://wa.me/917742534505?text=Hi! I'm interested in ${p.name}. Can you share more details?`}
                          target="_blank" rel="noreferrer"
                          className="bg-[#25D366] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-green-400 transition-colors">
                          💬 Inquire
                        </a>
                      </div>
                    </div>

                    {/* Type badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur px-2.5 py-1 border border-primary/20">
                      <Scissors size={10} className="text-primary" />
                      <span className="text-primary text-[10px] uppercase tracking-widest">{p.type.replace('-', ' ')}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-gray-200 group-hover:text-primary transition-colors duration-300 mb-1">{p.name}</h3>
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

export default MenFabricPage;
