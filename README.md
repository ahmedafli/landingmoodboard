# 🛋️ Moodboard AI — Landing Page
 
> The marketing site for **Moodboard AI**, a SaaS platform that helps interior designers turn product URLs into client-ready moodboard presentations in minutes, not hours.
 
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase&logoColor=white)
![Polarsh](https://img.shields.io/badge/Polars-00A8E8?style=flat-square&logo=python&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-Workflows-F46800?style=flat-square&logo=n8n&logoColor=white)
 
---
 
## 📖 About
 
Most interior designers spend 3–4 hours manually building moodboards for clients — scraping product pages, organizing images, and formatting a presentation by hand. **Moodboard AI** automates that entire workflow, cutting creation time down to under 30 minutes.
 
This repo is the **landing page**: the public-facing site where designers discover the product, see it in action, and sign up.
 
**🔗 Live site:** [moodboard creator](https://moodboardaccess.doubleadigitalfuture.com/)
 
## ✨ What the product does
 
*(Shown on the landing page — the actual app lives in a separate repo.)*
 
- **URL-to-moodboard automation** — paste product URLs, get a client-ready moodboard presentation
- **AI room inpainting** — designers upload a photo of an empty room, mask the area they want to furnish, and AI generates realistic 3D furniture placed directly into that space
- **Drag-and-drop editing** — designers can rearrange and customize moodboards visually
- **Pricing automation** — product pricing pulled and synced via Google Sheets
- **Client-ready output** — polished presentations designers can send directly
## 🎯 Landing Page Sections
 
- Hero with product demo
- Problem/solution walkthrough (before vs. after: 3-4 hours → 30 minutes)
- Feature highlights (AI visualization, drag-and-drop, pricing sync)
- Social proof / testimonials
- Pricing plans (Stripe-powered checkout)
- FAQ
- Sign-up / CTA

## 🎥 Demo

▶️ **[Watch the YouTube Demo](https://www.youtube.com/watch?v=BNLhRGwF7AY)**
<br><br>

## 📸 Screenshots

<img width="1890" height="917" alt="Image" src="https://github.com/user-attachments/assets/57ba211b-13de-4836-8a18-22bc299494cf" />
<br><br>
<img width="1892" height="915" alt="Image" src="https://github.com/user-attachments/assets/b7003a95-99c9-4b84-b8cd-74c39371dc87" />
<br><br>
<img width="1878" height="914" alt="Image" src="https://github.com/user-attachments/assets/5295bc5c-4cc6-47d4-bf03-d8f071cf14d2" />
<br><br>
<img width="1872" height="914" alt="Image" src="https://github.com/user-attachments/assets/e87ceb25-9440-4a44-afd1-754d12bd3e6b" />
<br><br>
<img width="1863" height="913" alt="Image" src="https://github.com/user-attachments/assets/8009d74e-807b-4e13-abcc-cd6093f874e7" />
<br><br>


## 🛠️ Tech Stack
 
| Layer | Technology |
|---|---|
| Framework | Next.js |
| Styling | Tailwind CSS |
| Auth | Supabase Auth |
| Payments | Stripe (checkout + billing) |
| Analytics | *(add your provider, e.g. Vercel Analytics, PostHog)* |
| Hosting | Vercel |
 
## 🚀 Getting Started
 
### Prerequisites
- Node.js 18+
- A Supabase project (for auth-gated CTAs, if applicable)
- Polarsh account (for pricing/checkout integration)
### Setup
 
```bash
# clone the repo
git clone https://github.com/<your-username>/moodboard-landing.git
cd moodboard-landing
 
# install dependencies
npm install
 
# set environment variables
cp .env.example .env.local
# fill in: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, STRIPE_PUBLISHABLE_KEY
 
# run the dev server
npm run dev
```
 
The site will be running at `http://localhost:3000`.
 
### Build for production
 
```bash
npm run build
npm start
```
 
## 📁 Project Structure
 
```
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
├── public/              # Static assets (images, demo GIF/video)
├── styles/              # Global styles
└── .env.example         # Environment variable template
```
 
*(Adjust to match your actual folder layout.)*
 
## 📈 Results
 
- Reduced moodboard creation time by **80%** (3-4 hours → under 30 minutes)
- First paying client acquired
## 📄 License
 
This project is proprietary — all rights reserved.
*(Change this if you intend to open-source parts of it.)*
 
## 👤 Author
 
**Ahmed Afli**
AI Engineer & Full-Stack Developer
[Portfolio](https://doubleadigitalfuture.com)
