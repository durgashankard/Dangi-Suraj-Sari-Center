import { products } from '../data/products';
import CategoryPage from '../components/CategoryPage';
import PageTransition from '../components/PageTransition';

const FILTERS = [
  { id: 'traditional', label: 'Traditional Chunni' },
  { id: 'designer', label: 'Designer Dupatta' },
];

const ChunniPage = () => (
  <PageTransition>
    <CategoryPage
      title="Chunni & Dupatta"
      subtitle="Exquisite dupattas that complete every ethnic ensemble with grace."
      bgImage="/assets/images/chunni.webp"
      products={products.filter(p => p.category === 'chunni')}
      filters={FILTERS}
    />
  </PageTransition>
);

export default ChunniPage;
