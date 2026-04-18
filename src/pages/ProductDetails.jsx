import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, ShoppingBag, Tag } from 'lucide-react';
import { products } from '../data/products';
import PageTransition from '../components/PageTransition';
import { Helmet } from 'react-helmet-async';

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-xl mb-6">Product not found.</p>
          <Link to="/collection" className="text-primary underline">Browse Collection</Link>
        </div>
      </div>
    );
  }

  // Related products (same category, exclude current)
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const categoryPath = `/category/${product.category}`;

  return (
    <PageTransition>
      <Helmet>
        <title>{product.name} - Dangi Suraj Saree Center</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.name} - Dangi Suraj Saree Center`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={`https://dangisareecenter.com${product.image}`} />
        <meta property="og:type" content="product" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "image": [
              `https://dangisareecenter.com${product.image}`
            ],
            "description": product.description,
            "url": `https://dangisareecenter.com/product/${product.slug}`,
            "brand": {
              "@type": "Brand",
              "name": "Dangi Suraj Saree Center"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest mb-10">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to={categoryPath} className="hover:text-primary transition-colors capitalize">{product.category}</Link>
            <span>/</span>
            <span className="text-primary truncate max-w-xs">{product.name}</span>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="sticky top-24"
            >
              <div className="relative overflow-hidden border border-gray-900 group">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/5] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Gold corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50 pointer-events-none"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50 pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              {/* Tag */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-primary uppercase tracking-[0.3em] border border-primary/30 px-3 py-1 flex items-center gap-1">
                  <Tag size={10} /> {product.category}
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest border border-gray-800 px-3 py-1">
                  {product.type}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                {product.name}
              </h1>


              <div className="w-16 h-px bg-primary/40"></div>

              <p className="text-gray-400 leading-8 text-base">{product.description}</p>

              <div className="bg-black border border-gray-900 p-4 text-sm text-gray-500 space-y-2">
                <p>📍 <span className="text-gray-400">Available at:</span> Soyat Kalan, Near Bank of India, Pirawa Road</p>
                <p>📞 <span className="text-gray-400">Call:</span> <a href="tel:+917742534505" className="text-primary hover:underline">+91 77425 34505</a></p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/917742534505?text=Hi! I saw your website and I'm interested in "${product.name}" priced at ${product.price}. Can you share more details?`}
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-4 px-8 hover:bg-green-400 transition-colors text-sm uppercase tracking-widest"
                >
                  <MessageCircle size={18} /> WhatsApp Inquiry
                </a>
                <button onClick={() => navigate(-1)}
                  className="flex items-center justify-center gap-2 border border-gray-700 text-gray-400 hover:border-primary hover:text-primary font-semibold py-4 px-8 transition-colors text-sm uppercase tracking-widest">
                  <ArrowLeft size={16} /> Go Back
                </button>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="mt-24">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-serif text-white">You May Also Like</h2>
                <div className="flex-1 h-px bg-gray-900"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {related.map(p => (
                  <motion.div key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group border border-gray-900 hover:border-primary/40 transition-colors overflow-hidden">
                    <div className="relative h-52 overflow-hidden">
                      <img src={p.image} alt={p.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-600" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Link to={`/product/${p.slug}`}
                          className="bg-primary text-black px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors">
                          View
                        </Link>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-gray-300 text-sm font-serif group-hover:text-primary transition-colors truncate">{p.name}</p>
                      <p className="text-gray-600 text-xs mt-0.5 line-clamp-1">{p.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default ProductDetails;
