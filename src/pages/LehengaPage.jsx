import { products } from '../data/products';
import CategoryPage from '../components/CategoryPage';
import PageTransition from '../components/PageTransition';

const LehengaPage = () => (
  <PageTransition>
    <CategoryPage
      title="Our Lehengas"
      subtitle="Grand bridal lehengas and designer pieces for every celebration you deserve."
      bgImage="/assets/images/lehenga_ivory.png"
      products={products.filter(p => p.category === 'lehenga')}
      filters={[
        { id: 'wedding', label: '💍 Wedding Lehenga' },
        { id: 'designer', label: '✨ Designer Lehenga' },
      ]}
    />
  </PageTransition>
);

export default LehengaPage;
