# Personal Website / Portfolio

A professional, customizable portfolio framework built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and a **FastAPI** Python backend.

## Features

- **Modern stack** — Next.js App Router, React 19, TypeScript, Tailwind CSS
- **Python backend** — FastAPI for contact form handling and dynamic content API
- **Fully customizable** — Edit one config file to personalize your entire site
- **Professional sections** — Hero, About, Skills, Projects, Experience, Contact
- **Responsive design** — Mobile-first with smooth animations (Framer Motion)
- **Dark theme** — Clean, developer-focused aesthetic
- **SEO ready** — Metadata, Open Graph tags built in

## Project Structure

```
personal-website/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   ├── layout/       # Header, Footer
│   │   └── sections/     # Hero, About, Skills, etc.
│   ├── config/
│   │   └── site.ts       # ⭐ Main customization file
│   ├── lib/              # Utilities
│   └── types/            # TypeScript interfaces
├── backend/
│   ├── app/
│   │   ├── main.py       # FastAPI entry point
│   │   ├── routers/      # API routes
│   │   └── services/     # Email, etc.
│   └── content/
│       └── site.json     # Dynamic content (optional)
└── package.json
```

## Quick Start

### 1. Customize your site

Edit `src/config/site.ts` with your personal information:

```typescript
export const siteConfig: SiteConfig = {
  profile: {
    name: "Your Name",
    title: "Your Title",
    tagline: "Your tagline here",
    email: "you@example.com",
    // ...
  },
  // Update skills, projects, experience arrays
};
```

Toggle sections on/off:

```typescript
sections: {
  hero: true,
  about: true,
  skills: true,
  projects: true,
  experience: true,
  contact: true,
},
```

### 2. Install & run frontend

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Install & run backend

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

API docs: [http://localhost:8000/docs](http://localhost:8000/docs)

### 4. Environment setup

```bash
# Frontend (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:8000

# Backend (backend/.env)
CORS_ORIGINS=http://localhost:3000
NOTIFY_EMAIL=your@email.com
# Optional SMTP for email notifications
```

## Customization Guide

| What to change | Where |
|---|---|
| Name, title, bio | `src/config/site.ts` → `profile`, `aboutText` |
| Skills & proficiency | `src/config/site.ts` → `skills` |
| Projects | `src/config/site.ts` → `projects` |
| Work history | `src/config/site.ts` → `experience` |
| Social links | `src/config/site.ts` → `social` |
| Navigation | `src/config/site.ts` → `navigation` |
| Show/hide sections | `src/config/site.ts` → `sections` |
| Colors & theme | `tailwind.config.ts`, `globals.css` |
| Contact email (SMTP) | `backend/.env` |

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/content` | Dynamic site content from JSON |
| POST | `/api/contact` | Submit contact form |

## Deployment

**Frontend (Vercel recommended):**
```bash
npm run build
```

**Backend (Railway, Render, or any Python host):**
```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

Set `NEXT_PUBLIC_API_URL` to your deployed API URL in production.

## Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons
- **Backend:** Python 3.11+, FastAPI, Pydantic, Uvicorn
- **Tooling:** ESLint, PostCSS, Autoprefixer

## License

MIT — use freely for your personal portfolio.
