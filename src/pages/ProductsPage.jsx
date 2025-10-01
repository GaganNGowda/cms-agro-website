import Products from '../components/Products';
import SEO from '../components/SEO';
import './ProductsPage.css';

function ProductsPage() {
  return (
    <>
      <SEO 
        title="Premium Guava Plants & Harvest Protection Products - CMS Agro"
        description="Explore our range of Taiwan guava plants (Red Diamond, Gold, White) and harvest protection solutions including weed mats, fruit protection bags, and EPE foam nets."
        keywords="Taiwan guava plants, Red Diamond guava, fruit protection bags, weed mats, EPE foam nets, agricultural products, CMS Agro products, Samrudhi Nursery plants"
      />
      
      <div className="products-page">
        <div className="products-hero">
          <div className="container">
            <h1 className="page-title">Our Products</h1>
            <p className="page-subtitle">Premium Quality Plants & Protection Solutions</p>
          </div>
        </div>

        <Products />

        <section className="product-guarantee section">
          <div className="container">
            <div className="guarantee-content">
              <h2 className="section-title text-center">Our Quality Guarantee</h2>
              <div className="guarantee-grid">
                <div className="guarantee-card">
                  <div className="guarantee-icon">✓</div>
                  <h3>100% Authentic</h3>
                  <p>All plants are genuine Taiwan varieties with verified genetics</p>
                </div>
                <div className="guarantee-card">
                  <div className="guarantee-icon">🌱</div>
                  <h3>Healthy Plants</h3>
                  <p>Disease-free, well-nurtured plants ready for transplantation</p>
                </div>
                <div className="guarantee-card">
                  <div className="guarantee-icon">📦</div>
                  <h3>Safe Delivery</h3>
                  <p>Careful packaging and timely delivery to your doorstep</p>
                </div>
                <div className="guarantee-card">
                  <div className="guarantee-icon">🤝</div>
                  <h3>1-Year Support</h3>
                  <p>Complete guidance and expert support throughout growth cycle</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductsPage;
