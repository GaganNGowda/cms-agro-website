import { useState } from 'react';
import './Header.css';
import logoImage from './images/Png-04.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <img src={logoImage} alt="CMS Agro" className="logo-image" />
          </div>
          
          <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('products')}>Products</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li><a href="https://cmsagrofresh.com" target="_blank" rel="noopener noreferrer" className="cta-btn">CMS Estate</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
