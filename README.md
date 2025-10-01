# CMS Agro Website 🌱

A modern, responsive React website for CMS Agro - showcasing premium guava plants and harvest protection solutions.

## Features

- ✨ Modern and clean UI design
- 📱 Fully responsive (mobile and desktop compatible)
- 🎨 Beautiful color scheme matching CMS Agro branding
- 🚀 Fast performance with React + Vite
- 🌊 Smooth animations and transitions
- 📧 Contact form integration
- 🛡️ Product showcase sections

## Sections

1. **Hero Section** - Eye-catching landing with animated cards
2. **About Us** - Company history and achievements
3. **Products** - Nursery plants and harvest protection solutions
4. **Contact** - Contact information and inquiry form
5. **Footer** - Quick links and company info

## Tech Stack

- React 19
- Vite
- CSS3 with CSS Variables
- Responsive Design

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

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `cms-agro-website`
2. Do NOT initialize with README (we already have one)

### Step 2: Initialize Git and Push

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: CMS Agro website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/cms-agro-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build your project
2. Create a `gh-pages` branch
3. Deploy to GitHub Pages

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll to **Pages** section
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

Your website will be live at: `https://YOUR_USERNAME.github.io/cms-agro-website/`

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

## Contact

- Website: [www.cmsagrofresh.com](https://www.cmsagrofresh.com)
- Email: cmsagrofresh@gmail.com
- Phone: +91 979-6656-979

## License

© 2025 CMS Agro. All rights reserved.
