import './Footer.css';
import logoImage from './images/Png-04.png';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logoImage} alt="CMS Agro" className="footer-logo-image" />
            </div>
            <p className="footer-description">
              {getTranslation(language, 'footer.description')}
            </p>
          </div>

          <div className="footer-section">
            <h4>{getTranslation(language, 'footer.quickLinks')}</h4>
            <ul className="footer-links">
              <li><Link to="/">{getTranslation(language, 'nav.home')}</Link></li>
              <li><Link to="/about">{getTranslation(language, 'nav.about')}</Link></li>
              <li><Link to="/products">{getTranslation(language, 'nav.products')}</Link></li>
              <li><Link to="/contact">{getTranslation(language, 'nav.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{getTranslation(language, 'footer.ourProducts')}</h4>
            <ul className="footer-links">
              <li>{getTranslation(language, 'products.nurserySubtitle')}</li>
              <li>{getTranslation(language, 'products.weedMats')}</li>
              <li>{getTranslation(language, 'products.fruitBags')}</li>
              <li>{getTranslation(language, 'products.foamNets')}</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{getTranslation(language, 'footer.contactInfo')}</h4>
            <ul className="footer-links">
              <li>📧 cmsagrofresh@gmail.com</li>
              <li>📱 +91 979-6656-979</li>
              <li>🌐 www.cmsagrofresh.com</li>
              <li>📍 {getTranslation(language, 'contact.locationValue')}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} CMS Agro. All rights reserved.</p>
          <p className="footer-tagline">{getTranslation(language, 'footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
