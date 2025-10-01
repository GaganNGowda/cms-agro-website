import Contact from '../components/Contact';
import SEO from '../components/SEO';
import './ContactPage.css';

function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact CMS Agro - Get in Touch for Agricultural Solutions"
        description="Contact CMS Agro for premium guava plants and harvest protection solutions. Call +91 979-6656-979 or email cmsagrofresh@gmail.com. Located in Karnataka, India."
        keywords="contact CMS Agro, CMS Estate contact, Samrudhi Nursery contact, agricultural supplier Karnataka, guava plants inquiry"
      />
      
      <div className="contact-page">
        <div className="contact-hero">
          <div className="container">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">Let's Grow Together</p>
          </div>
        </div>

        <Contact />

        <section className="contact-cta section">
          <div className="container">
            <div className="cta-box">
              <h2>Ready to Start Your Agricultural Journey?</h2>
              <p>Contact us today for bulk orders, consultations, or any inquiries. Our team is here to help you succeed.</p>
              <div className="cta-buttons">
                <a href="tel:+919796656979" className="btn btn-primary">
                  📞 Call Now
                </a>
                <a href="mailto:cmsagrofresh@gmail.com" className="btn btn-secondary">
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactPage;
