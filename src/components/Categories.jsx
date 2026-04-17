import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const Categories = () => {
  return (
    <section id="categories" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Shop By Category</h2>
          <div className="w-24 h-1 bg-primary mx-auto opacity-50"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Discover our exclusive range of sarees curated for every special occasion.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-96 overflow-hidden cursor-pointer"
            >
              <Link to="/categories" className="absolute inset-0 z-30"></Link>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10"></div>
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-serif text-primary font-semibold mb-2">{category.title}</h3>
                <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="text-sm uppercase tracking-wider">Explore</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
