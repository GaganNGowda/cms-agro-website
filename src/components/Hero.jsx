import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            The Future of <span className="highlight">Farming</span>
          </h1>
          <p className="hero-subtitle">
            From premium plants to complete harvest protection, we provide a unified ecosystem for superior yield.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">Explore Products</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image">
          {/* <img src={fruitBagImage} alt="CMS Agro Fresh Products" className="hero-main-image" /> */}
          <div className="floating-card card-1">
            <span className="icon">🌱</span>
            <p>Premium Plants</p>
          </div>
          <div className="floating-card card-2">
            <span className="icon">🛡️</span>
            <p>Harvest Protection</p>
          </div>
          <div className="floating-card card-3">
            <span className="icon">🌾</span>
            <p>Superior Yield</p>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
