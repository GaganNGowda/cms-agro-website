# CMS Agro Website 🌱

A premium, SEO-optimized, multi-page React website for CMS Agro (CMS Estate) - showcasing premium guava plants and harvest protection solutions.

## 🚀 Features

### Design & UX
- ✨ **Modern Professional UI** - Premium design with glassmorphism effects
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🎨 **Brand-Consistent** - CMS Agro teal/green color scheme
- 🌊 **Smooth Animations** - Floating cards, hover effects, page transitions
- 🎯 **Intuitive Navigation** - Multi-page routing with active link indicators

### Performance & SEO
- ⚡ **Lightning Fast** - Vite + React 19 for optimal performance
- 🔍 **SEO Optimized** - Comprehensive meta tags, structured data
- 🗺️ **Sitemap & Robots.txt** - Search engine friendly
- 📊 **Schema Markup** - Rich snippets for better search visibility
- 🎯 **Keyword Optimized** - Ranks for "CMS Agro", "CMS Estate", "Samrudhi Nursery"

### Content
- 🏠 **Multi-Page Structure** - Home, About, Products, Contact
- 📸 **Image Gallery** - Professional farm and product photos
- 🛡️ **Product Showcase** - Detailed product information
- 📞 **Contact Integration** - QR code, form, contact details

## 📄 Pages

### 🏠 Home Page (`/`)
- Hero section with animated floating cards
- About section with statistics
- Products overview
- Contact section

### 📖 About Page (`/about`)
- Company story and history
- Mission, Vision, Values
- Achievements showcase
- Farm footprint details
- Partnership information
- Why choose CMS Agro

### 🛒 Products Page (`/products`)
- **Samrudhi Nursery** - Taiwan guava varieties (Red Diamond, Gold, White)
- **CMS Agro** - Harvest protection (Weed mats, Fruit bags, Foam nets)
- Quality guarantee section
- 1-year support information

### 📞 Contact Page (`/contact`)
- Contact form
- Phone, email, location details
- QR code for location
- Call-to-action section

## 🛠️ Tech Stack

- **React 19** - Latest React with improved performance
- **Vite** - Lightning-fast build tool
- **React Router DOM** - Multi-page navigation
- **CSS3** - Modern styling with CSS Variables
- **Google Fonts (Inter)** - Professional typography
- **SEO Components** - Dynamic meta tags and structured data

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the website.

### Build

```bash
npm run build
```

## 🚀 Deployment to Custom Domain (cmsagro.com)

### Prerequisites
- GitHub account
- Custom domain (cmsagro.com)
- Domain DNS access

### Step 1: Build and Deploy

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Step 2: Configure Custom Domain

1. **In your domain registrar (GoDaddy, etc.):**
   - Add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add CNAME record: `www` → `yourusername.github.io`

2. **In GitHub Repository Settings:**
   - Go to Settings → Pages
   - Enter custom domain: `cmsagro.com`
   - Enable "Enforce HTTPS"

### Step 3: Wait for DNS Propagation
- DNS changes can take 24-48 hours
- Check status: `dig cmsagro.com`

Your website will be live at: `https://cmsagro.com`

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-teal: #1a5f5f;
  --primary-green: #7fb069;
  --accent-yellow: #ffd93d;
  --text-dark: #2d3436;
  --text-light: #636e72;
}
```

### Content

- Update contact information in `src/components/Contact.jsx`
- Modify product details in `src/components/Products.jsx`
- Change about section in `src/components/About.jsx`

## 🔍 SEO Optimization

### Keywords Targeted
- CMS Agro
- CMS Estate  
- Samrudhi Nursery
- Taiwan guava plants
- Red Diamond guava
- Fruit protection solutions
- Agricultural supplies Karnataka

### SEO Features Implemented
1. **Meta Tags** - Title, description, keywords for each page
2. **Open Graph** - Social media sharing optimization
3. **Twitter Cards** - Enhanced Twitter sharing
4. **Structured Data** - Schema.org markup for rich snippets
5. **Sitemap.xml** - Search engine crawling
6. **Robots.txt** - Crawler directives
7. **Canonical URLs** - Prevent duplicate content
8. **Alt Tags** - Image SEO
9. **Semantic HTML** - Proper heading hierarchy
10. **Mobile Optimization** - Mobile-first indexing ready

### Google Search Console Setup
1. Verify ownership at [Google Search Console](https://search.google.com/search-console)
2. Submit sitemap: `https://cmsagro.com/sitemap.xml`
3. Monitor indexing and performance

### Performance Optimization
- ⚡ Vite for fast builds
- 🖼️ Optimized images
- 📦 Code splitting
- 🎯 Lazy loading
- 🗜️ Minification

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get your GA4 Measurement ID
2. Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📞 Contact

- **Website:** [cmsagro.com](https://cmsagro.com)
- **Email:** cmsagrofresh@gmail.com
- **Phone:** +91 979-6656-979
- **Location:** Karnataka, India

## 📝 License

© 2025 CMS Agro. All rights reserved.

---

**Built with ❤️ for farmers by CMS Agro Team**
