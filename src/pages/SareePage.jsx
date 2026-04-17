import { products } from '../data/products';
import CategoryPage from '../components/CategoryPage';
import PageTransition from '../components/PageTransition';

const SareePage = () => (
  <PageTransition>
    <CategoryPage
      title="Our Sarees"
      subtitle="Timeless drapes woven with elegance — for the bride, the party, and everyday grace."
      bgImage="/assets/images/saree_bridal_gold.png"
      products={products.filter(p => p.category === 'saree')}
      filters={[
        { id: 'bridal', label: '💍 Bridal Saree' },
        { id: 'party', label: '✨ Party Saree' },
        { id: 'daily', label: '🌸 Daily Wear' },
      ]}
    />
  </PageTransition>
);

export default SareePage;
