# Pon Abinaya S — Portfolio Website

Personal portfolio showcasing machine learning projects, full-stack MERN applications, internships, certifications, and technical skills.

**Live site:** Deploy to Vercel/Netlify and set `VITE_SITE_URL` to your production URL.

## Features

- Responsive design with dark/light theme toggle
- Hero with contact info, professional summary, and dual resume downloads
- About Me section with career objectives and soft skills
- 9 project showcases with GitHub stats, screenshots, demos, and documentation
- Experience timeline with technologies and LinkedIn LoR links
- Skills, education, GitHub activity, and certifications
- Contact form powered by EmailJS
- SEO meta tags, Open Graph, sitemap, and robots.txt

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite, TailwindCSS, shadcn/ui
- **Routing:** React Router v6
- **Email:** EmailJS (`@emailjs/browser`)
- **Testing:** Vitest, Testing Library
- **Theme:** next-themes

## Prerequisites

- Node.js 18+ (or Bun)
- npm, pnpm, or bun package manager
- EmailJS account (free tier) for the contact form

## Setup

1. **Clone the repository**

```bash
git clone https://github.com/Abinayasuresh196/pon-s-portfolio-haven.git
cd pon-s-portfolio-haven
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Copy the example file and fill in your EmailJS credentials:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_SITE_URL` | Production URL (for meta tags) |

Get credentials at [emailjs.com](https://www.emailjs.com/).

4. **Start development server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest tests |
| `npm run test:watch` | Run tests in watch mode |

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Project Settings → Environment Variables
4. Deploy

### Netlify

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Site Settings

## Project Structure

```
src/
├── components/     # UI components (Hero, Projects, Experience, etc.)
├── data/           # Site configuration (contact info, constants)
├── pages/          # Route pages
├── hooks/          # Custom React hooks
└── test/           # Vitest tests
public/
├── projects/       # Project screenshots and demo videos
├── docs/           # Project documentation PDFs
├── certificates/   # Certification images
└── resume.pdf      # Downloadable resumes
```

## Contact

- **Email:** ponuzz196@gmail.com
- **LinkedIn:** [pon-abinaya-38ab67290](https://www.linkedin.com/in/pon-abinaya-38ab67290)
- **GitHub:** [Abinayasuresh196](https://github.com/Abinayasuresh196)
- **Phone:** +91 9360625774
- **Location:** Tirunelveli, Tamil Nadu, India

## License

Private portfolio — all rights reserved © Pon Abinaya S
