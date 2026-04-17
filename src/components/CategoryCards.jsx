import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const CategoryCards = () => (
  <section className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center mb-16">
        <p className="text-primary text-xs uppercase tracking-[0.5em] mb-3 flex items-center justify-center gap-3">
          <span className="w-10 h-px bg-primary/60" /> What We Offer <span className="w-10 h-px bg-primary/60" />
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
          Shop By <span className="text-primary italic">Category</span>
        </h2>
        <p className="mt-3 text-gray-500 max-w-md mx-auto text-sm">
          From bridal grandeur to premium fabric cloth — find everything under one roof.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className="group relative h-[420px] overflow-hidden border border-gray-900 hover:border-primary/30 transition-all duration-500 cursor-pointer"
          >
            {/* Image */}
            <img src={cat.image} alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

            {/* Number watermark */}
            <div className="absolute top-5 right-5 font-serif text-6xl font-bold text-white/5 select-none leading-none">
              0{i + 1}
            </div>

            {/* Gold top-left corner */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-7">
              <p className="text-primary text-[11px] uppercase tracking-widest mb-1.5 opacity-75">{cat.subtitle}</p>
              <h3 className="text-3xl font-serif font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-gray-400 text-sm mb-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {cat.desc}
              </p>
              <Link to={cat.path}
                className="inline-flex items-center gap-2 bg-primary text-black text-xs font-semibold px-5 py-3 uppercase tracking-widest hover:bg-white transition-colors w-fit opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-50">
                Shop {cat.title} →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoryCards;
