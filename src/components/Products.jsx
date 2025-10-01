import './Products.css';
import redDiamondImage from './images/online-plant-bazar-red-diamon-guava-live-plant-pack-of-1-product-images-orvibmh56v2-p596290407-1-202212121239.webp';
import whiteGuavaImage from './images/White-Guava-1.webp';
import weedMatImage from './images/71STIr-MRNL.webp';
import protectionBagImage from './images/61aY8N16cCL.webp';
import foamNetImage from './images/H70560c8e0bd6435bb7fbbcea81fafac40.webp';

function Products() {
  const nurseryProducts = [
    {
      name: 'Taiwan Red Diamond',
      image: redDiamondImage,
      description: 'Premium quality guava variety with exceptional sweetness'
    },
    {
      name: 'Taiwan Gold (Lite Pink)',
      image: redDiamondImage,
      description: 'Light pink variety known for superior taste'
    },
    {
      name: 'Taiwan White',
      image: whiteGuavaImage,
      description: 'White guava variety with excellent market demand'
    }
  ];

  const protectionProducts = [
    {
      name: 'Weed Mats',
      icon: '🛡️',
      description: 'The Ultimate Weed Barrier: 100 GSM / other GSM and sizes'
    },
    {
      name: 'Fruit Protection Bags',
      icon: '🎒',
      description: 'Mango Protection Bags - Available in multiple colors'
    },
    {
      name: 'EPE Fruit Foam Nets',
      icon: '🥅',
      description: 'Available in multiple sizes and colors for all fruits'
    }
  ];

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="products-header">
          <h2 className="section-title">Our Products</h2>
          <p className="products-subtitle">
            Complete solutions from nursery to harvest protection
          </p>
        </div>

        <div className="products-grid">
          <div className="product-category">
            <div className="category-header">
              <h3>🌱 Samrudhi Nursery</h3>
              <p className="category-subtitle">Premium Guava Plants</p>
            </div>
            <div className="product-cards">
              {nurseryProducts.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-icon">{product.icon}</div>
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-description">{product.description}</p>
                </div>
              ))}
            </div>
            <div className="category-footer">
              <p className="support-text">
                ✅ 1-Year Growth Guidance & Support: "We don't just sell plants; we partner in your success. For bulk orders, we provide a full year of complete guidance and expert support until the initial growth cycle is complete."
              </p>
            </div>
          </div>

          <div className="product-category">
            <div className="category-header">
              <h3>🛡️ CMS Agro</h3>
              <p className="category-subtitle">Harvest Protection Solutions</p>
            </div>
            <div className="product-cards">
              {protectionProducts.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-icon">{product.icon}</div>
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-description">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
