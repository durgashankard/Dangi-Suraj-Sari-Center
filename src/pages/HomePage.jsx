import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import CategoryCards from '../components/CategoryCards';
import FeaturedProducts from '../components/FeaturedProducts';
import OpeningHours from '../components/OpeningHours';
import About from '../components/About';
import PageTransition from '../components/PageTransition';
import { Helmet } from 'react-helmet-async';

const HomePage = () => (
  <PageTransition>
    <Helmet>
      <title>Best Saree Shop in Soyat Kalan | Dangi Suraj Saree Center</title>
      <meta name="description" content="Visit Dangi Suraj Saree Center in Soyat Kalan for bridal sarees, lehenga, and premium fabric collection." />
      <meta property="og:title" content="Best Saree Shop in Soyat Kalan | Dangi Suraj Saree Center" />
      <meta property="og:description" content="Visit Dangi Suraj Saree Center in Soyat Kalan for bridal sarees, lehenga, and premium fabric collection." />
    </Helmet>
    <Hero />
    <StatsSection />
    <CategoryCards />
    <FeaturedProducts />
    <OpeningHours />
    <About />
  </PageTransition>
);

export default HomePage;
