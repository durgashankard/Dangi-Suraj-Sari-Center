import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import ScrollToTop from './components/ScrollToTop';
import ScrollUpButton from './components/ScrollUpButton';
import SeoProvider from './components/SeoProvider';

import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import SareePage from './pages/SareePage';
import LehengaPage from './pages/LehengaPage';
import MenFabricPage from './pages/MenFabricPage';
import ProductDetails from './pages/ProductDetails';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 3 Category Routes — NO CHUNNI */}
        <Route path="/category/saree" element={<SareePage />} />
        <Route path="/category/lehenga" element={<LehengaPage />} />
        <Route path="/category/men-fabric" element={<MenFabricPage />} />

        {/* Product detail */}
        <Route path="/product/:slug" element={<ProductDetails />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <SeoProvider>
      <BrowserRouter>
        <ScrollToTop />
      <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-primary selection:text-black">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppFAB />
        <ScrollUpButton />
      </div>
      </BrowserRouter>
    </SeoProvider>
  );
}

export default App;
