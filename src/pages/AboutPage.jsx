import './AboutPage.css';
import SEO from '../components/SEO';
import nurseryImage from '../components/images/WhatsApp Image 2025-09-30 at 23.27.20.jpeg';
import farmVisitImage from '../components/images/WhatsApp Image 2025-10-01 at 00.10.10.jpeg';
import plantingImage from '../components/images/WhatsApp Image 2025-10-01 at 00.10.11.jpeg';
import eventImage from '../components/images/WhatsApp Image 2025-10-01 at 00.10.11 (2).jpeg';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

function AboutPage() {
  const { language } = useLanguage();
  
  return (
    <>
      <SEO 
        title="About CMS Agro & Samrudhi Nursery - 12+ Years of Agricultural Excellence"
        description="Learn about CMS Agro's journey. 12+ years of experience, 500K+ plants supplied, supporting 5,500+ farmers. Premium guava cultivation and harvest protection solutions in Karnataka."
        keywords="About CMS Agro, Samrudhi Nursery history, agricultural company Karnataka, guava farming experts, CMS Estate background"
      />
      
      <div className="about-page">
        <div className="about-hero">
          <div className="container">
            <h1 className="page-title">{getTranslation(language, 'about.pageTitle')}</h1>
            <p className="page-subtitle">{getTranslation(language, 'about.pageSubtitle')}</p>
          </div>
        </div>

        <section className="about-story section">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2 className="section-title">{getTranslation(language, 'about.ourStory')}</h2>
                <p>
                  {getTranslation(language, 'about.storyPara1')}
                </p>
                <p>
                  {getTranslation(language, 'about.storyPara2')}
                </p>
              </div>
              <div className="story-image">
                <img src={nurseryImage} alt="Samrudhi Nursery" />
              </div>
            </div>
          </div>
        </section>

        <section className="mission-vision section">
          <div className="container">
            <div className="mv-grid">
              <div className="mv-card">
                <div className="mv-icon">🎯</div>
                <h3>{getTranslation(language, 'about.ourMission')}</h3>
                <p>
                  {getTranslation(language, 'about.missionText')}
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-icon">👁️</div>
                <h3>{getTranslation(language, 'about.ourVision')}</h3>
                <p>
                  {getTranslation(language, 'about.visionText')}
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-icon">💎</div>
                <h3>{getTranslation(language, 'about.ourValues')}</h3>
                <p>
                  {getTranslation(language, 'about.valuesText')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="achievements section">
          <div className="container">
            <h2 className="section-title text-center">{getTranslation(language, 'about.achievements')}</h2>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-number">12+</div>
                <div className="achievement-label">{getTranslation(language, 'about.yearsExperience')}</div>
                <p>{getTranslation(language, 'about.achievementDesc1')}</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-number">500K+</div>
                <div className="achievement-label">{getTranslation(language, 'about.plantsSupplied')}</div>
                <p>{getTranslation(language, 'about.achievementDesc2')}</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-number">5,500+</div>
                <div className="achievement-label">{getTranslation(language, 'about.farmersSupported')}</div>
                <p>{getTranslation(language, 'about.achievementDesc3')}</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-number">15+</div>
                <div className="achievement-label">{getTranslation(language, 'about.acresManaged')}</div>
                <p>{getTranslation(language, 'about.achievementDesc4')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="farm-footprint section">
          <div className="container">
            <h2 className="section-title">Our Farm Footprint</h2>
            <div className="footprint-content">
              <div className="footprint-text">
                <p>
                  We are not just suppliers; we are growers. We actively manage over <strong>10 acres of high-yield guava</strong> and <strong>5 acres of mango</strong>, along with other diverse fruit cultivations.
                </p>
                <p>
                  This hands-on experience has made us a recognized leader and one of the largest commercial guava harvesters in Karnataka. We understand farming because we live it every day.
                </p>
                <ul className="footprint-list">
                  <li>✓ 10 acres of premium guava cultivation</li>
                  <li>✓ 5 acres of mango orchards</li>
                  <li>✓ Diverse fruit cultivation expertise</li>
                  <li>✓ Largest commercial guava harvester in Karnataka</li>
                </ul>
              </div>
              <div className="footprint-images">
                <img src={farmVisitImage} alt="Farm Visit" />
                <img src={plantingImage} alt="Planting Ceremony" />
              </div>
            </div>
          </div>
        </section>

        <section className="partnership section">
          <div className="container">
            <div className="partnership-content">
              <div className="partnership-image">
                <img src={eventImage} alt="CMS Agro Event" />
              </div>
              <div className="partnership-text">
                <h2 className="section-title">A Partnership in Growth</h2>
                <p>
                  Our mission is to empower farmers. Through the Samrudhi Nursery, we have successfully supplied over <strong>500,000 top-quality plants</strong> (including our Red Diamond, Taiwan Light Pink, and Taiwan White guava varieties).
                </p>
                <p>
                  We provide dedicated <strong>1-year growth guidance and support</strong> to a network of over <strong>5,500 farmers</strong>. We don't just sell plants; we partner in your success.
                </p>
                <div className="partnership-cta">
                  <a href="/contact" className="btn btn-primary">Partner With Us</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose section">
          <div className="container">
            <h2 className="section-title text-center">Why Choose CMS Agro?</h2>
            <div className="why-grid">
              <div className="why-card">
                <div className="why-icon">🌱</div>
                <h3>Premium Quality</h3>
                <p>Only the finest Taiwan guava varieties and protection solutions</p>
              </div>
              <div className="why-card">
                <div className="why-icon">🤝</div>
                <h3>Expert Support</h3>
                <p>1-year growth guidance and ongoing farmer assistance</p>
              </div>
              <div className="why-card">
                <div className="why-icon">🏆</div>
                <h3>Proven Track Record</h3>
                <p>12+ years of excellence and 5,500+ satisfied farmers</p>
              </div>
              <div className="why-card">
                <div className="why-icon">🚀</div>
                <h3>Innovation</h3>
                <p>Latest agricultural techniques and protection technologies</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutPage;
