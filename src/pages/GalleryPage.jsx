import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const galleryImages = [
  { src: '/assets/images/hero.webp', span: 'md:col-span-2 md:row-span-2', label: 'Bridal Splendor' },
  { src: '/assets/images/placeholder.webp', span: '', label: 'Golden Silk' },
  { src: '/assets/images/placeholder.webp', span: '', label: 'Festive Drape' },
  { src: '/assets/images/placeholder.webp', span: 'md:col-span-2', label: 'Party Look' },
  { src: '/assets/images/hero.webp', span: '', label: 'Wedding Day' },
  { src: '/assets/images/placeholder.webp', span: '', label: 'Daily Grace' },
  { src: '/assets/images/placeholder.webp', span: 'md:col-span-2', label: 'Banarasi Beauty' },
];

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <PageTransition>
      {/* Header */}
      <section className="relative pt-36 pb-16 bg-black overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-primary/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-primary text-xs uppercase tracking-[0.4em] mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-primary"></span> Visual Stories <span className="w-8 h-px bg-primary"></span>
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
            Our <span className="text-primary italic">Lookbook</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-xl mx-auto">
            Every frame tells a story of elegance, tradition, and the timeless beauty of the Indian saree.
          </motion.p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="bg-[#060606] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setLightbox(img)}
                className={`group relative overflow-hidden cursor-pointer ${img.span}`}
              >
                <img src={img.src} alt={img.label}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400 flex items-end p-6">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-primary text-xs uppercase tracking-widest mb-1">View</p>
                    <h3 className="text-white font-serif text-xl">{img.label}</h3>
                  </div>
                </div>
                {/* Gold corner accent */}
                <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-primary/0 group-hover:border-primary/60 transition-colors duration-300"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-primary/0 group-hover:border-primary/60 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.label} className="w-full max-h-[80vh] object-contain border border-primary/20" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-primary text-xs uppercase tracking-widest">{lightbox.label}</p>
              </div>
              <button onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 bg-primary text-black w-10 h-10 flex items-center justify-center hover:bg-white transition-colors">
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default GalleryPage;
