import './Contact.css';
import qrCodeImage from './images/cmslocation (2).png';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

function Contact() {
  const { language } = useLanguage();
  
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">{getTranslation(language, 'contact.title')}</h2>
            <p className="contact-subtitle">
              {getTranslation(language, 'contact.subtitle')}
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div className="contact-text">
                  <h4>{getTranslation(language, 'contact.website')}</h4>
                  <a href="https://www.cmsagrofresh.com" target="_blank" rel="noopener noreferrer">
                    www.cmsagrofresh.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>{getTranslation(language, 'contact.email')}</h4>
                  <a href="mailto:cmsagrofresh@gmail.com">
                    cmsagrofresh@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <h4>{getTranslation(language, 'contact.phone')}</h4>
                  <a href="tel:+919796656979">
                    +91 979-6656-979
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>{getTranslation(language, 'contact.location')}</h4>
                  <p>{getTranslation(language, 'contact.locationValue')}</p>
                </div>
              </div>
            </div>

            <div className="qr-section">
              <a href="https://maps.app.goo.gl/4Qr8rPDjYcr6toN17" target="_blank" rel="noopener noreferrer" className="qr-container">
                <img src={qrCodeImage} alt="Scan for Location" className="qr-code" />
                <p>{getTranslation(language, 'contact.scanLocation')}</p>
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-card">
              <h3>{getTranslation(language, 'contact.sendMessage')}</h3>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder={getTranslation(language, 'contact.yourName')} required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder={getTranslation(language, 'contact.yourEmail')} required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder={getTranslation(language, 'contact.yourPhone')} required />
                </div>
                <div className="form-group">
                  <textarea placeholder={getTranslation(language, 'contact.yourMessage')} rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  {getTranslation(language, 'contact.sendButton')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
