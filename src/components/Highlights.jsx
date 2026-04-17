import { motion } from 'framer-motion';
import { Award, ShieldCheck, TrendingUp, HeartHandshake } from 'lucide-react';

const highlightsData = [
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Premium Quality",
    desc: "Finest fabrics and authentic craftsmanship in every thread."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "Latest Designs",
    desc: "Trendy and exclusive collections updated every season."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Affordable Prices",
    desc: "Luxury that fits your budget without compromising quality."
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-primary" />,
    title: "Trusted Shop",
    desc: "A legacy of trust and thousands of happy brides."
  }
];

const Highlights = () => {
  return (
    <section className="py-20 bg-black border-y border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {highlightsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 border border-transparent hover:border-primary/20 hover:bg-black/50 transition-all duration-300 group"
            >
              <div className="mb-4 p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif text-gray-200 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
