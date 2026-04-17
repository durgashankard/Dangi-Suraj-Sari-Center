import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import PageTransition from '../components/PageTransition';

const categoryDetails = {
  bridal: {
    desc: 'Opulent silks, intricate zari work, and timeless craftsmanship for your most cherished day.',
    accent: 'Kanjivaram · Banarasi · Silk',
  },
  party: {
    desc: 'Dazzling georgettes, sequin sarees, and contemporary drapes that command every room.',
    accent: 'Georgette · Net · Sequence',
  },
  daily: {
    desc: 'Lightweight cottons and soft fabrics designed for effortless everyday elegance.',
    accent: 'Cotton · Linen · Chiffon',
  },
  festive: {
    desc: 'Vibrant hues and rich motifs to celebrate every festival in full traditional splendor.',
    accent: 'Banarasi · Chaniya · Patola',
  },
};

const CategoriesPage = () => {
  return (
    <PageTransition>
      {/* Header */}
      <section className="relative pt-36 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-maroon-900/20 via-transparent to-transparent"></div>
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-primary/10"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-primary/10"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-primary text-xs uppercase tracking-[0.4em] mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-primary"></span> Browse <span className="w-8 h-px bg-primary"></span>
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
            Our <span className="text-primary italic">Categories</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-xl mx-auto">
            From bridal grandeur to everyday elegance — a category for every moment of your life.
          </motion.p>
        </div>
      </section>

      {/* Large Category Cards */}
      <section className="bg-[#060606] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, i) => {
              const detail = categoryDetails[cat.filterId] || {};
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="group relative h-[420px] overflow-hidden cursor-pointer border border-gray-900 hover:border-primary/30 transition-colors duration-500"
                >
                  {/* Background Image */}
                  <img src={cat.image} alt={cat.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <p className="text-primary text-xs uppercase tracking-widest mb-2 opacity-80">{detail.accent}</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">{cat.title}</h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                      {detail.desc}
                    </p>
                    <Link
                      to={`/collection`}
                      onClick={() => {}}
                      className="inline-flex items-center gap-2 bg-primary text-black text-xs font-semibold px-6 py-3 uppercase tracking-widest hover:bg-white transition-colors duration-300 w-fit"
                    >
                      Shop Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Number tag */}
                  <div className="absolute top-6 right-6 text-gray-700 font-serif text-6xl font-bold leading-none">
                    0{i + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CategoriesPage;
