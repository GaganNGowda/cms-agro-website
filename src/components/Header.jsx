import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImage from './images/Png-04.png';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logoImage} alt="CMS Agro" className="logo-image" />
          </Link>
          
          <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" className={isActive('/')} onClick={closeMenu}>{getTranslation(language, 'nav.home')}</Link></li>
            <li><Link to="/about" className={isActive('/about')} onClick={closeMenu}>{getTranslation(language, 'nav.about')}</Link></li>
            <li><Link to="/products" className={isActive('/products')} onClick={closeMenu}>{getTranslation(language, 'nav.products')}</Link></li>
            <li><Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>{getTranslation(language, 'nav.contact')}</Link></li>
            <li><a href="https://cmsagrofresh.com" target="_blank" rel="noopener noreferrer" className="cta-btn">{getTranslation(language, 'nav.cmsEstate')}</a></li>
            <li className="lang-switcher-item"><LanguageSwitcher /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
