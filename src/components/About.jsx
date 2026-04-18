import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] overflow-hidden relative border border-primary/20">
              <img
                src="/assets/images/placeholder.webp"
                alt="Dangi Suraj Saree store in Soyat Kalan"
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border-[20px] border-black mix-blend-overlay"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 -z-10 blur-2xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-primary tracking-[0.2em] uppercase text-sm mb-4 font-semibold">The Story Behind the Brand</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              A Legacy of <br /> <span className="text-primary italic">Elegance</span>
            </h2>
            <div className="space-y-6 text-gray-300 font-light leading-relaxed">
              <p>
                Founded by <strong className="text-white font-medium">Rakesh Dangi</strong>, Dangi Suraj Saree Center has been a trusted cornerstone of fashion in Soyat Kalan. We blend traditional craftsmanship with contemporary designs to bring you the finest sarees for every occasion.
              </p>
              <p>
                From intricate bridal wear that makes your special day unforgettable, to lightweight daily wear that keeps you comfortable yet stylish, our collection is thoughtfully curated to meet the diverse tastes of modern Indian women.
              </p>
              <p>
                Experience unparalleled quality, affordable luxury, and a shopping ambiance like no other. We believe a saree is not just an outfit—it's an emotion, a tradition, and a piece of art.
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-2 gap-6 border-t border-gray-800 pt-8 mt-8">
                <div>
                  <h5 className="text-3xl font-serif text-primary mb-2">4+</h5>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                  <h5 className="text-3xl font-serif text-primary mb-2">2K+</h5>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Brides</p>
                </div>
                <div>
                  <h5 className="text-3xl font-serif text-primary mb-2">10K+</h5>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Customers</p>
                </div>
                <div>
                  <h5 className="text-3xl font-serif text-primary mb-2">100+</h5>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Designs</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
