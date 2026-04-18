import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative w-16 h-16">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-primary border-r-2 border-r-transparent"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-b-2 border-primary/50 border-l-2 border-l-transparent"
          />
        </div>
        <motion.p 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-primary font-serif tracking-widest text-sm uppercase"
        >
          Loading
        </motion.p>
      </motion.div>
    </div>
  );
};

export default PageLoader;
