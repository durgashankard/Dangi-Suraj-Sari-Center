import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppFAB = () => {
  return (
    <motion.a
      href="https://wa.me/917742534505"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap px-0 group-hover:px-3 font-medium">
        Chat with us
      </span>
    </motion.a>
  );
};

export default WhatsAppFAB;
