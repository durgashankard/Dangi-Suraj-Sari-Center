import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { name: 'Home', path: '/' },
  { name: 'Collection', path: '/collection' },
  {
    name: 'Categories', path: '#',
    dropdown: [
      { name: '🥻 Saree', path: '/category/saree' },
      { name: '👗 Lehenga', path: '/category/lehenga' },
      { name: '🧵 Men Fabric', path: '/category/men-fabric' },
    ],
  },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [mDd, setMDd] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  // eslint-disable-next-line
  useEffect(() => { setOpen(false); setDdOpen(false); }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
      ? 'bg-black/96 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(212,175,55,0.08)]'
      : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/assets/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
            <div className="leading-none">
              <div className="font-serif text-lg font-bold text-primary tracking-wider group-hover:text-white transition-colors">Dangi Suraj</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.22em]">Sari Center</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name} className="relative"
                    onMouseEnter={() => setDdOpen(true)}
                    onMouseLeave={() => setDdOpen(false)}>
                    <button className="flex items-center gap-1 text-xs uppercase tracking-widest text-gray-400 hover:text-primary transition-colors py-1">
                      {item.name}
                      <ChevronDown size={12} className={`transition-transform duration-200 ${ddOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {ddOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-[#0a0a0a] border border-gray-800 shadow-xl shadow-primary/10 py-2">
                          {item.dropdown.map(d => (
                            <Link key={d.name} to={d.path}
                              className="block px-4 py-3 text-xs uppercase tracking-widest text-gray-400 hover:text-primary hover:bg-primary/5 transition-colors">
                              {d.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              const active = location.pathname === item.path;
              return (
                <Link key={item.name} to={item.path}
                  className={`relative text-xs uppercase tracking-widest font-medium py-1 group transition-colors duration-300 ${active ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}>
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
            <a href="https://wa.me/917742534505" target="_blank" rel="noreferrer"
              className="bg-primary text-black text-xs font-bold px-5 py-2.5 uppercase tracking-widest hover:bg-white transition-colors">
              WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-primary">
            <AnimatePresence mode="wait">
              {open
                ? <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}><X size={26} /></motion.div>
                : <motion.div key="m" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}><Menu size={26} /></motion.div>
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="lg:hidden bg-black/98 backdrop-blur-2xl border-b border-primary/15 overflow-hidden">
            <div className="px-6 py-7 flex flex-col gap-5">
              {NAV.map((item, i) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name}>
                      <button onClick={() => setMDd(!mDd)}
                        className="flex items-center gap-2 font-serif text-2xl text-gray-300 hover:text-primary transition-colors">
                        {item.name}
                        <ChevronDown size={18} className={`transition-transform ${mDd ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mDd && (
                          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                            className="overflow-hidden pl-4 mt-2 flex flex-col gap-3 border-l border-primary/20">
                            {item.dropdown.map(d => (
                              <Link key={d.name} to={d.path} className="text-gray-400 hover:text-primary transition-colors text-base">{d.name}</Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <motion.div key={item.name} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link to={item.path}
                      className={`font-serif text-2xl ${location.pathname === item.path ? 'text-primary' : 'text-gray-300 hover:text-primary'} transition-colors`}>
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              <a href="https://wa.me/917742534505" target="_blank" rel="noreferrer"
                className="mt-3 bg-[#25D366] text-white font-semibold py-3.5 text-center text-sm uppercase tracking-widest">
                💬 WhatsApp Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
