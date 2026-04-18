import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import ScrollToTop from './components/ScrollToTop';
import ScrollUpButton from './components/ScrollUpButton';
import SeoProvider from './components/SeoProvider';
import PageLoader from './components/PageLoader';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const CollectionPage = React.lazy(() => import('./pages/CollectionPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const SareePage = React.lazy(() => import('./pages/SareePage'));
const LehengaPage = React.lazy(() => import('./pages/LehengaPage'));
const MenFabricPage = React.lazy(() => import('./pages/MenFabricPage'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Category Routes */}
          <Route path="/category/saree" element={<SareePage />} />
          <Route path="/category/lehenga" element={<LehengaPage />} />
          <Route path="/category/men-fabric" element={<MenFabricPage />} />

          {/* Product detail */}
          <Route path="/product/:slug" element={<ProductDetails />} />
        </Routes>
      </Suspense>
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
