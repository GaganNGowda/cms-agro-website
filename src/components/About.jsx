import './About.css';
import nurseryImage from './images/WhatsApp Image 2025-09-30 at 23.27.20.jpeg';
import farmVisitImage from './images/WhatsApp Image 2025-10-01 at 00.10.10.jpeg';
import plantingImage from './images/WhatsApp Image 2025-10-01 at 00.10.11.jpeg';
import eventImage from './images/WhatsApp Image 2025-10-01 at 00.10.11 (2).jpeg';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

function About() {
  const { language } = useLanguage();
  
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">{getTranslation(language, 'about.title')}</h2>
            <div className="about-description">
              <p>
                {getTranslation(language, 'about.intro')}
              </p>
              
              <div className="highlight-box">
                <h3>🌳 {getTranslation(language, 'about.farmFootprint')}</h3>
                <p>
                  {getTranslation(language, 'about.farmFootprintDesc')}
                </p>
              </div>

              <div className="highlight-box">
                <h3>🤝 {getTranslation(language, 'about.partnership')}</h3>
                <p>
                  {getTranslation(language, 'about.partnershipDesc')}
                </p>
              </div>

              <div className="highlight-box">
                <h3>💼 {getTranslation(language, 'about.success')}</h3>
                <p>
                  {getTranslation(language, 'about.successDesc')}
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
              <div className="stat-label">{getTranslation(language, 'about.yearsExperience')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500K+</div>
              <div className="stat-label">{getTranslation(language, 'about.plantsSupplied')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5,500+</div>
              <div className="stat-label">{getTranslation(language, 'about.farmersSupported')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">{getTranslation(language, 'about.acresManaged')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
