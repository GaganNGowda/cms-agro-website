import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">🌱</div>
              <span className="logo-text">CMS Agro</span>
            </div>
            <p className="footer-description">
              Empowering farmers with premium plants and complete harvest protection solutions for over 12 years.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Products</h4>
            <ul className="footer-links">
              <li>Premium Guava Plants</li>
              <li>Weed Mats</li>
              <li>Fruit Protection Bags</li>
              <li>EPE Fruit Foam Nets</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li>📧 cmsagrofresh@gmail.com</li>
              <li>📱 +91 979-6656-979</li>
              <li>🌐 www.cmsagrofresh.com</li>
              <li>📍 Karnataka, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} CMS Agro. All rights reserved.</p>
          <p className="footer-tagline">The Future of Farming 🌾</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
