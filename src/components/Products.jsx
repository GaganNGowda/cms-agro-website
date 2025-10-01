import './Products.css';
import redDiamondImage from './images/online-plant-bazar-red-diamon-guava-live-plant-pack-of-1-product-images-orvibmh56v2-p596290407-1-202212121239.webp';
import litePink from '/Users/ggowda/CascadeProjects/windsurf-project/cms-agro-website/src/components/images/61um6wnOgGL.webp'
import whiteGuavaImage from './images/White-Guava-1.webp';
import weedMatImage from './images/71STIr-MRNL.webp';
import mangoBags from './images/H70560c8e0bd6435bb7fbbcea81fafac40.webp';
import foamNetImage from '/Users/ggowda/CascadeProjects/windsurf-project/cms-agro-website/src/components/images/H266a8445d25e42d38c8cfce35368d69aC.jpg_300x300.webp';
import fruitProtectionBagsImage from '/Users/ggowda/CascadeProjects/windsurf-project/cms-agro-website/src/components/images/Gemini_Generated_Image_7vf72n7vf72n7vf7.png';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

function Products() {
  const { language } = useLanguage();
  const nurseryProducts = [
    {
      name: getTranslation(language, 'products.redDiamond'),
      image: redDiamondImage,
      description: getTranslation(language, 'products.redDiamondDesc')
    },
    {
      name: getTranslation(language, 'products.taiwanGold'),
      image: litePink,
      description: getTranslation(language, 'products.taiwanGoldDesc')
    },
    {
      name: getTranslation(language, 'products.taiwanWhite'),
      image: whiteGuavaImage,
      description: getTranslation(language, 'products.taiwanWhiteDesc')
    }
  ];

  const protectionProducts = [
    {
      name: getTranslation(language, 'products.weedMats'),
      image: weedMatImage,
      description: getTranslation(language, 'products.weedMatsDesc')
    },
    {
      name: getTranslation(language, 'products.fruitBags'),
      image: mangoBags,
      description: getTranslation(language, 'products.fruitBagsDesc')
    },
     {
      name: getTranslation(language, 'products.waxBags'),
      image: fruitProtectionBagsImage,
      description: getTranslation(language, 'products.waxBagsDesc')
    },
    {
      name: getTranslation(language, 'products.foamNets'),
      image: foamNetImage,
      description: getTranslation(language, 'products.foamNetsDesc')
    }
  ];

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="products-header">
          <h2 className="section-title">{getTranslation(language, 'products.title')}</h2>
          <p className="products-subtitle">
            {getTranslation(language, 'products.subtitle')}
          </p>
        </div>

        <div className="products-grid">
          <div className="product-category">
            <div className="category-header">
              <h3>🌱 {getTranslation(language, 'products.nurseryTitle')}</h3>
              <p className="category-subtitle">{getTranslation(language, 'products.nurserySubtitle')}</p>
            </div>
            <div className="product-cards">
              {nurseryProducts.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                  </div>
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-description">{product.description}</p>
                </div>
              ))}
            </div>
            <div className="category-footer">
              <p className="support-text">
                {getTranslation(language, 'products.supportText')}
              </p>
            </div>
          </div>

          <div className="product-category">
            <div className="category-header">
              <h3>🛡️ {getTranslation(language, 'products.protectionTitle')}</h3>
              <p className="category-subtitle">{getTranslation(language, 'products.protectionSubtitle')}</p>
            </div>
            <div className="product-cards">
              {protectionProducts.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                  </div>
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
