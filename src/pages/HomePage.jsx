import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

function HomePage() {
  return (
    <>
      <SEO 
        title="CMS Agro - Premium Guava Plants & Harvest Protection | CMS Estate"
        description="Leading supplier of premium Taiwan guava plants and harvest protection solutions. 12+ years experience, 500K+ plants supplied. Contact CMS Agro for quality agricultural products in Karnataka."
        keywords="CMS Agro, CMS Estate, Samrudhi Nursery, Taiwan guava, Red Diamond guava, agricultural supplies Karnataka, fruit protection, farming solutions"
      />
      <Hero />
      <About />
      <Products />
      <Contact />
    </>
  );
}

export default HomePage;
