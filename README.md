# 🚀 Furkan — Portfolio

> **Production-ready personal portfolio** built with Next.js 16, Tailwind CSS 4, and Framer Motion. Deployed via multi-stage Docker build with Nginx reverse proxy and automated CI/CD.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Multi--Stage-2496ED?style=flat-square&logo=docker&logoColor=white)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Docker Deployment](#docker-deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [Security](#security)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Dark/Light Mode** | Smooth theme switching with CSS variables |
| 📱 **Responsive Design** | Mobile-first layout with glassmorphism effects |
| ⚡ **Framer Motion** | Smooth scroll animations and micro-interactions |
| 📬 **Contact Form** | Working API route with input validation & sanitization |
| 🐳 **Docker Ready** | Multi-stage build with standalone output |
| 🔒 **Nginx Proxy** | Security headers, gzip, static asset caching |
| 🛡️ **Security Scans** | Semgrep (SAST), Trivy (container), Gitleaks (secrets) |
| 🚀 **CI/CD** | Automated lint → build → scan → deploy pipeline |

---

## 🛠 Tech Stack

**Frontend:**
- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Framer Motion 12

**DevOps:**
- Docker (multi-stage, standalone)
- Nginx (reverse proxy)
- GitHub Actions (CI/CD)
- Semgrep, Trivy, Gitleaks (security)

---

## 📁 Project Structure

```
.
├── .github/workflows/ci.yml   # CI/CD pipeline
├── nginx/default.conf          # Nginx reverse proxy config
├── src/
│   └── app/
│       ├── api/contact/        # Contact form API route
│       ├── components/         # UI components
│       │   ├── Navbar.tsx      # Fixed nav with theme toggle
│       │   ├── Hero.tsx        # Landing section
│       │   ├── Projects.tsx    # Featured projects
│       │   ├── Skills.tsx      # Technical skills with bars
│       │   ├── Experience.tsx  # Timeline experience
│       │   ├── Education.tsx   # Education details
│       │   ├── Hobbies.tsx     # Beyond code
│       │   ├── Contact.tsx     # Contact form
│       │   └── Footer.tsx      # Footer
│       ├── globals.css         # Design system tokens
│       ├── layout.tsx          # Root layout with SEO
│       └── page.tsx            # Main page
├── Dockerfile                  # Multi-stage build
├── docker-compose.yml          # App + Nginx orchestration
├── .gitleaks.toml              # Secret scan config
├── .semgrep.yml                # SAST config
└── next.config.ts              # Next.js + security headers
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker compose up -d --build

# Access the app
open http://localhost

# View logs
docker compose logs -f

# Stop
docker compose down
```

**Architecture:**
```
Client → Nginx (:80) → Next.js App (:3000)
           │
           ├── Gzip compression
           ├── Security headers
           ├── Static asset caching
           └── Health check endpoint
```

---

## ⚙️ CI/CD Pipeline

```
Push to main
    │
    ├── 🔍 Lint & Type Check
    │       ├── ESLint
    │       └── TypeScript --noEmit
    │
    ├── 🏗️ Build
    │       └── next build
    │
    ├── 🛡️ Security Scan
    │       ├── Gitleaks (secrets)
    │       └── Semgrep (SAST)
    │
    ├── 🐳 Docker Build & Scan
    │       ├── Build image
    │       ├── Trivy scan
    │       └── Push to GHCR
    │
    └── 🚀 Deploy (VPS via SSH)
```

### Required Secrets

| Secret | Description |
|--------|-------------|
| `SEMGREP_APP_TOKEN` | Semgrep Cloud token (optional) |
| `VPS_HOST` | VPS IP address |
| `VPS_USER` | SSH username |
| `VPS_SSH_KEY` | SSH private key |

---

## 🔒 Security

This project integrates three security scanning tools:

1. **Gitleaks** — Scans git history for leaked secrets, API keys, and credentials
2. **Semgrep** — Static analysis with OWASP Top 10, Next.js, and TypeScript rulesets
3. **Trivy** — Container vulnerability scanning for the Docker image

Additional security measures:
- Non-root Docker user
- Security headers via Nginx and `next.config.ts`
- Input sanitization in API routes
- `poweredByHeader: false` in Next.js config

---

## 📄 License

MIT © Furkan
