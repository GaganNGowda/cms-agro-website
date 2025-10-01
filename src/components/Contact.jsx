import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Contact Us</h2>
            <p className="contact-subtitle">
              Get in touch with us for premium plants and harvest protection solutions
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div className="contact-text">
                  <h4>Website</h4>
                  <a href="https://www.cmsagrofresh.com" target="_blank" rel="noopener noreferrer">
                    www.cmsagrofresh.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:cmsagrofresh@gmail.com">
                    cmsagrofresh@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <a href="tel:+919796656979">
                    +91 979-6656-979
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="qr-section">
              <div className="qr-placeholder">
                <div className="qr-icon">📱</div>
                <p>Scan for Location</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-card">
              <h3>Send us a Message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
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
