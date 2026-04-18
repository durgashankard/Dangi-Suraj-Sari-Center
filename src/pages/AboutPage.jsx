import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, TrendingUp, HeartHandshake } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const milestones = [
  { year: '2021', event: 'Shop Started', desc: 'Rakesh Dangi opened Dangi Suraj Sari Center in Soyat Kalan with a vision to bring premium ethnic wear to every home.' },
  { year: '2022', event: 'First 100 Customers', desc: 'Crossed the milestone of 100 loyal customers — a proud first step in building lasting relationships with families.' },
  { year: '2023', event: 'Bridal Collection Added', desc: 'Launched an exclusive bridal collection featuring Kanjivaram silk, Banarasi drapes, and designer lehengas.' },
  { year: '2024', event: '3000+ Customers', desc: 'Grew to over 3,000 happy customers, cementing our reputation as the region\'s most trusted sari destination.' },
  { year: '2025', event: 'Online Presence Started', desc: 'Took our legacy digital — allowing families across Madhya Pradesh and beyond to explore our collections online.' },
];

const values = [
  { icon: <Award className="w-8 h-8 text-primary" />, title: 'Authentic Quality', desc: 'Every saree is handpicked from renowned weaving clusters across India.' },
  { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: 'Latest Trends', desc: 'We blend timeless tradition with the freshest contemporary aesthetics each season.' },
  { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: 'Fair Pricing', desc: 'Luxury for everyone. Our prices are transparent and always competitive.' },
  { icon: <HeartHandshake className="w-8 h-8 text-primary" />, title: 'Personal Service', desc: 'Our team personally assists every customer like family — not just a sale.' },
];

const AboutPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About Us | Dangi Suraj Sari Center</title>
        <meta name="description" content="Learn about the story of Dangi Suraj Sari Center, the most trusted saree and ethnic wear shop in Soyat Kalan." />
      </Helmet>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/images/placeholder.webp" alt="About Dangi Suraj Sari Center background" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
              className="text-primary text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary"></span> Our Story
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Rooted in <br /><span className="text-primary italic">Tradition</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg leading-relaxed">
              Since 2021, Dangi Suraj Sari Center has been the heartbeat of ethnic fashion in Soyat Kalan — weaving together trust, craftsmanship, and an undying love for the saree.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#060606] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="relative aspect-[3/4] overflow-hidden border border-primary/20">
                <img src="/assets/images/placeholder.webp" alt="Premium saree and bridal wear shop setup in Soyat Kalan" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                {/* Gold border accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/40"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary/40"></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h2 className="text-4xl font-serif font-bold text-white mb-6">
                Founded by <span className="text-primary">Rakesh Dangi</span>
              </h2>
              <div className="space-y-5 text-gray-400 font-light leading-8">
                <p>
                  What started as a small shop near Bank of India on Pirawa Road has grown into one of Soyat Kalan's most beloved destinations for ethnic wear. Our founder, Rakesh Dangi, began this journey with a simple belief: every woman deserves to feel like royalty.
                </p>
                <p>
                  We source our sarees directly from master weavers in Varanasi, Kanchipuram, Surat, and Rajasthan — ensuring authenticity that speaks through every thread.
                </p>
                <p>
                  Today, with thousands of happy brides and families served, we stand by the same values that started it all: quality, trust, and a personal touch that makes every visit feel special.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-800">
                {[['4+', 'Years Experience'], ['2K+', 'Brides Served'], ['100+', 'Designs']].map(([num, label]) => (
                  <div key={label}>
                    <div className="text-3xl font-serif text-primary font-bold mb-1">{num}</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-black py-20 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-center text-white mb-16">
            Our <span className="text-primary italic">Journey</span>
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0"></div>
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="text-primary font-serif text-2xl font-bold mb-1">{m.year}</div>
                  <h3 className="text-white font-semibold mb-2">{m.event}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-black"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#060606] py-20 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-center text-white mb-12">
            What We <span className="text-primary italic">Stand For</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 border border-gray-900 hover:border-primary/30 transition-colors duration-400 group text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  {v.icon}
                </div>
                <h3 className="font-serif text-lg text-white mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;
