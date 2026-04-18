import { motion } from 'framer-motion';

const stats = [
  { number: '4+', label: 'Years Experience', icon: '🏆' },
  { number: '2K+', label: 'Happy Brides', icon: '💍' },
  { number: '10K+', label: 'Happy Customers', icon: '🌟' },
  { number: '100+', label: 'Designs Available', icon: '✨' },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-gray-900 relative overflow-hidden">
      {/* Subtle gold glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-800">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center py-6 sm:py-4 text-center px-6 group"
            >
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                className="text-4xl mb-3 block"
                role="img"
                aria-hidden="true"
              >
                {stat.icon}
              </motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                className="text-5xl md:text-6xl font-serif font-bold text-primary mb-2 leading-none tracking-tight"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-xs uppercase tracking-[0.25em] font-medium mt-1">
                {stat.label}
              </p>
              <div className="w-8 h-px bg-primary/40 mt-4 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
