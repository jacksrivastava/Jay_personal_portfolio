# Jay Kumar Srivastava — Portfolio

Personal portfolio for **Jay Kumar Srivastava** (Technology Consultant & AI Specialist), built as a lightweight single-page application with **React**, **Vite**, and custom **CSS** (light & dark themes).

---

## Run Locally

```sh
npm install
npm run dev
```

The dev server starts on **`http://localhost:3000/`** (`vite --host 0.0.0.0 --port 3000`).

### Other Scripts

- `npm run build` — outputs the production bundle to `dist/`
- `npm run preview` — previews the production build locally

---

## Contact Form Setup (Any Host)

The `/contact` form is host-agnostic and works on **Vercel, Cloudflare Pages, GitHub Pages, Netlify, or `localhost`** without a custom backend:

1. Get a free access key from [Web3Forms](https://web3forms.com/) (or a form endpoint from [Formspree](https://formspree.io/)).
2. Copy `.env.example` to `.env` in the project root:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
   *(Or set `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id`.)*
3. Restart `npm run dev` locally, and add the same environment variable in your hosting provider's build settings before deploying.

The form also supports deep-linking via `/contact?topic=<key>` (`ai-automation`, `custom-ai-model`, `web-app-mvp`, `tech-consulting`, `qa-systems`) to pre-select the service dropdown.

---

## Routes

- `/` — Editorial homepage (`HeroSection`, interactive `PracticeFocus`, filterable `Selected Work`, `Field Notes`, and closing CTA)
- `/work` — Flagship spotlight, discipline shelves, and filterable project archive
- `/services` — Interactive capabilities switcher and consulting engagement models
- `/about` — Background, approach, and certifications
- `/journal` & `/journal/:slug` — Engineering field notes and project stories
- `/contact` — Inquiry form and direct social links

---

## Project Structure

```text
├── index.html                  # Document shell, SEO metadata, Google Fonts
├── netlify.toml                # Build config, SPA rewrite, and CSP/security headers
├── .env.example                # Contact form provider environment template
├── public/
│   └── images/                 # Portrait & journal artwork
└── src/
    ├── main.jsx                # Root SPA shell, theme persistence, route matching
    ├── styles.css              # Design tokens, light/dark themes, responsive layout
    ├── data/
    │   └── portfolioData.js    # Profile, works, services, certifications, and stories
    └── components/
        ├── Router.jsx          # Client-side SPA navigation (pushState / popstate)
        ├── Layout.jsx          # Header, Footer, Pet companion, PageHeading, NotFound
        ├── HeroSection.jsx     # Homepage hero
        ├── PracticeFocus.jsx   # Interactive consulting & AI capabilities switcher
        ├── HomePage.jsx        # Homepage composition
        ├── WorkPage.jsx        # Work archive & spotlight
        ├── ServicesPage.jsx    # Services & engagement models
        ├── AboutPage.jsx       # Bio & certifications
        ├── JournalPage.jsx     # Journal index & article reader
        └── ContactPage.jsx     # Host-agnostic contact form
```

---

## Content & Theme Customization

- **Portfolio content** (projects, copy, engagement models, certifications, and journal stories): edit `src/data/portfolioData.js` and `src/components/PracticeFocus.jsx`.
- **Visual design** (palette tokens, typography, light/dark themes, and breakpoints): edit `src/styles.css`.
- **Theme persistence**: saved under `jay-portfolio-theme` in `localStorage` (stores UI theme preference only).

---

## Deployment & Security

- Because the app uses client-side routing (`history.pushState`), configure your static host to rewrite all routes to `/index.html` (`netlify.toml` already includes this `[[redirects]]` rule).
- There is no database, login, or server-side session state.
- `netlify.toml` configures strict `Content-Security-Policy`, `HSTS`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy` headers, allowing form submissions to `https://api.web3forms.com` and `https://formspree.io`.
