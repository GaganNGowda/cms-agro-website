import { useEffect } from 'react';

function SEO({ 
  title = 'CMS Agro - Premium Guava Plants & Harvest Protection Solutions', 
  description = 'Leading supplier of premium Taiwan guava plants (Red Diamond, Gold, White) and harvest protection solutions. 12+ years experience, 500K+ plants supplied, supporting 5,500+ farmers in Karnataka.',
  keywords = 'CMS Agro, CMS Estate, Samrudhi Nursery, Taiwan guava plants, Red Diamond guava, guava nursery Karnataka, fruit protection bags, weed mats, EPE foam nets, mango protection, agricultural supplies, farming solutions, guava cultivation, harvest protection',
  image = '/og-image.jpg',
  url = 'https://cmsagro.com'
}) {
  
  useEffect(() => {
    // Set title
    document.title = title;
    
    // Set meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'CMS Agro' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      
      // Additional SEO
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'CMS Agro' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
    ];
    
    metaTags.forEach(tag => {
      let element = null;
      
      if (tag.name) {
        element = document.querySelector(`meta[name="${tag.name}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('name', tag.name);
          document.head.appendChild(element);
        }
        element.setAttribute('content', tag.content);
      } else if (tag.property) {
        element = document.querySelector(`meta[property="${tag.property}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('property', tag.property);
          document.head.appendChild(element);
        }
        element.setAttribute('content', tag.content);
      } else if (tag.httpEquiv) {
        element = document.querySelector(`meta[http-equiv="${tag.httpEquiv}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('http-equiv', tag.httpEquiv);
          document.head.appendChild(element);
        }
        element.setAttribute('content', tag.content);
      }
    });
    
    // Add JSON-LD structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "CMS Agro",
      "alternateName": ["CMS Estate", "Samrudhi Nursery"],
      "description": description,
      "url": url,
      "telephone": "+919796656979",
      "email": "cmsagrofresh@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.9716",
        "longitude": "77.5946"
      },
      "openingHours": "Mo-Sa 09:00-18:00",
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "250"
      },
      "sameAs": [
        "https://www.cmsagro.com"
      ]
    });
    
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    document.head.appendChild(script);
    
  }, [title, description, keywords, image, url]);
  
  return null;
}

export default SEO;
