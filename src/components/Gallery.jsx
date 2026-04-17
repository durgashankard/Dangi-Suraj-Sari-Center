import { motion } from 'framer-motion';

const images = [
  "/assets/images/hero.png",
  "/assets/images/placeholder.png",
  "/assets/images/placeholder.png",
  "/assets/images/placeholder.png",
  "/assets/images/hero.png",
  "/assets/images/placeholder.png",
];

const Gallery = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Lookbook</h2>
          <div className="w-24 h-1 bg-primary mx-auto opacity-50 mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">Glimpses of elegance and tradition from our vibrant collection.</p>
        </motion.div>

        {/* Masonry-style simple grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden group ${
                index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square'
              }`}
            >
              <img 
                src={src} 
                alt={`Beautiful bridal collection at Soyat Kalan store ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
