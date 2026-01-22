<div align="center">

# Portfolio - Pruthvi Kauticwar

### A modern, responsive portfolio website built with vanilla web technologies

[![Live Site](https://img.shields.io/badge/Live-portfolio.kpruthvi.com-blue?style=for-the-badge)](https://portfolio.kpruthvi.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Cloudflare](https://img.shields.io/badge/Hosted_on-Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

</div>

---

## About

A professional portfolio website showcasing my work experience, technical skills, and projects. Built with a focus on performance, accessibility, and clean design - no frameworks, just pure HTML, CSS, and JavaScript.

**[View Live Site →](https://portfolio.kpruthvi.com)**

---

## Features

### Design & User Experience
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Theme Toggle** - Seamless dark/light mode switching with CSS custom properties
- **Print-Optimized** - Dedicated print-friendly resume view for easy PDF generation

### Technical
- **Contact Form** - Serverless contact form powered by Cloudflare Workers
- **SEO Optimized** - Complete with sitemap, meta tags, and semantic HTML
- **Fast & Lightweight** - No framework bloat, pure vanilla web technologies
- **Modern CSS** - CSS Grid, Flexbox, and custom properties for maintainable styles

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Styling** | CSS Custom Properties, Flexbox, Grid |
| **Hosting** | Cloudflare Pages (Static Hosting) |
| **Backend** | Cloudflare Workers (Contact Form API) |
| **Deployment** | Git-based CI/CD via Cloudflare |

---

## Project Structure

```
personal-portfolio/
│
├── index.html              # Main portfolio page
├── resume.html             # Interactive resume/CV
├── resume-print.html       # Print-optimized resume
├── contact.html            # Contact form page
│
├── css/                    # Stylesheets
│   ├── styles.css          # Global styles
│   └── ...                 # Component-specific styles
│
├── js/                     # JavaScript modules
│   ├── theme-toggle.js     # Dark/light mode logic
│   └── ...                 # Other interactive features
│
├── sitemap.xml             # SEO sitemap
└── LICENSE                 # MIT License
```

---

## Local Development

### Quick Start

**Option 1: Direct File Access**
```bash
# Simply open in your browser
open index.html
```

**Option 2: Local Server** (recommended)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with npx)
npx serve
```

Then navigate to `http://localhost:8000`

---

## Deployment

This project uses Cloudflare Pages for automatic deployments:

1. Push changes to the `main` branch
2. Cloudflare Pages automatically builds and deploys
3. Changes are live within seconds

No build process required - it's pure static HTML!

---

## Pages

| Page | URL | Description |
|------|-----|-------------|
| **Home** | `/` | Main portfolio showcasing projects and skills |
| **Resume** | `/resume.html` | Interactive resume/CV with full experience details |
| **Print Resume** | `/resume-print.html` | Print-optimized version for PDF generation |
| **Contact** | `/contact.html` | Contact form with serverless backend |

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with care by Pruthvi Kauticwar**

[Visit Portfolio](https://portfolio.kpruthvi.com) • [Report Bug](https://github.com/pruthvi2805/personal-portfolio/issues)

</div>
