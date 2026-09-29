# Prajapati Road Lines — Website

A production-grade, animated Next.js 16 website for **Prajapati Road Lines**, a road transportation company based in Lucknow, UP, India.

---

## Tech Stack

| Layer | Library |
|---|---|
| Framework | Next.js 16.3 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | GSAP 3 + ScrollTrigger |
| Smooth Scroll | @studio-freight/lenis |
| Icons | lucide-react |
| Font | Plus Jakarta Sans (local woff2) |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# 1. Extract the zip
unzip prajapati-road-lines-v2.zip
cd prajapati-road-lines

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment

### Vercel (Recommended — free, zero config)

1. Push to GitHub (create a private repo)
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select the repo → Deploy
4. Done ✅ — auto SSL, CDN, preview deployments

### Other Platforms

**Netlify:**
```bash
npm run build
# Upload the .next folder + package.json
# Set build command: npm run build
# Set publish dir: .next
```

**Self-hosted (VPS/cPanel with Node):**
```bash
npm install
npm run build
npm start
# App runs on port 3000
# Use Nginx/Apache as reverse proxy
```

**Environment Variables (if needed):**
```bash
# .env.local (for future API integrations)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Project Structure

```
prajapati-road-lines/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Main page (all sections)
│   ├── globals.css         # Tailwind + custom CSS
│   ├── favicon.ico         # Browser tab icon (Prajapati logo)
│   ├── icon.png            # PWA icon
│   └── apple-icon.png      # iOS home screen icon
├── components/
│   ├── Navbar.tsx          # Sticky nav, mobile drawer, brand text
│   ├── Hero.tsx            # Fullscreen video hero + GSAP animations
│   ├── TrustStats.tsx      # Animated counters (26+ years, 15+ fleet)
│   ├── About.tsx           # Company story section
│   ├── Services.tsx        # 6 service cards
│   ├── Fleet.tsx           # Fleet section
│   ├── Network.tsx         # Pan-India network section
│   ├── WhyUs.tsx           # Why choose us
│   ├── Process.tsx         # How it works
│   ├── Team.tsx            # ← NEW: Team section with 3 member cards
│   ├── QuoteForm.tsx       # WhatsApp-powered enquiry form
│   ├── Contact.tsx         # Contact details
│   ├── Footer.tsx          # Footer with nav, services, contact
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   ├── StickyMobileCTA.tsx # Mobile bottom CTA bar
│   ├── SmoothScroll.tsx    # ← NEW: Lenis smooth scroll wrapper
│   └── GSAPReveal.tsx      # ← NEW: GSAP ScrollTrigger animations
├── lib/
│   ├── constants.ts        # ← Business info (phone, address, etc.)
│   ├── whatsapp.ts         # WhatsApp message builder
│   └── seo.ts              # SEO metadata
├── public/
│   ├── assets/
│   │   ├── images/         # All section images + team photos
│   │   ├── video/          # hero-loop.mp4 (hero background video)
│   │   └── logo/           # logo-icon.png, logo-white.png
│   └── fonts/              # Plus Jakarta Sans woff2 files
└── package.json
```

---

## Customization

### Update Business Info
Edit `lib/constants.ts`:
```ts
export const BUSINESS = {
  phone: "+91 9839322072",
  phoneDisplay: "+91 98393 22072",
  // ...
};
```

### Replace Hero Video
Replace `public/assets/video/hero-loop.mp4` with your own MP4.
- Recommended: 1920×1080, H.264, 10–20 sec loop, no audio, under 5MB

### Add/Edit Team Members
Edit `components/Team.tsx` → the `TEAM` array at the top.

### Change Colors
Edit `app/globals.css` → `:root` block:
```css
:root {
  --red: #b82025;      /* Brand accent */
  --black: #0b0d0f;    /* Background dark */
  --white: #f7f5f0;    /* Off-white */
}
```

---

## Team Section
- **Mr. Ram Kishore Prajapati** — Founder & Managing Director (center card, larger)
- **Mr. Kapil Prajapati** — Assistant Manager (left card)
- **Mr. Dharma Prajapati** — Operations Manager (right card)

Photos: `public/assets/images/team-*.jpg`

---

## Performance Notes
- Fonts loaded locally (no Google Fonts network request)
- Images use Next.js `<Image>` with lazy loading + WebP/AVIF
- Hero video uses `preload="auto"` + poster fallback
- GSAP/Lenis loaded async (no blocking)
- Tailwind v4 via PostCSS (no config file needed for v4)

---

Built by **StackYug** for Prajapati Road Lines.
