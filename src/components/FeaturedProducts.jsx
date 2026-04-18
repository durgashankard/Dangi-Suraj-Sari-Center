import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

// Pick 2 from each category for home page
const featured = [
  products.find(p => p.id === 1),
  products.find(p => p.id === 2),
  products.find(p => p.id === 8),
  products.find(p => p.id === 9),
  products.find(p => p.id === 12),
  products.find(p => p.id === 14),
];

const FeaturedProducts = () => (
  <section className="py-24 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center mb-14">
        <p className="text-primary text-xs uppercase tracking-[0.5em] mb-3 flex items-center justify-center gap-3">
          <span className="w-10 h-px bg-primary/60" /> Curated For You <span className="w-10 h-px bg-primary/60" />
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
          Featured <span className="text-primary italic">Collection</span>
        </h2>
        <p className="mt-3 text-gray-500 text-sm max-w-md mx-auto">
          Handpicked pieces showcasing the finest of our bridal, fashion, and fabric ranges.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {featured.map((p, i) => (
          <motion.div key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative border border-gray-900 hover:border-primary/40 transition-all duration-400 overflow-hidden bg-black"
          >
            {/* Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img loading="lazy" src={p.image} alt={`Dangi Suraj Saree Center - ${p.name}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-600 ease-out" />

              {/* Category tag */}
              <div className="absolute top-3 left-3 bg-black/80 text-primary text-[10px] uppercase tracking-widest px-2.5 py-1 border border-primary/20">
                {p.category === 'men-fabric' ? 'Fabric' : p.category}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link to={`/product/${p.slug}`}
                  className="bg-primary text-black text-xs font-bold px-6 py-3 uppercase tracking-widest hover:bg-white transition-colors"
                  onClick={(e) => e.stopPropagation()}>
                  View Details
                </Link>
              </div>
            </div>

            {/* Card footer */}
            <div className="p-4">
              <h3 className="font-serif text-gray-200 group-hover:text-primary transition-colors duration-300 text-sm md:text-base truncate">{p.name}</h3>
              <p className="text-gray-500 text-xs mt-1 line-clamp-2 leading-relaxed">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/collection"
          className="inline-block border border-primary/60 text-primary hover:bg-primary hover:text-black font-semibold px-10 py-4 uppercase tracking-widest text-sm transition-all duration-300">
          View Full Collection →
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
