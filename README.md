# Mtech Solutions — Industrial Automation & Press Machine Experts

> **A modern, SEO-optimised React web application** for Mtech Solutions — an industrial automation solution provider, system integrator, panel manufacturer, and press machine service specialist.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) (via [Vite 7](https://vitejs.dev/)) |
| Routing | [React Router DOM v7](https://reactrouter.com/) |
| Animations | [Framer Motion v12](https://www.framer.motion.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Styling | Vanilla CSS (Blueprint Dark Design System) |
| Linting | ESLint 9 with React Hooks & React Refresh plugins |
| Build Tool | Vite (ES Modules) |

---

## 📁 Project Structure

```
Mtech-Solutions/
├── index.html                  # HTML shell with SEO meta tags & JSON-LD
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint flat config
├── package.json
│
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root component — Router + layout
    ├── index.css               # Global design tokens (Blueprint Dark theme)
    │
    ├── components/
    │   ├── Navbar.jsx          # Responsive navigation bar
    │   ├── Navbar.css
    │   ├── Footer.jsx          # Site-wide footer
    │   └── Footer.css
    │
    ├── pages/
    │   ├── Home.jsx            # Landing page — hero video, stats, services, gallery
    │   ├── Home.css
    │   ├── AboutUs.jsx         # Company story, team, milestones
    │   ├── AboutUs.css
    │   ├── ProductDistribution.jsx   # LV switchgear, PLCs, VFDs, and more
    │   ├── IntegrationServices.jsx   # PLC / SCADA / Robot integration
    │   ├── PanelManufacturing.jsx    # MCC, PCC, custom panels
    │   ├── IIoTSolutions.jsx         # Condition monitoring, predictive maintenance
    │   ├── PressMachineServices.jsx  # Overhaul, retrofit, spare parts
    │   ├── MeasurementSolutions.jsx  # Precision metrology instruments
    │   ├── IndustriesWeServe.jsx     # Automotive, stamping, heavy industry
    │   ├── TechnologyExpertise.jsx   # Brand certifications & capabilities
    │   ├── Contact.jsx               # Enquiry form & contact details
    │   └── ServicePages.css          # Shared CSS for all service pages
    │
    └── assets/
        └── machines/           # SEO-optimised media assets
            ├── mtech-solutions-industrial-automation-press-machine-hero.mp4
            ├── mtech-electrical-control-panel-delta-plc-wiring.webp
            ├── mtech-sandsun-overload-protector-hydraulic-pump-unit.webp
            ├── mtech-hydraulic-pump-solenoid-valve-assembly-closeup.webp
            └── mtech-rotary-encoder-proximity-sensor-automation.webp
```

---

## 🌐 Page Routes

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Hero video BG, stats, services grid, press machine slideshow, image gallery, tech partners |
| `/about` | `AboutUs` | Company history, mission, team & milestones |
| `/products` | `ProductDistribution` | LV switchgears, PLCs, HMIs, VFDs, servo drives |
| `/integration` | `IntegrationServices` | PLC/HMI/SCADA development, robot integration |
| `/manufacturing` | `PanelManufacturing` | MCC, PCC, automation & custom control panels |
| `/iiot` | `IIoTSolutions` | Condition monitoring, predictive maintenance, traceability |
| `/press-machines` | `PressMachineServices` | Overhaul, clutch/brake repair, feeder retrofits |
| `/measurement` | `MeasurementSolutions` | Vernier, digital gauges, laser-based systems |
| `/industries` | `IndustriesWeServe` | Automotive, stamping, heavy manufacturing |
| `/expertise` | `TechnologyExpertise` | Siemens, Yaskawa, Rockwell certifications |
| `/contact` | `Contact` | Enquiry form, phone, WhatsApp, email |

---

## 🎨 Design System — Blueprint Dark

All pages follow the **Blueprint Dark** design language defined in `src/index.css`:

- **Background**: Deep navy `#080A14` (primary), `#0D1020` (secondary)
- **Accent Cyan**: `#00D4FF` — primary interactive & highlight colour
- **Accent Magenta**: `#E600E6` — brand accent & CTA colour
- **Typography**: `Rajdhani` (headings), `Inter` (body), `JetBrains Mono` (monospace labels)
- **Motion**: Subtle hover lifts, fade-in animations, smooth gradient transitions
- **Cards**: Dark-bordered with glassmorphism-lite elevation on hover

---

## 🏠 Homepage Features

### Hero Section
- Full-screen **autoplay video background** (`mtech-solutions-industrial-automation-press-machine-hero.mp4`)
- Dark translucent overlay for text contrast
- Headline, subheading, 3 CTA buttons (Quote / Call / WhatsApp)
- Trust badges (ISO-Compliant, 500+ Projects, 24/7 Support)

### Stats Strip
- 4-column animated counter grid: 500+ Projects · 15+ Years · 50+ Clients · 24/7 Support

### Core Services Grid
- 4 service cards: Product Distribution, Integration, Panel Manufacturing, IIoT

### Press Machine Section (Side Slideshow)
- Left: service description, brand tags, feature checklist, CTA
- Right: **Auto-advancing image slideshow** (4 machine images, dot nav, caption overlay)

### "Our Work in Action" Gallery
- Full-width featured image (520px) with **prev/next arrow navigation**
- Caption + slide counter (e.g., `5 / 9`) in overlay
- **9-image thumbnail strip** — active thumb highlighted in cyan
- Dot indicators that expand on active state
- Auto-advances every **4 seconds**

### Why Choose Mtech
- 6-card grid: Certified Expertise, Turnkey Solutions, Quality Guaranteed, 4 Pillars, Support, Fast Turnaround

### Measurement Solutions
- Split layout with metrology instrument categories

### Technology Partners
- Brand card grid: Siemens, Schneider, Yaskawa, Omron, Rockwell, Delta, ABB, Mitsubishi, LAPP

### Final CTA Strip
- Full-width gradient strip with Quote and WhatsApp CTAs

---

## 🔍 SEO Implementation

### Structured Data (JSON-LD)
Every page includes inline `<script type="application/ld+json">` with:
- `Organization` schema on the homepage
- `LocalBusiness` + `OfferCatalog` schema on the homepage
- `Service` schema with address on each service page

### Meta Tags
- Unique `<title>` and `<meta name="description">` per page
- Open Graph tags for social sharing

### Media Asset Naming
All media files follow **SEO-optimised hyphen-separated naming**:
```
mtech-{subject}-{context}-{type}.{ext}
```
Example: `mtech-electrical-control-panel-delta-plc-wiring.webp`

### Semantic HTML
- Single `<h1>` per page
- Proper heading hierarchy (`h1 → h2 → h3 → h4`)
- ARIA labels on all interactive elements
- `<article>`, `<section>`, `<header>`, `<main>` semantic tags throughout

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Sirudevteam/Mtech-Solutions.git
cd Mtech-Solutions

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Starts Vite dev server at **http://localhost:5173** with Hot Module Replacement (HMR).

### Linting

```bash
npm run lint
```

### Production Build

```bash
npm run build
```

Outputs optimised static files to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🚀 Deployment

The project outputs a static site from `npm run build`. It can be deployed to any static hosting platform:

| Platform | Command / Notes |
|---|---|
| **Vercel** | Connect GitHub repo → auto-deploys on push |
| **Netlify** | Drag & drop `dist/` folder or connect repo |
| **GitHub Pages** | Use `vite-plugin-gh-pages` or manual `dist/` push |
| **cPanel / Apache** | Upload contents of `dist/` to `public_html/` |

> **Note:** Since the app uses client-side routing (React Router), configure your host to redirect all requests to `index.html`. On Apache, use a `.htaccess` rewrite rule.

---

## 📞 Business Contact

| Detail | Value |
|---|---|
| Company | Mtech Solutions |
| Specialisation | Industrial Automation, System Integration, Panel Manufacturing, IIoT, Press Machine Services |
| GitHub | [Sirudevteam/Mtech-Solutions](https://github.com/Sirudevteam/Mtech-Solutions) |

---

## 📄 License

This project is proprietary. All rights reserved © Mtech Solutions 2026.
