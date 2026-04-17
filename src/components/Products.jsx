import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '../data/products';

const Products = () => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <section id="collection" className="py-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Premium Collection</h2>
          <div className="w-24 h-1 bg-primary mx-auto opacity-50 mb-8"></div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === 'all' 
                  ? 'border-primary bg-primary/10 text-primary' 
                  : 'border-gray-800 text-gray-400 hover:border-primary/50'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.filterId)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  filter === cat.filterId 
                    ? 'border-primary bg-primary/10 text-primary' 
                    : 'border-gray-800 text-gray-400 hover:border-primary/50'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="bg-black border border-gray-900 group rounded-none overflow-hidden hover:border-primary/50 transition-colors duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 text-xs text-primary uppercase tracking-widest border border-primary/20">
                    {product.category}
                  </div>
                  {/* Hover Overlay Action */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-primary text-black px-6 py-2 font-medium uppercase tracking-wider hover:bg-white transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-serif text-gray-200 mb-2 truncate group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-primary font-medium">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
