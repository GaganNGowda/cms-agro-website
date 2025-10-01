import './About.css';
import nurseryImage from './images/WhatsApp Image 2025-09-30 at 23.27.20.jpeg';
import farmVisitImage from './images/WhatsApp Image 2025-10-01 at 00.10.10.jpeg';
import plantingImage from './images/WhatsApp Image 2025-10-01 at 00.10.11.jpeg';
import eventImage from './images/WhatsApp Image 2025-10-01 at 00.10.11 (2).jpeg';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Us</h2>
            <div className="about-description">
              <p>
                At <strong>Samrudhi Nursery & CMS Agro</strong>, our roots run deep. For 12 years, we have been dedicated to enhancing agricultural productivity and delivering quality, specializing in a complete farm-to-market ecosystem.
              </p>
              
              <div className="highlight-box">
                <h3>🌳 Our Farm Footprint</h3>
                <p>
                  We are not just suppliers; we are growers. We actively manage over 10 acres of high-yield guava and 5 acres of mango, along with other diverse fruit cultivations. This hands-on experience has made us a recognized leader and one of the largest commercial guava harvesters in Karnataka.
                </p>
              </div>

              <div className="highlight-box">
                <h3>🤝 A Partnership in Growth</h3>
                <p>
                  Our mission is to empower farmers. Through the Samrudhi Nursery, we have successfully supplied over <strong>500,000 top-quality plants</strong> (including our Red Diamond, Taiwan Light Pink, and Taiwan White guava varieties) and have provided dedicated 1-year growth guidance and support to a network of over <strong>5,500 farmers</strong>.
                </p>
              </div>

              <div className="highlight-box">
                <h3>💼 Your Success is Our Priority</h3>
                <p>
                  When you work with us, you leverage our expertise as both a large-scale grower and a committed supplier, ensuring your success is our priority.
                </p>
              </div>
            </div>

            <div className="about-gallery">
              <div className="gallery-grid">
                <img src={nurseryImage} alt="Samrudhi Nursery Plants" className="gallery-image" />
                <img src={farmVisitImage} alt="Farm Visit" className="gallery-image" />
                <img src={plantingImage} alt="Planting Ceremony" className="gallery-image" />
                <img src={eventImage} alt="CMS Agro Event" className="gallery-image" />
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">12+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Plants Supplied</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5,500+</div>
              <div className="stat-label">Farmers Supported</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Acres Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
