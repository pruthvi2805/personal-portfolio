# Portfolio - Pruthvi Kauticwar

A professional portfolio website showcasing work experience, skills, and projects.

---

## Live Site

https://portfolio.kpruthvi.com

---

## Features

- Responsive design (desktop + mobile)
- Dark/light mode toggle
- Print-optimized resume view
- Contact form with Cloudflare Worker backend
- SEO setup (sitemap, meta tags)

---

## Pages

- `/` - Home/portfolio
- `/resume.html` - Resume/CV
- `/resume-print.html` - Print-friendly resume
- `/contact.html` - Contact form

---

## Tech Stack

- Vanilla HTML, CSS, JavaScript
- CSS custom properties for theming
- Cloudflare Pages (static hosting)
- Cloudflare Workers (contact form backend)

---

## Structure

```
personal-portfolio/
├── index.html          ← Portfolio home
├── resume.html         ← Resume/CV
├── resume-print.html   ← Print-friendly resume
├── contact.html        ← Contact form
├── css/
├── js/
├── sitemap.xml
└── LICENSE
```

---

## Local Development

Open `index.html` directly in a browser, or run a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`

---

## Deployment

Push to `main` branch → Cloudflare Pages auto-deploys

---

## License

MIT License - see [LICENSE](LICENSE)
