import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import CategoryPage from '../components/CategoryPage';
import PageTransition from '../components/PageTransition';

const LehengaPage = () => (
  <PageTransition>
    <Helmet>
      <title>Exclusive Lehenga Collection | Dangi Suraj Saree Center</title>
      <meta name="description" content="Shop grand bridal lehengas and designer ensembles for weddings and parties at Dangi Suraj Saree Center in Soyat Kalan." />
      <meta name="keywords" content="Lehenga shop in Soyat Kalan, Bridal Lehenga, Designer Lehenga, Wedding clothes near Pirawa Road" />
    </Helmet>
    <CategoryPage
      title="Our Lehengas"
      subtitle="Grand bridal lehengas and designer pieces for every celebration you deserve."
      bgImage="/assets/images/lehenga_ivory.webp"
      products={products.filter(p => p.category === 'lehenga')}
      filters={[
        { id: 'wedding', label: '💍 Wedding Lehenga' },
        { id: 'designer', label: '✨ Designer Lehenga' },
      ]}
    />
  </PageTransition>
);

export default LehengaPage;
