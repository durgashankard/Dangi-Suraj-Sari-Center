import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import CategoryPage from '../components/CategoryPage';
import PageTransition from '../components/PageTransition';

const SareePage = () => (
  <PageTransition>
    <Helmet>
      <title>Bridal & Designer Sarees | Dangi Suraj Sari Center</title>
      <meta name="description" content="Explore our beautiful collection of bridal sarees, party wear sarees, and everyday drapes in Soyat Kalan." />
      <meta name="keywords" content="Saree shop in Soyat Kalan, Bridal Saree, Kanjivaram Silk, Banarasi Saree near Pirawa Road" />
    </Helmet>
    <CategoryPage
      title="Our Sarees"
      subtitle="Timeless drapes woven with elegance — for the bride, the party, and everyday grace."
      bgImage="/assets/images/saree_bridal_gold.webp"
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
