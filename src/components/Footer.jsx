import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/images/logo.webp" alt="Dangi Suraj Saree Center logo" className="h-10 w-10 object-contain" />
              <span className="font-serif text-xl font-bold text-primary tracking-widest uppercase">
                Dangi Suraj
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Premium quality ethnics redefining elegance. Visit the best saree shop in Soyat Kalan, located near Bank of India, Pirawa Road for your bridal needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-serif uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-500 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/collection" className="text-gray-500 hover:text-primary transition-colors text-sm">Collection</Link></li>
              <li><Link to="/category/saree" className="text-gray-500 hover:text-primary transition-colors text-sm">Sarees</Link></li>
              <li><Link to="/category/lehenga" className="text-gray-500 hover:text-primary transition-colors text-sm">Lehengas</Link></li>
              <li><Link to="/category/men-fabric" className="text-gray-500 hover:text-primary transition-colors text-sm">Men Fabric</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-primary transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-serif uppercase tracking-widest mb-4">Opening Hours</h4>
            <div className="space-y-3 text-sm text-gray-500">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Monday – Sunday</span>
                <span className="text-primary font-medium">09:00 AM – 07:30 PM</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs">Always Open · No Holiday</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Dangi Suraj Saree Center. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <a href="#" className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.39 4.49A13.974 13.974 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.902 4.902 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.505 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"/></svg>
            </a>
            <a href="https://www.instagram.com/saree__center_soyat_kalan/" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
